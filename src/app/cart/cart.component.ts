import { Component, OnInit } from "@angular/core";
import { DataShareService } from "../service/data-share.service";
@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"]
})
export class CartComponent implements OnInit {
  constructor(private service: DataShareService) {}
  list: any;
  ngOnInit() {
    this.list = this.service.productList[0];
  }
}
