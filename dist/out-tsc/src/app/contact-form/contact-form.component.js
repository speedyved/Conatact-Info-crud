import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
let ContactFormComponent = class ContactFormComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    ngOnInit() {
        this.contactService.getContactList();
    }
    onClear() {
        this.contactService.form.reset();
        this.contactService.initializeFormGroup();
    }
    onSubmit() {
        if (this.contactService.form.valid) {
            this.contactService.addContact(this.contactService.form.value);
            this.contactService.form.reset();
            this.contactService.initializeFormGroup();
        }
    }
};
ContactFormComponent = tslib_1.__decorate([
    Component({
        selector: "app-contact-form",
        templateUrl: "./contact-form.component.html",
        styleUrls: ["./contact-form.component.css"]
    })
], ContactFormComponent);
export { ContactFormComponent };
//# sourceMappingURL=contact-form.component.js.map