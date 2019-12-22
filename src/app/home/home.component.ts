import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { SelectionModel } from "@angular/cdk/collections";
import { contactData, ELEMENT_DATA } from "./home.model";
import { ContactService } from "../shared/contact.service";
import { isNgTemplate } from "@angular/compiler";
import { MatSort, MatPaginator } from "@angular/material";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ContactFormComponent } from "../contact-form/contact-form.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  constructor(
    private contactService: ContactService,
    private dialog: MatDialog
  ) {}
  displayedColumns: string[] = [
    "First Name",
    "Last Name",
    "Email",
    "Phone number",
    "Status",
    "actions"
  ];
  dataSource = new MatTableDataSource<contactData>();
  selection = new SelectionModel<contactData>(true, []);

  ngOnInit() {
    this.contactService.getContactList().subscribe(list => {
      let array = list.map(item => {
        return {
          $key: item.key,
          ...item.payload.val()
        };
      });
      console.log("array from home array", new MatTableDataSource(array));
      this.dataSource = new MatTableDataSource<contactData>(array);
      console.log("array from home array after", this.dataSource);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate() {
    this.contactService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ContactFormComponent, dialogConfig);
  }

  onEdit(row) {
    this.contactService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(ContactFormComponent, dialogConfig);
  }

  onDelete($key) {
    this.contactService.deleteContact($key);
  }
}
