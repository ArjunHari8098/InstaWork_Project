import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Employees } from '../employees';
import { GlobalDtoService } from '../global-dto.service';
import { HttpServiceService } from '../http-service.service';
@Component({
  selector: 'add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {
  public pageTitle:string = 'Add a Team Member';
  public subtTitle:string = 'Set email, location, role';
  public infoTitle:string = 'Info';
  public roleTitle:string = 'Role';
  public teamMember:Employees = new Employees();
  public errorMsg:string = 'Something went wrong!!!.. Please try again later.';
  public validationMsg:string = '*All fields are mandatory, Please fill them!!!.';
  public errorFlag:boolean = false;
  public validationFlag:boolean = false;
  empty:string='';
  constructor(private router:Router, private globalDto:GlobalDtoService, private httpService:HttpServiceService) { 
    this.globalDto.setPageName("Add Team Member");
  }
  ngOnInit(): void {
    this.teamMember.role='regular';
  }

  //Method to navigate to team member list page
  public navigateToList(navigationPath:string){
    if(this.teamMember.firstName==this.empty || this.teamMember.lastName==this.empty || this.teamMember.email==''){
      this.validationFlag=true;
    }else{
      this.insertEmployees(navigationPath)
    }
  }

  //Method to add team member
  insertEmployees(navigationPath:string) {
    return this.httpService.InsertTeamMemeber(this.teamMember).subscribe((data: any) => {
      if(data.firstName==this.teamMember.firstName){
        this.router.navigate(['/', navigationPath]);
      }else{
        this.errorFlag=true;
      }
    })
  }
}
