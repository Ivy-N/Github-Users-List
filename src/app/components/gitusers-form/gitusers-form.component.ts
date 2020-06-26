import { Component, OnInit, Output, EventEmitter } from'@angular/core';
import {IGituser} from "src/app/interfaces/data.interface";
import {DataService} from "src/app/services/data.service";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: 'app-gitusers-form',
  templateUrl: './gitusers-form.component.html',
  styleUrls: ['./gitusers-form.component.css']
})
export class GitusersFormComponent implements OnInit {

    private _url: string = "https://api.github.com/users?since=135";

    constructor(private _http: HttpClient) {} 

    submitGituser(){
            return this._http.get<IGituser[]>(this._url);
          }    

  ngOnInit() {
  }

}