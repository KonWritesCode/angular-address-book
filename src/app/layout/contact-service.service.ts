import { Injectable, Output } from '@angular/core';


export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
}


@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private id: number = 0;
  public contacts: Contact[] = [
    {id: this.id++, firstName: "Jack", lastName: "Thorn", street: "Lowstreet", city: "Aity"},
    {id: this.id++, firstName: "Paul", lastName: "Phills", street: "Highstreet", city: "Pity"},
  ]

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(contactId: number): Contact {
    return this.contacts[contactId];
  }

  addContact(contact: Contact) {
    contact.id = this.id++;
    this.contacts.push(contact);
  }

  constructor() { }
}
