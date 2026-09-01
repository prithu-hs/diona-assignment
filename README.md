# Diona Internship Assignment — WCB Form Documents

This repository contains the submission for the Diona internship
assignment. It implements two standalone, browser-based documents using
**HTML, CSS, and JavaScript**, based on two sample WCB (Workers
Compensation Board of Manitoba) PDF references supplied with the
assignment:

1. **Medical & Travel Expense Request**
2. **Worker Progress Report**

Each document follows the content, structure, arrangement, and page
layout of its corresponding PDF reference as closely as possible, and is
built entirely with dynamic data rather than hard-coded HTML.

---

## Table of Contents

- [Exercises](#exercises)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [How to Run](#how-to-run)
- [Dynamic Data](#dynamic-data)
- [Print / Save as PDF](#print--save-as-pdf)
- [Images and Assets](#images-and-assets)
- [Videos](#videos)
- [AI Usage Disclosure](#ai-usage-disclosure)
- [Author](#author)

---

## Exercises

### Exercise 1 — Medical & Travel Expense Request

A two-page, A4-styled document reproducing the layout of the supplied
Medical & Travel Expense Request PDF. It includes:

- Header and logo
- Worker and claim information
- "Medical & Travel Expense Request" title block
- Prescription Drugs
- Over-the-Counter Drugs
- Medical Supplies (Bandages, Braces, or Other Medical Supplies)
- Parking for Medical Appointments
- Mileage to Medical Appointments
- Bus or Taxi Fare for Medical Appointments
- Privacy Notice
- Footer with Worker App ID and submission timestamp
- Page numbers
- Expense tables for all of the above

### Exercise 2 — Worker Progress Report

A three-page, A4-styled document reproducing the layout of the supplied
Worker Progress Report PDF. It includes:

- Header and logo
- Worker and claim information
- Return to Work
- Recovery
- Pain / Discomfort
- 1–10 Pain Scale
- Medical Treatment
- Medical Provider information
- Home Exercises
- Other Information
- Medication
- Certification
- Privacy Notice
- Footer with Worker App ID and submission timestamp
- Page numbers
- Checkbox-based "select one" sections

Each exercise lives in its own self-contained folder — `index.html`,
`styles.css`, `data.js`, and `render.js` — so either one can be opened,
run, and explained independently of the other.

---

## Technologies Used

- HTML5
- CSS3, including `@page` and `@media print` rules for A4-style print
  output
- Vanilla JavaScript (no frameworks, no build step, no backend)

---

## Project Structure

```text
Diona-Assignment/
│
├── exercise-1-medical-travel-expense/
│   ├── index.html
│   ├── styles.css
│   ├── data.js
│   ├── render.js
│   └── assets/
│
├── exercise-2-worker-progress-report/
│   ├── index.html
│   ├── styles.css
│   ├── data.js
│   ├── render.js
│   └── assets/
│
├── docs/
│   └── video-notes.md
│
├── videos/
│   ├── exercise-1-walkthrough.mp4
│   └── exercise-2-walkthrough.mp4
│
├── README.md
└── AI-PROMPT-HISTORY.md
```

---

## How to Run

Both exercises are static sites — no server or build tools are required.

1. Open `exercise-1-medical-travel-expense/index.html` directly in a
   browser (double-click the file, or right-click → **Open With** →
   your browser).
2. Open `exercise-2-worker-progress-report/index.html` the same way.

Optionally, serve the repository with any static file server — for
example, `npx serve .` from the repository root — then browse to the
exercise you want.

---

## Dynamic Data

Neither document hard-codes worker details into its HTML. All content —
worker name, claim number, dates, table rows, checkbox selections, and
free-text answers — lives in each exercise's `data.js` file as plain
JavaScript objects and arrays. `render.js` reads whichever dataset is
active and builds the page's DOM from it.

**Fields treated as dynamic:**

| Exercise   | Dynamic fields                                                                                                                                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Exercise 1 | Worker name, claim number, Worker App ID, submitted date/time, and every row of all six expense tables (each table supports zero, one, or many rows without breaking the layout — see the "No records submitted" fallback in `render.js`) |
| Exercise 2 | Worker name, claim number, Worker App ID, submitted date/time, every checkbox selection, every free-text answer, and the pain-scale value                                                                                                 |

### How to Test Different Datasets

Each `index.html` includes a small toolbar (screen-only, hidden when
printing) with **Sample Data** and **Alternate Data** buttons:

- **Sample Data** matches the values shown in the supplied PDF.
- **Alternate Data** uses a different worker, a different number of
  table rows, and different checkbox selections, demonstrating that the
  layout adapts correctly to different inputs.

Both datasets are defined in full inside each folder's `data.js`.

---

## Print / Save as PDF

Click the **Print / Save as PDF** button in the toolbar, or use the
browser's own print command. The `@media print` rules hide the toolbar,
set the page size to A4, and insert a page break before each page
section, so the printed output preserves the same page count as the
source PDF — 2 pages for Exercise 1, 3 pages for Exercise 2.

---

## Images and Assets

Both exercises use a small local SVG placeholder
(`assets/wcb-logo.svg`) in place of the real WCB crest, since the
original logo artwork was not available as a reusable asset. This is a
deliberate, documented assumption — the placeholder is positioned and
sized to match where the real logo appears in the PDF.

---

## Videos

- Exercise 1 walkthrough: [`videos/exercise-1-walkthrough.mp4`](videos/exercise-1-walkthrough.mp4)
- Exercise 2 walkthrough: [`videos/exercise-2-walkthrough.mp4`](videos/exercise-2-walkthrough.mp4)

Talking-point outlines for both videos are in
[`docs/video-notes.md`](docs/video-notes.md). These are outlines to speak
from, not scripts to read verbatim — the videos are intended to
demonstrate genuine understanding of the requirements and the code.

---

## AI Usage Disclosure

AI assistance (Claude, by Anthropic) was used during development for:
interpreting the assignment requirements, analyzing the structure of the
two source PDFs, planning the project and file structure, generating the
HTML/CSS/JavaScript code, and drafting this README and the talking-point
outlines in `docs/video-notes.md`.

See [`AI-PROMPT-HISTORY.md`](AI-PROMPT-HISTORY.md) for the full record of
prompts used.

---

## Author

Prithu H S
Diona Internship Assignment Submission — September 2026
GitHub: [your-github-username](https://github.com/your-github-username)
