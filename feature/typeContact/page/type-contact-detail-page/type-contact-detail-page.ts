import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-type-contact-detail-page',
  imports: [RouterOutlet],
  standalone:true,
  templateUrl: './type-contact-detail-page.html',
  styleUrl: './type-contact-detail-page.scss',
})
export class TypeContactDetailPage {
  @Input() id: string = 'non defini';
}
