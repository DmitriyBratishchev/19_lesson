import { Settings } from '../core/constants/settings'

export class DonateForm {
  #donateForm
  #totalAmount
  #createNewDonate
  #submitEventListener
  
  constructor(totalAmount, createNewDonate) {
    this.#donateForm = document.createElement('form')
    this.#donateForm.className = 'donate-form'
    this.#totalAmount = totalAmount
    this.#createNewDonate = createNewDonate
    this.#submitEventListener = function() {
      this.#donateForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const donateValue = event.target[0].valueAsNumber
        const newDonate = {amount: donateValue, date: new Date() } 
        this.#createNewDonate(newDonate)
        const newDonateInput = document.querySelector('.donate-form__donate-input')
        newDonateInput.value = null
      })
    }
  }

  updateTotalAmount(newAmount) {
    const newTotalAmount = document.querySelector('#total-amount')
    newTotalAmount.textContent = `${newAmount}${Settings.currency}`

  }


  render() {
    const totalAmount = document.createElement('h1')
    totalAmount.id = 'total-amount'
    totalAmount.textContent = `${this.#totalAmount}${Settings.currency}`

    const inputLable = document.createElement('label')
    inputLable.className = 'donate-form__input-label'
    inputLable.textContent = `Введите сумму в ${Settings.currency}`

    const donateInput = document.createElement('input')
    donateInput.className = 'donate-form__donate-input'
    donateInput.name = 'amount'
    donateInput.type = 'number'
    donateInput.max = '100'
    donateInput.min = '0'
    donateInput.required = ''
    
    const submitButton = document.createElement('button')
    submitButton.className = 'donate-form__donate-input'
    submitButton.type = 'submit'
    submitButton.textContent = 'Задонатить'

    inputLable.append(donateInput)
    this.#donateForm.append(totalAmount, inputLable, submitButton)
    this.#submitEventListener()

    return this.#donateForm
  }
}