import { Injectable } from "@angular/core";
import {
  FormGroup,
  FormControl,
  EmailValidator,
  Validators
} from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  constructor(private firebase: AngularFireDatabase) {}
  contactList: AngularFireList<any>;
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fName: new FormControl("", Validators.required),
    lName: new FormControl(""),
    email: new FormControl("", Validators.required),
    phNo: new FormControl("", [Validators.required, Validators.minLength(10)]),
    status: new FormControl(true)
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fName: "",
      lName: "",
      email: "",
      phNo: "",
      status: ""
    });
  }

  getContactList() {
    this.contactList = this.firebase.list("contactList");
    console.log("from get contact list:", this.contactList);
    return this.contactList.snapshotChanges();
  }

  addContact(contact) {
    console.log(contact);
    this.contactList.push({
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email,
      phNo: contact.phNo,
      status: contact.status
    });
  }

  updateContact(contact) {
    this.contactList.update(contact.$key, {
      fName: contact.fName,
      lName: contact.lName,
      email: contact.email,
      phNo: contact.phNo,
      status: contact.status
    });
  }

  deleteContact($key: string) {
    this.contactList.remove($key);
  }

  populateForm(contact) {
    this.form.setValue(contact);
  }
}
