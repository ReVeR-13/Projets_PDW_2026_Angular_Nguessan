import { SignInPayload } from "./sign-in.payload";

export interface SignUpPayload extends SignInPayload{
    nom:string;
    condition : boolean;
}