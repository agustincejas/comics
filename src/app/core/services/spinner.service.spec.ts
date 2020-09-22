import { TestBed } from '@angular/core/testing';
import { SpinnerService } from './spinner.service';


describe('SpinnerService', () => {
  let service: SpinnerService;
  let spinnerComponent;

  spinnerComponent = jasmine.createSpyObj(['show', 'hide']);

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
    service.spinnerComponent = spinnerComponent;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#show should call show method on SpinnerComponent', () => {
    service.show();

    expect(service.spinnerComponent.show).toHaveBeenCalled();
  });

  it('#hide should call hide method on SpinnerComponent', () => {
    service.hide();

    expect(service.spinnerComponent.hide).toHaveBeenCalled();
  });
});
