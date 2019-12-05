import { CentroAyudaModule } from './centro-ayuda.module';

describe('CentroAyudaModule', () => {
  let centroAyudaModule: CentroAyudaModule;

  beforeEach(() => {
    centroAyudaModule = new CentroAyudaModule();
  });

  it('should create an instance', () => {
    expect(centroAyudaModule).toBeTruthy();
  });
});
