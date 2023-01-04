import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css']
})
export class NotecardComponent implements OnInit {
  
  @Input() note: {title: string, description: string}

  constructor() { }

  ngOnInit(): void {
  }

}
