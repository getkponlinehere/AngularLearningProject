import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  constructor() { }
  getNames(){
    return ['akhil', 'kp', 'kukku'];
  }
}
