import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConcertListItemModel } from '../models/concert-list.model';
import { ConcertDetailsModel } from '../models/concert-details.model';

const concertListMock: ConcertListItemModel[] = 
[
    { id: 1, artist: 'Nightwish', date: new Date(2018, 8, 3), imageUrl: 'https://vignette.wikia.nocookie.net/nightwish/images/f/f4/Showtime%2C_Storytime_DVD_cover.jpg/revision/latest?cb=20170602002436', location: 'Wacken', tags: ['metal', 'symphonic', 'nightwish']},
    { id: 2, artist: 'Ed Sheeran', date: new Date(2019, 8, 7), imageUrl: 'https://i.ebayimg.com/images/g/~qcAAOSwCWRb7Wpv/s-l640.jpg', location: 'Budapest, Sziget Fesztivál', tags: ['guitar', 'ginger', 'acoustic']},
    { id: 3, artist: 'Nicki Minaj', date: new Date(2019, 2, 25), imageUrl: 'https://assets.wonderlandmagazine.com/uploads/2018/09/NICKI-COVER.jpg', location: 'Budapest, Papp László Sportaréna', tags: ['wft', 'who-cares']}
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