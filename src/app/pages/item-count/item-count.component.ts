import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-count',
  templateUrl: './item-count.component.html',
  styleUrls: ['./item-count.component.scss']
})
export class ItemCountComponent {
  @Input() label : string = "";
  @Input() count? : number ;
}
