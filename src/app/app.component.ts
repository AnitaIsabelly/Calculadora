import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora';
  num1:number = 0;
  num2:number = 0;
  result:number = 0;

  soma():void{
    this.result = this.num1 + this.num2;
  }

  sub():void{
    this.result = this.num1 - this.num2;
  }

  div():void{
    this.result = this.num1 / this.num2;
  }

  mult():void{
    this.result = this.num1 * this.num2;
  }
}
