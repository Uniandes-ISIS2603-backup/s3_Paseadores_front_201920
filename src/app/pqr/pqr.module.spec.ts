import { PqrModule } from './pqr.module';

describe('PqrModule', () => {
  let pqrModule: PqrModule;

  beforeEach(() => {
    pqrModule = new PqrModule();
  });

  it('should create an instance', () => {
    expect(pqrModule).toBeTruthy();
  });
});
