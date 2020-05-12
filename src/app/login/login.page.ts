import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('user'))
      this.router.navigateByUrl("/task");
  }

  login(user) {
    this.authService.login(user);
  }

}