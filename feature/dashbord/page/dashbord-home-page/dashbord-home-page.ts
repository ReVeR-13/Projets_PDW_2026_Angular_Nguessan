import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashbord-home-page',
  imports: [],
  standalone:true,
  templateUrl: './dashbord-home-page.html',
  styleUrl: './dashbord-home-page.scss',
})
export class DashbordHomePage {
  protected title:string = 'Apollinaire';
  protected mainInfo:string = '--'
}
