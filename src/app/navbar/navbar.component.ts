import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  contact_sales() {
    this.router.navigate(["/contact"]);
  }
  free_trail() {
    this.router.navigate(["/freetrail"]);
  }
}

//api dan krnna hdnne button ekak click kalama me method eka call wenna denna.ah hri..eka hari neda hrii
//hri baboo.. mulinma mn pennuwe angular wala click ekk unama deyak wenna denne ehemai
//dn api krnna oni meken router eka call krna eka.
//router eka import kragththa babo class ekta
//hriada eka hri babo hrrii den babo ei oya e code eka meke liwe..meke  kiwwe navbar.com. ts eke//winadiy inna hri
//awa babo. jri dn hrid
//babo nav bar component eke ne button eka thyenne..
//eyata adala code lynne eyge .ts file eke ah hri baboden twa btn ekk tyinh etokota thw}a method ekk liyna eka ned krnne owwwwwww
