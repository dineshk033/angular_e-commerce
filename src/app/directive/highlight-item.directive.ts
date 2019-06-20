import { Directive, OnInit, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlightItem]"
})
export class HighlightItemDirective implements OnInit {
  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //console.log("entered");
  }
  @HostListener("mouseover") mouseOver() {
    this.elRef.nativeElement.style.boxShadow = "0 4px 8px 4px lightblue";
  }

  @HostListener("mouseleave") mouseLeave() {
    this.elRef.nativeElement.style.boxShadow = "none";
    // console.log("mouseleave");
  }
}
