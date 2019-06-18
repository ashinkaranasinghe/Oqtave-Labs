import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FeaturesComponent } from "./features/features.component";
import { SuccessStoriesComponent } from "./success-stories/success-stories.component";
import { PatnersComponent } from "./patners/patners.component";
import { BlogComponent } from "./blog/blog.component";
import { ServeComponent } from './serve/serve.component';
import { OrangehrmComponent } from './orangehrm/orangehrm.component';
import { ContactComponent } from './contact/contact.component';
import { FreetrailComponent } from './freetrail/freetrail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FeaturesComponent,
    SuccessStoriesComponent,
    PatnersComponent,
    BlogComponent,
    ServeComponent,
    OrangehrmComponent,
    ContactComponent,
    FreetrailComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
