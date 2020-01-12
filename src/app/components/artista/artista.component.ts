import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  loadingArtist :boolean;
  artista : any = {};
  id : string = "";

  constructor(private spotifyService : SpotifyService,
    private router: ActivatedRoute) { 
      this.loadingArtist = true;
      this.router.params.subscribe(params=>{
        this.id = params.id;
      });
  }

  ngOnInit() {

    this.spotifyService.getDetailArtista(this.id)
    .subscribe(data =>{
      this.artista = data;
      this.loadingArtist = false;
    })
    
  }

}
