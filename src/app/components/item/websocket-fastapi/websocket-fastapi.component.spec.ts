import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketFastapiComponent } from './websocket-fastapi.component';

describe('WebsocketFastapiComponent', () => {
  let component: WebsocketFastapiComponent;
  let fixture: ComponentFixture<WebsocketFastapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsocketFastapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsocketFastapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
