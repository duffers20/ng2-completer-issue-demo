import { Component, OnInit } from '@angular/core';

import { CompleterCmp, CompleterData, CompleterService, CompleterItem, RemoteData } from 'ng2-completer';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private dataService: RemoteData;

  constructor(completerService: CompleterService) {
    this.dataService = completerService.remote(
      null,
      null,
      "Title");
    this.dataService.urlFormater(term => {
      return `http://www.omdbapi.com/?s=${term}&type=movie`;
    });
    this.dataService.dataField("Search");
  }

  ngOnInit() {
  }

}
