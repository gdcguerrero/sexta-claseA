import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UnoService {

  constructor(private http: HttpClient, private router: Router) { }

  getCharacters() {
    return this.http.get('https://rickandmortyapi.com/api/character')
  }

  getCharacter(name: string): Observable<any> {
    return this.http.get('https://rickandmortyapi.com/api/character/'+name)
  }
}
