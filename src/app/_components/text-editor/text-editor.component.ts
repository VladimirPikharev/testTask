import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent {
  constructor() {}
  public selectedText: string;
  @ViewChild('editorText') editorText: ElementRef;


  public command(name): void {
    try {
      document.execCommand(name, false, 'Roboto');
    } catch (error) {
      return;
    }
  }
  public setColor(color): void {
    document.execCommand('styleWithCSS', false, null);
    document.execCommand('foreColor', false, color);
  }

  public getSelectedText (): void {
    this.selectedText = window.getSelection().toString();
  }

  public replaceText(val: string): void {
    this.editorText.nativeElement.innerHTML = this.editorText.nativeElement.innerHTML.replace(this.selectedText, val)
  }
}
