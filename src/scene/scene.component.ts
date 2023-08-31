import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
  standalone: true,
})
export class SceneComponent implements OnInit {
  constructor() {}

  @ViewChild('sceneCanvas')
  private canvas!: ElementRef<HTMLCanvasElement>;

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.canvas);
  }
}
