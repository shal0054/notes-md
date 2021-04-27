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
  let nextBtnGen = document.getElementById('nextBtn-gen');

  if (nextBtnGen) {
    nextBtnGen.addEventListener('click', () => {
      let presentedFor = document.getElementById('presented-for').value;
      let generalSection = document.getElementById('general');
      let assessmentSection = document.getElementById('assessment');
      let followUpSection = document.getElementById('follow-up');
      let allSections = document.querySelectorAll('section');

      switch (presentedFor) {
        case 'assessment':
          // hide all sections
          allSections.forEach((section) => {
            section.classList.add('hidden');
          });
          // show assessment screen
          assessmentSection.classList.remove('hidden');
          break;
          case 'follow-up':
            // hide all sections
            allSections.forEach((section) => {
              section.classList.add('hidden');
            });
            // show follow up screen
            followUpSection.classList.remove('hidden');

          break;
        default:
        // display warning
      }
    });
  }
}
