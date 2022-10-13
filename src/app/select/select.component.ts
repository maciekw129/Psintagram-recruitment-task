import { Component, ElementRef, Input, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnChanges {
  @Input() dogs: string[] | undefined;
  @ViewChild('selectInput', { static: false }) selectInput!: ElementRef;
  @Output() newItemEvent = new EventEmitter<string>();

  filteredDogs: string[] | undefined = [];
  isListVisible: boolean = false;
  dog: string | null = null;

  ngOnChanges() {
    this.filteredDogs = this.dogs;
  }

  getButtonClass() {
    return `select__button ${this.isListVisible ? 'select__button--visible' : 'select__button--hidden'}`;
  }

  changeListVisibility(isVisible: boolean) {
    this.isListVisible = isVisible;
  }

  handleItemClick(breed: string) {
    this.dog = breed;
    this.selectInput.nativeElement.value = breed;
    this.isListVisible = false;
    this.newItemEvent.emit(breed);
  }

  filter(word: string) {
    this.filteredDogs = this.dogs?.filter(dog => {
      return dog.includes(word);
    })
  } 
}
