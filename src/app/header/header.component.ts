import { Component, OnInit, DoCheck } from '@angular/core';
import { Router,NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { GlobalDtoService } from "./../global-dto.service";
@Component({
  selector: 'mainHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
  public pageTitle:string = '';
  public userFlag:boolean=false;
  public loading:boolean=false;
  constructor(private router:Router,private globalDto:GlobalDtoService) { }
  ngDoCheck(): void {
    this.pageTitle=this.globalDto.getPageName();
    this.router.events
            .subscribe((event) => {
                if(event instanceof NavigationStart) {
                  console.log("start");
                  this.loading = true;
                }
                else if (
                    event instanceof NavigationEnd || 
                    event instanceof NavigationCancel
                    ) {
                      console.log("end");
                      setTimeout(()=>{                          
                        this.loading = false;
                      }, 700);
                   
                }
            });
    
  }

}
