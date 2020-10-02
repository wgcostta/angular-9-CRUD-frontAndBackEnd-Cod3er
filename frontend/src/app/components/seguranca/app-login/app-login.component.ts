import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from "@angular/router";
import { HeaderService } from "../../template/header/header.service";

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
    user: '';
    password: '';

   constructor(
    private auth: AuthService,
    private router: Router, 
    private headerService: HeaderService) {
    headerService.headerData = {
      title: "Login",
      icon: "storefront",
      routeUrl: "/products", 
    };
  }

  login() {
    this.auth.login(this.user, this.password);
  }

  ngOnInit(): void {
  }

}
