import { Component } from '@angular/core';
import { CrudApiService } from '../app/services/crud-api.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud';
  usersData: any[];
  bioDataForm: FormGroup;
  submitted = false;

  constructor (
    private crudApiService: CrudApiService,
    private formBuilder: FormBuilder){
    this.bioDataForm = this.formBuilder.group({
      firstName:['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber1: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)")]],
      phoneNumber2: ['', [Validators.required, Validators.pattern("^[0-9]{5}$")]],
      phoneNumber3: ['', [Validators.required, Validators.pattern("^[0-9]{5}$")]],
      address1:['', Validators.required], 
      address2:['', Validators.required], 
      city:['', Validators.required],
      state:['', Validators.required],
      zipCode: ['', [Validators.required, Validators.pattern("^[0-9]{6}$")]],
      country: ['', Validators.required],
      qualification: ['', Validators.required],
      comments:['', Validators.required]
    });
    this.crudApiService.getData().subscribe((response) => {   
      this.usersData = response;
    });
  }

  get f() { return this.bioDataForm.controls; }

  Onsubmitform(){
    this.submitted = true;

    if (this.bioDataForm.invalid) {
      return;
    }

    let fullPhoneNumber = this.bioDataForm.get('phoneNumber1').value+
                          this.bioDataForm.get('phoneNumber2').value+
                          this.bioDataForm.get('phoneNumber3').value

    const bioDataFormRequestObject: any = {
      "firstName": this.bioDataForm.get('firstName').value,
      "lastName": this.bioDataForm.get('lastName').value,
      "email": this.bioDataForm.get('email').value,
      "phoneNumber": fullPhoneNumber,
      "address1": this.bioDataForm.get('address1').value,
      "address2": this.bioDataForm.get('address2').value,
      "city": this.bioDataForm.get('city').value,
      "state": this.bioDataForm.get('state').value,
      "zipCode": this.bioDataForm.get('zipCode').value,
      "country": this.bioDataForm.get('country').value,
      "qualification": this.bioDataForm.get('qualification').value,
      "comments": this.bioDataForm.get('comments').value
    };

    let formValues = JSON.stringify(bioDataFormRequestObject)
    this.crudApiService.postData(formValues);
  }
}
