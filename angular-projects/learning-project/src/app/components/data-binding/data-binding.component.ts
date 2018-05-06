import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  botaoClicado() {
    alert('teste');
  }

  onKeyUp(event: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement> event.target).value;
  }

  onMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }
  constructor() { }

  ngOnInit() {
  }

}
