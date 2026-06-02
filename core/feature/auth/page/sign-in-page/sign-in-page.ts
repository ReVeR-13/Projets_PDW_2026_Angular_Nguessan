import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, inject, Output, output, signal, WritableSignal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialPayload, SignInPayload } from '../../data';
import { ApiResponsePayload, ErrorMessage } from '../../../../../core';
import { AuthService } from '../../service/auth.service';
import { tap } from 'rxjs';
import { AuthRouteur } from '../../routeur';

@Component({
  selector: 'app-sign-in-page',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  standalone:true,
  templateUrl: './sign-in-page.html',
  styleUrls: ['../../routeur/auth-routeur.scss','./sign-in-page.scss'],
})
export class SignInPage {
  
  protected erreur : string = "";
  credential: CredentialPayload | null = null;

  private readonly formsBuilder : FormBuilder = inject(FormBuilder);
  protected readonly errorMsg:typeof ErrorMessage = ErrorMessage;

  protected authService: AuthService= inject(AuthService);
  protected authComponent : AuthRouteur = inject(AuthRouteur);
  
  protected payload:SignInPayload ={
    email:'rolly@hotmail.be',
    password:'apollo12'
  }

  protected isSumit$:WritableSignal<boolean> = signal(false);

  @Output()
  public responseOuput:EventEmitter<ApiResponsePayload> = new EventEmitter<ApiResponsePayload>();


  protected readonly signInForm = this.formsBuilder.group({
    email:[this.payload.email,
      [
        Validators.required,
        Validators.email,
      ]
    ],
      
    password:[this.payload.password,
      [
        Validators.required,
        Validators.minLength(8)
      ]
    ]
  });
  
  protected  get email(){
    return this.signInForm.controls.email
  }

  protected get password(){
    return this.signInForm.controls.password
  }
  

  public async signIn():Promise<void>{

    if (this.isSumit$()) {
      return
    }

    if (this.signInForm.invalid) {

      this.signInForm.markAllAsTouched();
      this.erreur = "Erreur: entree invalide"
      this.isSumit$.set(false);
      return;

    } 

    this.isSumit$.set(true);

    const data = (await this.authService.signIn(this.signInForm.value as SignInPayload))
    .pipe(
      tap((data:Object)=> {

        console.log(data);
        this.authService.setApiResponse(data as ApiResponsePayload);
        
        setTimeout(()=>{
          this.isSumit$.set(false);
        },3000);

        
      }),
    )
    .subscribe({
      next: res => {
        console.log(res)
      },
      error:err => {
        this.erreur = err.error.code;
        console.log(err.error.code)
      }
    });

    
  }

}
