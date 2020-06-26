import { NgModule } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  providers: [DataService],
  imports: [HttpClientModule],
})
export class ServicesModule {}
