import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { UPDATE_USER } from "src/app/core/models/notification-msg-model";
import { cloneDeep } from "lodash"

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  displayedColumn = ["photo", "first_name", "last_name", "email", "action"];
  userList: any = []
  userListCopy: any = []
  updateUsersReq: any = [];
  globalSaveToggle: boolean = false;
  constructor(private rest: RestService, private notificationService: NotificationService) { }

  ngOnInit() {
    this.rest._globalSaveToggle$.subscribe(data => {
      if (data == "enable global save") {
        this.globalSaveToggle = true;
      }
      else {
        this.globalSaveToggle = false;
      }
    })
    this.rest.getUserList(1).subscribe(res => {

      if (res && res.data) {
        this.userList = res.data
        this.userListCopy = cloneDeep(res.data);
      }
    })
  }

  /**
  * @desc cancel global save
  */
  cancel() {
    this.globalSaveToggle = false;
    this.updateUsersReq = [];
    this.userList = cloneDeep(this.userListCopy);
    console.log("clone===>", this.userList)
    this.rest._globalSaveToggle$.next("cancel global save")
  }

  /**
  * @desc global save
  */
  globalSave() {
    this.rest.updateUser(this.userList).subscribe(data => {
      if (data) {
        this.userList = data
        this.globalSaveToggle = false;
        this.updateUsersReq = [];
        this.rest._globalSaveToggle$.next("cancel global save")
        this.notificationService.showNotification(
          UPDATE_USER.UPDATE_SUCCESS
        );

      }
      else {
        this.notificationService.showNotification(
          UPDATE_USER.UPDATE_UNSUCCESS
        );
      }
      console.log('list o user', data)
    })
  }
}
