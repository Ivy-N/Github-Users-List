import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GitusersComponent } from "./components/gitusers/gitusers.component";

const routes: Routes = [
  { path: "", component: GitusersComponent, pathMatch: "full" },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
