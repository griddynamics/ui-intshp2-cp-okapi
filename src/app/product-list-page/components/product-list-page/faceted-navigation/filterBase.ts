import { EventEmitter, Output } from '@angular/core';

export class BaseFilter {
  @Output() filterChange: EventEmitter<{}> = new EventEmitter();

  onFilterChange(name, value): void {
    this.filterChange.emit({ name, value: this.getFilterValue(value) });
  }

  getFilterValue(value: string): any {
    return value;
  }
}
