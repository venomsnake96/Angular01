import { booleanAttribute, Component, EventEmitter, input, Input, numberAttribute, output, Output } from "@angular/core";

function toCapitalize(text: string): string {
if (!text) return '';

return text.charAt(0).toUpperCase() + text.slice(1);
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports:[],
  template:`<p>Hello {{name()}} and his salary {{salary()}}</p>
  <p><strong>Admin confirmation: {{isAdmin()}}</strong></p>
  <button (click)="sendMessage()">Send message</button>`,
})
export class Childcomponent {
  name = input.required<string, string>({
    alias: 'title',
    transform: toCapitalize,
  });

  salary = input<number, number>(0, {
    transform: numberAttribute,
  })

  isAdmin = input<boolean, boolean>(false, {
    transform: booleanAttribute,
  })


  messageEvent = output<string>()

sendMessage(){
  this.messageEvent.emit('Hello Motherfucker')
}
}
