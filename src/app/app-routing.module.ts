import { FreetrailComponent } from "./freetrail/freetrail.component";
import { ContactComponent } from "./contact/contact.component";
import { ServeComponent } from "./serve/serve.component";
import { SuccessStoriesComponent } from "./success-stories/success-stories.component";
import { BlogComponent } from "./blog/blog.component";
import { PatnersComponent } from "./patners/patners.component";
import { FeaturesComponent } from "./features/features.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { bloomHashBitOrFactory } from "@angular/core/src/render3/di";
import { OrangehrmComponent } from "./orangehrm/orangehrm.component";

const routes: Routes = [
  { path: "features", component: FeaturesComponent },
  { path: "patners", component: PatnersComponent },
  { path: "blog", component: BlogComponent },
  { path: "success-stories", component: SuccessStoriesComponent },
  { path: "serve", component: ServeComponent },
  { path: "", component: OrangehrmComponent },
  { path: "contact", component: ContactComponent },
  { path: "freetrail", component: FreetrailComponent }
];

//oranghrm eka thi penna oni
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
