import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoxService {

  constructor() { }

  async requestImageURL(){
    let imageUrlVariable!: any

    await fetch("https://randomfox.ca/floof/?ref=apilist.fun")
      .then(data => data.json())
      .then(data => imageUrlVariable = data.image)
      .catch(err => console.log(err))

      return imageUrlVariable
  }
}
