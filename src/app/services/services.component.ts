import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  active: number | 0 = 0;
  hover : boolean = false ;
  changeServe(num: number): void {
    this.active = num;
  }

  hoverStyle() : void{
    this.hover = !this.hover
  }

  leavehoverStyle() : void{
    this.hover = !this.hover
  }

}
