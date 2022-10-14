import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  @Input() dog: { breed: string, image: string } | undefined;

  ngOnInit(): void {
  }

  getWikiLink() {
    return `https://en.wikipedia.org/wiki/${this.dog?.breed}`;
  }

}
