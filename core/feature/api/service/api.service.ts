import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root'
})
export class ApiService{

    private readonly baseUrl:string ='http://localhost:4031/api/';
    
    constructor(private http:HttpClient){}

    public get(uri:string):Observable<object>{
        return this.http.get(`${this.baseUrl}${uri}`);
    }

    public async post(uri:string,payload:any):Promise<Observable<object>>{
        console.log(`${this.baseUrl}${uri}`);
        
        return this.http.post(`${this.baseUrl}${uri}`, payload);
    }

    public put(uri:string,payload:any):Observable<object>{
        return this.http.put(`${this.baseUrl}${uri}`,payload);
    }

    public patch(uri:string,payload:any):Observable<object>{
        return this.http.patch(`${this.baseUrl}${uri}`,payload);
    }

    public delete(uri:string):Observable<object>{
        return this.http.delete(`${this.baseUrl}${uri}`);
    }
}