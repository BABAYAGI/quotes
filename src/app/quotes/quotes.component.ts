import { Component, OnInit } from '@angular/core';
import {  Quotes } from '../quotes';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  goals:Quotes [] = [
    new Quotes(1, '"Imagination is more important than knowledge."', 'Albert, Einstein - Darsan hirani',new Date(2020,3,14)),
    new Quotes(2,'"It does not matter how slowly you go as long as you do not stop"','Confucius-ken kaneki',new Date(2019,6,9)),
    new Quotes(3,'"Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult."','Avul Pacir Zainulabidin-Abdul Kalam',new Date(2022,1,12)),
    new Quotes(4,'"There is nothing more powerful in the world than the idea that came in time."','victor-hugo shan',new Date(2019,0,18)),
    new Quotes(5,'"When we close ourselves off, were not just closing ourselves off to other people, were closing ourselves off from ourselves and impeding ourselves. When you open up, you allow yourself to be who you are."','Dan-Matho',new Date(2019,2,14)),
    new Quotes(6,'"We are what we repeatedly do. Excellence, then, is not an act, but a habit."','johhniewalker -keepwalking',new Date(2030,3,14)),
  ];
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }
  
  deleteGoal(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if (toDelete){
        this.goals.splice(index,1)
      }
    }
  }
  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength+1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }
  constructor() { }

  ngOnInit() {
  }

}
