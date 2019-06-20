import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-item",
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"]
})
export class ProductItemComponent implements OnInit {
  @Input("item") items: any;

  constructor() {}

  ngOnInit() {
    // this.items = this.item[0]
    console.log(this.items);
  }
}
