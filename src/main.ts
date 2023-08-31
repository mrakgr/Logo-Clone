import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { SceneComponent } from './scene/scene.component';
import { EditorComponent } from './editor/editor.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, SceneComponent, EditorComponent],
  template: `<app-editor></app-editor>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
