import { Component, Input, OnInit } from '@angular/core';
import { Pinguino } from '../pinguino';
import { ActivatedRoute } from '@angular/router';
import { PinguinoService } from '../pinguino.service';

@Component({
  selector: 'app-pinguino-detail',
  templateUrl: './pinguino-detail.component.html',
  styleUrls: ['./pinguino-detail.component.css']
})
export class PinguinoDetailComponent implements OnInit {
  PinguinoId !: number;
  @Input() pinguino!: Pinguino;
  

  constructor(
    private route: ActivatedRoute,
    private pinguinoService: PinguinoService
  ) {}
 
  getPinguino(Id: number): void {
    this.pinguinoService.getPinguinos().subscribe((pinguinos) => {
      this.pinguino= pinguinos.find(pinguino2 => pinguino2.id === Id)!;
    }
    );
  }
 
  ngOnInit() {
    if(this.pinguino === undefined){
      this.pinguinoinguinoId = this.route.snapshot.paramMap.get(
      if (this.PinguinoId) {
        this.getPinguino(this.PinguinoId);
      }
    }
  }
 }
