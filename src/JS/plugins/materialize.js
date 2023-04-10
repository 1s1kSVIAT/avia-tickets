import 'materialize-css/dist/css/materialize.min.css';
import "materialize-css/dist/js/materialize.min.js";

//init select
const select = document.querySelectorAll("select");
M.FormSelect.init(select);

export function getSelectInstance(elem){
return M.FormSelect.getInstance(elem);
}

//init autocomplite

const autocomplite = document.querySelectorAll(".autocomplete");
M.Autocomplete.init(autocomplite, {
  data: {
    Apple: null,
    Microsoft: null,
    Google: "https://placehold.it/250x250",
  },
});

export function getAutocomliteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}

//init datepickers

const datepickers = document.querySelectorAll(".datepicker");
M.Datepicker.init(datepickers, {
  showClearBtn:true,
  format:'yyyy-mm',
});

export function getDatePickersInstance(elem) {
  return M.Datepicker.getInstance(elem);
}