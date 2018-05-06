import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']//,
  //inputs : ['nome']
})
export class CursosComponent implements OnInit {

  @Input('nome') nomeDoCurso: string = '';

  constructor() { }

  ngOnInit() {
  }

}
