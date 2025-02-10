import { booleanAttribute, Component, EventEmitter, input, Input, numberAttribute, Output } from "@angular/core";

function toCapitalize(text: string): string {
if (!text) return '';

return text.charAt(0).toUpperCase() + text.slice(1);
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports:[],
  template:`<p>Hello {{name}} and his salary {{salary}}</p>
  <p><strong>Admin confirmation: {{isAdmin}}</strong></p>
  <button (click)="sendMessage()">Send message</button>`,
})
export class Childcomponent {
@Input({required:true, alias: 'title', transform:toCapitalize}) name!:string;
@Input({transform: numberAttribute}) salary!: number
@Input({transform: booleanAttribute}) isAdmin = false

@Output() messageEvent= new EventEmitter<string>()
sendMessage(){
  this.messageEvent.emit('Hello Motherfucker')
}
}
