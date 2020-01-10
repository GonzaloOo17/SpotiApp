import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  albums: any[] = [];

  constructor(private http: HttpClient,
    private spotifyService : SpotifyService ) { 

      //this.albums= this.spotifyService.getNewReleases();
  }

  ngOnInit() {
    
  }

}
