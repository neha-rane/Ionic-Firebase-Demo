import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    if(localStorage.getItem('user'))
      this.router.navigateByUrl("/task");
  }

  register(user) {
    this.authService.register(user);
  }

  currentUser() {
    const user = this.authService.currentUser();
    user.subscribe(us => {
      console.log(us);
    })
  }

}
