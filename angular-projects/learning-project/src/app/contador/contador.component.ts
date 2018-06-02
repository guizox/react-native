import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  @Output() mudouValor = new EventEmitter();
  @Input() valorContador: number = 0;


  @ViewChild('inputValue') inputValue: ElementRef;


  incrementa() {
    this.inputValue.nativeElement.value++;
    this.mudouValor.emit({novoValor : this.inputValue.nativeElement.value});
  }

  decrementa() {
    if (this.inputValue.nativeElement.value > 0){
      this.inputValue.nativeElement.value--;
      this.mudouValor.emit({novoValor : this.inputValue.nativeElement.value});
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
