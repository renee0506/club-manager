import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css'],
  providers: [ MemberService ]
})
export class NewMemberComponent implements OnInit {
  @Input() startAddNew;
  @Output() clickSender = new EventEmitter();

  constructor(private router: Router, private memberService: MemberService) { }

  ngOnInit() {
  }

  createNewUser(newFirstName, newLastName, newEmail, newPhone, newImage){
    var newMember = new Member(newFirstName, newLastName, newEmail, 'member', newImage, newPhone);
    this.memberService.addMember(newMember);
    this.clickSender.emit();
  }


}
