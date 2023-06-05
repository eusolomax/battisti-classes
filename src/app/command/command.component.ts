import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent {
  @ViewChild('nameQuantity') nameQuantity!: any
  nameInDOM!: any
  spinnerTrigger!: boolean

  async getData() {
    this.spinnerTrigger = true
    let nameQuantityRequest = this.nameQuantity.nativeElement.value == "" ? 0 : this.nameQuantity.nativeElement.value;

    const result = await fetch(`https://randommer.io/api/Name?nameType=firstname&quantity=` + nameQuantityRequest,
      { headers: { 'x-Api-Key': 'dcb07356c74a49b1990dcceab2112a21' }
    })

    this.spinnerTrigger = false
    const data = await result.json()
    this.nameInDOM = nameQuantityRequest == 0 ? "" : data
  }
}
