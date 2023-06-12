import { Component } from '@angular/core';

@Component({
  selector: 'app-advice-api',
  templateUrl: './advice-api.component.html',
  styleUrls: ['./advice-api.component.css']
})
export class AdviceApiComponent {
  advice!: string
  spinnerTrigger: Boolean = false
  disabledButton: Boolean = false

  disabledButtonF(){
    this.disabledButton = true
    setTimeout(() => {
      this.disabledButton = false
    }, 2000);
  }

  async adviceRequest(){
    this.disabledButtonF()
    this.spinnerTrigger = true

    fetch('https://api.adviceslip.com/advice')
      .then(data => data.json())
      .then(data => this.advice = data.slip.advice)

      .catch(err => console.log(err))
      .finally(() => this.spinnerTrigger = false)
  }
}
