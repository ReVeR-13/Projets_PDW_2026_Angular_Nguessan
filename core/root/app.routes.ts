import { Routes } from '@angular/router';
import { DashbordGuard } from '../../feature/dashbord';
import { AuthdGuard } from '../feature';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'auth',
        pathMatch:'full'
    },

    {
        path:'auth', 
        canActivate:[AuthdGuard()],
        loadChildren: () => 
            import('../../core/feature/auth/auth.routes')
            .then(r => r.authRoutes)
    },

    {
        path:'dashbord', 
        canActivate:[DashbordGuard()],
        loadChildren: () => 
             import('../../feature/dashbord/dashbord-routeur')
            .then(r => r.DashbordRoutes)
    }
];
