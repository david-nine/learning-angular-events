import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]',
})
export class AppBasicHighlight implements OnInit { 
    constructor(private elementRef: ElementRef ) {}

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    }
}