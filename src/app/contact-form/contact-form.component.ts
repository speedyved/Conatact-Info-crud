import { Component, OnInit } from "@angular/core";
import { ContactService } from "../shared/contact.service";
import { ELEMENT_DATA } from "../home/home.model";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private dialogRef: MatDialogRef<ContactFormComponent>
  ) {}

  ngOnInit() {
    this.contactService.getContactList();
    console.log(
      "contact form component inside : ",
      this.contactService.getContactList()
    );
  }
  onClear() {
    this.contactService.form.reset();
    this.contactService.initializeFormGroup();
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("inside onSubmit:", this.contactService.form.value);
    if (this.contactService.form.valid) {
      if (this.contactService.form.get("$key").value) {
        this.contactService.updateContact(this.contactService.form.value);
      } else {
        this.contactService.addContact(this.contactService.form.value);
      }
      this.contactService.form.reset();
      this.contactService.initializeFormGroup();
      console.log("inside onSubmit:", this.contactService.form.value);
      this.onClose();
    }
  }

  onClose() {
    this.contactService.form.reset();
    this.contactService.initializeFormGroup();
    this.dialogRef.close();
  }
}
