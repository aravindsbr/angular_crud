import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { CrudApiService } from '../services/crud-api.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  bioDataForm: FormGroup;
  submitted = false;
  id: string;

  constructor(
    private crudApiService: CrudApiService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute) { 
      this.getDataforForm(this.route.snapshot.paramMap.get('id'));
      this.bioDataForm = this.formBuilder.group({
        firstName:[{ value: '', disabled: true }, Validators.required],
        lastName: [{ value: '', disabled: true }, Validators.required],
        email: [{ value: '', disabled: true }, [Validators.required, Validators.email]],
        phoneNumber: [{ value: '', disabled: true }, [Validators.required, Validators.pattern("^((\\+91-?)|0)")]],
        address1:[{ value: '', disabled: true }, Validators.required], 
        address2:[{ value: '', disabled: true }, Validators.required], 
        city:[{ value: '', disabled: true }, Validators.required],
        state:[{ value: '', disabled: true }, Validators.required],
        zipCode: [{ value: '', disabled: true }, [Validators.required, Validators.pattern("^[0-9]{6}$")]],
        country: [{ value: '', disabled: true }, Validators.required],
        qualification: [{ value: '', disabled: true }, Validators.required],
        comments:[{ value: '', disabled: true }, Validators.required]
      });
    }

  getDataforForm(id){
    if (id){
      this.crudApiService.getDataById(id).subscribe((response) => {   
        this.bioDataForm.controls.firstName.setValue(response.firstName)
        this.bioDataForm.controls.lastName.setValue(response.lastName)
        this.bioDataForm.controls.email.setValue(response.email)
        this.bioDataForm.controls.phoneNumber.setValue(response.phoneNumber)
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

  ngOnInit(): void {
  }

}
