import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeService, Anime } from '../../services/anime';

@Component({
  selector: 'app-animes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animes.html',
  styleUrls: ['./animes.css'],
  providers: [AnimeService]
})
export class Animes implements OnInit {
  animes: Anime[] = [];
  loading = true;
  error = false;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getTopAnimes().subscribe({
      next: (response) => {
        this.animes = response.data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching animes:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }
}
