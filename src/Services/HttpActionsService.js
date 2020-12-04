import RequestExecutorHelper from '../Helpers/RequestExecutorHelper';
import Config from '../Config';

const REH = new RequestExecutorHelper();

export default class HttpActionsService {
    static getEndPoint = (url, https = false) => {
        return (https ? Config.apiHost : Config.apiHttpsHost) + url;
    }

    static getRelEndPoint = (url) => {
        return url;
    };

    static getDefaultRules() {
        return REH.get(this.getRelEndPoint(Config.api.defaultRules), undefined);
    }
}