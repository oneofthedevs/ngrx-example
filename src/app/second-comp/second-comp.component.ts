import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectSerivceService } from '../services/subject-serivce.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.scss']
})
export class SecondCompComponent implements OnInit, OnDestroy {

  constructor(public subService: SubjectSerivceService) { }
  data: number | undefined;
  numSub: Subscription = new Subscription();
  subSub: Subscription = new Subscription();
  ngOnInit(): void {
    this.numSub = this.subService.behaviorSubject.subscribe(x => this.data = x);
    console.log(`Beh: ${this.data}`);
  }

  ngOnDestroy(): void {
    this.numSub.unsubscribe();
    // this.subService.subject.unsubscribe();
  }

}
