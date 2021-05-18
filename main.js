document.addEventListener('DOMContentLoaded', init);

function init() {
  materializeInit();
  addListeners();
}

function materializeInit() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
}

function hideAllSections() {
  let allSections = document.querySelectorAll('section');
  allSections.forEach((section) => {
    section.classList.add('hide');
  });
}

function addListeners() {
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
  if (assessmentRadio) {
    assessmentRadio.addEventListener('click', () => {
      regarding.classList.remove('hide');
      followUpSection.classList.add('hide');
    });
  }
  if (followUpRadio) {
    followUpRadio.addEventListener('click', () => {
      followUpSection.classList.remove('hide');
      regarding.classList.add('hide');
      generalSection.classList.add('hide');
    });
  }

  /************************ Handling Other ****************************/
  // this other field loads a next button
  let otherRegarding = document.getElementById('other-regarding');
  if (otherRegarding) {
    otherRegarding.addEventListener('change', () => {
      let otherRegText = otherRegarding.nextElementSibling.children[1];
      otherRegText.classList.remove('hide');

      let otherSpan = otherRegText.previousElementSibling;
      otherSpan.classList.add('hide');

      let nextBtnGen = document.getElementById('nextBtn-gen');
      nextBtnGen.classList.remove('hide');
      nextBtnGen.addEventListener('click', () => {
        // console.log(otherRegText.value);
        // this is temporary
        genReport();
      });
    });
  }

  // other fields
  let other = document.getElementById('other');
  if (other) other.addEventListener('change', revealOtherTextField);

  let otherPain = document.getElementById('other-pain');
  if (otherPain) otherPain.addEventListener('change', revealOtherTextField);

  let otherPainTime = document.getElementById('other-painTime');
  if (otherPainTime) other.addEventListener('change', revealOtherTextField);

  let otherPainOften = document.getElementById('other-painOften');
  if (otherPainOften)
    otherPainOften.addEventListener('change', revealOtherTextField);

  let otherExertion = document.getElementById('other-exertion');
  if (otherExertion)
    otherExertion.addEventListener('change', revealOtherTextField);

  let otherPainAccomp = document.getElementById('other-painAccomp');
  if (otherPainAccomp)
    otherPainAccomp.addEventListener('change', revealOtherTextField);

  let otherCve = document.getElementById('other-cve');
  if (otherCve) otherCve.addEventListener('change', revealOtherTextField);

  let otherRe = document.getElementById('other-re');
  if (otherRe) otherRe.addEventListener('change', revealOtherTextField);

  let otherAbExam = document.getElementById('other-abExam');
  if (otherAbExam) otherAbExam.addEventListener('change', revealOtherTextField);

  let otherAbExam2 = document.getElementById('other-abExam2');
  if (otherAbExam2)
    otherAbExam2.addEventListener('change', revealOtherTextField);

  let otherGenExam = document.getElementById('other-genExam');
  if (otherGenExam)
    otherGenExam.addEventListener('change', revealOtherTextField);
  /********************************************************************/

  // load assessments section
  let chestPainRadio = document.getElementById('chest-pain-gen');
  if (chestPainRadio) {
    chestPainRadio.addEventListener('click', () => {
      hideAllSections();
      assessmentSection.classList.remove('hide');
    });
  }

  // button listeners
  if (backBtnAsses) {
    backBtnAsses.addEventListener('click', () => {
      hideAllSections();

      generalSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (nextBtnAsses) {
    nextBtnAsses.addEventListener('click', () => {
      hideAllSections();

      chestPainSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (backBtnFolUp) {
    backBtnFolUp.addEventListener('click', () => {
      hideAllSections();

      generalSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (backBtnPhysExam) {
    backBtnPhysExam.addEventListener('click', () => {
      hideAllSections();

      chestPainSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (nextBtnPhysExam) {
    nextBtnPhysExam.addEventListener('click', () => {
      hideAllSections();

      // display section
      investigationsSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (backBtnInves) {
    backBtnInves.addEventListener('click', () => {
      hideAllSections();

      physicalExamSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (nextBtnInves) {
    nextBtnInves.addEventListener('click', () => {
      hideAllSections();

      // display section
      impressPlanSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (backBtnChestPain) {
    backBtnChestPain.addEventListener('click', () => {
      hideAllSections();

      assessmentSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (nextBtnChestPain) {
    nextBtnChestPain.addEventListener('click', () => {
      hideAllSections();

      // display section
      physicalExamSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  if (backBtnImpresPlan) {
    backBtnImpresPlan.addEventListener('click', () => {
      hideAllSections();

      investigationsSection.classList.remove('hide');
      scrollTo(0, 0);
    });
  }

  // Generate Report
  let genReportBtn = document.getElementById('genReportBtn');
  if (genReportBtn) genReportBtn.addEventListener('click', genReport);
}

function revealOtherTextField(ev) {
  let otherTextField = ev.target.nextElementSibling.children[1];
  otherTextField.classList.toggle('hide');

  let otherSpan = otherTextField.previousElementSibling;
  otherSpan.classList.toggle('hide');
}

function genReport(ev) {
  hideAllSections();
  // Generate Report modal here

  let reportSection = document.getElementById('reportSection');
  let report = document.getElementById('report');
  report.innerHTML = '';
  let df = document.createDocumentFragment();

  /******* Capture all input elements *********/
  /****** Gen info *******/
  let salutation = document.getElementById('salutation');
  if (salutation) {
    df.append(addToReport(salutation));
  }

  let name = document.getElementById('name');
  if (name.value) {
    df.append(addToReport(name));
  }

  let age = document.getElementById('age');
  if (age.value) {
    df.append(addToReport(age));
  }

  // presented for
  let assessment = document.getElementById('assessment');
  if (assessment.checked) {
    df.append(addToReport(assessment));
  }

  let followUp = document.getElementById('follow-up');
  if (followUp.checked) {
    df.append(addToReport(followUp));
  }

  //regarding
  let chestPain = document.getElementById('chest-pain-gen');
  if (chestPain.checked) {
    df.append(addToReport(chestPain));
  }

  let otherRegarding = document.getElementById('other-regarding');
  if (otherRegarding.checked) {
    df.append(getOtherText(otherRegarding));
  }

  /************  Assessment *********/
  // Cardiovascular risk
  let smoking = document.getElementById('smoking');
  if (smoking.checked) {
    df.append(addToReport(smoking));
  }

  let dyslipidemia = document.getElementById('dyslipidemia');
  if (dyslipidemia.checked) {
    df.append(addToReport(dyslipidemia));
  }

  let diabetes = document.getElementById('diabetes');
  if (diabetes.checked) {
    df.append(addToReport(diabetes));
  }

  let hypertension = document.getElementById('hypertension');
  if (hypertension.checked) {
    df.append(addToReport(hypertension));
  }

  let cad = document.getElementById('cad');
  if (cad.checked) {
    df.append(addToReport(cad));
  }

  // Other past medical history
  let hypothyroidism = document.getElementById('hypothyroidism');
  if (hypothyroidism.checked) {
    df.append(addToReport(hypothyroidism));
  }

  let dyslipidemia2 = document.getElementById('dyslipidemia2');
  if (dyslipidemia2.checked) {
    df.append(addToReport(dyslipidemia2));
  }

  let heartFailure = document.getElementById('heart-failure');
  if (heartFailure.checked) {
    df.append(addToReport(heartFailure));
  }

  let cva = document.getElementById('cva');
  if (cva.checked) {
    df.append(addToReport(cva));
  }

  let pe = document.getElementById('pe');
  if (pe.checked) {
    df.append(addToReport(pe));
  }

  let bronchialAsthma = document.getElementById('bronchial-asthma');
  if (bronchialAsthma.checked) {
    df.append(addToReport(bronchialAsthma));
  }

  let osteoarthritis = document.getElementById('osteoarthritis');
  if (osteoarthritis.checked) {
    df.append(addToReport(osteoarthritis));
  }

  let tia = document.getElementById('tia');
  if (tia.checked) {
    df.append(addToReport(tia));
  }

  let dvt = document.getElementById('dvt');
  if (dvt.checked) {
    df.append(addToReport(dvt));
  }

  let copd = document.getElementById('copd');
  if (copd.checked) {
    df.append(addToReport(copd));
  }

  let otherOpmh = document.getElementById('other');
  if (otherOpmh.checked) {
    df.append(getOtherText(otherOpmh));
  }

  report.append(df);
  reportSection.classList.remove('hide');
  scrollTo(0, 0);
}
function getOtherText(item) {
  let itemP = document.createElement('p');
  itemP.classList.add('report');
  itemP.innerHTML = item.nextElementSibling.children[1].value;
  return itemP;
}

function addToReport(item) {
  let itemP = document.createElement('p');
  itemP.classList.add('report');
  itemP.innerHTML = item.value;
  return itemP;
}

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
