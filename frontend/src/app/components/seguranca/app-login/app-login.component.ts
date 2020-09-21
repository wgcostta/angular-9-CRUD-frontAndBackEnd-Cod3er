import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  private auth: AuthService;
  constructor() { }

  login(usuario: string, senha: string) {
    this.auth.login(usuario, senha);
  }

  ngOnInit(): void {
  }

}
