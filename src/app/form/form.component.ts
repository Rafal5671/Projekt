import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
  export class FormComponent{

    constructor(private http:HttpClient) { }
    sub(data:any){
      this.http.post("http://localhost:3000/zawodnicy",data)/* komenda dla servera json-server --watch db.json lub npm run server */
      .subscribe((result)=>{
        console.warn("result",result)
      }
      )
      console.log("Submitted",data)
    }
  }
