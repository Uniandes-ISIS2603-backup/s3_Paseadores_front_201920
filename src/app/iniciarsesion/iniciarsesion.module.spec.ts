import { IniciarsesionModule } from './iniciarsesion.module';

describe('IniciarsesionModule', () => {
  let iniciarsesionModule: IniciarsesionModule;

  beforeEach(() => {
    iniciarsesionModule = new IniciarsesionModule();
  });

  it('should create an instance', () => {
    expect(iniciarsesionModule).toBeTruthy();
  });
});
