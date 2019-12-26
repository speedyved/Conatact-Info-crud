import { Component, OnInit } from "@angular/core";
import { ContactService } from "../shared/contact.service";
import { MatDialogRef } from "@angular/material";
import { NotificationService } from "../shared/notification.service";

@Component({
  selector: "app-contact-form",
  templateUrl: "./contact-form.component.html",
  styleUrls: ["./contact-form.component.css"]
})
export class ContactFormComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private dialogRef: MatDialogRef<ContactFormComponent>,
    private notificationService: NotificationService
  ) {}

  ngOnInit() {
    this.contactService.getContactList();
  }
  onClear() {
    this.contactService.form.reset();
    this.contactService.initializeFormGroup();
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.contactService.form.valid) {
      if (this.contactService.form.get("$key").value) {
        this.contactService.updateContact(this.contactService.form.value);
        this.notificationService.success("Contact Updated Successfully");
      } else {
        this.contactService.addContact(this.contactService.form.value);
        this.notificationService.success("Contact Created Successfully");
      }
      this.contactService.form.reset();
      this.contactService.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.contactService.form.reset();
    this.contactService.initializeFormGroup();
    this.dialogRef.close();
  }
}
