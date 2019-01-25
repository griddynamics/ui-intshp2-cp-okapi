import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-zoomit',
  templateUrl: './zoomit.component.html',
  styleUrls: ['./zoomit.component.scss']
})
export class ZoomitComponent implements OnInit, OnChanges {
  // @Input () zsrc: string;
  zsrc = 'http://www.therxreview.com/wp-content/uploads/2013/05/Reebok-Track-Jacket.png';
  public pos: string;
  public zUrl: string;
  isHovered = false;

  ngOnInit() {
  this.zUrl = `url(${this.zsrc})`;
  this.pos = '300% 300%';
  }

  ngOnChanges() {
    this.zUrl = `url(${this.zsrc})`;
  }

  onMouseMove(event: any) {
  const element = event.target;
  const posX = Math.ceil(event.offsetX / element.width * 100);
  const posY = Math.ceil(event.offsetY / element.height * 100);
  this.pos = posX + '% ' + posY + '%';
  }

  onMouseOver() {
    this.isHovered = true;
  }

  onMouseLeave() {
    this.isHovered = false;
  }
}
