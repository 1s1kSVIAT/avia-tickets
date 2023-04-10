import {getAutocomliteInstance,getDatePickersInstance} from '../plugins/materialize'

class FormUI {
  constructor(autocomliteInstance, datePickersInstance) {
    this._form = document.forms["locationControls"];
    this.origin = document.getElementById("autocomplete-origin");
    this.destination = document.getElementById("autocomplete-destination");
    this.depart = document.getElementById("datepicker-depart");
    this.return = document.getElementById("datepicker-return");
    this.originAutocomplete = autocomliteInstance(this.origin);
    this.destinationAutocomplete = autocomliteInstance(this.destination);
    this.departDatePicker = datePickersInstance(this.depart);
    this.returnDatePicker = datePickersInstance(this.return);
  }

  get form(){
   return this._form;
  }

  get originValue(){
   return this.origin.value;
  }

  get destinationValue(){
   return this.destination.value;
  }

  get departDateValue(){
   return this.departDatePicker.toString();
  }
  get returnDateValue(){
    return this.returnDatePicker.toString();
  }


  setAutocomleteData(data){
this.originAutocomplete.updateData(data);
this.destinationAutocomplete.updateData(data);
  }
}

const formUI = new FormUI(getAutocomliteInstance, getDatePickersInstance);

export default formUI;