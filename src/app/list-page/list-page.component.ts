import { Component, OnInit } from '@angular/core';
import { GlobalDtoService } from '../global-dto.service';
import { Router } from "@angular/router";
import { HttpServiceService } from "../http-service.service";
import { Employees } from '../employees';
@Component({
  selector: 'list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
  public pageTitle:string = 'Team Members';
  public subTitle:string='';
  public subtTitle1:string = 'You have';
  public subtTitle2:string = 'Team members';
  public teamList:any = [];
  public roleFlag:boolean[] = [];
  public selectedTeamMember:Employees = new Employees();
  constructor(private router:Router, private globalDto:GlobalDtoService, private httpService:HttpServiceService) {
    this.globalDto.setPageName("Show Team Member");
   }

  ngOnInit(): void {
    this.loadEmployees();
  }
  //Method to navigate to add employees
  public navigateToAdd(navigationPath:string, item:any){
    this.router.navigate(['/', navigationPath]);
  }
  //Method to navigate to edit employees
  public navigateToEdit(navigationPath:string, item:any){
    this.selectedTeamMember = new Employees();
    this.selectedTeamMember = this.teamList[item];
    this.globalDto.setTeamMember(this.selectedTeamMember);
    this.router.navigate(['/', navigationPath]);
  }
  //Method to fetch all team members from database
  loadEmployees() {
    return this.httpService.GetTeams().subscribe((data: any) => {
      console.log("trail1"+data['team'])
      this.teamList = data['team'];
      this.subTitle=this.subtTitle1+' '+this.teamList.length+' '+this.subtTitle2;
      for(let i=0;i<this.teamList.length;i++){
        if(this.teamList[i].role=='admin'){
          this.roleFlag[i]=true;
        }else{
          this.roleFlag[i]=false;
        }
      }
    })
  }

}
