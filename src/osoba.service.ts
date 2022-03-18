import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Osoba, OsobaZoznam} from "./app/models/osoba.model";

@Injectable({
  providedIn: 'root'
})
export class OsobaService {

  private apiUrl = 'http://localhost:8080/api/customer'

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<OsobaZoznam[]>{
    return this.http.get<OsobaZoznam[]>(`${this.apiUrl}`);
  }

  getOsoba(osobaId: string): Observable<Osoba>{
    return this.http.get<Osoba>(`${this.apiUrl}/${osobaId}`);
  }

  createOsoba(osoba: Osoba): Observable<Osoba>{
    return this.http.post<Osoba>(`${this.apiUrl}`, {userID: osoba.id, firstName: osoba.meno, lastName: osoba.priezvisko, email: osoba.kontakt});
  }
}
