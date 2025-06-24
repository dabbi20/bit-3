import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Anime {
  mal_id: number;
  title: string;
  synopsis: string;
  images: { jpg: { image_url: string } };
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private apiUrl = 'https://api.jikan.moe/v4/top/anime';

  constructor(private http: HttpClient) {}

  getTopAnimes(): Observable<{ data: Anime[] }> {
    return this.http.get<{ data: Anime[] }>(this.apiUrl);
  }
}
