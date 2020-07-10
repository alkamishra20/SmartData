import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table"
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { MatDialog} from '@angular/material';
import { NotificationService } from "src/app/core/services/notification.service";
import { RestService } from 'src/app/core/services/rest.service';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent implements OnInit {
  dataSource: MatTableDataSource<Element>;
  userUpdateIndex: number;
  adminAccess: boolean = false;

  /**
  * @desc Initialise material table with data
  */
  @Input() displayedColumns: any;
  @Input()
  set tableData(value) {
    this.dataSource = new MatTableDataSource<Element>(value);
    this.cdRef.detectChanges();
  };

  constructor(private cdRef: ChangeDetectorRef,
    public dialog: MatDialog,
     private authentication: AuthenticationService,
    private rest: RestService
  ) {

  }

  ngOnInit() {

  /**
  * @desc Set role based access
  */
    this.authentication._setAdminAccess$.subscribe(data => {
      let admin = localStorage.getItem("ADMIN_ACCESS")
      if (admin == "true") {
        this.adminAccess = true
      }
      else {
        this.adminAccess = false
      }
      console.log("admin--->", admin)
    })

    this.rest._globalSaveToggle$.subscribe(data => {
      if (data == "cancel global save") {
        this.userUpdateIndex = null;
      }
    })
  }

  /**
  * @desc Update information of user
  */
  updateUser(data) {
    this.userUpdateIndex = data.id;
    this.rest._globalSaveToggle$.next("enable global save")
  }

  /**
  * @desc Login as customer
  */
  loginAs(user) {
    this.userUpdateIndex = null;
    this.rest._globalSaveToggle$.next("")
    console.log("logn data", user)
    let loginPayload = {
      "email": user.email,
      "password": "cityslicka"
    }
    this.authentication.getUserDetail(loginPayload).then(data => {
      console.log("request data", data)
      if (data && data.token) {
        this.authentication._setAdminAccess$.next("customer")
      }
    });
  }
}

