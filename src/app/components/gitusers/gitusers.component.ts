import {Component, OnInit } from "@angular/core";
import {IGituser} from "src/app/interfaces/data.interface";
import {DataService} from "src/app/services/data.service";

@Component({
    selector: "app-gitusers",
    templateUrl: "./gitusers.component.html",
  })

  export class GitusersComponent implements OnInit {
    gitusers: IGituser[] = [];
    constructor(private _dataService: DataService) {}

    ngOnInit() {
      this._dataService.getGitusers().subscribe(
        (data) => {
          this.gitusers = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }