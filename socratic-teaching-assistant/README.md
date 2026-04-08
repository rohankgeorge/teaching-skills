# Socratic Teaching Assistant

A Claude Code plugin that treats AI as a thinking partner rather than a drafting assistant. The core principle: AI should increase the cognitive demand on the learner, not decrease it.

This plugin contains two complementary skills that share a learner profile. The Socratic Teaching Assistant develops reasoning through structured challenge — it generates questions, provocations, and counterarguments rather than answers or completed work. The Knowledge Exploration and Verification skill builds and verifies understanding of a body of knowledge through mastery-based questioning. The two skills can operate independently or as a pipeline in either direction.

---

## What This Plugin Does

When a student submits their analysis or argument, the Socratic Teaching Assistant does not improve it. It asks targeted questions that expose gaps, challenge assumptions, and force the student to defend their reasoning. The student finishes the session with a stronger argument and a clearer understanding of their own thinking patterns.

When a student needs to build or verify knowledge — understanding a body of material, testing their grasp of a topic, preparing a factual foundation — the Knowledge Exploration and Verification skill guides them through progressively deeper questioning. It does not explain or teach. It asks questions the student can answer by engaging with source material, and it tests whether their understanding holds up at each stage.

When an instructor submits student work or a discussion topic, the Socratic Teaching Assistant generates a set of provocations the instructor can use to facilitate Socratic discussion in class, with facilitation notes, sequencing suggestions, and cautions.

A student can use either skill first, or both independently. A common pattern: complete a Socratic session to stress-test reasoning, then feed the Thinking Journey document into Knowledge Exploration for mastery testing and consolidation. The reverse also works — build a knowledge foundation first, then move to Socratic challenge.

Both skills adapt to the student's level, from a Grade 11 IB student to a postgraduate researcher, and can track growth across multiple sessions.

---

## Installation

### As a Claude Code Plugin

Add the marketplace to Claude Code:

```
/plugin marketplace add rohankgeorge/teaching-skills
```

Install the plugin:

```
/plugin install socratic-teaching-assistant@teaching-skills
```

Both skills are included. The Socratic Teaching Assistant triggers on phrases like "challenge my argument," "Socratic mode," "help me think through this," or "prepare provocations for class." The Knowledge Exploration and Verification skill triggers on "help me understand this material," "test my knowledge," "mastery test," or "explore this topic."

### Alternative Deployments

This tool also works on:

- Claude Projects (claude.ai): Paste the contents of `docs/claude-project-instructions.md` into your project's custom instructions field.
- ChatGPT Projects: See `docs/portability-guide.md` for a compressed version that fits within ChatGPT's character limits.

Note: Alternative deployments support the Socratic Teaching Assistant only. The Knowledge Exploration and Verification skill requires Claude Code for full functionality.

---

## How It Works

### Socratic Teaching Assistant (Student Mode)

The skill runs a four-step protocol called ACSR:

