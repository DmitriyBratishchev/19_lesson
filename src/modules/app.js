
import { DonateForm } from "./donate-form";
import { DonateList } from "./donate-list";
import * as utils from "../core/utils/index"

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
]; 

export default class App {
  #donateForm
  #donatesList

  constructor() {
    this.state = {
      donates: mockDonates || [],
      totalAmont: utils.calculateSumOfNumbers(mockDonates.map( el => el.amount)),
    }
    this.#donateForm = new DonateForm(this.state.totalAmont, this.createNewDonate.bind(this))
    this.#donatesList = new DonateList(this.state.donates)
  }

  createNewDonate(newDonate) {
    this.state = {...this.state, donates: [ ...this.state.donates, newDonate ]}
    this.state.totalAmont += newDonate.amount
    this.#donatesList.updatedDonates(this.state.donates)
    this.#donateForm.updateTotalAmount(this.state.totalAmont)
  }

  run() {
    const donateFormHTML = this.#donateForm.render()
    const donatesListHTML = this.#donatesList.render()
    document.body.append(donateFormHTML, donatesListHTML) 
  }
}