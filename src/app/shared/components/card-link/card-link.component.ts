import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-card-link',
  templateUrl: './card-link.component.html',
  styleUrls: ['./card-link.component.scss']
  })
export class CardLinkComponent implements OnInit {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() imageUrl: string;
  @Input() icon: string;
  @Input() img: string;
  @Input() routerLink: string;
  @Input() roles = [];
  imageLoaded: boolean;

  constructor() {}

  ngOnInit() {
    if (this.img) {
      this.img = 'assets/img/icons/' + this.img + '.png';
    }
  }

  onImageLoaded() {
    this.imageLoaded = true;
  }
}
