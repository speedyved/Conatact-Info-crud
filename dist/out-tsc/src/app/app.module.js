import * as tslib_1 from "tslib";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import { ContactFormComponent } from "./contact-form/contact-form.component";
import * as material from "@angular/material";
import { ContactService } from "./shared/contact.service";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
let AppModule = class AppModule {
};
AppModule = tslib_1.__decorate([
    NgModule({
        declarations: [AppComponent, HomeComponent, ContactFormComponent],
        imports: [
            BrowserModule,
            AppRoutingModule,
            BrowserAnimationsModule,
            MatTableModule,
            MatCheckboxModule,
            ReactiveFormsModule,
            material.MatToolbarModule,
            material.MatFormFieldModule,
            material.MatGridListModule,
            material.MatInputModule,
            material.MatFormFieldModule,
            material.MatButtonModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
            AngularFireDatabaseModule
        ],
        providers: [ContactService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map