import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-exemplos',
  templateUrl: './pipes-exemplos.component.html',
  styleUrls: ['./pipes-exemplos.component.css']
})
export class PipesExemplosComponent implements OnInit {


  livro: any = {
     titulo : `Escuridao Total Sem Estrelas`,
     paginas : 1500,
     rating: 4.15,
     preco: 49.9,
     dataLancamento : new Date(12, 5, 2015),
     url : 'http://a.co/glqjpRP'
  };
  

  constructor() { }

  ngOnInit() {
  }

}
