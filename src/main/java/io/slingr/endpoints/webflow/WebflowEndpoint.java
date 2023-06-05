package io.slingr.endpoints.webflow;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.configurations.EndpointProperties;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.HttpService;
import io.slingr.endpoints.services.datastores.DataStore;
import io.slingr.endpoints.services.datastores.DataStoreResponse;
import io.slingr.endpoints.services.rest.RestClient;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.core.Form;

/**
 * Webflow endpoint
 * <p/>
 * Created by pmorales on 11/07/22.
 */
@SlingrEndpoint(name = "webflow", functionPrefix = "_")
public class WebflowEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(WebflowEndpoint.class);

    private static final String WEBFLOW_API = "https://api.webflow.com";
    private static final String WEBFLOW_API_TOKEN_URL = WEBFLOW_API + "/oauth/access_token";

    private static final String LAST_TOKEN = "_LAST_TOKEN";
    private static final String ID = "_id";
    private static final String TIMESTAMP = "timestamp";
    private static final String ACCESS_TOKEN = "accessToken";
    private static final String AUTHORIZATION_CODE = "authorizationCode";

    @EndpointDataStore
    private DataStore tokens;

    @EndpointProperty
    private String clientId;

    @EndpointProperty
    private String clientSecret;

    @EndpointProperty
    private String authorizationCode;

    @ApplicationLogger
    private AppLogs appLogger;

    @Override
    public String getApiUri() {
        return WEBFLOW_API;
    }

    @Override
    public void endpointStarted() {
        EndpointProperties properties =  properties();
        String redirectUri = "https://"+properties.getApplicationName()+"."+properties.getBaseDomain() + "/callback";
        appLogger.info("Redirect uri: " + redirectUri);
        try {
            logger.info("Initializing Webflow endpoint");
            appLogger.info("Setting token on endpoint start");
            Json filter = Json.map();
            filter.set(AUTHORIZATION_CODE, this.authorizationCode);
            Json lastToken = null;
            try {
                lastToken = this.tokens.findById(LAST_TOKEN);
            } catch (Exception ex) {
                appLogger.error("Error getting last token "+ ex.getMessage());
            }
            DataStoreResponse dsResp = this.tokens.find(filter);
            String accessToken;
            if (dsResp != null && dsResp.getItems().size() == 0 || lastToken == null || lastToken.string(ACCESS_TOKEN) == null) {
                appLogger.info("Getting token for first time");
                appLogger.info("Code: " + this.authorizationCode);
                appLogger.info("Redirect uri: " + redirectUri);
                Form formBody = new Form()
                        .param("client_id", this.clientId)
                        .param("client_secret", this.clientSecret)
                        .param("grant_type", "authorization_code")
                        .param("code", authorizationCode);
                Json tokenResponse = RestClient.builder(WEBFLOW_API_TOKEN_URL)
                        .header("Content-Type", "application/x-www-form-urlencoded")
                        .post(formBody);
                accessToken = tokenResponse.string("access_token");
                appLogger.info("Token succefully retrieved on endpoint start");
                appLogger.info("retrieved accessToken " + tokenResponse.string("access_token"));

                Json newToken = Json.map();
                newToken.set(ACCESS_TOKEN, accessToken);
                newToken.set(AUTHORIZATION_CODE, this.authorizationCode);
                newToken.set(TIMESTAMP, System.currentTimeMillis());
                newToken.set(ID, LAST_TOKEN);
                this.tokens.save(newToken);
            } else {
                accessToken = lastToken.string(ACCESS_TOKEN);
            }
            httpService().setupBearerAuthenticationHeader(accessToken);
            httpService().setupDefaultHeader("Accept-Version", "1.0.0");
            httpService().setupDefaultHeader("content-type", "application/json");
            appLogger.info("Token succefully set up on endpoint start");
        } catch (Exception e) {
            appLogger.error(String.format("Error getting token for client ID [%s]. Refresh authorization code and redeploy the endpoint.", clientId),e);
            appLogger.error(e.getMessage());
            throw e;
        }
    }

    @EndpointWebService(path = "/")
    public String webhooks(WebServiceRequest request) {
        final Json json = HttpService.defaultWebhookConverter(request);
        events().send(HttpService.WEBHOOK_EVENT, json);
        return "ok";
    }
}