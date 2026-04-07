// Shared eval sections used by both Sidharth and general-purpose forms
const h = require("./eval-helpers");

// --- Section: What You Are Testing ---
function whatYouAreTesting(sectionNum) {
  return [
    h.heading1(`${sectionNum}. What You Are Testing`),

    h.body("You are testing an AI tool called the Socratic Teaching Assistant. Unlike normal AI chatbots, this tool does not give you answers or write things for you. Instead, it asks you challenging questions about your own ideas, so that you end up with a stronger argument and a clearer understanding of your own thinking."),

    h.body("The tool also works when you upload a document you need to understand (a paper, a case, a textbook chapter). Instead of explaining it to you, it asks you questions that help you figure out what the document says and whether it holds up."),

    h.body("The tool follows a four-step process called ACSR:"),

    h.bulletItem("Articulate: You write out what you think and why (or, if you uploaded a document, what you think the author is arguing). This includes what you are assuming and what you are least sure about.", "bullets"),
    h.bulletItem("Challenge: The tool reads what you wrote and asks you targeted questions that test your reasoning or your reading.", "bullets"),
    h.bulletItem("Strengthen: You respond to each challenge \u2014 you can change your mind, push back, or add a qualification.", "bullets"),
    h.bulletItem("Reflect: The tool maps what changed in your thinking. You answer three reflection questions. Then it creates a document called a Thinking Journey that records the whole process.", "bullets"),

    h.emptyLine(),
    h.body("Your job is to use this tool and then fill out this form honestly. There are no right or wrong answers here. The goal is to find out what works, what does not, and what needs to change."),
  ];
}

// --- Section: Getting Started ---
function gettingStarted(sectionNum) {
  return [
    h.heading1(`${sectionNum}. Getting Started (First Impressions)`),
    h.body("Fill this out based on the first few minutes of using the tool."),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Was it clear what the tool wanted you to do?",
      "Did the opening explanation make sense?",
      "Did it feel natural to start the conversation?",
    ]),
    h.emptyLine(),
    h.body("What happened when you first opened the tool? Describe in a sentence or two."),
    h.fillBox(3),
    h.emptyLine(),
    h.body("Was there anything confusing about the beginning? If yes, what?"),
    h.fillBox(3),
  ];
}

// --- Section: Articulate Phase ---
function articulatePhase(sectionNum) {
  return [
    h.pageBreak(),
    h.heading1(`${sectionNum}. The Articulate Phase (Writing Out Your Position or Reading)`),
    h.body("The tool asks you to write out your own thinking before it will challenge you. If you were working on your own argument, it asked for your position. If you uploaded a document, it asked you to say what you think the author is arguing. This section is about that experience."),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Did the instructions for writing your position (or reading) make sense?",
      "Did you understand what \"assumptions\" means in context?",
      "Did the tool wait for you to finish before moving on?",
    ]),
    h.emptyLine(),
    h.body("Did the tool try to help you write your position or explain the document to you, or did it make you do the thinking yourself? (It should make you do it yourself.)"),
    h.fillBox(2),
    h.emptyLine(),
    h.body("How did it feel to have to write everything out before getting any feedback? Was it useful or frustrating?"),
    h.fillBox(3),
  ];
}

// --- Section: Challenge Phase ---
function challengePhase(sectionNum) {
  return [
    h.heading1(`${sectionNum}. The Challenge Phase (Questions and Provocations)`),
    h.body("This is the part where the tool reads what you wrote and asks you difficult questions."),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Were the questions relevant to what you actually wrote?",
      "Were the questions genuinely challenging (not just obvious)?",
      "Was the language at the right level for you?",
      "Did it give you one question at a time, or dump many at once?",
      "Did the questions make you rethink any part of your argument or reading?",
    ]),
    h.emptyLine(),
    h.body("Write down the single most useful question the tool asked you. Why was it useful?"),
    h.fillBox(4),
    h.emptyLine(),
    h.body("Write down a question that felt unhelpful, unfair, or confusing (if there was one). What was wrong with it?"),
    h.fillBox(4),
    h.emptyLine(),
    h.body("Did the tool ever give you an answer or tell you what to think? (It should not have.) If it did, describe what happened."),
    h.fillBox(3),
  ];
}

// --- Section: Strengthen Phase ---
function strengthenPhase(sectionNum) {
  return [
    h.heading1(`${sectionNum}. The Strengthen Phase (Your Responses to Challenges)`),
    h.body("In this phase you respond to each challenge: changing your position, pushing back, or qualifying it."),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Did the tool accept your responses without arguing back?",
      "When you changed your position, did it acknowledge that?",
      "When you pushed back, did it respect your reasoning?",
      "Did it notice if you skipped a challenge?",
    ]),
    h.emptyLine(),
    h.body("Describe a moment where you changed your mind about something because of a challenge. What changed, and why?"),
    h.fillBox(4),
    h.emptyLine(),
    h.body("Describe a moment where you pushed back and defended your original position. What did you say?"),
    h.fillBox(4),
  ];
}

// --- Section: Reflect Phase ---
function reflectPhase(sectionNum) {
  return [
    h.pageBreak(),
    h.heading1(`${sectionNum}. The Reflect Phase`),
    h.body("At the end, the tool maps what changed in your thinking and asks you three reflection questions."),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Was the summary of what changed in your thinking accurate?",
      "Were the three reflection questions useful?",
      "Did this phase help you understand your own reasoning better?",
    ]),
    h.emptyLine(),
    h.body("What was the most important thing you learned about your own thinking during this session?"),
    h.fillBox(4),
  ];
}

