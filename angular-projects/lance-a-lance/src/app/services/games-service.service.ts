import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { PromiseState } from 'q';

@Injectable()
export class GamesServiceService {

  url: string = "http://yfipassword.000webhostapp.com/server/YFiPassword/php/getUolJson.php";

  getAllGames() {
    return this.http.get(this.url).map((res:Response) => res.json()).toPromise();
  }
  
  getAllTeams(){
    return this.http.get(this.url).map((res:Response) => res.json()).toPromise();
  }

  constructor(private http: Http) { 
  }

}
