import { Settings as defaultSettings } from "../core/constants/settings"
import * as utils from "../core/utils/index"

export class DonateList {
  #donatesContainer
  #getDonateItem
  #getDonatesList

  constructor(donates) {
    this.donates = donates
    this.#donatesContainer = document.createElement('div')
    this.#donatesContainer.className = 'donates-container'
    this.#getDonateItem = function(element) {
      let {date, amount} = element
      const donateItem = document.createElement('div')
      donateItem.className = 'donate-item'
      donateItem.textContent = `${utils.getFormattedTime(date)} - `
  
      const amountHTML = document.createElement('b')
      amountHTML.textContent = `${amount}${defaultSettings.currency}`
  
      donateItem.append(amountHTML)
  
      return donateItem
    }
    this.#getDonatesList = function(){
      const donatesList = document.createElement('div')
      donatesList.className = 'donates-container__donates'
  
      this.donates.forEach( element => {
        donatesList.append(this.#getDonateItem(element))
      });
  
      return donatesList
    }
  }

  updatedDonates(updatedDonates ) {
    const donatesList = document.querySelector('.donates-container__donates')
    donatesList.innerHTML = ''

    updatedDonates.forEach( element => {
      donatesList.append(this.#getDonateItem(element))
    })
  }

  render() {
    const donatesTitle = document.createElement('h2')
    donatesTitle.className = 'donates-container__title'
    donatesTitle.textContent = 'Список донатов'

    this.#donatesContainer.append(donatesTitle, this.#getDonatesList())

    return this.#donatesContainer
  }
}