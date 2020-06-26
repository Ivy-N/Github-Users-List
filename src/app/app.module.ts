import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { GitusersModule } from "./components/gitusers/gitusers.module";
import { ServicesModule } from "./services/services.module";
import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, GitusersModule, ServicesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}