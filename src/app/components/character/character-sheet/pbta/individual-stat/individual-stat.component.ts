import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { PbtaStat } from '../../../shared/stat';

@Component({
  selector: 'app-individual-stat',
  templateUrl: './individual-stat.component.html',
  styleUrls: ['./individual-stat.component.scss']
})
export class IndividualStatComponent implements OnInit {

  @Input() stat: PbtaStat;
  @Output() change: EventEmitter<PbtaStat> = new EventEmitter<PbtaStat>();
  constructor() { }

  ngOnInit() {
  }

  statChanged(){
    this.change.emit(this.stat);
  }

  highlight()
  {
    this.stat.highlighted = !this.stat.highlighted;
    this.statChanged();
  }

  increaseStat(){
    this.stat.value++;
    this.statChanged();
  }

  lowerStat(){
    this.stat.value--;
    this.statChanged();
  }

}
