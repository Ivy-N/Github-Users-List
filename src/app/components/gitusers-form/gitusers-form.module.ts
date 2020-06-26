import { NgModule } from "@angular/core";
import { GitusersFormComponent } from "./gitusers-form.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [GitusersFormComponent],
  imports: [CommonModule],
  exports: [GitusersFormComponent],
})
export class GitusersFormModule {}