import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { UnoService } from '../../../services/uno.service';
import { concatMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersResolver implements Resolve<any> {

  constructor(private unoServices: UnoService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    //console.log('resolver > ', route);
    //console.log('state > ', state);
    const name: any = route.queryParams['name']

    return this.unoServices.getCharacters().pipe(
      // tap((resp) => {
      //   console.log(resp);
      // }),
      concatMap(
        (resp: any) => {
          let temp = (resp.results as any[]).find(
            (item) => {
              console.log(item);
              return item.name.includes(name)
            })?.name
          if (!temp) {
            throw {
              status: 404
            }
          }
          console.log(temp);
          return this.unoServices.getCharacter(name)
        }
      ),
      // tap((resp) => {
      //   console.log(resp);
      // }),
      //control de errores si no funciona tu logica te redirecciona a not-found
      catchError((err: any) => {
        if (err.status === 404) {
          this.router.navigate(['404'])
        }
        console.log('err');
        return of(err);
      })
    )
  }
}
