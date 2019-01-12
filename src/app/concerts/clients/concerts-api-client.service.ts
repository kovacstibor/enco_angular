import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConcertListItemModel } from '../models/concert-list.model';
import { ConcertDetailsModel } from '../models/concert-details.model';

const concertListMock: ConcertListItemModel[] = 
[

];

const concertDeatilsMock: ConcertDetailsModel[] = 
[

];

@Injectable()
export class ConcertsApiClientService 
{
    getConcerts(): Observable<ConcertListItemModel[]> 
    {
        return of(concertListMock);
    }

    getConcertDetails(id: number): Observable<ConcertDetailsModel>
    {
        return of(concertDeatilsMock.find(x => x.id === id));
    }
}