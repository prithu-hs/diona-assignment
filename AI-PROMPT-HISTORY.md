# AI Prompt History

## Purpose

This document provides a transparent record of how AI assistance (Claude, by Anthropic) was used during the development of this project.

It is included to satisfy the Diona assignment requirement to disclose AI usage when AI is used for code generation.

The entries below are prompt summaries rather than verbatim transcripts. They describe the prompts that were actually sent, in the order in which they were used. No additional prompts have been invented or added to make the development process appear more extensive than it was.

> **Note on accuracy:**  
> The prompts used during development were detailed instructions. For readability, they are documented here as summaries rather than reproduced word-for-word. These summaries accurately represent the purpose and main requirements of the original prompts.

---

## Development Log

### 1. Initial Project Build

**Prompt Summary:**

A detailed prompt was provided to Claude together with the two reference PDFs and the original Diona assignment instructions.

The prompt requested a complete HTML, CSS, and JavaScript project built from scratch based on the supplied PDF references. It specified that the implementation should follow the content, structure, arrangement, and visual layout of the PDFs as closely as reasonably possible.

The prompt also requested:

- Dynamic data instead of hard-coded content
- Support for different numbers of table records
- A4-style page layout
- Print / Save as PDF support
- Header and footer
- Page numbers
- Images and logo assets
- Complete implementation of both exercises
- Project documentation
- AI prompt history
- Video preparation notes
- Testing and validation

**Purpose:**

To create the initial implementation for both Diona assignment exercises while ensuring that the documents could display dynamic information and follow the supplied PDF references.

**AI Assistance / Result:**

Claude analysed the supplied PDF references and generated the initial project implementation.

The project was organized into separate folders for the two exercises, with files including:

- `index.html`
- `styles.css`
- `data.js`
- `render.js`

Supporting files included:

- `README.md`
- `AI-PROMPT-HISTORY.md`
- `docs/video-notes.md`
- Image/logo assets

Claude also performed basic validation checks on the generated implementation, including JavaScript syntax validation, HTML structure checks, and verification of references between JavaScript-rendered elements and the corresponding HTML.

---

### 2. Refinement of Exercise 2

**Prompt Summary:**

The two reference PDFs and the Diona assignment instructions were provided again, this time including the actual blank Worker Progress Report template with its visible checkbox groups and unfilled fields.

The prompt emphasized that the supplied PDF should be treated as the primary reference for the document's structure and arrangement.

**Purpose:**

To improve Exercise 2 so that the Worker Progress Report followed the supplied form structure more accurately, particularly the checkbox sections, field labels, page structure, and document layout.

**AI Assistance / Result:**

Claude updated the Exercise 2 data model and rendering logic to support the relevant sections of the Worker Progress Report, including:

- Return to Work
- Recovery
- Pain / Discomfort
- Medical Treatment
- Home Exercises
- Other Information
- Medication
- Certification
- Privacy Notice

The implementation was also checked for consistency between the HTML structure and JavaScript rendering logic.

---

## AI Usage During Development

AI assistance from Claude (Anthropic) was used in the following areas:

### Requirement Understanding

AI was used to understand and organize the Diona assignment requirements, including the requirements for dynamic data, browser demonstration, code walkthroughs, AI disclosure, and video presentation.

### PDF Analysis

AI was used to analyse the two supplied PDF references and identify their:

- Sections
- Fields
- Tables
- Headers
- Footers
- Page numbers
- Checkbox sections
- Document structure
- Layout and arrangement

### Project Planning

AI assistance was used to plan the project architecture and organize the files for the two exercises.

### HTML Development

AI assistance was used to generate the HTML structure required for the two document implementations.

### CSS Development

AI assistance was used to implement the document styling, including:

- A4 page dimensions
- Tables
- Borders
- Spacing
- Typography
- Headers
- Footers
- Page layouts
- Print-specific styling

### JavaScript Development

AI assistance was used to implement dynamic data handling and rendering logic using JavaScript.

### Dynamic Data

AI assistance was used to structure the document data using JavaScript objects and arrays so that values and table records could be changed without manually rewriting the HTML.

### Exercise 2 Form Sections

AI assistance was used to implement the checkbox-based sections and other form fields in the Worker Progress Report.

### Documentation

AI assistance was used to prepare project documentation, including:

- `README.md`
- This AI prompt history
- Video preparation notes

### Validation

AI assistance was used to perform basic validation checks on the generated implementation, including JavaScript syntax, HTML structure, and references between JavaScript and HTML elements.

---

## AI Disclosure

AI assistance from Claude (Anthropic) was used during the development of this Diona assignment for requirement understanding, PDF analysis, project planning, HTML/CSS/JavaScript development, dynamic data implementation, documentation, and basic validation.

The AI-generated output was reviewed and tested as part of the development process.

This document intentionally records the AI interaction as prompt summaries rather than presenting reconstructed text as exact prompt transcripts.

No prompts have been invented or added to make the AI usage appear more extensive or sophisticated than it was.

If additional AI prompts are used for debugging, modifications, or further refinements, they should be added to this document so that the history remains accurate and up to date.
