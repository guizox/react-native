import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {

  cb: any = require('campeonato-brasileiro-api');

  constructor() { }

  ngOnInit() {
    this.cb.tabela('a').then(function(tabela){
      console.log(tabela);
    }, function(error){
      console.log(error);
    })  
  }

}
