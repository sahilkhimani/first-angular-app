import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponent {
  public name = "";
  public styleClass = "";
  public condition = false;
  
  clickFunction(name : string){
    this.name = name;
    if(this.condition){
      this.styleClass = "colorName";
    }
    else{
      this.styleClass = "styleFont";
    }
  }
}
