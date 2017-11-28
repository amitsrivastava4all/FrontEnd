/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

// Suite
describe('This is the First Component to be Test', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  // Create a Test Case
  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);  // Component Object Create
    let app = fixture.debugElement.componentInstance;  // Provide Component Reference
    expect(app).toBeTruthy();
  }));

  it("should have as Correct title 'Hello Angular' ", async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    let result = app.show();
    expect(result).toEqual('Hello Angular');
   // expect(app.title).toEqual('Hello Angular');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('OK Angular');
  }));
});
