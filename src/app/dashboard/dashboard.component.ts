import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sidebar :ElementRef | undefined;
  @ViewChild('sidebar')

  flag: boolean = false;
  constructor(public elementRef: ElementRef) { }

  ngOnInit(): void {
  }
  open(){
    // this.sidebar?.nativeElement.classList.add('open');
    this.flag=!this.flag;
  }
  close(event:any){
  }

}
