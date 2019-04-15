import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EventComponent } from "./event/event.component";
import { XyzComponent } from "./event/xyz/xyz.component";
import { PqrComponent } from "./pqr.component";
import { JklComponent } from "./abc/jkl.component";
import { GhiComponent } from "./ghi/ghi.component";

import { CustomerService } from "./event/customer.service";
import { Customer1Service } from "./event/customer1.service";
import { Customer2Service } from "./customer2.service";

import { StudentModule } from "./student/student.module";
import { CustomerModule } from "./customer/customer.module";

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    XyzComponent,
    PqrComponent,
    JklComponent,
    GhiComponent
  ],
  imports: [BrowserModule, AppRoutingModule, StudentModule, CustomerModule],
  providers: [CustomerService, Customer1Service, Customer2Service],
  bootstrap: [AppComponent]
})
export class AppModule {}
