import { Component, OnInit } from "@angular/core";
import { ConcertDetailsModel } from '../models/concert-details.model';
import { ActivatedRoute } from '@angular/router';
import { ConcertsApiClientService } from '../clients/concerts-api-client.service';
import { ConcertTicketCategory } from '../models/concert-ticket-category.model';

@Component({
    templateUrl: './concert-details.page.component.html'
})
export class ConcertDetailsPageComponent implements OnInit
{
    concert: ConcertDetailsModel;

    constructor(
        private route: ActivatedRoute,
        private concertsApiService: ConcertsApiClientService)
    {

    }

    ngOnInit() 
    {
        const id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.concertsApiService.getConcertDetails(id).subscribe(res => this.concert = res);
    }
}