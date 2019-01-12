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
    { ...concertListMock[0], teaserVideoUrl: 'https://www.youtube.com/watch?v=L21dXQMNOQs', ticketCategories: [{ id: 1, name: 'Eary Bird', unitPrice: 8000, limit: 1000}, { id: 2, name: 'Seat', unitPrice: 9000, limit: 10000}, { id: 3, name: 'Arena', unitPrice: 8500, limit: 2500}] },
    { ...concertListMock[1], teaserVideoUrl: 'https://www.youtube.com/watch?v=D9_4lAtWPYg', ticketCategories: [{ id: 5, name: 'Eary Bird', unitPrice: 25000, limit: 10000}, { id: 5, name: 'At Location', unitPrice: 35000, limit: 6000}] },
    { ...concertListMock[2], teaserVideoUrl: 'https://www.youtube.com/watch?v=cGlwkfEkWbc', ticketCategories: [{ id: 6, name: 'Eary Bird', unitPrice: 17000, limit: 1000}, { id: 7, name: 'Category A', unitPrice: 20000, limit: 5000}, { id: 8, name: 'Category A+', unitPrice: 23500, limit: 500}] }
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