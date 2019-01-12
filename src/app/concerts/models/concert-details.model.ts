import { ConcertTicketCategory } from './concert-ticket-category.model';

export interface ConcertDetailsModel
{
    id: number;
    artist: string;
    location: string;
    date: Date;
    imageUrl: string;
    tags: string[];
    teaserVideoUrl: string;
    ticketCategories: ConcertTicketCategory[];
}