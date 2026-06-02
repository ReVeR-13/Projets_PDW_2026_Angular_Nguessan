import { inject, Injectable, signal } from "@angular/core";
import { ApiResponsePayload, ApiService } from "../../api";
import { SignInPayload, SignUpPayload } from "../data";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    apiResponse$ = signal<ApiResponsePayload>({
        code:'',
        data:null,
        result:false
    })

    private readonly apiService: ApiService = inject(ApiService)
    constructor() { }

    async signIn(payload: SignInPayload): Promise<Observable<object>> {
        const data = await this.apiService.post('account/signin', payload);
        return data
    }

    async signUp(payload: SignUpPayload): Promise<Observable<object>> {
        const data = await this.apiService.post('account/signup', payload);
        return data
    }

    setApiResponse(data:ApiResponsePayload):void{
        this.apiResponse$.set(data);
    }

}