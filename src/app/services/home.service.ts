import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HomeService{
    http:any;
    baseUrl:String;

    constructor(http:Http){
        this.http = http;
    }

    getPosts(key){
        return this.http.get(key)
            .map(res => res.json());
    }
}