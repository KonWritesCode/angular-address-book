import { Component, Input } from '@angular/core';
import { ContactServiceService, Contact } from '../contact-service.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  public contacts: Contact[] = this.contactService.contacts
  
  constructor(private contactService: ContactServiceService) {}
}
