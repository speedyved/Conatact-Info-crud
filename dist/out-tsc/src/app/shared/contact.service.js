import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
let ContactService = class ContactService {
    constructor(firebase) {
        this.firebase = firebase;
        this.form = new FormGroup({
            $key: new FormControl(null),
            fName: new FormControl(""),
            lName: new FormControl(""),
            email: new FormControl(""),
            phNo: new FormControl(""),
            status: new FormControl(true)
        });
    }
    initializeFormGroup() {
        this.form.value({
            $key: null,
            fname: "",
            lname: "",
            email: "",
            phNo: "",
            status: ""
        });
    }
    getContactList() {
        this.contactList = this.firebase.list("contactList");
        this.contactList.snapshotChanges();
    }
    addContact(contact) {
        this.contactList.push({
            fname: contact.fname,
            lname: contact.lname,
            email: contact.email,
            phNo: contact.phNo,
            status: contact.status
        });
    }
    updateContact(contact) {
        this.contactList.update(contact.$key, {
            fname: contact.fname,
            lname: contact.lname,
            email: contact.email,
            phNo: contact.phNo,
            status: contact.status
        });
    }
    deleteContact($key) {
        this.contactList.remove($key);
    }
};
ContactService = tslib_1.__decorate([
    Injectable({
        providedIn: "root"
    })
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map