// --- Section: Intensity Override ---
function intensityOverride(sectionNum) {
  return [
    h.heading1(`${sectionNum}. Intensity Override`),
    h.body("At some point you were asked to tell the tool to make the challenges harder or easier. This section is about that."),
    h.emptyLine(),
    h.body("What did you say to the tool? (Write the exact words you used.)"),
    h.fillBox(2),
    h.emptyLine(),
    h.body("Did the tool respond differently after you asked? What changed?"),
    h.fillBox(3),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Did the tool understand your request to change difficulty?",
      "Was the change in difficulty noticeable?",
    ]),
  ];
}

// --- Section: Resistance Test ---
function resistanceTest(sectionNum) {
  return [
    h.heading1(`${sectionNum}. Asking for Answers (Resistance Test)`),
    h.body("You were asked to try requesting that the tool just give you the answer (or just explain the document). This section is about what happened."),
    h.emptyLine(),
    h.body("What did you say to the tool? (Write the exact words.)"),
    h.fillBox(2),
    h.emptyLine(),
    h.body("How did the tool respond?"),
    h.fillBox(3),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Did it refuse to give you the answer or explain the document?",
      "Was the refusal polite and not annoying?",
      "Did it redirect you back to your own thinking?",
    ]),
  ];
}

// --- Section: Document Comprehension Test ---
function docComprehensionTest(sectionNum) {
  return [
    h.pageBreak(),
    h.heading1(`${sectionNum}. Document Comprehension Test`),
    h.body("This section is about a separate test where you upload a document you need to understand (a paper, a textbook chapter, a case study, an article) and use the tool to work through it. If you did not do this test, write \"Did not test this\" and skip to the next section."),
    h.emptyLine(),
    h.body("What document did you upload? (Title and a brief description.)"),
    h.fillBox(2),
    h.emptyLine(),
    h.body("When you uploaded the document, did the tool explain it to you or ask you to explain it? (It should have asked you to explain it.)"),
    h.fillBox(3),
    h.emptyLine(),
    h.body("If you said \"I don't understand it,\" what happened? Did the tool explain the document, or did it ask you to try reading a specific part and guess what it means?"),
    h.fillBox(3),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Did the tool make you do the reading yourself (not explain it for you)?",
      "Were the questions about the actual content of the document?",
      "Did the questions help you understand parts you initially missed?",
      "By the end, did you understand the document better than when you started?",
      "Was this more useful than just reading a summary would have been?",
    ]),
    h.emptyLine(),
    h.body("What is one thing about the document you understood after the session that you did not understand before?"),
    h.fillBox(4),
    h.emptyLine(),
    h.body("Did the tool ever slip and just explain something instead of asking you about it? If yes, describe what happened."),
    h.fillBox(3),
  ];
}

// --- Section: Thinking Journey Document ---
function thinkingJourneyDoc(sectionNum) {
  return [
    h.heading1(`${sectionNum}. The Thinking Journey Document`),
    h.body("If the tool generated a final document (a Thinking Journey), answer these questions about it. If it did not generate one, write \"No document was generated\" and skip to the next section."),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Does it accurately show your original position or initial reading?",
      "Does it accurately show the challenges you received?",
      "Does it accurately show how you responded?",
      "Does it accurately show what changed in your thinking?",
      "Would you find this document useful for studying later?",
      "Would you be comfortable submitting it to a teacher?",
    ]),
    h.emptyLine(),
    h.body("Is there anything in the document that is wrong or that misrepresents what you said?"),
    h.fillBox(3),
  ];
}

// --- Section: Tone and Respect ---
function toneAndRespect(sectionNum) {
  return [
    h.heading1(`${sectionNum}. Tone and Respect`),
    h.body("This is about how the tool felt to interact with \u2014 not whether it was technically correct, but whether you felt respected and taken seriously."),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Did the tool treat you like a serious thinker?",
      "Did it feel like talking to a smart, demanding teacher (good) or a patronising adult (bad)?",
      "Was the overall tone appropriate for your level?",
      "Would you use this tool again?",
    ]),
    h.emptyLine(),
    h.body("Describe the tone in your own words. What did it feel like to use this tool?"),
    h.fillBox(4),
  ];
}

// --- Section: Overall Assessment ---
function overallAssessment(sectionNum) {
  return [
    h.heading1(`${sectionNum}. Overall Assessment`),
    h.emptyLine(),
    h.ratingExplainer(),
    h.ratingTable([
      "Overall, how useful was this tool for your thinking?",
      "How likely are you to use it again for real work?",
    ]),
    h.emptyLine(),
    h.body("What was the single best thing about this tool?"),
    h.fillBox(3),
    h.emptyLine(),
    h.body("What was the single worst thing about this tool?"),
    h.fillBox(3),
    h.emptyLine(),
    h.body("If you could change one thing about how it works, what would it be?"),
    h.fillBox(3),
    h.emptyLine(),
    h.body("Anything else you want to say?"),
    h.fillBox(4),
  ];
}

module.exports = {
  whatYouAreTesting, gettingStarted, articulatePhase, challengePhase,
  strengthenPhase, reflectPhase, intensityOverride, resistanceTest,
  docComprehensionTest, thinkingJourneyDoc, toneAndRespect, overallAssessment,
};
