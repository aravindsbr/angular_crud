import { Component } from '@angular/core';
import { CrudApiService } from '../app/services/crud-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  usersData: any[];

  constructor (private crudApiService: CrudApiService){
    this.crudApiService.getData().subscribe((response) => {   
      this.usersData = response;
    });
  }
}
