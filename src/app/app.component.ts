import { Component, OnInit } from '@angular/core';
import { SubjectSerivceService } from './services/subject-serivce.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrxTut';

  constructor(public subjectSerivce: SubjectSerivceService) { }
  ngOnInit(): void {
  }

  bSub(): void {
    this.subjectSerivce.nextBehaviorSubjectt();
  }
  sub(): void {
    this.subjectSerivce.nextSubject();
  }
  fourSec(): void {
    this.subjectSerivce.fourSecondNextBehaviour();
  }
  stopInt(): void {
    this.subjectSerivce.stopInterval();
  }
}
