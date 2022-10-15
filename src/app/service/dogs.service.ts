import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: "root"})
export class DogsService {
    constructor(private http: HttpClient) {}

    api: string = 'https://dog.ceo/api';

    fetchDogs() {
        return this.http.get<{message: string[]}>(this.api + '/breeds/list/all');
    }
    
    fetchDogImage(breed: string) {
        return this.http.get<{message: string}>(this.api + `/breed/${breed}/images/random`);
    }
}
