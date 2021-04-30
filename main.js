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

  let assessmentSection = document.getElementById('assessment');
  let backBtnAsses = document.getElementById('backBtn-asses');
  let nextBtnAsses = document.getElementById('nextBtn-asses');

  let followUpSection = document.getElementById('follow-up-section');
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
  let assessment = document.getElementById('assessment');
  let followUp = document.getElementById('follow-up');
  assessment.addEventListener('click', () => {
    regarding.classList.remove('hidden');
    followUpSection.classList.add('hidden');
  });
  followUp.addEventListener('click', () => {
    followUpSection.classList.remove('hidden');
    regarding.classList.add('hidden');
  });

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

  if (nextBtnPhysExam) {
    nextBtnPhysExam.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });
      // display section
      investigationsSection.classList.remove('hidden');
    });
  }

  if (backBtnInves) {
    backBtnInves.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });

      physicalExamSection.classList.remove('hidden');
    });
  }

  if (nextBtnInves) {
    nextBtnInves.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });
      // display section
      chestPainSection.classList.remove('hidden');
    });
  }

  if (backBtnChestPain) {
    backBtnChestPain.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });

      investigationsSection.classList.remove('hidden');
    });
  }

  if (nextBtnChestPain) {
    nextBtnChestPain.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });
      // display section
      impressPlanSection.classList.remove('hidden');
    });
  }

  if (backBtnImpresPlan) {
    backBtnImpresPlan.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hidden');
      });

      chestPainSection.classList.remove('hidden');
    });
  }
}
