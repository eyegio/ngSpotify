import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Artists } from "../../../Artists";
import { Album } from "../../../Album";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.sass']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private _spotifyService: SpotifyService,
              private _route: ActivatedRoute) { }

  ngOnInit() {
     this._route.params
       .map(params => params['id'])
       .subscribe((id) => {
           this._spotifyService.getAlbum(id)
             .subscribe(album => this.album = album)
       })
  }

}
