import { Component } from '@angular/core';
import { FoxService } from '../services/fox.service';

@Component({
  selector: 'app-api-fetch-test',
  templateUrl: './api-fetch-test.component.html',
  styleUrls: ['./api-fetch-test.component.css']
})
export class ApiFetchTestComponent {
  foxImgUrl!: string

  constructor(private foxService: FoxService){}

  async getImage(){
    this.foxImgUrl = await this.foxService.requestImageURL()
  }
}
