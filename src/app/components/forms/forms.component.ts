import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetUnitsService } from './../../services/get-units.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,AppComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

httpClient = inject(HttpClient)

results = [];
formGroup!: FormGroup;

constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService){

}
  ngOnInit(): void {
    this.unitService.getAllUnits().subscribe(data => console.log(data));
    this.formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false,
   })
  }

onSubmit(): void{
  console.log(this.formGroup.value);
}

onClean(): void{
  this.formGroup.reset();
}

}
