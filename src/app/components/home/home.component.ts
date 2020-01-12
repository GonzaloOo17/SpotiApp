import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones : any[] = [];
  loadingArtist : boolean;
  error : boolean;
  errorMessage : string;

  constructor(private http: HttpClient,
    private spotifyService : SpotifyService ) { 
      this.loadingArtist = true;
      this.spotifyService.getNewReleases().
      subscribe((data:any)=>{
        console.log(data);
        this.nuevasCanciones=data.albums.items;
        this.loadingArtist=false;
    }, (errorServicio)=>{
      this.error=true;
      this.errorMessage=errorServicio.error.error.message;
    })
      
      
      
      //this.albums= this.spotifyService.getNewReleases();
  }

  ngOnInit() {
    console.log(this.nuevasCanciones);
    
  }

}
