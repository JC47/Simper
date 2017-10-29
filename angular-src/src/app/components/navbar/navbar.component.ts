import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { admin } from '../../app.interfaces';
import {Router} from '@angular/router';
import {BalanceService} from '../../services/balance.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./nav.css']
})
export class NavbarComponent{

  admin:admin;
  constructor(private authService: AuthService,
              private router:Router,
              private _balanceService:BalanceService) { }

  ngOnInit() {
    this.authService.getProfileAdmin().subscribe( data => {
      this.admin = data.admin;
    });
  }

  logOut(){
    this.authService.logoutAdmin();
    this.router.navigate(['login']);
  }


}
