---
title: Webflow endpoint
keywords:
last_updated: June 6, 2023
tags: []
summary: "Detailed description of the CMS API of the Webflow endpoint."
---

## Overview

This endpoint allows direct access to the [Webflow CMS API](https://developers.webflow.com/),
however it provides shortcuts and helpers for most common use cases.

Some features available in this endpoint are:

- Authentication and authorization
- Direct access to the CMS API
- Helpers for CMS API methods

## Configuration

In order to create a Webflow endpoint in your Slingr app first you must have a Webflow account. 
Go to the dashboard configuration: "integrations" and create an application filling the fields with the correct information 
(the redirect URI will be shown in the endpoint configuration create view and the homepage is the runtime of your app). 
Once you created the application you will be able to see the Client Id and Client Secret on the application details section.
You should fill the endpoint fields with this. Then, you will need to go through an Oauth Authorization process with the button "Connect to Webflow", 
this will give the app an authorization code which is necessary to finally get the access token when the endpoint is deployed. 

### Redirect URI

This URL has to be configured in the app created in the Webflow dashboard.

### Client ID

This value comes from the app created in the Webflow dashboard.

### Client secret

This value comes from the app created in the Webflow dashboard.

### Connect To Webflow

This button will trigger the Oauth connection process and will fill the fields: "Authorization Code".

### Authorization Code

This is used for obtaining the Authorization Token. This field will be automatically filled when doing the Oauth connection with the "Connect to webflow" button

### Webhook Url

This URL is the one that should be used when creating new webhooks.

# Javascript API

The Javascript API of the webflow endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `GET`,`POST`,`PUT`,`PATCH`,`DELETE` requests to the [webflow API](https://developers.webflow.com/reference) like this:
```javascript
var response = app.endpoints.webflow.get('/sites')
var response = app.endpoints.webflow.post('/sites/:site_id/order/:order_id/unfulfill', body)
var response = app.endpoints.webflow.post('/sites/:site_id/order/:order_id/unfulfill')
var response = app.endpoints.webflow.put('/collections/:collection_id/items/:item_id', body)
var response = app.endpoints.webflow.put('/collections/:collection_id/items/:item_id')
var response = app.endpoints.webflow.patch('/collections/:collection_id/items/:item_id', body)
var response = app.endpoints.webflow.patch('/collections/:collection_id/items/:item_id')
var response = app.endpoints.webflow.delete('/sites/:site_id/webhooks/:webhook_id')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/sites'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-sites
```javascript
app.endpoints.webflow.sites.get()
```
---
* API URL: '/sites/:site_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-sites
```javascript
app.endpoints.webflow.sites.get()
```
---
* API URL: '/sites/:site_id/domains'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#domains
```javascript
app.endpoints.webflow.sites.domains.get(siteId)
```
---
* API URL: '/sites/:site_id/collections'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-collections
```javascript
app.endpoints.webflow.sites.collections.get(siteId)
```
---
* API URL: '/collections/:collection_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-collection
```javascript
app.endpoints.webflow.collections.get(collectionId)
```
---
* API URL: '/collections/:collection_id/items'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-items
```javascript
app.endpoints.webflow.collections.items.get(collectionId)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-item
```javascript
app.endpoints.webflow.collection.collections.items.get(collectionId, itemId)
```
---
* API URL: '/sites/:site_id/users'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-users
```javascript
app.endpoints.webflow.sites.users.get()
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-users
```javascript
app.endpoints.webflow.sites.users.get(siteId)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-products
```javascript
app.endpoints.webflow.sites.products.get(siteId)
```
---
* API URL: '/sites/:site_id/orders'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-orders
```javascript
app.endpoints.webflow.sites.orders.get(siteId)
```
---
* API URL: '/sites/:site_id/order/:order_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#get-order
```javascript
app.endpoints.webflow.sites.order.get(siteId, orderId)
```
---
* API URL: '/sites/:site_id/collections/:collection_id/items/:item_id/inventory'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-inventory
```javascript
app.endpoints.webflow.sites.collections.items.inventory.get(siteId, collectionId, itemId)
```
---
* API URL: '/sites/:site_id/webhooks'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-webhooks
```javascript
app.endpoints.webflow.sites.webhooks.get()
```
---
* API URL: '/sites/:site_id/webhooks/:webhook_id'
* HTTP Method: 'GET'
* More info: https://developers.webflow.com/#list-webhooks
```javascript
app.endpoints.webflow.sites.webhooks.get(siteId)
```
---
* API URL: '/sites/:site_id/publish'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#publish-site
```javascript
app.endpoints.webflow.sites.publish.post(siteId, body)
```
---
* API URL: '/collections/:collection_id/items'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-item
```javascript
app.endpoints.webflow.collections.items.post(collectionId, body)
```
---
* API URL: '/sites/:site_id/users/invite'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#invite-user
```javascript
app.endpoints.webflow.sites.users.invite.post(siteId, body)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-product
```javascript
app.endpoints.webflow.sites.products.post(siteId, body)
```
---
* API URL: '/sites/:site_id/products/:product_id/skus'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-sku
```javascript
app.endpoints.webflow.sites.products.skus.post(siteId, productId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/fulfill'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#fullfit-order
```javascript
app.endpoints.webflow.sites.order.fulfill.post(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/unfulfill'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#unfullfit-order
```javascript
app.endpoints.webflow.sites.order.unfulfill.post(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id/refund'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#refund-order
```javascript
app.endpoints.webflow.sites.order.refund.post(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/webhooks'
* HTTP Method: 'POST'
* More info: https://developers.webflow.com/#create-webhook
```javascript
app.endpoints.webflow.sites.webhooks.post(siteId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'PUT'
* More info: https://developers.webflow.com/#update-item
```javascript
app.endpoints.webflow.collections.items.put(collectionId, itemId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#patch-item
```javascript
app.endpoints.webflow.collections.items.patch(collectionId, itemId, body)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-user
```javascript
app.endpoints.webflow.sites.users.patch(siteId, userId, body)
```
---
* API URL: '/sites/:site_id/products'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-product
```javascript
app.endpoints.webflow.sites.products.patch(siteId, body)
```
---
* API URL: '/sites/:site_id/products/:product_id/skus'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-sku
```javascript
app.endpoints.webflow.sites.products.skus.patch(siteId, productId, body)
```
---
* API URL: '/sites/:site_id/order/:order_id'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-order
```javascript
app.endpoints.webflow.sites.order.patch(siteId, orderId, body)
```
---
* API URL: '/sites/:site_id/collections/:collection_id/items/:item_id/inventory'
* HTTP Method: 'PATCH'
* More info: https://developers.webflow.com/#update-inventory
```javascript
app.endpoints.webflow.sites.collections.items.inventory.patch(siteId, collectionId, itemId, body)
```
---
* API URL: '/collections/:collection_id/items/:item_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/#remove-item
```javascript
app.endpoints.webflow.collection.collections.items.delete(collectionId, itemId)
```
---
* API URL: '/sites/:site_id/users/:user_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/#delete-user
```javascript
app.endpoints.webflow.sites.users.delete(siteId, userId)
```
---
* API URL: '/sites/:site_id/webhooks/:webhook_id'
* HTTP Method: 'DELETE'
* More info: https://developers.webflow.com/#remove-webhook
```javascript
app.endpoints.webflow.sites.webhooks.delete(siteId, webhookId)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>GET,POST,PUT,PATCH,DELETE</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/sites<br>/sites/{site_id}<br>/sites/{site_id}/domains<br>/sites/{site_id}/collections<br>/collections/{collection_id}<br>/collections/{collection_id}/items<br>/collections/{collection_id}/items/{item_id}<br>/sites/{site_id}/users<br>/sites/{site_id}/users/{user_id}<br>/sites/{site_id}/products<br>/sites/{site_id}/orders<br>/sites/{site_id}/order/{order_id}<br>/sites/{site_id}/collections/{collection_id}/items/{item_id}/inventory<br>/sites/{site_id}/webhooks<br>/sites/{site_id}/webhooks/{webhook_id}<br>/sites/{site_id}/publish<br>/collections/{collection_id}/items<br>/sites/{site_id}/users/invite<br>/sites/{site_id}/products<br>/sites/{site_id}/products/{product_id}/skus<br>/sites/{site_id}/order/{order_id}/fulfill<br>/sites/{site_id}/order/{order_id}/unfulfill<br>/sites/{site_id}/order/{order_id}/refund<br>/sites/{site_id}/webhooks<br>/collections/{collection_id}/items/{item_id}<br>/collections/{collection_id}/items/{item_id}<br>/sites/{site_id}/users/{user_id}<br>/sites/{site_id}/products<br>/sites/{site_id}/products/{product_id}/skus<br>/sites/{site_id}/order/{order_id}<br>/sites/{site_id}/collections/{collection_id}/items/{item_id}/inventory<br>/collections/{collection_id}/items/{item_id}<br>/sites/{site_id}/users/{user_id}<br>/sites/{site_id}/webhooks/{webhook_id}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### List All Sites

Lists all sites in the account.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### List All Collections

Lists all collections in one site of the account.

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


### Create an Item

Creates an item in a collection of a site.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Slug</td>
        <td> string </td>
        <td> yes </td>
        <td> - </td>
        <td> Always </td>
        <td>Slug of the item.</td>
    </tr>
    <tr>
        <td>Name</td>
        <td> string </td>
        <td> yes </td>
        <td> - </td>
        <td> Always </td>
        <td>Name for the Item.</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*


## About SLINGR

SLINGR is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about SLINGR](https://slingr.io)

## License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
