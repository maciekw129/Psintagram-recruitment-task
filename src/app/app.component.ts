import { Component } from '@angular/core';
import { DogsService } from './service/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dogs: string[] = [];
  dog: { breed: string, image: string } | undefined;

  ngOnInit() {
    this.fetchDogs();
  }

  constructor(private dogsService: DogsService) {}

  private fetchDogs() {
    this.dogsService.fetchDogs().subscribe(response => {
      this.dogs = Object.entries(response.message).map(dog => {
        return dog[0];
      })
    })
  }

  fetchDogImage(dog: string) {
    this.dogsService.fetchDogImage(dog).subscribe(response => {
      this.dog = {
        breed: dog,
        image: response.message
      };
    })
  }
}
