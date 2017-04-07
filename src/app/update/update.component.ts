import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MemberService } from '../member.service';
import { ActivatedRoute, Params } from '@angular/router';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [MemberService]
})
export class UpdateComponent implements OnInit {
  @Input() selectedUser;
  @Output() clickSender = new EventEmitter();
  memberId: string;

  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
    this.clickSender.emit();
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to delete this member?")){
      this.memberService.deleteMember(memberToDelete);
      this.clickSender.emit();
    }
  }

}
