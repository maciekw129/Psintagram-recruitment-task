import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {
  @Input() dog: { breed: string, image: string } = { breed: 'Choose breed first', image: '/assets/question-mark.webp'};

  isEmpty() {
    return !(this.dog.breed === 'Choose breed first');
  }

  getWikiLink() {
    return `https://en.wikipedia.org/wiki/${this.dog?.breed}`;
  }
}
