// data.js — Exercise 1: Medical & Travel Expense Request

const sampleDataset = {
  workerName: "Madeleine Willson",
  claimNumber: "20042047",
  workerAppId: "712041",
  submittedAt: "March 28, 2024 20:43",

  prescriptionDrugs: [
    {
      drugName: "Naproxen",
      prescriptionDate: "February 28, 2024",
      datePurchased: "February 29, 2024",
      providerName: "Dr. Best",
      paidAmount: "$20.00",
    },
  ],

  otcDrugs: [
    {
      drugName: "Advil",
      datePurchased: "March 28, 2024",
      paidAmount: "$8.00",
      sellerName: "Shoppers Drug Mart",
      reason: "Pain",
    },
  ],

  medicalSupplies: [
    {
      itemPurchased: "Tensor",
      datePurchased: "February 28, 2024",
      wasPrescribed: "Yes",
      providerName: "Dr. Best",
      paidAmount: "$10.00",
      sellerName: "Shoppers DrugMart",
    },
  ],

  parking: [
    {
      address: "333 St Mary Ave, Winnipeg MB R3C 4A5, Canada",
      date: "March 28, 2024",
      paidAmount: "$10.00",
      meterUsed: "yes",
      meterNumber: "12245",
    },
  ],

  mileage: [
    {
      appointmentDate: "March 28, 2024",
      providerAddress: "HSC, 820 Sherbrook St, Winnipeg MB R3A 1R9, Canada",
      workplaceAddress: "WCB, 333 Broadway, Winnipeg MB R3C 4W3, Canada",
      kmRoundTrip: "20 km",
    },
  ],

  busOrTaxi: [
    {
      appointmentDate: "March 28, 2024",
      startingPoint: "",
      providerAddress:
        "HSC Winnipeg Women's Hospital, 665 William Ave, Winnipeg MB R3E 0Z2, Canada",
      busOrTaxi: "Bus",
      totalFare: "$3.00",
    },
    {
      appointmentDate: "March 27, 2024",
      startingPoint: "25 Furby St, Winnipeg MB R3C 2A2, Canada",
      providerAddress: "440 Edmonton St, Winnipeg MB R3B 2M4, Canada",
      busOrTaxi: "Taxi",
      totalFare: "$15.00",
    },
  ],
};

const alternateDataset = {
  workerName: "Arjun Mehta",
  claimNumber: "20088314",
  workerAppId: "690455",
  submittedAt: "August 12, 2026 09:27",

  prescriptionDrugs: [
    {
      drugName: "Naproxen",
      prescriptionDate: "July 30, 2026",
      datePurchased: "July 31, 2026",
      providerName: "Dr. Fernandes",
      paidAmount: "$18.50",
    },
    {
      drugName: "Amoxicillin",
      prescriptionDate: "August 2, 2026",
      datePurchased: "August 2, 2026",
      providerName: "Dr. Fernandes",
      paidAmount: "$32.00",
    },
    {
      drugName: "Diclofenac Gel",
      prescriptionDate: "August 5, 2026",
      datePurchased: "August 6, 2026",
      providerName: "Dr. Rao",
      paidAmount: "$14.75",
    },
  ],

  otcDrugs: [],

  medicalSupplies: [
    {
      itemPurchased: "Knee Brace",
      datePurchased: "August 3, 2026",
      wasPrescribed: "Yes",
      providerName: "Dr. Fernandes",
      paidAmount: "$45.00",
      sellerName: "Apollo Pharmacy",
    },
    {
      itemPurchased: "Elastic Bandage (x2)",
      datePurchased: "August 6, 2026",
      wasPrescribed: "No",
      providerName: "—",
      paidAmount: "$6.00",
      sellerName: "MedPlus",
    },
  ],

  parking: [
    {
      address: "45 Residency Road, Bengaluru, Karnataka 560025, India",
      date: "August 3, 2026",
      paidAmount: "$4.00",
      meterUsed: "no",
      meterNumber: "—",
    },
    {
      address: "120 Bannerghatta Road, Bengaluru, Karnataka 560076, India",
      date: "August 9, 2026",
      paidAmount: "$6.50",
      meterUsed: "yes",
      meterNumber: "88213",
    },
  ],

  mileage: [
    {
      appointmentDate: "August 3, 2026",
      providerAddress:
        "St. John's Hospital, 45 Residency Rd, Bengaluru 560025, India",
      workplaceAddress: "Diona Office, Jayanagar, Bengaluru 560011, India",
      kmRoundTrip: "14 km",
    },
  ],

  busOrTaxi: [],
};

// Exposed to render.js and index.html
window.expenseData = {
  sample: sampleDataset,
  alternate: alternateDataset,
};
