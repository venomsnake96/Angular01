import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Childcomponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Childcomponent],
  template:`<app-child [title]="title" [salary]="15200" [isAdmin]="true" (messageEvent)="receiveMessage($event)"/>` ,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shadowmouses';

  receiveMessage(message:string){
    alert(message)
  }
}
