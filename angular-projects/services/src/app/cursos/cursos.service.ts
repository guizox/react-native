import { Injectable } from "@angular/core";
import {LogServiceService } from '../services/log-service.service';

@Injectable()
export class CursosServiceApi {

    cursos: string[] = ["Angular", "Java", "Springboot"];

    constructor(private logService: LogServiceService) {
        console.log("instanciado");
    }
    
    getCursos() {
        this.logService.consoleLog("Getting Cursos");
        return this.cursos;
    }

    addCursos(curso: string){
        this.cursos.push(curso);
        this.logService.consoleLog(`Criando um novo curso ${curso}`);
    }
}