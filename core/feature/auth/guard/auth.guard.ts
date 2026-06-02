import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const AuthdGuard= (redirectRoute:string = 'auth'):CanActivateFn => {
    return () => {
        const canAccess:boolean = true;
        const router:Router = inject(Router);
        return canAccess || router.createUrlTree([redirectRoute])
    }
}