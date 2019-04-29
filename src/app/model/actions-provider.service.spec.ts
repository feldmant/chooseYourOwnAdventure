import { TestBed } from '@angular/core/testing';

import { ActionsProviderService } from './actions-provider.service';

describe('ActionsProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActionsProviderService = TestBed.get(ActionsProviderService);
    expect(service).toBeTruthy();
  });
});
