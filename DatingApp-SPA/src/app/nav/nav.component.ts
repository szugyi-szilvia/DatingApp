import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      //console.log('Logged in successfuly');
      this.alertify.success('Logged in successfuly');
    }, error => {
      //console.log(error);
      this.alertify.error(error);
    });
  }

  loggedIn() {
  return this.authService.loggedIn();

  }

  logout(){ 
    localStorage.removeItem('token')
    this.alertify.message('logged out');
  }

}
