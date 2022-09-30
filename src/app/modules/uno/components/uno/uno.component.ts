import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  public personaje$!: Observable<any>

  constructor(private activeRoute: ActivatedRoute) { 
    this.personaje$ = this.activeRoute.data.pipe(
      tap(console.log)
    );
  }

  ngOnInit(): void {
    // console.log('in component');

    // this.activeRoute.data.subscribe(
    //   {
    //     next:
    //       (resp) => {
    //         //console.log('component1 > ',resp);
    //       }
    //   }
    // )
  }

}
