import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Osoba, OsobaZoznam} from "./app/models/osoba.model";

@Injectable({
  providedIn: 'root'
})
export class OsobaService {

  private apiUrl = 'http://localhost:8080/api/customers'

  constructor(private http: HttpClient) { }

  getOsoby(): Observable<OsobaZoznam[]>{
    return this.http.get<OsobaZoznam[]>(`${this.apiUrl}`);
  }

  getOsoba(osobaId: number): Observable<Osoba>{
    return this.http.get<Osoba>(`${this.apiUrl}/${osobaId}`);
  }

  createOsoba(osoba: Osoba): Observable<Osoba>{
    return this.http.post<Osoba>(`${this.apiUrl}`, osoba);
  }

  deleteOsoba(osobaId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${osobaId}`);
  }

  updateOsoba(osobaId: number, osoba: Osoba): Observable<Osoba>{
    return this.http.put<Osoba>(`${this.apiUrl}/${osobaId}`, osoba);
  }

  /**
  nahrajSubor(subor: File): Observable<Object>{
    const formData: FormData = new FormData();
  }
   */
}
