import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-auth-routeur',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './auth-routeur.html',
  styleUrl: './auth-routeur.scss',
})
export class AuthRouteur {

  readonly logo: string = '-LOGO-';
  protected title = 'Connection';
  protected info = '';

  private router:Router = inject(Router);
  protected authService:AuthService = inject(AuthService);

  isFlipped:boolean = false;

  toSignup() {
    this.isFlipped =true;
    this.title = "Enregistrement";
    /*this.router.navigate([
      '/auth/signup'
    ])*/

  }

  toSignin() {
    this.isFlipped =false;
    this.title = "Connection";
    this.router.navigate([
      '/auth'
    ])
  }

}
