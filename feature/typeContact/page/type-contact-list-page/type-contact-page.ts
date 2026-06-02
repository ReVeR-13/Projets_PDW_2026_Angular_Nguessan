import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-type-contact-page',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './type-contact-page.html',
  styleUrl: './type-contact-page.scss',
})
export class TypeContactPage {

  title : string = "Type des contact";
  count : number = 0;
  value :string = "--"

  public plus():number{
    return this.count ++;
  }

  public moin():number{
    return this.count --;
  }

  public onChange(value:string):string{
    return this.value = value;
  }
}
