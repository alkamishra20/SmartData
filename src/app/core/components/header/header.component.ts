import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedUser: any;
  activeRoute: any;

  constructor(private aurthService: AuthenticationService, public router: Router, public location: Location) {
    this.router.events.subscribe(val => {
      if (location.path() != "") {
        this.activeRoute = location.path();
        console.log("active r", this.activeRoute)
        if (this.activeRoute == '/') {
          this.loggedUser = null;
        }
      } else {
        this.activeRoute = "Home";
      }
    });
  }
  ngOnInit() {
    this.aurthService._setAdminAccess$.subscribe(data => {
      let admin = localStorage.getItem("ADMIN_ACCESS")
      if (admin == "true") {
        this.loggedUser = "Admin"
      }
      else {
        this.loggedUser = "Customer"
      }
    })
  }
}
