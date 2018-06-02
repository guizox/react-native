import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})

@Injectable()
export class ForgetPasswordComponent implements OnInit {

  @Output() emitter = new EventEmitter;
  email: string = "";
  private url: string = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=esqueci&email=";
  password: string = '';

  onDestroyForgetPasswordComponent() {
    this.emitter.emit({renderLogin : true});
  }

  callBack(data) {
    if (!data[0]){
      alert('Email not founded');
      return;
    }
    this.password = data[0].senha

  }

  forgetPassword() {
    if (this.email === '') {
      alert('Please, fill the email field');
      return;
    }
    this.http.get(this.url + this.email)
    .map((res:Response) => res.json()).subscribe(data => this.callBack(data)
      
    );
  }

  constructor(
    private http: Http
  ) {}

  ngOnInit() {
  }

}
