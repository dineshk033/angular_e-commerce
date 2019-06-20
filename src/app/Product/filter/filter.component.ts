import { Component, OnInit, Output } from "@angular/core";
import { DataShareService } from "../../service/data-share.service";

@Component({
  selector: "app-filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.css"]
})
export class FilterComponent implements OnInit {
  constructor(private service: DataShareService) {}

  ngOnInit() {}
  handleSearch(arg) {
    this.service.searchBar = arg;
  }
}
