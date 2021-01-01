import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectSerivceService } from '../services/subject-serivce.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.scss']
})
export class FirstCompComponent implements OnInit, OnDestroy {
  numSub: Subscription = new Subscription();
  subSub: Subscription = new Subscription();
  num: number | undefined;
  sub: number | undefined | unknown;

  constructor(public subService: SubjectSerivceService) { }

  ngOnInit(): void {
    this.numSub = this.subService.behaviorSubject.subscribe(x => this.num = x);
    this.subSub = this.subService.subject.subscribe(x => this.sub = x);
    // console.log(this.num, this.sub);
  }

  ngOnDestroy(): void {
    this.numSub.unsubscribe();
    this.subSub.unsubscribe();
  }
}
