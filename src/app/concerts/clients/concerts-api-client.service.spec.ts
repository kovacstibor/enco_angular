import { TestBed } from '@angular/core/testing';
import { ConcertsApiClientService } from './concerts-api-client.service';

describe('ConcertsApiClientService', () => 
{
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () =>
    {
        const service: ConcertsApiClientService = TestBed.get(ConcertsApiClientService);
        expect(service).toBeTruthy();
    });
});
