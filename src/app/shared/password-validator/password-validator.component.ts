import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})
export class PasswordValidatorComponent implements OnInit {
  Alphabet:boolean = true;
  Numbers:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
