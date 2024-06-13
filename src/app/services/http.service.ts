import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class HttpService {

    readonly #baseApi: string = 'http://localhost:3000';

    constructor(private _http: HttpClient) { }

    get(url: string, relative: boolean = true) {
        const endpoint = this.#baseApi + `/${url}`
        return this._http.get(endpoint)
    }

    post<T = any>(url: string, params: T, relative: boolean = true) {
        const endpoint = this.#baseApi + `/${url}`
        return this._http.post(endpoint, params)
    }
}