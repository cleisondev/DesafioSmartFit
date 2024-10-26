import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FormsComponent } from "./components/forms/forms.component";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetUnitsService } from './services/get-units.service';
import { BehaviorSubject } from 'rxjs';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CommonModule } from '@angular/common';
import { Location } from './Types/location.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsComponent, HttpClientModule, CardsListComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  
})
export class AppComponent {
  title = 'DesafioSmartFit';
  showList = new BehaviorSubject(false)
  unitsLists: Location[] = []


  constructor(private unitService: GetUnitsService){

  }

  onSubmit(){
    this.unitsLists = this.unitService.getFilteredUnits();
    this.showList.next(true)
  }
}
