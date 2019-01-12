import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'q';
import { ConcertTicketCategoryComponent } from './concert-ticket-category.component';

describe('ConcertTicketCategoryComponent', () => 
{
    let component: ConcertTicketCategoryComponent;
    let fixture: ComponentFixture<ConcertTicketCategoryComponent>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({ declarations: [ ConcertTicketCategoryComponent ] }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(ConcertTicketCategoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});