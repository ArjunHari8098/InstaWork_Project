//Service class for data transfer between components
import { Injectable } from '@angular/core';
import { Employees } from "./employees";
@Injectable({
  providedIn: 'root'
})
export class GlobalDtoService {

  constructor() { }
  pageName:string="";
  teamMember:Employees = new Employees();

  setPageName(name:string){
    this.pageName=name;
  }
  getPageName(){
    return this.pageName;
  }
  setTeamMember(teamMate:Employees){
    console.log(teamMate.email)
    this.teamMember=teamMate;
  }
  getTeamMember(){
    return this.teamMember;
  }
}
