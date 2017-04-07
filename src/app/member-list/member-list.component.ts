import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [ MemberService ]
})
export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string;
  startAddNew: boolean = false;
  showUpdateForm = false;
  selectedMember;

  constructor(private router: Router, private memberService: MemberService) { };

  ngOnInit() {
    this.members = this.memberService.getMembers();
    this.currentRoute = this.router.url;
  };

  goToDetail(clickedMember){
    this.router.navigate(["member", clickedMember.$key]);
  };

  goToUpdate(clickedMember){
    this.router.navigate(["update", clickedMember.$key]);
  };

  setFilter(filterString){
    this.members = this.memberService.filterMemberByRole(filterString);
  };

}
