import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: "root"})
export class DogsService {
    constructor(private http: HttpClient) {

    }

    fetchDogs() {
        return this.http.get<any>('https://dog.ceo/api/breeds/list/all');
    }  
}
