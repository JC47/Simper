import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;
  login:FormGroup;
  validUser:boolean=true;
  validPass:boolean=true;
  constructor(
    private authService:AuthService,
    private router:Router,
  ) {

  }

  ngOnInit() {
    localStorage.clear();
    this.login= new FormGroup({
      'username':new FormControl(),
      'password':new FormControl()
    });
  }

  onLoginSubmit(){
    const datos = {
      username:this.login.controls['username'].value,
      password:this.login.controls['password'].value
    }

    this.authService.authenticateAdmin(datos).subscribe(data => {

      if(data.success){
        // alert("Logeado como administrador");
        this.validPass=true;
        this.validUser=true;
        this.authService.storeAdminData(data.token, data.admin);
        this.router.navigate(['/Administrador']);
      } else {
        if(data.msg == 'Usuario No Encontrado'){
          this.validUser=true;
          this.validPass=true;
          this.authService.authenticateUsuario(datos).subscribe( data => {
            if(data.success){
              // alert("Logeado como usuario");
              this.validPass=true;
              this.validUser=true;
              this.authService.storeUsuarioData(data.token, data.usuario);
              this.router.navigate(['/Usuario']);
            }
            else{
              if(data.msg == "Usuario No Encontrado"){
                this.validPass = true;
                this.validUser = false;
              }
              else{
                this.validPass = false;
                this.validUser = true;
              }
            }
          });
        }
        else{
          this.validPass = false;
          this.validUser = true;
        }
      }
    });
  }


}
