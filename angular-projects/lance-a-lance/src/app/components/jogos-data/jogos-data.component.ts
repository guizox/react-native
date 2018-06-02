import { Component, OnInit } from '@angular/core';
import { GamesServiceService } from '../../services/games-service.service';

@Component({
  selector: 'app-jogos-data',
  templateUrl: './jogos-data.component.html',
  styleUrls: ['./jogos-data.component.css']
})
export class JogosDataComponent implements OnInit {
  jogos: any;
  roundNumber: number = 0;

  constructor(private gameService: GamesServiceService) { }

  ngOnInit() {
  }

  searchRound(){
    this.gameService.getAllGames().then((resp) => {
      this.jogos = new Array();
      for (let i = 0; i < resp.fases['2700'].jogos.rodada[this.roundNumber].length; i++){
        let id = resp.fases['2700'].jogos.rodada[this.roundNumber][i],
          time1 = parseInt(resp.fases['2700'].jogos.id[id]['time1']),
          time2 = parseInt(resp.fases['2700'].jogos.id[id]['time2']);

        for (let j = 0; j < Object.keys(resp["equipes "]).length; j++){
          let equipe = Object.keys(resp["equipes "])[j];
          if (time1 == parseInt(resp["equipes "][equipe].id)){
            time1 = resp["equipes "][equipe];
          }
          if (time2 == parseInt(resp["equipes "][equipe].id)){
            time2 = resp["equipes "][equipe];
          }
        }
        
        resp.fases['2700'].jogos.id[id]['time1'] = time1;
        resp.fases['2700'].jogos.id[id]['time2'] = time2;
        this.jogos.push(resp.fases['2700'].jogos.id[id]);
      }
    });
  }
}
