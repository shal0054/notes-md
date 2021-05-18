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
  if (otherPainTime) otherPainTime.addEventListener('change', revealOtherTextField);

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
  
  // Social history
  let cpSmoking = document.getElementById('cp-smoking');
  if (cpSmoking.checked) {
    df.append(addToReport(cpSmoking));
  }

  let alcohol = document.getElementById('alcohol');
  if (alcohol.checked) {
    df.append(addToReport(alcohol));
  }

  let marijuana = document.getElementById('marijuana');
  if (marijuana.checked) {
    df.append(addToReport(marijuana));
  }

  let drugs = document.getElementById('drugs');
  if (drugs.checked) {
    df.append(addToReport(drugs));
  }
  
  let exertionalDizziness = document.getElementById('exertional-dizziness');
  if (exertionalDizziness.checked) {
    df.append(addToReport(exertionalDizziness));
  }

  let partner = document.getElementById('partner');
  if (partner.checked) {
    df.append(addToReport(partner));
  }

  let medCoverage = document.getElementById('medCoverage');
  if (medCoverage.checked) {
    df.append(addToReport(medCoverage));
  }

  let job = document.getElementById('job');
  if (job.checked) {
    df.append(addToReport(job));
  }
  
  /************ Chest pain *********/
  // when
  let whenPain = document.getElementById('whenPain');
  if (whenPain.value) {
    df.append(addToReport(whenPain));
  }

  // What did the pain feel like
  let sharp = document.getElementById('sharp');
  if (sharp.checked) {
    df.append(addToReport(sharp));
  }

  let dull = document.getElementById('dull');
  if (dull.checked) {
    df.append(addToReport(dull));
  }

  let squeezing = document.getElementById('squeezing');
  if (squeezing.checked) {
    df.append(addToReport(squeezing));
  }

  let heaviness = document.getElementById('heaviness');
  if (heaviness.checked) {
    df.append(addToReport(heaviness));
  }

  let stabbing = document.getElementById('stabbing');
  if (stabbing.checked) {
    df.append(addToReport(stabbing));
  }

  let constricting = document.getElementById('constricting');
  if (constricting.checked) {
    df.append(addToReport(constricting));
  }

  let otherPain = document.getElementById('other-pain');
  if (otherPain.checked) {
    df.append(getOtherText(otherPain));
  }

  // How long did the pain last
  let stillThere = document.getElementById('stillThere');
  if (stillThere.checked) {
    df.append(addToReport(stillThere));
  }

  let waxWan = document.getElementById('waxWan');
  if (waxWan.checked) {
    df.append(addToReport(waxWan));
  }

  let fewMin = document.getElementById('fewMin');
  if (fewMin.checked) {
    df.append(addToReport(fewMin));
  }

  let fewHours = document.getElementById('fewHours');
  if (fewHours.checked) {
    df.append(addToReport(fewHours));
  }

  let otherPainTime = document.getElementById('other-painTime');
  if (otherPainTime.checked) {
    df.append(getOtherText(otherPainTime));
  }

  // How often does the pain occur
  let stillThereCheckbox = document.getElementById('stillThere-checkbox');
  if (stillThereCheckbox.checked) {
    df.append(addToReport(stillThereCheckbox));
  }

  let once = document.getElementById('once');
  if (once.checked) {
    df.append(addToReport(once));
  }

  let twice = document.getElementById('twice');
  if (twice.checked) {
    df.append(addToReport(twice));
  }

  let threeTimes = document.getElementById('threeTimes');
  if (threeTimes.checked) {
    df.append(addToReport(threeTimes));
  }

  let everyFewMin = document.getElementById('everyFewMin');
  if (everyFewMin.checked) {
    df.append(addToReport(everyFewMin));
  }

  let everyFewHours = document.getElementById('everyFewHours');
  if (everyFewHours.checked) {
    df.append(addToReport(everyFewHours));
  }

  let everyFewDays = document.getElementById('everyFewDays');
  if (fewHours.checked) {
    df.append(addToReport(fewHours));
  }
  let everyFewWeeks = document.getElementById('everyFewWeeks');
  if (everyFewDays.checked) {
    df.append(addToReport(everyFewDays));
  }

  let everyFewMonths = document.getElementById('everyFewMonths');
  if (everyFewMonths.checked) {
    df.append(addToReport(everyFewMonths));
  }

  let otherPainOften = document.getElementById('other-painOften');
  if (otherPainOften.checked) {
    df.append(getOtherText(otherPainOften));
  }

  // Exertion
  let exertion = document.getElementById('exertion');
  if (exertion.checked) {
    df.append(addToReport(exertion));
  }

  let position = document.getElementById('position');
  if (position.checked) {
    df.append(addToReport(position));
  }

  let respiration = document.getElementById('respiration');
  if (respiration.checked) {
    df.append(addToReport(respiration));
  }

  let meals = document.getElementById('meals');
  if (meals.checked) {
    df.append(addToReport(meals));
  }

  let swallowing = document.getElementById('swallowing');
  if (swallowing.checked) {
    df.append(addToReport(swallowing));
  }

  let palpation = document.getElementById('palpation');
  if (palpation.checked) {
    df.append(addToReport(palpation));
  }

  let armMovement = document.getElementById('arm-movement');
  if (armMovement.checked) {
    df.append(addToReport(armMovement));
  }

  let otherExertion = document.getElementById('other-exertion');
  if (otherExertion.checked) {
    df.append(getOtherText(otherExertion));
  }

  // If the pain is related to something, explain here
  let explainPain = document.getElementById('explainPain');
  if (explainPain.value) {
    df.append(addToReport(explainPain));
  }
  
  // What makes the pain worse
  let painWorse = document.getElementById('painWorse');
  if (painWorse.value) {
    df.append(addToReport(painWorse));
  }
  
  //What makes it better
  let painBetter = document.getElementById('painBetter');
  if (painBetter.value) {
    df.append(addToReport(painBetter));
  }

  // The pain is accompanied by
  let shortBreath = document.getElementById('shortBreath');
  if (shortBreath.checked) {
    df.append(addToReport(exertion));
  }

  let palpitation = document.getElementById('palpitation');
  if (palpitation.checked) {
    df.append(addToReport(palpitation));
  }

  let dizziness = document.getElementById('dizziness');
  if (dizziness.checked) {
    df.append(addToReport(dizziness));
  }

  let nausea = document.getElementById('nausea');
  if (nausea.checked) {
    df.append(addToReport(nausea));
  }

  let vomiting = document.getElementById('vomiting');
  if (vomiting.checked) {
    df.append(addToReport(vomiting));
  }

  let none = document.getElementById('none');
  if (none.checked) {
    df.append(addToReport(none));
  }

  let otherPainAccomp = document.getElementById('other-painAccomp');
  if (otherPainAccomp.checked) {
    df.append(getOtherText(otherPainAccomp));
  }

  // Symptoms of heart failure
  let dyspnea = document.getElementById('dyspnea');
  if (dyspnea.checked) {
    df.append(addToReport(dyspnea));
  }

  let orthopnea = document.getElementById('orthopnea');
  if (orthopnea.checked) {
    df.append(addToReport(orthopnea));
  }

  let pnd = document.getElementById('pnd');
  if (pnd.checked) {
    df.append(addToReport(pnd));
  }

  let cp_lls = document.getElementById('cp-lls');
  if (cp_lls.checked) {
    df.append(addToReport(cp_lls));
  }

  let exertionalDizziness2 = document.getElementById('exertional-dizziness2');
  if (exertionalDizziness2.checked) {
    df.append(addToReport(exertionalDizziness2));
  }

  let syncope = document.getElementById('syncope');
  if (syncope.checked) {
    df.append(addToReport(syncope));
  }

  // Medication
  let medication = document.getElementById('medication');
  if (medication.value) {
    df.append(addToReport(medication));
  }

  /************ Physical Exam *********/
  // Blood Pressure
  let bloodPressure = document.getElementById('bloodPressure');
  if (bloodPressure.value) {
    df.append(addToReport(bloodPressure));
  }
  
  // Pulse Rate
  let pulseRate = document.getElementById('pulseRate');
  if (pulseRate.value) {
    df.append(addToReport(pulseRate));
  }
  
  // Oxygen Saturation
  let oSat = document.getElementById('oSat');
  if (oSat.value) {
    df.append(addToReport(oSat));
  }

  // CV Exam
  let loudS1 = document.getElementById('loudS1');
  if (loudS1.checked) {
    df.append(addToReport(loudS1));
  }

  let loudS2 = document.getElementById('loudS2');
  if (loudS2.checked) {
    df.append(addToReport(loudS2));
  }

  let diminishedS1 = document.getElementById('diminishedS1');
  if (diminishedS1.checked) {
    df.append(addToReport(diminishedS1));
  }

  let diminishedS2 = document.getElementById('diminishedS2');
  if (diminishedS2.checked) {
    df.append(addToReport(diminishedS2));
  }

  let s3 = document.getElementById('s3');
  if (s3.checked) {
    df.append(addToReport(s3));
  }

  let s4 = document.getElementById('s4');
  if (s4.checked) {
    df.append(addToReport(s4));
  }

  let esm1 = document.getElementById('esm1');
  if (esm1.checked) {
    df.append(addToReport(esm1));
  }

  let esm2 = document.getElementById('esm2');
  if (esm2.checked) {
    df.append(addToReport(esm2));
  }

  let esm3 = document.getElementById('esm3');
  if (esm3.checked) {
    df.append(addToReport(esm3));
  }
  
  let esm4 = document.getElementById('esm4');
  if (esm4.checked) {
    df.append(addToReport(esm4));
  }

  let psm1 = document.getElementById('psm1');
  if (psm1.checked) {
    df.append(addToReport(psm1));
  }

  let psm2 = document.getElementById('psm2');
  if (psm2.checked) {
    df.append(addToReport(psm2));
  }

  let jvd = document.getElementById('jvd');
  if (jvd.checked) {
    df.append(addToReport(jvd));
  }

  let lls = document.getElementById('lls');
  if (lls.checked) {
    df.append(addToReport(lls));
  }

  let otherCve = document.getElementById('other-cve');
  if (otherCve.checked) {
    df.append(getOtherText(otherCve));
  }

  // Respiratory Exam
  let worul = document.getElementById('worul');
  if (worul.checked) {
    df.append(addToReport(worul));
  }

  let worll = document.getElementById('worll');
  if (worll.checked) {
    df.append(addToReport(worll));
  }

  let wolul = document.getElementById('wolul');
  if (wolul.checked) {
    df.append(addToReport(wolul));
  }

  let wolll = document.getElementById('wolll');
  if (wolll.checked) {
    df.append(addToReport(wolll));
  }

  let ccob = document.getElementById('ccob');
  if (ccob.checked) {
    df.append(addToReport(ccob));
  }

  let fcob = document.getElementById('fcob');
  if (fcob.checked) {
    df.append(addToReport(fcob));
  }

  let lce = document.getElementById('lce');
  if (lce.checked) {
    df.append(addToReport(lce));
  }

  let lae = document.getElementById('lae');
  if (lae.checked) {
    df.append(addToReport(lae));
  }

  let otherRe = document.getElementById('other-re');
  if (otherRe.checked) {
    df.append(getOtherText(otherRe));
  }

  // Abdominal Exam
  let hepatomegally = document.getElementById('hepatomegally');
  if (hepatomegally.checked) {
    df.append(addToReport(hepatomegally));
  }

  let splenomegally = document.getElementById('splenomegally');
  if (splenomegally.checked) {
    df.append(addToReport(splenomegally));
  }

  let shiftingDullness = document.getElementById('shifting-dullness');
  if (shiftingDullness.checked) {
    df.append(addToReport(shiftingDullness));
  }

  let tenderness = document.getElementById('tenderness');
  if (tenderness.checked) {
    df.append(addToReport(tenderness));
  }

  let otherAbExam = document.getElementById('other-abExam');
  if (otherAbExam.checked) {
    df.append(getOtherText(otherAbExam));
  }

  // Neuro Exam
  let ncn = document.getElementById('ncn');
  if (ncn.checked) {
    df.append(addToReport(ncn));
  }
  
  let normalPower = document.getElementById('normal-power');
  if (normalPower.checked) {
    df.append(addToReport(normalPower));
  }

  let normalReflexes = document.getElementById('normal-reflexes');
  if (normalReflexes.checked) {
    df.append(addToReport(normalReflexes));
  }

  let normalCoordination = document.getElementById('normal-coordination');
  if (normalCoordination.checked) {
    df.append(addToReport(normalCoordination));
  }

  let normalGait = document.getElementById('normal-gait');
  if (normalGait.checked) {
    df.append(addToReport(normalGait));
  }

  let tone = document.getElementById('tone');
  if (tone.checked) {
    df.append(addToReport(tone));
  }

  let otherAbExam2 = document.getElementById('other-abExam2');
  if (otherAbExam2.checked) {
    df.append(getOtherText(otherAbExam2));
  }

  // General Exam
  let noSkinRash = document.getElementById('noSkinRash');
  if (noSkinRash.checked) {
    df.append(addToReport(noSkinRash));
  }

  let noPalpLN = document.getElementById('noPalpLN');
  if (noPalpLN.checked) {
    df.append(addToReport(noPalpLN));
  }

  let noClubbing = document.getElementById('noClubbing');
  if (noClubbing.checked) {
    df.append(addToReport(noClubbing));
  }

  let noCyanosis = document.getElementById('noCyanosis');
  if (noCyanosis.checked) {
    df.append(addToReport(noCyanosis));
  }

  let noJointInf = document.getElementById('noJointInf');
  if (noJointInf.checked) {
    df.append(addToReport(noJointInf));
  }

  let otherGenExam = document.getElementById('other-genExam');
  if (otherGenExam.checked) {
    df.append(getOtherText(otherGenExam));
  }

  /************ Investigations *********/
  // ECG
  let ecg = document.getElementById('ecg');
  if (ecg.value) {
    df.append(addToReport(ecg));
  }
  
  // CXR
  let cxr = document.getElementById('cxr');
  if (cxr.value) {
    df.append(addToReport(cxr));
  }
  
  // CT
  let ct = document.getElementById('ct');
  if (ct.value) {
    df.append(addToReport(ct));
  }
  
  // Blood Work
  let bloodWork = document.getElementById('bloodWork');
  if (bloodWork.value) {
    df.append(addToReport(bloodWork));
  }
  
  // Echo
  let echo = document.getElementById('echo');
  if (echo.value) {
    df.append(addToReport(echo));
  }
  
  // Holter
  let holter = document.getElementById('holter');
  if (holter.value) {
    df.append(addToReport(holter));
  }
  
  // Stress Test
  let stressTest = document.getElementById('stressTest');
  if (stressTest.value) {
    df.append(addToReport(stressTest));
  }

  /************ Impression and Plan *********/
  // Impression
  let impression = document.getElementById('impression');
  if (impression.value) {
    df.append(addToReport(impression));
  }
  
  // Plan
  let plan = document.getElementById('plan');
  if (plan.value) {
    df.append(addToReport(plan));
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
