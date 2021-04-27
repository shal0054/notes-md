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
  let backBtnAsses = document.getElementById('backBtn-asses');
  let nextBtnAsses = document.getElementById('nextBtn-asses');
  let backBtnFolUp = document.getElementById('backBtn-folUp');
  let backBtnPhysExam = document.getElementById('backBtn-physExam');

  let allSections = document.querySelectorAll('section');
  let generalSection = document.getElementById('general');
  let assessmentSection = document.getElementById('assessment');
  let followUpSection = document.getElementById('follow-up');
  let physicalExamSection = document.getElementById('physical-exam');

  if (nextBtnGen) {
    nextBtnGen.addEventListener('click', () => {
      let presentedFor = document.getElementById('presented-for').value;
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

  if (backBtnAsses) {
    backBtnAsses.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });

      generalSection.classList.remove('hidden');
    });
  }

  if (nextBtnAsses) {
    nextBtnAsses.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });

      physicalExamSection.classList.remove('hidden');
    });
  }

  if (backBtnFolUp) {
    backBtnFolUp.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });

      generalSection.classList.remove('hidden');
    });
  }

  if (backBtnPhysExam) {
    backBtnPhysExam.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });

      assessmentSection.classList.remove('hidden');
    });
  }
}
