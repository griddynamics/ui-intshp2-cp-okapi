import { EventEmitter, Output, Input } from '@angular/core';

export class BaseFilter {
  @Output() filterChange: EventEmitter<{}> = new EventEmitter();
  @Input() defaultParams: string;

  public onFilterChange(name, value): void {
    this.filterChange.emit({ name, value: this.getFilterValue(value) });
  }

  public getFilterValue(value: string): any {
    return value;
  }

  public parseParams(value: string): any {
    return value ? value.split(',') : [];
  }
}
