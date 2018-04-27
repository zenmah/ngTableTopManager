import { PbtaStat } from '../../../shared/stat';
import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-stat-grid',
  templateUrl: './stat-grid.component.html',
  styleUrls: ['./stat-grid.component.scss']
})
export class StatGridComponent implements OnInit {

  @Input() stats: PbtaStat[];
  @Output() change: EventEmitter<PbtaStat> = new EventEmitter<PbtaStat>();

  constructor() { }

  ngOnInit() {

  }
}
