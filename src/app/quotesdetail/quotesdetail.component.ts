import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotesdetail',
  templateUrl: './quotesdetail.component.html',
  styleUrls: ['./quotesdetail.component.css']
})
export class QuotesdetailComponent implements OnInit {
  @Input() goal: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  goalComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
