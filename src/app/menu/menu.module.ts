import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbartComponent } from './navbart/navbart.component';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    NavbartComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  exports:[
    NavbartComponent
  ]
})
export class MenuModule { }
