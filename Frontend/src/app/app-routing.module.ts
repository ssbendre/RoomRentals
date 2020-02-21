import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { HomeComponent } from "./pages/home/home.component";
import { OwnerHomeComponent } from "./pages/owner-home/owner-home.component";
import { NoContentComponent } from "./pages/no-content/no-content.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent },
  { path: "owner-home", component: OwnerHomeComponent },
  { path: "**", component: NoContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
