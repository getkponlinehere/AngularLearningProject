import { Component, OnInit } from '@angular/core';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {
  title="Names";
  names;
  constructor(getnamesfromservices : NamesService) { 
    this.names = getnamesfromservices.getNames();

  }

  ngOnInit() {
  }
 

}
