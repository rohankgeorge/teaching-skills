# Document Output: The Thinking Journey

At the end of the ACSR protocol (Phase 4), generate a structured document that captures
the full analytical journey. This document serves two purposes simultaneously:

**For the student:** A study aid that makes their reasoning process visible and
reviewable. The student can return to this document to see how their thinking evolved,
what patterns recur in their reasoning, and what they tend to miss. Over multiple
sessions, a collection of Thinking Journey documents becomes a personal record of
intellectual development.

**For the instructor:** An evaluation tool that shows not just the student's final
position but the quality of their engagement with the process. The instructor can
assess: Did the student engage substantively with the provocations or dismiss them?
Did they modify their position in response to strong challenges, or dig in regardless?
Did they identify genuine weaknesses in their own reasoning? The Thinking Journey
document makes the invisible work of thinking visible and assessable.

The document must capture the full conversation — every provocation issued, every
student response, every follow-up — so that neither the student nor the instructor
needs to scroll through a chat transcript to reconstruct what happened. The document
is the authoritative record.

Format the document in markdown. The instructor or student can convert it to their
preferred format.

```markdown
# Thinking Journey: [Topic/Question]

## Metadata
- Student: [name or identifier, if provided]
- Date: [date]
- Session number: [if learner profile exists, which session is this]
- Discipline: [identified discipline]
- Language calibration: [Level 1/2/3]
- Provocation intensity: [starting level; note if changed mid-session]
- Calibration adjustments: [any manual overrides or automatic recalibrations, with
  the reason — e.g., "Student requested increase from Intensity 2 to 3 during Phase 2"]
- Provocation lenses used: [list]

---

## Phase 1: Original Position / Initial Reading (Articulate)

[For own-argument sessions: The student's original articulated position, reproduced
verbatim. Do not edit, summarise, or clean up the student's writing. The raw text is
the baseline.]

[For document-comprehension sessions: The student's initial reading of the source
document, reproduced verbatim. Include what they said the author argues, what evidence
they identified, and what they found unclear.]

Self-identified assumptions:
[What the student flagged as their own assumptions — or, for document comprehension,
what assumptions they identified in the author's work]

Self-identified area of least confidence:
[What the student said they were least sure about — or, for document comprehension,
what part of the document they found most difficult]

---

## Phase 2: Challenges Received (Challenge)

### Provocation 1: [Lens Name]
Target: [What element was challenged]
Type of challenge: [questioning evidence / testing scope / surfacing assumptions /
introducing competing perspective / other]
Challenge: [The provocation as stated]

### Provocation 2: [Lens Name]
[etc. for each provocation issued, including any follow-up provocations generated
during Phase 3]

---

## Phase 3: Responses and Revisions (Strengthen)

### Response to Provocation 1
Student's response: [reproduced verbatim]
Disposition: [Accepted and modified / Rebutted / Incorporated as qualification /
Partially addressed / Not addressed]
Engagement depth: [Dismissive / Surface / Substantive / Generative — see definitions
in the Engagement Quality Indicators section of the skill]

### Response to Provocation 2
[etc.]

### Follow-up Provocations (if any)
[Any additional provocations generated in response to the student's answers, with
the student's responses to those follow-ups]

### Unaddressed Provocations
[List any provocations the student did not engage with. For each, note whether
the student stated a reason ("I don't think this applies because...") or simply
did not respond.]

---

## Phase 4: Reflection

### What Changed: Original Position vs. Revised Position
[Structured comparison — not a quality judgment, but a map:]
- Claims modified: [list each, with direction: strengthened / qualified / abandoned /
  replaced / unchanged]
- Assumptions surfaced: [assumptions that were unstated in Phase 1 but made explicit
  by Phase 3]
- Evidence added or re-evaluated: [new evidence introduced, or existing evidence
  reappraised]
- Perspectives incorporated: [viewpoints the student did not consider initially but
  engaged with during the protocol]
- Gaps remaining: [challenges the student did not resolve — not as criticism, but as
  an honest map of where the analysis still has open questions]

### Student Reflections
- Most difficult challenge: [student's answer, verbatim]
- Discovery about own reasoning: [student's answer, verbatim]
- What they would do differently: [student's answer, verbatim]

---

## Revised Position / Final Reading

[For own-argument sessions: The student's revised position after the full protocol,
reproduced verbatim. If the student did not produce a full revised position, include
whatever they did produce. If nothing, note "Student elected not to produce a revised
position" and include their explanation if given.]

[For document-comprehension sessions: The student's revised reading of the source
document — what they now understand the author to be arguing, having worked through
the provocations. Note what changed from their initial reading.]

---

## Engagement Summary (for instructor use)

This section provides a concise overview for instructor evaluation. It is generated
by the AI based on the session, not written by the student.

Overall engagement quality: [Dismissive / Surface / Substantive / Generative]

Strongest engagement: [Which provocation(s) the student engaged with most
substantively, and what that engagement looked like]

Weakest engagement: [Which provocation(s) the student dismissed or engaged with
only superficially]

Reasoning patterns observed:
- Strengths: [What the student consistently did well — e.g., "strong at identifying
  scope limitations," "engaged seriously with counterarguments"]
- Weaknesses: [What the student consistently struggled with — e.g., "did not
  distinguish between descriptive and normative claims," "dismissed evidentiary
  challenges without addressing them"]

Calibration notes: [Whether the initial calibration was appropriate, whether
adjustments were made, and whether the student's engagement suggests a different
starting point for next time]

Recommended focus for next session: [If a learner profile is being maintained,
what should the next session prioritise?]
```

## When to Generate the Document

Generate the Thinking Journey Document after the student has completed Phase 4
(reflection questions answered). If the student leaves the session before completing
all phases, generate a partial document covering whatever phases were completed, with
a note indicating where the session ended and why.

## Format Preference

Before generating the document, ask the student how they would like to receive it.
Keep this simple — one question, no jargon:

"I have your full Thinking Journey ready. How would you like it? I can give you:
- A document you can open in Word (best if you need to submit it or print it)
- A PDF (best if you just want to read or share it)
- A text version right here in the chat (if you just want to see it now)"

Based on their answer:
- **Word (.docx):** Generate a .docx file using the document template. Save it to the
  workspace and provide a link.
- **PDF:** Generate a PDF. Save it to the workspace and provide a link.
- **In-chat / markdown:** Produce the document as a formatted message in the conversation.
  The student can copy-paste it.
- **If the student does not have a preference or does not respond:** Default to producing
  it in-chat, and also save a .docx file to the workspace if file creation is available.

Do not assume the student knows what markdown is or how to convert file formats. The
skill should handle the conversion, not the student.

If the session is instructor-mediated (instructor mode was used to generate
provocations that were then discussed in class), the Thinking Journey Document is not
generated automatically — it only applies to student-mode sessions where the student's
individual responses are captured. In instructor mode, offer the facilitation document
in the same format-preference pattern (Word, PDF, or in-chat).

---

## Growth Notes (from learner profile, if available)

[If this is session 2+, include a brief note on what has changed since previous
sessions — patterns addressed, new strengths, persistent gaps. This section is
for the student and instructor to see the trajectory, not just the snapshot.]
