import { NgModule } from "@angular/core";
import { GitusersComponent } from "./gitusers.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [GitusersComponent],
  imports: [CommonModule],
  exports: [GitusersComponent],
})
export class GitusersModule {}