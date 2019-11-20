import { MascotaModule } from './mascota.module';

describe('MascotaModule', () => {
  let mascotaModule: MascotaModule;

  beforeEach(() => {
    mascotaModule = new MascotaModule();
  });

  it('should create an instance', () => {
    expect(mascotaModule).toBeTruthy();
  });
});
