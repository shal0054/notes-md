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
  let allSections = document.querySelectorAll('section');
  // let presentedFor = document.getElementById('presented-for');
  let generalSection = document.getElementById('general');

  let assessmentSection = document.getElementById('assessment-sec');
  let backBtnAsses = document.getElementById('backBtn-asses');
  let nextBtnAsses = document.getElementById('nextBtn-asses');

  let followUpSection = document.getElementById('follow-up-sec');
  let backBtnFolUp = document.getElementById('backBtn-folUp');

  let physicalExamSection = document.getElementById('physical-exam');
  let nextBtnPhysExam = document.getElementById('nextBtn-physExam');
  let backBtnPhysExam = document.getElementById('backBtn-physExam');

  let investigationsSection = document.getElementById('investigations');
  let nextBtnInves = document.getElementById('nextBtn-inves');
  let backBtnInves = document.getElementById('backBtn-inves');

  let chestPainSection = document.getElementById('chest-pain-sec');
  let nextBtnChestPain = document.getElementById('nextBtn-chestPain');
  let backBtnChestPain = document.getElementById('backBtn-chestPain');

  let impressPlanSection = document.getElementById('impression-plan');
  let nextBtnImpresPlan = document.getElementById('nextBtn-impressPlan');
  let backBtnImpresPlan = document.getElementById('backBtn-impressPlan');

  let regarding = document.getElementById('regarding');
  let assessmentRadio = document.getElementById('assessment');
  let followUpRadio = document.getElementById('follow-up');
  assessmentRadio.addEventListener('click', () => {
    regarding.classList.remove('hide');
    followUpSection.classList.add('hide');
  });
  followUpRadio.addEventListener('click', () => {
    followUpSection.classList.remove('hide');
    regarding.classList.add('hide');
    generalSection.classList.add('hide');
  });

  /************************ Handling Other *************************/
  let other = document.getElementById('other-regarding');
  other.addEventListener('change', () => {
    let otherText = document.getElementById('other-text');
    otherText.classList.remove('hide');

    let otherSpan = document.getElementById('other-regarding-span');
    otherSpan.classList.add('hide');

    let nextBtnGen = document.getElementById('nextBtn-gen');
    nextBtnGen.classList.remove('hide');
    nextBtnGen.addEventListener('click', () => {
      console.log(otherText.value);
    });

  });
  /*****************************************************************/

  // load assessments section
  let chestPainRadio = document.getElementById('chest-pain-gen');
  chestPainRadio.addEventListener('click', () => {
    // hide all sections
    allSections.forEach((section) => {
      section.classList.add('hide');
    });
    assessmentSection.classList.remove('hide');
  });

  if (backBtnAsses) {
    backBtnAsses.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      generalSection.classList.remove('hide');
    });
  }

  if (nextBtnAsses) {
    nextBtnAsses.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      chestPainSection.classList.remove('hide');
    });
  }

  if (backBtnFolUp) {
    backBtnFolUp.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      generalSection.classList.remove('hide');
    });
  }

  if (backBtnPhysExam) {
    backBtnPhysExam.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      chestPainSection.classList.remove('hide');
    });
  }

  if (nextBtnPhysExam) {
    nextBtnPhysExam.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });
      // display section
      investigationsSection.classList.remove('hide');
    });
  }

  if (backBtnInves) {
    backBtnInves.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      physicalExamSection.classList.remove('hide');
    });
  }

  if (nextBtnInves) {
    nextBtnInves.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });
      // display section
      impressPlanSection.classList.remove('hide');
    });
  }

  if (backBtnChestPain) {
    backBtnChestPain.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      assessmentSection.classList.remove('hide');
    });
  }

  if (nextBtnChestPain) {
    nextBtnChestPain.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });
      // display section
      physicalExamSection.classList.remove('hide');
    });
  }

  if (backBtnImpresPlan) {
    backBtnImpresPlan.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      investigationsSection.classList.remove('hide');
    });
  }
}
