import { Component, ElementRef, Input, OnChanges, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnChanges {
  @Input() dogs: string[] = [];
  @Input() label: string | undefined;
  @ViewChild('selectInput', { static: false }) selectInput!: ElementRef;
  @Output() newItemEvent = new EventEmitter<string>();

  filteredDogs: string[] = [];
  isListVisible: boolean = false;
  dog: string | null = null;
  isListHovered: boolean = false;

  ngOnChanges() {
    this.filteredDogs = this.dogs;
  }

  getArrowClass() {
    return `select__arrow ${this.isListVisible ? 'select__arrow--visible' : 'select__arrow--hidden'}`;
  }

  setListIsHovered(hovered: boolean) {
    this.isListHovered = hovered;
  }

  changeListVisibility(isVisible: boolean) {
    if(this.isListHovered) {
      this.isListHovered = false;
    } else {
      this.isListVisible = isVisible;
    }
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
  
  isFilteredDogsEmpty() {
    return Object.keys(this.filteredDogs).length === 0
  }
}
