import { NgModule } from "@angular/core";
import { GitusersComponent } from "./gitusers.component";
import { CommonModule } from "@angular/common";
// components go into declarations, submodules into imports, services goes into providers
@NgModule({
  declarations: [GitusersComponent],
  imports: [CommonModule],
  exports: [GitusersComponent],
})
export class GitusersModule {}