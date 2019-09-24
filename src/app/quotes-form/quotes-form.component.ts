import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
   
  newGoal = new Quotes(0,"","",new Date());
  @Output() addGoal = new EventEmitter<Quotes>();

  submitGoal(){
this.addGoal.emit(this.newGoal);
  }
    constructor() { }

    ngOnInit() {
    }

  };
