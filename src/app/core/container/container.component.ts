import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Location } from "@angular/common";


@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  activeRoute: string;

  constructor(public router: Router, public location: Location,) {
    router.events.subscribe(val => {
      if (location.path() != "") {
        this.activeRoute = location.path();
      } else {
        this.activeRoute = "Home";
      }
    });
  }

  ngOnInit() {
  }
}