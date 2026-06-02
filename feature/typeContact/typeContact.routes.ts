import { Routes } from '@angular/router';

export const TypeContactRoutes:Routes = [
    {
        path:'',
        loadComponent: 
        () => import('./page')
        .then(r => r.TypeContactPage),

        children:[           
            {
                path:'details/:id',
                loadComponent:
                ()=> import('../typeContact')
                .then(p=>p.TypeContactDetailPage)
            }
        ]
    }
]