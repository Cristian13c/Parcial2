import { Component, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguino-list',
  templateUrl: './pinguino-list.component.html',
  styleUrls: ['./pinguino-list.component.css']
})
export class PinguinoListComponent implements OnInit {

  pinguinos: Array<Pinguino> = []; 
  majorDistribution: number = 0;
  selected: Boolean = false;
  selectedPinguino!: Pinguino;
  
  constructor(private pinguinoService: PinguinoService) { }

  ngOnInit() {
    this.getPinguinos();
    this.getMajorDistribution();

  }

  getPinguinos(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguinos = pinguinos;
    });
  }

  getMajorDistribution(): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos
      ) => {
      this.majorDistribution = pinguinos.filter(pinguino => pinguino.globalDistribution.length < 18).length;
    });
  }

  onSelected(pinguino: Pinguino): void {
    this.selected = true;
    this.selectedPinguino = pinguino;
  }
}

