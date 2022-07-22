import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Employees } from '../employees';
import { GlobalDtoService } from '../global-dto.service';
import { HttpServiceService } from '../http-service.service';
@Component({
  selector: 'edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  public pageTitle:string = 'Edit Team Member';
  public subtTitle:string = 'Edit Contact Info, location and role';
  public infoTitle:string = 'Info';
  public roleTitle:string = 'Role';
  public roleFlag:boolean = false;
  public selectedTeamMember:Employees = new Employees();
  public role:string='';
  public errorMsg:string = 'Something went wrong!!!.. Please try again later.';
  public errorFlag:boolean = false;
  constructor(private router:Router, private globalDto:GlobalDtoService, private httpService:HttpServiceService) {
    this.globalDto.setPageName("Edit Team Member");
   }

  ngOnInit(): void {
    this.selectedTeamMember = this.globalDto.getTeamMember();
    this.role=this.selectedTeamMember.role;
    if(this.selectedTeamMember.role=='admin'){
      this.roleFlag=true;
    }else{
      this.roleFlag=false;
    }
    console.log("trail"+this.selectedTeamMember.firstName);
  }
  
  //Method to navigate to team members list page
  public navigateToList(navigationPath:string, operation:string){
    if(operation == 'delete'){
      this.delEmployees(navigationPath);
    }else{
      this.updateEmployees(navigationPath);
    }
    
  }

  //Method to delete selected team member
  delEmployees(navigationPath:string) {
    return this.httpService.DeleteTeamMemeber(this.selectedTeamMember).subscribe((data: any) => {
      this.router.navigate(['/', navigationPath]);
    })
  }

  //Method to update selected team member
  updateEmployees(navigationPath:string) {
    return this.httpService.UpdateTeamMemeber(this.selectedTeamMember).subscribe((data: any) => {
      if(data.firstName==this.selectedTeamMember.firstName){
        this.router.navigate(['/', navigationPath]);
      }else{
        this.errorFlag=true;
      }
    })
  }
}
