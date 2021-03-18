import { Controller } from 'stimulus'; 

export default class extends Controller {
  static get targets() {
    return ['pets', 'current', 'other'];
  }

  connect() {
    // console.log("hello from StimulusJS")
  }

  showMenu(event) {
    this.petsTarget.classList.remove('hidden');
  }
  
  selectPet(event) {
    this.petsTarget.classList.add('hidden');

    const pet = event.target.innerText;
    this.currentTarget.innerHTML = pet;

    if (pet === 'Other') {
      this.otherTarget.classList.remove('hidden');
    } else {
      this.otherTarget.classList.add('hidden');
    }
  }
}