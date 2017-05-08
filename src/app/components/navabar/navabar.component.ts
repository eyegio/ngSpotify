import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.sass']
})
export class NavabarComponent implements OnInit {

  logo:string = "../assets/images/Spotify_logo.png"

  constructor() { }

  ngOnInit() {
  }

}
