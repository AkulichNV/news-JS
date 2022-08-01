import { ErrorRes } from "../types/main";

class Loader {
    baseLink: string;
    public options: {};

    constructor(baseLink = 'Unknown', options = {}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<M>(
        { endpoint = '', options = {} },
        callback: (data: M) => void
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: ErrorRes) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options = {}, endpoint = '') {
        const urlOptions: {} = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key: string) => {
            url += `${key}=${(urlOptions as any)[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, endpoint: string, callback: (data: T) => void, options = {}): Promise< void | T > {
        return fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json() as Promise<T>)
            .then((data: T) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
