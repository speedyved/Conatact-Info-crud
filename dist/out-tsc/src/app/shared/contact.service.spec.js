import { TestBed } from '@angular/core/testing';
import { ContactService } from './contact.service';
describe('ContactService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(ContactService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=contact.service.spec.js.map