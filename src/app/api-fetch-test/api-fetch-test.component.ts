import { Component } from '@angular/core';
import { FoxService } from '../services/fox.service';

@Component({
  selector: 'app-api-fetch-test',
  templateUrl: './api-fetch-test.component.html',
  styleUrls: ['./api-fetch-test.component.css']
})
export class ApiFetchTestComponent {
  foxImgUrl!: string
  spinnerTrigger = false
  buttonGetImage = false

  constructor(private foxService: FoxService){}

  blockButton(){
    this.buttonGetImage = true

    setTimeout(() => {
      this.buttonGetImage = false
    }, 2000);
  }

  async getImage(){
    this.blockButton()

    this.spinnerTrigger = true
    this.foxImgUrl = await this.foxService.requestImageURL()
    this.spinnerTrigger = false
  }
}
