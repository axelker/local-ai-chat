import { Injectable } from '@angular/core';
import { IAIClient } from './iai.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IChatResponse } from '../models/ichat-response';
@Injectable({
  providedIn: 'root',
})
export class CustomAiService implements IAIClient {
  constructor(private readonly httpClient: HttpClient) {}

  public chat(input: string): Observable<IChatResponse> {
    return this.httpClient.post<any>('http://127.0.0.1:5000/chat', { inp: input });
  }
  public sendImage(input: File): Observable<IChatResponse> {
    // Utilisation de form date pour envoyer des meta data compréhensible pour les requettes http
    let formData: FormData = new FormData();
    formData.append('img', input, input.name);
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    return this.httpClient.post<any>('http://127.0.0.1:5000/chat/img', formData,{headers:headers} );
  }
}
