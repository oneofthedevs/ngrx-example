import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectSerivceService {
  subject = new Subject();
  behaviorSubject = new BehaviorSubject(10);
  intervalId: any;
  Obs = new Observable<number>();
  constructor() {
  }

  nextSubject(): void {
    this.subject.next(Date.now());
  }
  nextBehaviorSubjectt(): void {
    this.behaviorSubject.next(Date.now());
  }
  fourSecondNextBehaviour(): void {
    this.intervalId = setInterval(() => {
      this.behaviorSubject.next(Date.now());
    }, 1000);
  }
  stopInterval(): void {
    clearInterval(this.intervalId);
  }
}
