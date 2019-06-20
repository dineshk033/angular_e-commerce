import { Component, OnInit } from "@angular/core";
import { DataShareService } from "../../service/data-share.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  list: any;
  constructor(private service: DataShareService) {}

  ngOnInit() {
    this.list = this.service.productList;
    //console.log(this.list)
  }
}
