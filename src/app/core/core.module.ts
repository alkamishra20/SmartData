import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ContainerComponent } from './container/container.component';
import { CoreRoutingModule } from './core.routing';
import { UtilityModule } from "../utility/utility.module";
import { LoginComponent } from "src/app/authentication/component/login/login.component";
import { AuthenticationService } from "src/app/authentication/services/authentication.service";
import { NotificationService } from "src/app/core/services/notification.service";

@NgModule({

  declarations: [HeaderComponent, HomePageComponent, ContainerComponent, LoginComponent],
  imports: [CoreRoutingModule, UtilityModule],
  providers: [AuthenticationService, NotificationService],
  exports: [ContainerComponent,
  ]
})
export class CoreModule {

}
