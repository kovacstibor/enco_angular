import { Component, OnInit } from '@angular/core';
import { ConcertsApiClientService } from '../clients/concerts-api-client.service';
import { ConcertListItemModel } from '../models/concert-list.model';

@Component({
    templateUrl: './concert-list.page.component.html',
    styleUrls: ['./concert-list.page.component.scss']
})
export class ConcertListPageComponent implements OnInit 
{
    filter: string;
    concerts: ConcertListItemModel[];

    constructor(private concertsApiClient: ConcertsApiClientService)
    {

    }

    ngOnInit()
    {
        this.concertsApiClient.getConcerts().subscribe(res => this.concerts = res);
    }
}