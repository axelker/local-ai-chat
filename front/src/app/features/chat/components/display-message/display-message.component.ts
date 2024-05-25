import { Component, Input } from '@angular/core';

export type format = 'code' | 'text';
export interface MessageFormat {
  content:string;
  format:format;
}
@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.scss']
})
export class DisplayMessageComponent {
  @Input() message: string = "";

  public getFormatMessages(): MessageFormat[] {
    if (!this.message) {
      return [];
    }
    //No code in the message
    if(!this.containCodePattern(this.message)){
     return [{
      content:this.message,
      format:'text'
     }]; 
    }
    
    const test = this.getTabsWithCode(this.message);
    console.log(test)
    return test;
  }
  private containCodePattern(message:string): boolean {
    const codeBlockPattern = /```([\s\S]*?)```/g;
    if(message.match(codeBlockPattern)){
      return true;
    }
    return false;
  }
  private getTabsWithCode(message:string): MessageFormat[] {
    const codeBlockPattern = /```([\s\S]*?)```/g;
    const parts: MessageFormat[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
  
    while ((match = codeBlockPattern.exec(message)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          content: message.slice(lastIndex, match.index),
          format: 'text'
        });
      }
      parts.push({
        content: match[1].trim(),
        format: 'code'
      });
      lastIndex = codeBlockPattern.lastIndex;
    }
  
    if (lastIndex < message.length) {
      parts.push({
        content: message.slice(lastIndex),
        format: 'text'
      });
    }
  
    return parts;
  
  }
}
