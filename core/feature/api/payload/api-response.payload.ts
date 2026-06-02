import { CredentialPayload } from "../../../feature";

export interface ApiResponsePayload{
    code:string,
    data:CredentialPayload|null,
    result:boolean
}