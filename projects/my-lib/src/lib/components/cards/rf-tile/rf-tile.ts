import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'lib-rf-tile',
  templateUrl: './rf-tile.html',
  styleUrls: ['./rf-tile.scss'],
})
export class RfTile {
  @Input() icon?: any;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() value?: string;
  @Input() values?: any[];
  @Input() tooltip?: string;
  @Output() onClick = new EventEmitter();

  onValueClick(value: any[]) {
    this.onClick.emit(value);
  }
}

@NgModule({
  declarations: [RfTile],
  imports: [CommonModule, TooltipModule],
  exports: [RfTile],
})
export class RfTileModule {}
