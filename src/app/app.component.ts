import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './new-component/new-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NewComponent],
  templateUrl: './app.component.html',
  styles: [`
    h1{
        font-size : 60px;
        color: blue;
    }
    `]
})
export class AppComponent {
  title = 'new-app';
}
