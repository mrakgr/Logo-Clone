import { Component, OnInit } from '@angular/core';
import {} from 'monaco-editor';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  imports: [],
  standalone: true,
})
export class EditorComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  theme = 'vs-dark';

  model: CodeModel = {
    language: 'json',
    uri: 'main.json',
    value: '{}',
  };

  options = {
    contextmenu: true,
    minimap: {
      enabled: true,
    },
  };

  onCodeChanged(value: any) {
    console.log('CODE', value);
  }
}
