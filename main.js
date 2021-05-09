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
    let otherText = document.getElementById('other-regarding-text');
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
      scrollTo(0, 0);
    });
  }

  if (nextBtnAsses) {
    nextBtnAsses.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      chestPainSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (backBtnFolUp) {
    backBtnFolUp.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      generalSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (backBtnPhysExam) {
    backBtnPhysExam.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      chestPainSection.classList.remove('hide');
      scrollTo(0, 0);
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
      scrollTo(0, 0);
    });
  }

  if (backBtnInves) {
    backBtnInves.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      physicalExamSection.classList.remove('hide');
      scrollTo(0, 0);
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
      scrollTo(0, 0);
    });
  }

  if (backBtnChestPain) {
    backBtnChestPain.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      assessmentSection.classList.remove('hide');
      scrollTo(0, 0);
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
      scrollTo(0, 0);
    });
  }

  if (backBtnImpresPlan) {
    backBtnImpresPlan.addEventListener('click', () => {
      // hide all sections
      allSections.forEach((section) => {
        section.classList.add('hide');
      });

      investigationsSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  // Generate Report
  let genReportBtn = document.getElementById('genReportBtn');
  if (genReportBtn) genReportBtn.addEventListener('click', genReport);
}
function genReport() {
  let report = document.getElementById('report');
  let df = document.createDocumentFragment();

  if (salutation.value) {

  }

}

let inputs = [];

/******* Capture all input elements *********/
/****** Gen info *******/
let salutation = document.getElementById('salutation');
inputs.push(salutation);
let name = document.getElementById('name');
let age = document.getElementById('age');

// presented for
let assessment = document.getElementById('assessment');
let followUp = document.getElementById('follow-up');

//regarding
let chestPain = document.getElementById('chest-pain-gen');
let otherRegarding = document.getElementById('other-regarding');

/************  Assessment *********/
// Cardiovascular risk
let smoking = document.getElementById('smoking');
let dyslipidemia = document.getElementById('dyslipidemia');
let diabetes = document.getElementById('diabetes');
let hypertension = document.getElementById('hypertension');
let cad = document.getElementById('cad');

// Other past medical history
let hypothyroidism = document.getElementById('hypothyroidism');
let dyslipidemia2 = document.getElementById('dyslipidemia2');
let heartFailure = document.getElementById('heart-failure');
let cva = document.getElementById('cva');
let pe = document.getElementById('pe');
let bronchialAsthma = document.getElementById('bronchial-asthma');
let osteoarthritis = document.getElementById('osteoarthritis');
let tia = document.getElementById('tia');
let dvt = document.getElementById('dvt');
let copd = document.getElementById('copd');
let otherOpmh = document.getElementById('other-text');

// Social history
let cpSmoking = document.getElementById('cp-smoking');
let alcohol = document.getElementById('alcohol');
let marijuana = document.getElementById('marijuana');
let drugs = document.getElementById('drugs');
let exertionalDizziness = document.getElementById('exertional-dizziness');
let partner = document.getElementById('partner');
let medCoverage = document.getElementById('medCoverage');
let job = document.getElementById('job');

/************ Chest pain *********/
// when
let whenPain = document.getElementById('whenPain');

// What did the pain feel like
let sharp = document.getElementById('sharp');
let dull = document.getElementById('dull');
let squeezing = document.getElementById('squeezing');
let heaviness = document.getElementById('heaviness');
let stabbing = document.getElementById('stabbing');
let constricting = document.getElementById('constricting');
let otherPain = document.getElementById('other-pain');

// How long did the pain last
let stillThere = document.getElementById('stillThere');
let waxWan = document.getElementById('waxWan');
let fewMin = document.getElementById('fewMin');
let fewHours = document.getElementById('fewHours');
let otherPainTime = document.getElementById('other-painTime');

// How often does the pain occur
let stillThereCheckbox = document.getElementById('stillThere-checkbox');
let once = document.getElementById('once');
let twice = document.getElementById('twice');
let threeTimes = document.getElementById('threeTimes');
let everyFewMin = document.getElementById('everyFewMin');
let everyFewHours = document.getElementById('everyFewHours');
let everyFewDays = document.getElementById('everyFewDays');
let everyFewWeeks = document.getElementById('everyFewWeeks');
let everyFewMonths = document.getElementById('everyFewMonths');
let otherPainOften = document.getElementById('other-painOften');

// Exertion
let exertion = document.getElementById('exertion');
let position = document.getElementById('position');
let respiration = document.getElementById('respiration');
let meals = document.getElementById('meals');
let swallowing = document.getElementById('swallowing');
let palpation = document.getElementById('palpation');
let armMovement = document.getElementById('arm-movement');
let otherExertion = document.getElementById('other-exertion');

// If the pain is related to something, explain here
let explainPain = document.getElementById('explainPain');

// What makes the pain worse
let painWorse = document.getElementById('painWorse');

//What makes it better
let painBetter = document.getElementById('painBetter');

// The pain is accompanied by
let shortBreath = document.getElementById('shortBreath');
let palpitation = document.getElementById('palpitation');
let dizziness = document.getElementById('dizziness');
let nausea = document.getElementById('nausea');
let vomiting = document.getElementById('vomiting');
let none = document.getElementById('none');
let otherPainAccomp = document.getElementById('other-painAccomp');

// Symptoms of heart failure
let dyspnea = document.getElementById('dyspnea');
let orthopnea = document.getElementById('orthopnea');
let pnd = document.getElementById('pnd');
let cp_lls = document.getElementById('cp-lls');
let exertionalDizziness2 = document.getElementById('exertional-dizziness2');
let syncope = document.getElementById('syncope');

// Medication
let medication = document.getElementById('medication');

/************ Physical Exam *********/
// Blood Pressure
let bloodPressure = document.getElementById('bloodPressure');

// Pulse Rate
let pulseRate = document.getElementById('pulseRate');

// Oxygen Saturation
let oSat = document.getElementById('oSat');

// CV Exam
let loudS1 = document.getElementById('loudS1');
let loudS2 = document.getElementById('loudS2');
let diminishedS1 = document.getElementById('diminishedS1');
let diminishedS2 = document.getElementById('diminishedS2');
let s3 = document.getElementById('s3');
let s4 = document.getElementById('s4');
let esm1 = document.getElementById('esm1');
let esm2 = document.getElementById('esm2');
let esm3 = document.getElementById('esm3');
let esm4 = document.getElementById('esm4');
let psm1 = document.getElementById('psm1');
let psm2 = document.getElementById('psm2');
let jvd = document.getElementById('jvd');
let lls = document.getElementById('lls');
let otherCve = document.getElementById('other-cve');

// Respiratory Exam
let worul = document.getElementById('worul');
let worll = document.getElementById('worll');
let wolul = document.getElementById('wolul');
let wolll = document.getElementById('wolll');
let ccob = document.getElementById('ccob');
let fcob = document.getElementById('fcob');
let lce = document.getElementById('lce');
let lae = document.getElementById('lae');
let otherRe = document.getElementById('other-re');

// Abdominal Exam
let hepatomegally = document.getElementById('hepatomegally');
let splenomegally = document.getElementById('splenomegally');
let shiftingDullness = document.getElementById('shifting-dullness');
let tenderness = document.getElementById('tenderness');
let otherAbExam = document.getElementById('other-abExam');

// Neuro Exam
let ncn = document.getElementById('ncn');
let normalPower = document.getElementById('normal-power');
let normalReflexes = document.getElementById('normal-reflexes');
let normalCoordination = document.getElementById('normal-coordination');
let normalGait = document.getElementById('normal-gait');
let tone = document.getElementById('tone');
let otherAbExam2 = document.getElementById('other-abExam2');

// General Exam
let noSkinRash = document.getElementById('noSkinRash');
let noPalpLN = document.getElementById('noPalpLN');
let noClubbing = document.getElementById('noClubbing');
let noCyanosis = document.getElementById('noCyanosis');
let noJointInf = document.getElementById('noJointInf');
let otherGenExam = document.getElementById('other-genExam');

/************ Investigations *********/
// ECG
let ecg = document.getElementById('ecg');

// CXR
let cxr = document.getElementById('cxr');

// CT
let ct = document.getElementById('ct');

// Blood Work
let bloodWork = document.getElementById('bloodWork');

// Echo
let echo = document.getElementById('echo');

// Holter
let holter = document.getElementById('holter');

// Stress Test
let stressTest = document.getElementById('stressTest');

/************ Impression and Plan *********/
// Impression
let impression = document.getElementById('impression');

// Plan
let plan = document.getElementById('plan');
