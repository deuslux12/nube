import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-croquis',
  templateUrl: './croquis.component.html',
  styles: []
})
export class CroquisComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }
}
export class AppComponent {
  title = 'app';
  public zoom = 1.8;
  public translate = { x: -50, y: -20 };

  public get svgTransform(): string {
    // @link https://www.safaribooksonline.com/library/view/svg-essentials/0596002238/ch05s06.html
    const centerX = 50;
    const centerY = 0;

    const offX = -centerX * (this.zoom - 1);
    const offY = -centerY * (this.zoom - 1);
    const trsl = `translate(${offX}, ${offY})`;

    return `${trsl} translate(${this.translate.x}, ${this.translate.y}) scale(${this.zoom}, ${this.zoom})`;
  }
  
}