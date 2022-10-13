import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DogsService } from './service/dogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  dogs: string[] = [];

  ngOnInit() {
    this.fetchDogs();
  }

  constructor(private http: HttpClient, private dogsService: DogsService) {}

  private fetchDogs() {
    this.dogsService.fetchDogs().subscribe(response => {
      this.dogs = Object.entries(response.message).map(dog => {
        return dog[0];
      })
    })
    console.log(this.dogs);
  }

  fetchSingleDog(dog: string) {
    console.log(dog);
  }
}
