import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

  sort(column: string): void {
    // array.sort modifies the array, sorting the items based on the given compare function
    // BTW: You CAN chain multiple terinary operators together
    // return (test1) ? answer1 : (test2) ? answer2 : answer3;
    // Should be the same as
    //  if(test1){answer1}
    //  else if(test2){answer2}
    //  else {answer3}
    // because "else if" is really a shortcut for
    //  if(test1){answer1}else{if(test2){answer2}else{answer3}}
    this.satellites.sort(function(a: Satellite, b: Satellite): number {
      return (a[column] < b[column]) ? -1 : (a[column] > b[column]) ? 1 : 0;
    });
  }

}
