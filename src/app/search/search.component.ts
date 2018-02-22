import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit {

  searchQuery: string;
  sortCriteria: string;
  lastSearchQuery: string;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
  }

  /*
      @description: Run search if searchQuery route parameter.  Has to be run in ngAfterViewInit for the spinner to show up
  */

  ngAfterViewInit() {
    this.route.params.subscribe(params => {
      if (params['searchQuery']) {
        this.searchQuery = params['searchQuery'];
        this.searchFn(this.searchQuery);
      }
    });
  }

  /*
      @description: Search using function on form input on search view
  */
  searchFn(query) {

  }

  /*
      @description: redirect to route and then search else search runs twice
  */
  redirectToRoute(query) {

  }

  /*
      @description: search on return in the search field
  */
  keypressFn(event: any) {
    if (event.charCode === 13) {
      this.redirectToRoute(this.searchQuery);
    }
  }

  searchQueryChange(event: any) {

  }

}
