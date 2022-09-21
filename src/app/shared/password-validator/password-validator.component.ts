import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})
export class PasswordValidatorComponent implements OnInit,OnChanges {
  @Input() pwd:any;
  @Output() PasswordResult:EventEmitter<any> = new EventEmitter();
  Alphabet:boolean = true;
  Numbers:boolean = false;
  ValidationResult:any;
  Result:any;

  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes,'changes are captured!');
    console.log(changes.pwd.currentValue);
    let CheckPass = changes.pwd.currentValue;         //Change 'noPropertyAccessFromIndexSignature' in tsConfig.json file to true and see the changes;
    this.Result = this.CheckValidation(CheckPass);
    console.log(this.Result,'Password validation result');
    this.PasswordResult.emit(this.Result);
  }

  CheckValidation(data:any){
    this.ValidationResult = {
      length: data.length >= 8,
      typed : data.length > 0,
      digits: /\d/.test(data),
      lower: /[a-z]/.test(data),
      upper: /[A-Z]/.test(data),
      nonWords: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(data),
      nospace: data.indexOf(' ') >= 0

    }
    return this.ValidationResult;
    
  }

}
