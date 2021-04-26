document.addEventListener('DOMContentLoaded', init);

function init() {
  materializeInit();
  addListeners();
}

function materializeInit() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
}

function addListeners() {
  
}