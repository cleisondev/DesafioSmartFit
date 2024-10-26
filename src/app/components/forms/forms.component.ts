import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GetUnitsService } from './../../services/get-units.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from '../../app.component';
import { Location } from '../../Types/location.interface';
import { FilterUnitsService } from '../../services/filter-units.service';


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

constructor(private formBuilder: FormBuilder,
   private unitService: GetUnitsService, private filterUnitsService:FilterUnitsService){

}
  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
    hour: '',
    showClosed: true,
   })
   this.unitService.getAllUnits().subscribe(data => {
    this.results = data.locations
    this.filteredResults = data.locations
  });
  }


onSubmit(): void{
  let {showClosed,hour} = this.formGroup.value
  this.filteredResults = this.filterUnitsService.filter(this.results, showClosed,hour)
  }


onClean(): void{
  this.formGroup.reset();
}

}
