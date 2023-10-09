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
    'Hello! I am a passionate front-end developer with 3 years of hands-on experience, having honed my skills with cutting-edge technologies like Angular, React, Next.js, TypeScript, and JavaScript. My dedication lies in building intuitive and dynamic user interfaces that not only look good but also perform seamlessly.'
  ]
  constructor(){}
  ngOnInit(): void {
    
  }
}
