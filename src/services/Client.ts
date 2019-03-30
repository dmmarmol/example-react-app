import axios from 'axios';

interface AxiosData {}

const BASE_URL = '';

class Client {
    private baseUrl: string = BASE_URL;

    constructor(baseUrl?: string) {
        this.baseUrl = baseUrl ? baseUrl : this.baseUrl;
    }

    public get<Result>(url: string, data?: AxiosData) {
        let requestUrl = url;
        if (this.baseUrl) {
            requestUrl = `${this.baseUrl}/${url}`;
        }
        return axios.get<Result>(requestUrl, data);
    }

    /**
     * POST
     */

    /**
     * PUT
     */

    /**
     * DELETE
     */
}

export default Client;
