import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectSerivceService } from '../services/subject-serivce.service';

@Component({
  selector: 'app-other-comp',
  templateUrl: './other-comp.component.html',
  styleUrls: ['./other-comp.component.scss']
})
export class OtherCompComponent implements OnInit, OnDestroy {

  constructor(public subService: SubjectSerivceService) { }

  num: number | undefined;
  sub: number | undefined | unknown;
  numSub: Subscription = new Subscription();
  subSub: Subscription = new Subscription();
  ngOnInit(): void {
    this.numSub = this.subService.behaviorSubject.subscribe(x => this.num = x);
    this.subSub = this.subService.subject.subscribe(x => this.sub = x);
    console.log(this.num, this.sub);
  }
  ngOnDestroy(): void {
    this.numSub.unsubscribe();
    this.subSub.unsubscribe();
  }

}
