import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { AuthRouteur } from '../../routeur';
import { SignUpPayload } from '../../data';
import { tap } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { ErrorMessage } from '../../../../data';

@Component({
  selector: 'app-sign-up-page',
  imports: [    
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  standalone: true,
  templateUrl: './sign-up-page.html',
  styleUrls: ['../../routeur/auth-routeur.scss','./sign-up-page.scss']
})
export class SignUpPage {

  protected erreur: string = "";

  private readonly formsBuilder: FormBuilder = inject(FormBuilder);
  protected readonly errorMsg: typeof ErrorMessage = ErrorMessage;

  protected authService: AuthService = inject(AuthService);
  protected authComponent: AuthRouteur = inject(AuthRouteur);

  protected payload: SignUpPayload = {
    nom:'rolly',
    email: 'rolly@hotmail.be',
    password: 'apollo12',
    condition:false
  }

  //protected isSumit:WritableSignal<boolean> = false;

  protected readonly signUpForm = this.formsBuilder.group({
    nom: [this.payload.nom,
      [
        Validators.required,
        Validators.minLength(4),
      ]
    ],

    email: [this.payload.email,
      [
        Validators.required,
        Validators.email,
      ]
    ],

    password: [this.payload.password,
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ],
    condition: [this.payload.condition,
      [
        Validators.required,
      ]
    ]
  });

  protected get _nom() {
    return this.signUpForm.controls.nom
  }

  protected get _email() {
    return this.signUpForm.controls.email
  }

  protected get _password() {
    return this.signUpForm.controls.password
  }

  protected get _condition() {
    return this.signUpForm.controls.condition
  }



  public async signUp(): Promise<void> {

    if (this.signUpForm.invalid) {

      this.signUpForm.markAllAsTouched();
      this.erreur = "Erreur: entree invalide"
      return;

    }

    const data = (await this.authService.signIn(this.signUpForm.value as SignUpPayload))
      .pipe(
        tap((data: Object) => console.log('info', data))
      )
      .subscribe({
        next: res => console.log(res),
        error: err => {
          this.erreur = err.error.code;
          console.log(err.error.code)
        }
      });

  }

  toSignIn(){
    console.log('hello');
    
    this.authComponent.toSignin();
  }
}
