import { IQueryParameter } from '../models';

export class UrlHelper {

    /**
   * Adds query parameters to given url
   * @param url Url to which options will be added
   * @param options Query parameters to add
   */
    addOptionsToUrl(url: string, options?: IQueryParameter[]): string {
        if (options) {
            options.forEach(filter => {
                if (url.indexOf('?') > -1) {
                    url += '&';
                } else {
                    url += '?';
                }

                url += filter.getParam();
            });
        }
        return url;
    }
}

export const urlHelper = new UrlHelper();
