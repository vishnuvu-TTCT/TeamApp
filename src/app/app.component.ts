import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMemberName = "";
  members:string[] = [];
  errorMessage = '';
  numberOfTeams: number | "" = "";
  teams: string[][] = [];

  addMember(){
    if(!this.newMemberName){
      this.errorMessage = "Name can't be empty";
      return;
    }
    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
    console.log(this.members);
  }
  onInput(member:string){
    this.newMemberName = member;
    console.log(this.newMemberName);
  }

  onNumberOfTeamsInput(value:string){
    this.numberOfTeams = Number(value);
  }

  generateTeams(){
    if(!this.numberOfTeams || this.numberOfTeams <= 0 ){
      this.errorMessage =  'Invalid Number of teams';
      return;
    }
    if(this.members.length <this.numberOfTeams){
      this.errorMessage = "Not enough Members"
      return;
    }
    this.errorMessage =  '';

    const allMembers = [...this.members];

    while(allMembers.length){
      for(let i =0 ; i<this.numberOfTeams;i++){
        const randomIndex =Math.floor(Math.random() * allMembers.length)
        const memeber = allMembers.splice(randomIndex, 1)[0];
        if(!memeber)break;
        if(this.teams[i]){
          this.teams[i].push(memeber)
        }else{
          this.teams[i] = [memeber]
        }
      }
    }
    console.log(this.teams);
    this.members = [];
    this.numberOfTeams = '';
  }
}
