# Socratic Teaching Assistant

A Claude Code plugin that develops critical thinking through structured challenge
rather than providing answers. Instead of helping you write, it helps you think.

## What This Plugin Does

When a student submits their analysis or argument, this tool does not improve it.
Instead, it asks targeted questions that expose gaps, challenge assumptions, and force
the student to defend their reasoning. The student finishes the session with a stronger
argument and a clearer understanding of their own thinking patterns.

When a student uploads a document they need to understand (a research paper, a case, a
textbook chapter), the tool does not summarise or explain it. Instead, it asks the
student to state what they think the document is arguing, then tests that reading with
targeted questions.

When an instructor submits student work or a discussion topic, the tool generates a
set of provocations the instructor can use to facilitate Socratic discussion in class.

The tool adapts to the student's level — from a Grade 11 IB student to a postgraduate
researcher — and can track growth across multiple sessions.

## Installation

### As a Claude Code Plugin

Clone this repository and register the plugin directory with Claude Code:

```
git clone https://github.com/rohankgeorge/teaching-skills.git
```

Then point Claude Code to the `socratic-teaching-assistant/` directory as a plugin.

The skill triggers automatically when you or a student says things like "challenge my
argument," "Socratic mode," "help me think through this," or "prepare provocations
for class."

Learner profiles are saved to `socratic-learner-profiles/` in your workspace. Thinking
Journey documents are generated as Word, PDF, or in-chat markdown.

### Alternative Deployments

This tool also works on:

- **Claude Projects (claude.ai):** Paste the contents of
  `docs/claude-project-instructions.md` into your project's custom instructions field.
- **ChatGPT Projects:** See `docs/portability-guide.md` for a compressed version that
  fits within ChatGPT's character limits.

## How It Works

### For Students (Student Mode)

The tool runs a four-step protocol called ACSR:

1. **Articulate:** State your position (your own argument) or your reading (of someone
   else's document). The tool will not engage until you commit to a position.
2. **Challenge:** The tool generates targeted provocations that stress-test your reasoning
   or your reading of the document.
3. **Strengthen:** You respond to each challenge — accepting, rebutting, or qualifying.
4. **Reflect:** The tool maps what changed in your thinking and generates a Thinking
   Journey document capturing the full process.

The tool never explains documents to you or gives you answers.

### For Instructors (Instructor Mode)

Provide student work or a topic. The tool generates 8-12 provocations organised by type
of challenge (The Other Side, Hidden Assumptions, Show Your Evidence, etc.), each with
facilitation notes, suggested sequencing, and cautions.

## Adapting to Student Level

The tool calibrates on two independent axes:

- **Language level:** How provocations are phrased (foundational, working, or advanced
  fluency).
- **Provocation intensity:** How demanding the challenges are (Introductory through
  Adversarial).

Students can adjust intensity at any time ("make it harder" / "go easier on me").
Over multiple sessions, the tool tracks growth and adjusts automatically.

## Directory Structure

```
socratic-teaching-assistant/
├── .claude-plugin/plugin.json          Plugin metadata
├── skills/socratic-teaching-assistant/
│   ├── SKILL.md                        Core skill specification
│   └── references/                     Supporting reference documents
│       ├── acsr-protocol-handout.md    Plain-language ACSR explainer
│       ├── learner-profile-template.md Student growth tracking template
│       ├── provocation-lenses.md       Full lens definitions
│       ├── thinking-journey-template.md Output document template
│       ├── calibration-and-self-learning.md Calibration and profile system
│       └── handling-resistance.md      Responses to student resistance
├── docs/
│   ├── claude-project-instructions.md  Claude Projects deployment version
│   └── portability-guide.md            Cross-platform deployment guide
└── evals/
    ├── evals.json                      7 test scenarios
    ├── eval-helpers.js                 Evaluation form generation utilities
    ├── eval-sections.js                Reusable evaluation form sections
    └── build-eval-general.js           General evaluation form builder
```

## Evaluation Framework

The `evals/` directory contains 7 test scenarios covering different user types, modes,
disciplines, and calibration levels. These were used during development to verify skill
adherence across two iterations of testing.

## Questions

**Can students cheat by just agreeing with every provocation?**
The Thinking Journey document records the full interaction. An instructor reviewing it
can see whether the student engaged substantively or superficially. The engagement
summary section flags this directly.

**Does this replace teaching?**
No. In instructor mode, the tool generates questions; the instructor decides which to
use. In student mode, the instructor evaluates the Thinking Journey document.

**Can I modify the provocation lenses or add new ones?**
Yes. Edit `skills/socratic-teaching-assistant/references/provocation-lenses.md`. The
lenses are structured questions — rename, reword, add discipline-specific lenses, or
remove ones not relevant to your context.

## License

This work is licensed under CC BY 4.0. See [LICENSE](../LICENSE) for details.
