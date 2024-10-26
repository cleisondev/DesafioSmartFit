import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetUnitsService } from './../../services/get-units.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Location } from '../../Types/location.interface';



@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,AppComponent],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent implements OnInit {

httpClient = inject(HttpClient)

results: Location[] = [];
filteredResults: Location[] = [];
formGroup!: FormGroup;

constructor(private formBuilder: FormBuilder, private unitService: GetUnitsService){

}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
    hour: '',
    showClosed: false,
   })
   this.unitService.getAllUnits().subscribe(data => {
    this.results = data.locations
    this.filteredResults = data.locations
  });
  }

onSubmit(): void{
  if(!this.formGroup.value.showClosed){
    this.filteredResults = this.results.filter(location => location.opened)
  }else{
    this.filteredResults = this.results
  }
}

onClean(): void{
  this.formGroup.reset();
}

}
