import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Gizem Candemir'],
    ['DOB', '23/09/1997'],
    ['Work Exp', '3 Years'],
    ['Education', 'M.S (2020)'],
    ['Interests', 'Cricket)'],
  ];
  aboutMe:string[]= [
    'Hi, I am a software engineer with 3 years of experiece in software industry.'
  ]
  constructor(){}
  ngOnInit(): void {
    
  }
}
