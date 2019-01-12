import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector: 'concert-ticket-category',
    templateUrl: './concert-ticket-category.component.html',
    styleUrls: ['./concert-ticket-category.component.scss']
})
export class ConcertTicketCategoryComponent
{
    @Input() name: string = "";
    @Input() unitPrice: number = 5000;
    @Input() limit: number = 100;
}
