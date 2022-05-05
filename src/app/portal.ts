import {Component} from '@angular/core';
import { ApiService} from './services/api.service';

interface Food {
  value: string;
  viewValue: string;
}

interface Dropdown {
  value: string;
  viewValue: string;
}


/**
 * @title LLA Standard - SignUp
 */
@Component({
  selector: 'portal',
  templateUrl: 'portal.html',
})
export class Portal {

  constructor(private apiService: ApiService) {
  }

}

