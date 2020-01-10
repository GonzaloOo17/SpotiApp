import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Servicio correctamente insertado");
  }

 

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD2G7ye8mLBll9pod-s2Sl0Uh066Vq-nDg6v1nf3E0GLgRtIBHG01wSC_QSTHOBgyvFQj0zWtYWv21cyLA',
    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    .subscribe((data : any[])=>{
        console.log(data);
    });


    console.log(this.getNewReleases());
    
  }
}
