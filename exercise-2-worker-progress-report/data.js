// data.js — Exercise 2: Worker Progress Report

const sampleDataset = {
  workerName: "Madeleine Willson",
  claimNumber: "20042047",
  workerAppId: "712041",
  submittedAt: "March 19, 2024 19:21",

  returnToWork: {
    selection: "returnedOn", // "notMissedTime" | "notReturned" | "returnedOn"
    returnedOnDate: "March 15, 2024",
    workingStatus: "modifiedReducedHours", // one of the 5 keys below, or "other"
    otherDetail: "",
    howGoing: "Terrible. Testing Testing",
    expectedReturnDate: "",
    concerns: "",
    lastContactName: "",
    lastContactDate: "",
  },

  recovery: {
    selection: "fullyRecovered", // "notRecovered" | "fullyRecovered"
    comments: "",
  },

  painLevel: null, // 1-10, or null if not answered

  medicalTreatment: {
    selection: "notContinuing", // "notContinuing" | "continuing"
    providerType: "",
    lastTreatmentDate: "",
    lastTreatmentProvider: "",
    nextTreatmentDate: "",
    nextTreatmentProvider: "",
    chiroPhysioFrequency: "",
  },

  homeExercises: {
    selection: "notDoing", // "notDoing" | "doing"
    exercisesList: "",
  },

  otherInformation: "No info Testing Testing",

  medication: {
    selection: "notTaking", // "notTaking" | "taking"
    medicationName: "",
  },
};

const alternateDataset = {
  workerName: "Ravi Kapoor",
  claimNumber: "20051893",
  workerAppId: "804233",
  submittedAt: "August 20, 2026 11:05",

  returnToWork: {
    selection: "notReturned",
    returnedOnDate: "",
    workingStatus: "other",
    otherDetail:
      "Working half-days from home while cleared for desk duties only",
    howGoing: "",
    expectedReturnDate: "September 08, 2026",
    concerns: "Long commute and stairs at the office are still difficult.",
    lastContactName: "Priya Nair",
    lastContactDate: "August 18, 2026",
  },

  recovery: {
    selection: "notRecovered",
    comments:
      "Lower back mobility is improving but still limited after long periods of sitting.",
  },

  painLevel: 4,

  medicalTreatment: {
    selection: "continuing",
    providerType: "Physiotherapist",
    lastTreatmentDate: "August 15, 2026",
    lastTreatmentProvider: "Dr. S. Iyer",
    nextTreatmentDate: "August 29, 2026",
    nextTreatmentProvider: "Dr. S. Iyer",
    chiroPhysioFrequency: "Twice a week",
  },

  homeExercises: {
    selection: "doing",
    exercisesList: "Pelvic tilts, hamstring stretches, 20-minute daily walk",
  },

  otherInformation:
    "Requesting an ergonomic chair assessment for the home workstation.",

  medication: {
    selection: "taking",
    medicationName: "Naproxen 250mg, as needed",
  },
};

window.progressData = {
  sample: sampleDataset,
  alternate: alternateDataset,
};
