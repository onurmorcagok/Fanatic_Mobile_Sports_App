import{ Injectable } from '@angular/core';
import { adres } from '../../app/adres/adres';
import { HttpClient } from '@angular/common/http';

const API_URL = adres.apiUrl;
const API_KEY = adres.apiKey;

@Injectable(
    
)

export class HaberlerServis {
    constructor(private http: HttpClient){ }

    getData(url){
        return this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`);
    }
}