import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnoService {

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character')
  }

  getCharacter(name: string): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/?name='+name)
  }
  // goParams() {
  //   this.router.navigate(
  //     ['/'],
  //     { queryParams: { name: 'rick' } }
  //   );
  // }
}