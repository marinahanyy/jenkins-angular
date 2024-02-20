import { Component } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss'],
})
export class ClothesComponent {
  title = 'Clothes';

  data: any[] = [];

  ngOnInit() {
    this.data = [
      { name: 'Ferfetch', img: './assets/images/shops/farfetch.png' },
      { name: 'Uniqlo', img: './assets/images/shops/uniqlo.png' },
      { name: 'Mango', img: './assets/images/shops/mango.jpg' },
      { name: 'H_M', img: './assets/images/shops/h_m.jpg' },
      { name: 'Yoox', img: './assets/images/shops/yoox.png' },
      { name: 'Nike', img: './assets/images/shops/nike.jpg' },
      { name: 'Dolls-Kill', img: './assets/images/shops/dolls-kill.jpeg' },
    ];
  }
}
