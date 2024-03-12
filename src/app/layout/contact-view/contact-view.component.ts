import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactServiceService, Contact } from '../contact-service.service';


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contact: Contact = { 
      id: -1,
      firstName: '', 
      lastName: '', 
      street: '', 
      city: '' 
    };

  public Id: number = 0;

  constructor(private route: ActivatedRoute, private contactService: ContactServiceService) { }

  ngOnInit(): void {
    // Retrieve ID from URL
    this.route.params.subscribe(params => {
      this.Id = parseInt(params['id'], 10);
      this.contact = this.contactService.getContactById(this.Id);
    });
  }
}