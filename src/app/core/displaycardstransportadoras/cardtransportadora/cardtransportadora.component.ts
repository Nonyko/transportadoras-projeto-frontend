import { Component, OnInit, Input } from '@angular/core';
import { Transportadora } from '../transportadora';
@Component({
  selector: 'app-cardtransportadora',
  templateUrl: './cardtransportadora.component.html',
  styleUrls: ['./cardtransportadora.component.css']
})
export class CardtransportadoraComponent implements OnInit {

  @Input() public transportadora:Transportadora;

  constructor() {
   }

  ngOnInit() {

  }

}
