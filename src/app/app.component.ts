import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 exit  = false;
 constructor(private router: ActivatedRoute) {
   if(this.router.snapshot.data) {
     this.exit = this.router.snapshot.data.exit;
   }
 }
}