1. Articulate: State your position (your own argument) or your reading (of someone else's document). The skill will not engage until you commit to a position.
2. Challenge: The skill generates targeted provocations that stress-test your reasoning or your reading of the document.
3. Strengthen: You respond to each challenge — accepting, rebutting, or qualifying.
4. Reflect: The skill maps what changed in your thinking and generates a Thinking Journey document capturing the full process.

At the start of each session, the skill gathers Student Context — four dimensions that shape how it calibrates: your level of study, desired understanding level, purpose, and intended outcome.

When you cite a source in response to a provocation, the skill verifies both the source itself and your characterisation of it. If there is a discrepancy, it flags the problem and directs you back to the source — it does not supply the correct fact.

The skill never explains documents to you or gives you answers. It asks questions that help you figure things out yourself.

### Knowledge Exploration and Verification

The skill guides knowledge acquisition through a seven-stage mastery progression:

1. Foundational Factual — core facts, central problem, context
2. Interpretation — paraphrasing, author's claims vs. implications
3. Structural — how the argument or body of knowledge is organised
4. Logical — reasoning validity, inferential steps
5. Analytical — evaluating evidence quality, identifying limitations
6. Opinion-seeking — forming and defending a position on the material
7. Application — applying understanding to new contexts or problems

When no source material exists, the skill prepares a research brief tailored to the student's level and intended outcome before questioning begins.

The skill does not keep students locked at one stage indefinitely. If a student has engaged with a stage for more than three question-response cycles without reaching the mastery threshold, the skill provides a consolidation note, advances the student, and documents the gap for future sessions.

At the end of a session, the skill produces a consolidation output: either an understanding synthesis (when the goal is comprehension) or a deliverable handoff plan (when the student's intended outcome is a specific piece of work).

### Instructor Mode

You provide student work or a topic. The Socratic Teaching Assistant generates 8-12 provocations organised by the type of challenge (The Other Side, Hidden Assumptions, Show Your Evidence, and others). Each provocation comes with facilitation notes: suggested sequencing, which ones are likely to generate discussion, and which ones to use carefully.

The output is a facilitation document you can print or reference during class.

---

## What Changed in Version 2

1. Source Verification Protocol: when students cite sources, the skill verifies both the source and the student's characterisation of it. Scaffolding is calibrated to the student's level.

2. Conditional Worked Examples: after Phase 3, when a student has engaged substantively but hit a reasoning ceiling on a specific provocation, the skill models the one reasoning move the student missed. Never a full answer.

3. Spaced Retrieval via Learner Profile: weaknesses identified in previous sessions are tagged with review intervals. Due items influence provocation lens selection in future sessions.

4. Student Context: four dimensions gathered at session start (level of study, desired understanding level, purpose, intended outcome) that shape calibration, provocation selection, and downstream handoff.

5. Research Brief Logic: fact-dependent topics (geopolitics, regulatory analysis, current affairs) receive a research brief before questioning begins. Reasoning-dependent topics (philosophy, ethics, open normative questions) are researched internally to inform lens selection.

6. Resistance as Diagnostic: when a student says "just tell me the answer," the skill diagnoses whether this is a competence signal (student engaged well but is now stuck) or a preference signal (student has not engaged substantively). Different responses for each.

7. Document Comprehension Scaffolding: a comprehension floor assessment distinguishes students who can parse the text but misunderstand it (question-only protocol) from students who cannot parse the text at all (brief contextual framing at the paragraph level before returning to questions).

8. New companion skill: Knowledge Exploration and Verification — a seven-stage mastery progression that handles knowledge acquisition, comprehension testing, and consolidation. Shares the learner profile with the Socratic skill.

---

## Adapting to Student Level

The Socratic Teaching Assistant calibrates on two independent axes:

Language level: how the provocations are phrased. A student writing informally in simple sentences gets clear, plain questions. A student writing in full academic prose gets dense, multi-layered challenges.

Provocation intensity: how demanding the challenges are. Ranges from Introductory (basic: is there a clear claim? is there evidence?) to Adversarial (maximum scrutiny, every element targeted, iterative follow-ups).

Students can ask the tool to increase or decrease the intensity at any time ("make it harder" / "go easier on me").

Over multiple sessions, the tool tracks growth and adjusts automatically.

---

## Directory Structure

```
socratic-teaching-assistant/
├── .claude-plugin/plugin.json            Plugin metadata
├── skills/
│   ├── socratic-teaching-assistant/
│   │   ├── SKILL.md                      Core skill specification
│   │   └── references/                   Supporting reference documents
│   │       ├── acsr-protocol-handout.md
│   │       ├── learner-profile-template.md
│   │       ├── provocation-lenses.md
│   │       ├── thinking-journey-template.md
│   │       ├── calibration-and-self-learning.md
│   │       └── handling-resistance.md
│   └── knowledge-exploration-verification/
│       ├── SKILL.md                      KEV skill specification
│       └── references/
│           ├── question-progression-framework.md
│           └── mastery-assessment-template.md
└── docs/
    ├── claude-project-instructions.md    Claude Projects deployment version
    └── portability-guide.md              Cross-platform deployment guide
```

---

## Questions

**Can students cheat by just agreeing with every provocation?**
The Thinking Journey document records the full interaction. An instructor reviewing it can see whether the student engaged substantively (explained why they changed their position) or superficially (just said "yes, good point" to everything). The engagement summary section flags this directly.

**Does this replace teaching?**
No. In instructor mode, the tool generates questions; the instructor decides which to use. In student mode, the instructor evaluates the Thinking Journey document.

**Can I modify the provocation lenses or add new ones?**
Yes. Edit `skills/socratic-teaching-assistant/references/provocation-lenses.md`. The lenses are structured questions — rename, reword, add discipline-specific lenses, or remove ones not relevant to your context.

**What happens when a student cites a source that is wrong?**
The skill verifies both the source and how the student described it. If the student mischaracterised the source, the skill points them back to the relevant section and asks them to re-read it. If the source itself is unreliable or outdated, the skill flags the concern — but never provides the correct fact. The student does the corrective work.

**Does the tool ever just give the student the answer?**
No. The closest it comes is the conditional worked example: after Phase 3, when a student has engaged substantively but hit a reasoning ceiling on one specific provocation, the skill models the single reasoning move the student missed. This is not a model answer — it is one reasoning step on one challenge, followed by a self-explanation prompt asking the student to compare their approach.

**What if a student says "just tell me the answer"?**
The skill diagnoses before responding. If the student had been engaging well and is now stuck (competence signal), the skill rephrases the provocation at a lower intensity or through a different lens. If the student has not engaged substantively (preference signal), the skill maintains the redirect but does so warmly, inviting the student to try responding to just one provocation.

**How do the two skills relate to each other?**
They share a learner profile and can operate independently or as a pipeline in either direction. The Socratic Teaching Assistant develops reasoning; Knowledge Exploration and Verification develops understanding of a body of knowledge. A student might use both on the same topic — building knowledge first, then stress-testing their reasoning — or use each independently on different topics. Neither skill requires the other.

---

## License

This work is licensed under CC BY 4.0. See [LICENSE](../LICENSE) for details.
