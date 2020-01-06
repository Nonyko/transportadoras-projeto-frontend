import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() public display:String="none";
  @Input() public overflow:String="hidden";
  @Input() titulo:String="";
  constructor() { }

  ngOnInit() {
  }

  open(){  
  this.display="block";
  this.overflow="scroll";
  }

  close(){  
  this.overflow="hidden";
  this.display="none";
  }

}
