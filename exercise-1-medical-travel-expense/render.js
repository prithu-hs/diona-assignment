// render.js — Exercise 1: Medical & Travel Expense Request

function makeCell(text) {
  const td = document.createElement("td");
  td.textContent = text && text.trim() !== "" ? text : "—";
  return td;
}

function renderTable(bodyId, rows, columns, colSpan) {
  const tbody = document.getElementById(bodyId);
  tbody.innerHTML = "";

  if (!rows || rows.length === 0) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = colSpan;
    td.className = "no-data";
    td.textContent = "No records submitted for this dataset.";
    tr.appendChild(td);
    tbody.appendChild(tr);
    return;
  }

  rows.forEach((row) => {
    const tr = document.createElement("tr");
    columns.forEach((key) => tr.appendChild(makeCell(row[key])));
    tbody.appendChild(tr);
  });
}

function renderExpenseDocument(dataset) {
  // Header / footer / intro fields
  document.querySelectorAll("[data-field='workerName']").forEach((el) => {
    el.textContent = dataset.workerName;
  });
  document.querySelectorAll("[data-field='claimNumber']").forEach((el) => {
    el.textContent = dataset.claimNumber;
  });
  document.querySelectorAll("[data-field='workerAppId']").forEach((el) => {
    el.textContent = dataset.workerAppId;
  });
  document.querySelectorAll("[data-field='submittedAt']").forEach((el) => {
    el.textContent = dataset.submittedAt;
  });

  renderTable(
    "prescriptionBody",
    dataset.prescriptionDrugs,
    [
      "drugName",
      "prescriptionDate",
      "datePurchased",
      "providerName",
      "paidAmount",
    ],
    5,
  );

  renderTable(
    "otcBody",
    dataset.otcDrugs,
    ["drugName", "datePurchased", "paidAmount", "sellerName", "reason"],
    5,
  );

  renderTable(
    "suppliesBody",
    dataset.medicalSupplies,
    [
      "itemPurchased",
      "datePurchased",
      "wasPrescribed",
      "providerName",
      "paidAmount",
      "sellerName",
    ],
    6,
  );

  renderTable(
    "parkingBody",
    dataset.parking,
    ["address", "date", "paidAmount", "meterUsed", "meterNumber"],
    5,
  );

  renderTable(
    "mileageBody",
    dataset.mileage,
    ["appointmentDate", "providerAddress", "workplaceAddress", "kmRoundTrip"],
    4,
  );

  renderTable(
    "busTaxiBody",
    dataset.busOrTaxi,
    [
      "appointmentDate",
      "startingPoint",
      "providerAddress",
      "busOrTaxi",
      "totalFare",
    ],
    5,
  );
}

function setActiveDataset(which) {
  const dataset = window.expenseData[which];
  renderExpenseDocument(dataset);

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
  if (printBtn) {
    printBtn.addEventListener("click", () => window.print());
  }
});
