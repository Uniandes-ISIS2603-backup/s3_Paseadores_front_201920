import { PaseadorModule } from './paseador.module';

describe('PaseadorModule', () => {
  let paseadorModule: PaseadorModule;

  beforeEach(() => {
    paseadorModule = new PaseadorModule();
  });

  it('should create an instance', () => {
    expect(paseadorModule).toBeTruthy();
  });
});
