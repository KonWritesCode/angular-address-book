import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent, 
    CreateContactComponent, 
    ContactListComponent, 
    ContactViewComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    MenuComponent,
    CreateContactComponent, 
    ContactListComponent, 
    ContactViewComponent
  ],
})
export class LayoutModule {}
