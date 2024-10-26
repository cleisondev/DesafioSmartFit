import { Component, OnInit } from '@angular/core';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../Types/location.interface';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent implements OnInit {
unitsList: Location[] = []

  constructor(private unitService: GetUnitsService) {

  }
  ngOnInit(): void {
    this.unitsList = this.unitService.getFilteredUnits();
    console.log(this.unitsList)
  }
}
