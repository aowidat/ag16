import { Injectable } from '@angular/core';
import { Data } from '../models/data';
import {data} from '../../dummy/MOCK_DATA'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  loadData(): Data[] {
    return data;
}

}
