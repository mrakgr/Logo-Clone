import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'scene-component',
  templateUrl: './scene-component.component.html',
  styleUrls: ['./scene-component.component.css'],
  standalone: true,
})
export class SceneComponentComponent implements OnInit {
  constructor() {}

  @ViewChild('sceneCanvas')
  private canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.canvas);
  }
}
