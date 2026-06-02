import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileService } from '../../../core';
import { DashbordMenu } from '../component';

@Component({
  selector: 'app-dashbord-routeur',
  imports: 
  [ 
    DashbordMenu,
    RouterOutlet,
  ],
  standalone:true,
  templateUrl: './dashbord-routeur.html',
  styleUrl: './dashbord-routeur.scss',
})
export class DashbordRouteur {
  protected readonly title: string = 'pattoon';
  protected readonly profile:ProfileService = inject(ProfileService);
}
