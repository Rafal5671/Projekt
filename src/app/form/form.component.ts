import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  sub(rejestracja:any){
    console.log("Submitted",rejestracja)
  }
  ngOnInit(): void {
  }

}
