import 'url-search-params-polyfill';

export default class RequestExecutorHelper {

    getResponse(
        url,
        method,
        params = {},
        postDataParams = {},
        headers = {},
    ) {
        let fetchParams = {
            method: method,
            body: postDataParams,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin' : '*', 
                'Access-Control-Allow-Credentials' : 'true' 
            },
            redirect: 'follow',
            referrer: 'no-referrer',
        };
        if (headers) {
            Object.assign(fetchParams.headers, headers);
        }

        return fetch(url, fetchParams);
    }

    get(url, params, headers) {
        return this.getResponse(url, 'GET', params, null, headers);
    }

    head(url) {
        return this.getResponse(url, 'HEAD');
    }

    post(url, data, headers) {
        return this.getResponse(url, 'POST', {}, data, headers);
    }

    postUrlEncoded(url, data, headers) {
        let urlSP = new URLSearchParams();
        for (let key in data) {
            if (data[key]) {
                urlSP.append(key, data[key]);
            }
        }
        return this.getResponse(url, 'POST', {}, urlSP.toString(), headers);
    }

    put(url, data, headers, showNotifications) {
        return this.getResponse(url, 'PUT', {}, data, headers);
    }
}