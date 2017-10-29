import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { admin } from '../../app.interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  admin:admin;
  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getProfileAdmin().subscribe( data => {
      this.admin = data.admin;
    });
  }

}
