import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent {
  @Input () zsrc: string;
  public pos: string;
  isHovered = false;

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
