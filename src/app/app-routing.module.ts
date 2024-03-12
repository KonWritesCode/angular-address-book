import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './layout/contact-list/contact-list.component';
import { ContactViewComponent } from './layout/contact-view/contact-view.component';
import { CreateContactComponent } from './layout/create-contact/create-contact.component';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/create', component: CreateContactComponent },
  { path: 'contacts/:id', component: ContactViewComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }