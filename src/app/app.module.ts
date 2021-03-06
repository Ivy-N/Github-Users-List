import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GitusersModule } from "./components/gitusers/gitusers.module";
import { ServicesModule } from "./services/services.module";
import { AppRoutingModule } from "./app.routing";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GitusersModule, GitusersFormModule, ServicesModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}