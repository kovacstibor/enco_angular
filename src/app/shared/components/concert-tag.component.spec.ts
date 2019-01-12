import { ConcertTag } from "./concert-tag.component";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { async } from 'q';

describe('ConcertTag', () => 
{
    let component: ConcertTag;
    let fixture: ComponentFixture<ConcertTag>;

    beforeEach(async(() =>
    {
        TestBed.configureTestingModule({ declarations: [ ConcertTag ] }).compileComponents();
    }));

    beforeEach(() =>
    {
        fixture = TestBed.createComponent(ConcertTag);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () =>
    {
        expect(component).toBeTruthy();
    });
});