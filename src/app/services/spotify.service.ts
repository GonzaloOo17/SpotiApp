import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) {
    console.log("Servicio correctamente insertado");
    this.getNewReleases();
    }

  data : any[] =[];

  token :string = "QBNBJGH8bddT5rO0g5cNSIeX1jNgrSLLOOM-MADdEg-WsoT7QoNvJ1BHqlWWdQ7r0D4jVpsN6psFyyLw9A";
  
  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers})
    ;
  }

  getArtista(termino:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15` , {headers})
  }

  getDetailArtista(id:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
    });

    return this.http.get(`	https://api.spotify.com/v1/artists/${id}` , {headers})
  }



}
