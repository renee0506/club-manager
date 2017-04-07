import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './member.model';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers(){
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.angularFire.database.object('members/'+ memberId);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({
      first_name: localUpdatedMember.first_name,
      last_name: localUpdatedMember.last_name,
      email: localUpdatedMember.email,
      phone: localUpdatedMember.phone,
      image: localUpdatedMember.image,
      gender: localUpdatedMember.gender
    });
  }

  deleteMember(localMemberToDelete) {
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
