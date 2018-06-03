import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  email:string = localStorage.getItem("user");
  password: string;
  confirmPassword: string;
  url="http://yfipassword.000webhostapp.com/server/YFiPassword/php/UserService.php?metodo=update&email="

  callBack(data){
    if (data.status === 200){
      const toast = this.notificationsService.success('Senha alterada com sucesso.!', 'Favor Logar novamente', {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
      localStorage.removeItem("user");
      document.location.reload();
    }
  }

  changePassword(){
    if (this.password !== "" && this.password.length > 7 && this.password == this.confirmPassword){
      console.log(this.url + this.email + "&senha=" + this.password);
      this.http.get(this.url + this.email + "&senha=" + this.password)
      .map((res:Response) => res).subscribe(data => this.callBack(data)
        
      );
    } else {
      alert("Senhas sao diferentes, ou senha nao contem no minimo 8 caracteres. \nFavor confirmar a senha");
    }
  }
  constructor(private http : Http, private notificationsService: NotificationsService) { }

  ngOnInit() {
  }

}
