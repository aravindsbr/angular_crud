import { Component, OnInit } from '@angular/core';
import { CrudApiService } from '../../app/services/crud-api.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  bioDataForm: FormGroup;
  submitted = false;
  id: string;

  constructor(
    private crudApiService: CrudApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { 
      this.getDataforForm(this.route.snapshot.paramMap.get('id'));
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
    }

  ngOnInit(): void {
  }

  getDataforForm(id){
    if (id){
      this.crudApiService.getDataById(id).subscribe((response) => {   
        this.bioDataForm.controls.firstName.setValue(response.firstName)
        this.bioDataForm.controls.lastName.setValue(response.lastName)
        this.bioDataForm.controls.email.setValue(response.email)
        this.bioDataForm.controls.address1.setValue(response.address1)
        this.bioDataForm.controls.address2.setValue(response.address2)
        this.bioDataForm.controls.city.setValue(response.city)
        this.bioDataForm.controls.state.setValue(response.state)
        this.bioDataForm.controls.zipCode.setValue(response.zipCode)
        this.bioDataForm.controls.country.setValue(response.country)
        this.bioDataForm.controls.qualification.setValue(response.qualification)
        this.bioDataForm.controls.comments.setValue(response.comments)
      });
      
    }
  }
  
  get f() { return this.bioDataForm.controls; }

  onSubmitForm(){
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
    this.crudApiService.updateData(this.route.snapshot.paramMap.get('id'), formValues);
    window.open("/home","_self")
  }

}
