// render.js — Exercise 2: Worker Progress Report

function setChecked(id, isChecked) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("checked", isChecked);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = value && value.trim() !== "" ? value : "";
}

function setAnswerBox(id, value) {
  const el = document.getElementById(id);
  if (!el) return;
  if (value && value.trim() !== "") {
    el.textContent = value;
    el.classList.remove("empty");
  } else {
    el.textContent = "(no response provided)";
    el.classList.add("empty");
  }
}

function renderProgressReport(d) {
  // ---- header / footer fields ----
  document.querySelectorAll("[data-field='workerName']").forEach((el) => (el.textContent = d.workerName));
  document.querySelectorAll("[data-field='claimNumber']").forEach((el) => (el.textContent = d.claimNumber));
  document.querySelectorAll("[data-field='workerAppId']").forEach((el) => (el.textContent = d.workerAppId));
  document.querySelectorAll("[data-field='submittedAt']").forEach((el) => (el.textContent = d.submittedAt));

  // ---- Return to Work ----
  const rtw = d.returnToWork;
  setChecked("chk-notMissedTime", rtw.selection === "notMissedTime");
  setChecked("chk-notReturned", rtw.selection === "notReturned");
  setChecked("chk-returnedOn", rtw.selection === "returnedOn");
  setText("returnedOnDate", rtw.returnedOnDate);

  ["fullDutiesRegular", "fullDutiesReduced", "modifiedRegular", "modifiedReducedHours", "other"].forEach((key) => {
    setChecked("chk-" + key, rtw.workingStatus === key);
  });
  setText("otherDetail", rtw.otherDetail);

  setAnswerBox("howGoingBox", rtw.howGoing);
  setText("expectedReturnDate", rtw.expectedReturnDate);
  setAnswerBox("concernsBox", rtw.concerns);
  setText("lastContactName", rtw.lastContactName);
  setText("lastContactDate", rtw.lastContactDate);

  // ---- Recovery ----
  setChecked("chk-notRecovered", d.recovery.selection === "notRecovered");
  setChecked("chk-fullyRecovered", d.recovery.selection === "fullyRecovered");
  setAnswerBox("recoveryCommentsBox", d.recovery.comments);

  // ---- Pain scale ----
  document.querySelectorAll(".pain-scale .tick").forEach((tick) => {
    const value = Number(tick.dataset.value);
    tick.classList.toggle("selected", value === d.painLevel);
  });

  // ---- Medical Treatment ----
  const mt = d.medicalTreatment;
  setChecked("chk-notContinuing", mt.selection === "notContinuing");
  setChecked("chk-continuing", mt.selection === "continuing");
  setText("providerType", mt.providerType);
  setText("lastTreatmentDate", mt.lastTreatmentDate);
  setText("lastTreatmentProvider", mt.lastTreatmentProvider);
  setText("nextTreatmentDate", mt.nextTreatmentDate);
  setText("nextTreatmentProvider", mt.nextTreatmentProvider);
  setText("chiroPhysioFrequency", mt.chiroPhysioFrequency);

  // ---- Home Exercises ----
  setChecked("chk-notDoing", d.homeExercises.selection === "notDoing");
  setChecked("chk-doing", d.homeExercises.selection === "doing");
  setAnswerBox("exercisesBox", d.homeExercises.exercisesList);

  // ---- Other Information ----
  setAnswerBox("otherInfoBox", d.otherInformation);

  // ---- Medication ----
  setChecked("chk-notTaking", d.medication.selection === "notTaking");
  setChecked("chk-taking", d.medication.selection === "taking");
  setText("medicationName", d.medication.medicationName);
}

function setActiveDataset(which) {
  renderProgressReport(window.progressData[which]);
  document.querySelectorAll(".toolbar [data-dataset]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.dataset === which);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setActiveDataset("sample");

  document.querySelectorAll(".toolbar [data-dataset]").forEach((btn) => {
    btn.addEventListener("click", () => setActiveDataset(btn.dataset.dataset));
  });

  const printBtn = document.querySelector(".print-btn");
  if (printBtn) printBtn.addEventListener("click", () => window.print());
});
