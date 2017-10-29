import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar-usuario',
  templateUrl: './navbar-usuario.component.html',
  styleUrls: ['./navbar-usuario.component.css']
})
export class NavbarUsuarioComponent implements OnInit {
  usuario:Object
  balance:any;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getProfileUsuario().subscribe( data => {
      this.usuario = data.admin;
      this.balance = localStorage.getItem('idBalance');
    });
  }

  logOut(){
    this.authService.logoutUsuario();
    this.router.navigate(['login']);
  }
}
