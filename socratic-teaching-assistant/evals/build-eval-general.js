const h = require("./eval-helpers");
const s = require("./eval-sections");

const infoRows = [
  ["Your name:", ""],
  ["Date:", ""],
  ["Platform used:", "(e.g. Claude, ChatGPT)"],
  ["Your role:", "(e.g. student, teacher, professional)"],
  ["Your level:", "(e.g. Grade 11, undergraduate, postgraduate, professional)"],
  ["Subject tested:", ""],
];

const testInstructions = [
  h.heading1("2. How to Run Your Tests"),

  h.body("This tool can be used in two ways: (a) to sharpen your own argument or analysis, and (b) to help you understand a document someone else wrote. We ask you to test both if possible. If you can only test one, that is fine \u2014 just skip the sections that do not apply."),

  h.heading2("Test A: Your Own Argument"),
  h.body("Pick a topic in your field where you have a position, an argument, or an analysis you are developing. This works best with real work \u2014 an essay topic, a case analysis, a policy argument, a research question, a business proposal."),

  h.emptyLine(),
  h.body("Steps for Test A:"),

  h.numberedItemRuns([
    { text: "Open the tool. Start by saying something like: " },
    { text: "\"I want to think through my argument about [topic]. Challenge me.\"", italics: true },
  ]),
  h.numberedItem("Follow the instructions the tool gives you. Write out your position when it asks you to."),
  h.numberedItem("Respond to the challenges it gives you. Try to actually engage \u2014 do not just agree with everything."),
  h.numberedItem("Complete the reflection phase when the tool asks for it."),
  h.numberedItemRuns([
    { text: "At some point, try asking the tool to make the challenges harder: " },
    { text: "\"Make it harder\"", italics: true },
    { text: " or " },
    { text: "\"Turn up the intensity.\"", italics: true },
  ]),
  h.numberedItem("Also try at least once asking the tool to just give you the answer. See what happens."),

  h.emptyLine(),

  h.heading2("Test B: Understanding a Document"),
  h.body("Pick a document you need to read or understand: a journal article, a case, a report, a textbook chapter, or any reading material relevant to your work or studies. Upload it to the tool or paste in the relevant section."),

  h.emptyLine(),
  h.body("Steps for Test B:"),

  h.numberedItemRuns([
    { text: "Open a new session with the tool. Say something like: " },
    { text: "\"I need to understand this paper. Help me work through it.\"", italics: true },
    { text: " Then upload or paste the document." },
  ]),
  h.numberedItem("When the tool asks what you think the document is arguing, write your honest reading \u2014 even if you are unsure."),
  h.numberedItem("Respond to the questions the tool asks about your reading."),
  h.numberedItemRuns([
    { text: "At some point, try saying: " },
    { text: "\"Just explain it to me.\"", italics: true },
    { text: " See what happens." },
  ]),
  h.numberedItem("Complete the full session including the reflection phase."),

  h.emptyLine(),
  h.body("Fill out this form after you finish."),
];

const sections = [
  // Info table
  h.infoTable(infoRows),
  h.emptyLine(),

  // 1. What you are testing
  ...s.whatYouAreTesting(1),

  // 2. How to run your tests
  ...testInstructions,

  // 3. Getting started
  ...s.gettingStarted(3),

  // 4. Articulate phase
  ...s.articulatePhase(4),

  // 5. Challenge phase
  ...s.challengePhase(5),

  // 6. Strengthen phase
  ...s.strengthenPhase(6),

  h.pageBreak(),

  // 7. Reflect phase
  ...s.reflectPhase(7),

  // 8. Intensity override
  ...s.intensityOverride(8),

  // 9. Resistance test
  ...s.resistanceTest(9),

  // 10. Document comprehension test
  ...s.docComprehensionTest(10),

  // 11. Thinking Journey document
  ...s.thinkingJourneyDoc(11),

  // 12. Tone and respect
  ...s.toneAndRespect(12),

  h.pageBreak(),

  // 13. Overall assessment
  ...s.overallAssessment(13),
];

const doc = h.buildDoc(
  "Socratic Teaching Assistant",
  "Evaluation Form",
  "Socratic Teaching Assistant \u2014 Evaluation Form",
  sections
);

h.saveDoc(doc, "/sessions/adoring-gallant-darwin/mnt/Course on AI for Legal Work/socratic-teaching-assistant/Socratic Teaching Assistant - Eval Form.docx");
