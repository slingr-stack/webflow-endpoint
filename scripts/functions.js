////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.sites = {};

endpoint.sites.publish = {};

endpoint.sites.domains = {};

endpoint.sites.collections = {};

endpoint.collections = {};

endpoint.collections.items = {};

endpoint.collection = {};

endpoint.collection.collections = {};

endpoint.collection.collections.items = {};

endpoint.sites.users = {};

endpoint.sites.users.invite = {};

endpoint.sites.products = {};

endpoint.sites.products.skus = {};

endpoint.sites.orders = {};

endpoint.sites.order = {};

endpoint.sites.order.fulfill = {};

endpoint.sites.order.unfulfill = {};

endpoint.sites.order.refund = {};

endpoint.sites.collections.items = {};

endpoint.sites.collections.items.inventory = {};

endpoint.sites.webhooks = {};

endpoint.sites.get = function(siteId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 0:
			url = parse('/sites');
			break;
		case 1:
			url = parse('/sites/:site_id', [siteId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[webflow] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.publish.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/publish', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.domains.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/domains', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.collections.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/collections', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.collections.get = function(collectionId, httpOptions) {
    if (!collectionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
        return;
    }
    var url = parse('/collections/:collection_id', [collectionId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.collections.items.get = function(collectionId, httpOptions) {
    if (!collectionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
        return;
    }
    var url = parse('/collections/:collection_id/items', [collectionId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.collections.items.post = function(collectionId, httpOptions) {
    if (!collectionId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId].');
        return;
    }
    var url = parse('/collections/:collection_id/items', [collectionId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.collections.items.put = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] PUT from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options);
};

endpoint.collections.items.patch = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.collection.collections.items.get = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.collection.collections.items.delete = function(collectionId, itemId, httpOptions) {
    if (!collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [collectionId,itemId].');
        return;
    }
    var url = parse('/collections/:collection_id/items/:item_id', [collectionId, itemId]);
    sys.logs.debug('[webflow] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.users.get = function(siteId, userId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/sites/:site_id/users', [siteId]);
			break;
		case 2:
			url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[webflow] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.users.patch = function(siteId, userId, httpOptions) {
    if (!siteId || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,userId].');
        return;
    }
    var url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.users.delete = function(siteId, userId, httpOptions) {
    if (!siteId || !userId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,userId].');
        return;
    }
    var url = parse('/sites/:site_id/users/:user_id', [siteId, userId]);
    sys.logs.debug('[webflow] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

endpoint.sites.users.invite.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/users/invite', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.products.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/products', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.products.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/products', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.products.patch = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/products', [siteId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.products.skus.post = function(siteId, productId, httpOptions) {
    if (!siteId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,productId].');
        return;
    }
    var url = parse('/sites/:site_id/products/:product_id/skus', [siteId, productId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.products.skus.patch = function(siteId, productId, httpOptions) {
    if (!siteId || !productId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,productId].');
        return;
    }
    var url = parse('/sites/:site_id/products/:product_id/skus', [siteId, productId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.orders.get = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/orders', [siteId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.order.get = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id', [siteId, orderId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.order.patch = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id', [siteId, orderId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.order.fulfill.post = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id/fulfill', [siteId, orderId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.order.unfulfill.post = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id/unfulfill', [siteId, orderId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.order.refund.post = function(siteId, orderId, httpOptions) {
    if (!siteId || !orderId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,orderId].');
        return;
    }
    var url = parse('/sites/:site_id/order/:order_id/refund', [siteId, orderId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.collections.items.inventory.get = function(siteId, collectionId, itemId, httpOptions) {
    if (!siteId || !collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,collectionId,itemId].');
        return;
    }
    var url = parse('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', [siteId, collectionId, itemId]);
    sys.logs.debug('[webflow] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
};

endpoint.sites.collections.items.inventory.patch = function(siteId, collectionId, itemId, httpOptions) {
    if (!siteId || !collectionId || !itemId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,collectionId,itemId].');
        return;
    }
    var url = parse('/sites/:site_id/collections/:collection_id/items/:item_id/inventory', [siteId, collectionId, itemId]);
    sys.logs.debug('[webflow] PATCH from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options);
};

endpoint.sites.webhooks.get = function(siteId, webhookId, httpOptions) {
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
                arguments[i] = undefined;
            }
        }
    }
    var url;
    switch(httpOptions ? arguments.length - 1 : arguments.length){
        case 1:
			url = parse('/sites/:site_id/webhooks', [siteId]);
			break;
		case 2:
			url = parse('/sites/:site_id/webhooks/:webhook_id', [siteId, webhookId]);
			break;
		default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[webflow] GET from: ' + url);
	var options = checkHttpOptions(url, httpOptions);
	return endpoint._get(options);
};

endpoint.sites.webhooks.post = function(siteId, httpOptions) {
    if (!siteId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId].');
        return;
    }
    var url = parse('/sites/:site_id/webhooks', [siteId]);
    sys.logs.debug('[webflow] POST from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
};

endpoint.sites.webhooks.delete = function(siteId, webhookId, httpOptions) {
    if (!siteId || !webhookId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [siteId,webhookId].');
        return;
    }
    var url = parse('/sites/:site_id/webhooks/:webhook_id', [siteId, webhookId]);
    sys.logs.debug('[webflow] DELETE from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options);
};

////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options, callbackData, callbacks);
};

endpoint.put = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._put(options, callbackData, callbacks);
};

endpoint.patch = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._patch(options, callbackData, callbacks);
};

endpoint.delete = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._delete(options, callbackData, callbacks);
};

endpoint.head = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._head(options, callbackData, callbacks);
};

endpoint.options = function(url, httpOptions, callbackData, callbacks) {
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._options(options, callbackData, callbacks);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

endpoint.utils.fromDateToTimestamp = function(params) {
    if (!!params) {
        return {timestamp: new Date(params).getTime()};
    }
    return null;
};

endpoint.utils.fromMillisToDate = function(params) {
    if (!!params) {
        var sdf = new Intl.DateTimeFormat('en-US', {
            year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
            timeZone: 'UTC'
        });
        return {date: sdf.format(new Date(parseInt(params)))};
    }
    return null;
};

///////////////////////
//  Private helpers  //
///////////////////////

var mergeJSON = function (json1, json2) {
    const result = {};
    var key;
    for (key in json1) {
        if(json1.hasOwnProperty(key)) result[key] = json1[key];
    }
    for (key in json2) {
        if(json2.hasOwnProperty(key)) result[key] = json2[key];
    }
    return result;
}

var concatQuery = function (url, key, value) {
    return url + ((!url || url.indexOf('?') < 0) ? '?' : '&') + key + "=" + value;
}

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
}

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
}

var stringType = Function.prototype.call.bind(Object.prototype.toString)

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}