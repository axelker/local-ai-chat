import { TestBed } from '@angular/core/testing';

import { CustomAiService } from './custom-ai.service';

describe('AiService', () => {
  let service: CustomAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
