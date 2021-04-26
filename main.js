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
  let nextBtn = document.getElementById('nextBtn');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      let presFor = document.getElementById('presented-for').value;

      switch (presFor) {
        case 'assessment':
          // go to assessment page
          location.href = './assessment.html';
          break;
        case 'follow-up':
          // go to follow up page
          location.href = './follow-up.html';
          break;
        default:
        // display warning
      }
    });
  }
}
