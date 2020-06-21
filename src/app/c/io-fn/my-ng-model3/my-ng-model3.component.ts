import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-ng-model3',
  templateUrl: './my-ng-model3.component.html',
  styleUrls: ['./my-ng-model3.component.css']
})
export class MyNgModel3Component implements OnInit {

  @Input() title:string
  @Input() shuki:string

  @Output() shukiChange:EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

}
