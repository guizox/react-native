import { Component, OnInit } from '@angular/core';
import { CursosServiceApi } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css']
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = [];
  constructor(private cursosServiceApi: CursosServiceApi) { }

  addCurso(curso: string){
    this.cursosServiceApi.addCursos(curso);
  }
  ngOnInit() {
    this.cursos = this.cursosServiceApi.getCursos();
  }

}
