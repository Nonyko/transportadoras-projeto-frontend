import { Component, OnInit, Input } from '@angular/core';
import { Transportadora } from './transportadora';
import { TransportadoraService } from 'src/app/shared/transportadora.service';
@Component({
  selector: 'app-displaycardstransportadoras',
  templateUrl: './displaycardstransportadoras.component.html',
  styleUrls: ['./displaycardstransportadoras.component.css']
})
export class DisplaycardstransportadorasComponent implements OnInit {
  @Input() transportadoras:Transportadora[];
  constructor() { 
  }

  ngOnInit() {
  }

}
