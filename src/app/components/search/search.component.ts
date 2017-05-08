import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artists } from "../../../Artists";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
  providers: [SpotifyService]
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: Artists[];

  constructor (private _spotifyService: SpotifyService){}

  ngOnInit() {
  }

  searchMusic(){
   this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => this.searchRes = res.artists.items);
  }
}
