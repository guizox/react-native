import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-classificacao',
  templateUrl: './classificacao.component.html',
  styleUrls: ['./classificacao.component.css']
})
export class ClassificacaoComponent implements OnInit {

  constructor(private gameService: GamesServiceService) { }
  classficacao: {}[];
  times: {}[];
  loading: boolean = true;

  ngOnInit() {
    this.gameService.getAllGames().then((resp) => {
      this.times = new Array();
      this.classficacao = new Array();
      for (let i = 0; i < resp.fases["2700"]["classificacao"]["grupo"].Único.length; i++){
        this.classficacao.push({"time" : resp.fases["2700"]["classificacao"]["grupo"].Único[i]});
      }
      let equipes = Object.keys(resp.fases["2700"]["classificacao"]["equipe"]);
      for (let i = 0; i < this.classficacao.length; i++){
        for (let j = 0; j < equipes.length; j++){
          if (this.classficacao[i]["time"].trim() === equipes[j].trim()){
            for (let k = 0; k < Object.keys(resp.equipes).length; k++){
              if (resp.equipes[Object.keys(resp.equipes)[k]].id === resp.fases["2700"]["classificacao"]["equipe"][equipes[j]].id){
                this.times.push({
                  "time" : this.classficacao[i]["time"],
                  "info" : resp.fases["2700"]["classificacao"]["equipe"][equipes[j]],
                  "brasao" : resp.equipes[Object.keys(resp.equipes)[k]].brasao,
                  "nome" : resp.equipes[Object.keys(resp.equipes)[k]]["nome-comum"]
                });
              }
            }
          }
        }
      }
      this.loading = false;
    });
  }

}
