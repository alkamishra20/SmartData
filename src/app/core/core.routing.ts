import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from "./components/home-page/home-page.component";
import { LoginComponent } from "src/app/authentication/component/login/login.component";

/**
 * @desc Routes specific to Core Module
 */
export const coreRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  //  { path: '', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(coreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoreRoutingModule { }
