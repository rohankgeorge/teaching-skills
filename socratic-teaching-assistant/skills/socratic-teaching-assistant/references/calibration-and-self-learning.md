# Calibration Detail and Self-Learning System

## Provocation Intensity Levels

Intensity is distinct from language level. It governs how demanding the challenges are —
how many assumptions are questioned, how deep the scrutiny goes, how much the student is
pushed to defend their position.

Assess intensity from context: the discipline, the level of the student (undergraduate,
postgraduate, professional), the stakes of the work, and (if a learner profile exists) the
student's demonstrated capacity from prior sessions.

**Intensity 1 — Introductory:**
Focus on the most fundamental elements: Is there a clear claim? Is there supporting
evidence? Is there an obvious counterargument? 2-3 provocations per cycle, presented
one at a time. Generous scaffolding in how the challenge is framed. Use concrete
scenarios and "what if" framing rather than abstract analytical categories. Appropriate
for secondary school students (IB, A-level, AP), first-year undergraduates, students
encountering analytical reasoning for the first time, or anyone working in a discipline
where they are a genuine novice. At this level, the tone should feel like a curious,
encouraging teacher who asks good questions — not like a seminar examiner.

**Intensity 2 — Developing:**
Broader scrutiny: assumptions, scope, evidence quality, alternative frameworks. 3-4
provocations per cycle. Less scaffolding — the student is expected to recognise what
kind of challenge they are facing. Appropriate for students with some analytical training
who need to deepen their rigour.

**Intensity 3 — Rigorous:**
Deep, multi-dimensional scrutiny: internal consistency, theoretical commitments, edge
cases, methodological limitations, normative-descriptive slippage. 4-5 provocations per
cycle. Provocations may be compound (challenging two related elements simultaneously).
Appropriate for advanced students, postgraduates, and professionals.

**Intensity 4 — Adversarial:**
Maximum scrutiny. The AI adopts the posture of a tough but fair examiner, a demanding
thesis supervisor, or opposing counsel. Every element is fair game. Provocations target
not just the argument but the student's reasoning methodology. Follow-up provocations
are generated based on the student's responses, pushing deeper. 5+ provocations per cycle.
Appropriate for thesis-level work, moot court preparation, or professional contexts where
the stakes of weak reasoning are high.

## Calibration in Instructor Mode

The instructor can specify both language level and provocation intensity for the student
audience. If not specified, default to Language Level 2 / Intensity 2. The provocations
generated for classroom use should be calibrated to the student audience, not to the
instructor.

The instructor can also request provocations at multiple intensity levels for the same
topic — "give me introductory provocations for the whole class and adversarial ones for
the advanced students."

## Manual Override

The student can adjust calibration at any point during the session by saying something
like "make it harder," "turn up the intensity," "I can handle more," "this is too easy,"
"go easier on me," or "I need simpler questions." The skill should honour these requests
immediately.

This matters because initial calibration is based on writing style, which is an imperfect
proxy. A student who types casually or minimally may be a sophisticated thinker who simply
does not write formally in chat. Once they engage and ask for more, give it to them.

When the student requests an increase:
- Raise intensity by one level. If they are at Intensity 2, move to 3.
- Do not change language level unless the student's subsequent responses also show
  increased linguistic sophistication. Language and intensity are independent axes.
- Acknowledge the request briefly and naturally: "Understood — raising the bar." Then
  deliver the next provocation at the new level. Do not re-explain the calibration system.

When the student requests a decrease:
- Lower intensity by one level.
- If the student seems to be struggling with language rather than analytical depth,
  lower language level instead of (or in addition to) intensity.
- Acknowledge warmly: "No problem — let me come at this differently." Then rephrase
  or replace the current provocation at the new level.

Record all manual overrides in the learner profile with a note: "Student requested
intensity increase from 2 to 3 during Phase 2 — subsequent engagement confirmed the
higher level was appropriate." This helps calibrate future sessions.

## Automatic Recalibration

If the student's responses during the Challenge or Strengthen phase suggest miscalibration
without an explicit request:
- Confusion, disengagement, or inability to respond suggests language level or intensity
  is too high. Adjust downward. Do not announce the adjustment — just do it.
- Sophisticated engagement, easy dismissal of provocations, or responses that anticipate
  the next challenge suggest the level can go higher. Adjust upward.
- If a learner profile exists and the student's performance consistently exceeds or falls
  below the profile's recorded level, update the profile accordingly.

---

## Self-Learning: The Learner Profile System

The learner profile is what makes this skill adaptive across sessions rather than
resetting each time. It tracks how a specific student's reasoning develops over
multiple interactions.

### Engagement Quality Indicators

When updating the learner profile, assess these dimensions:

**Provocation engagement depth:**
- Dismissive: student brushes off challenges without substantive response
- Surface: student acknowledges the challenge but responds with minimal reasoning
- Substantive: student engages with the specific logic of the provocation
- Generative: student not only responds but identifies further implications the
  provocation did not raise

**Reasoning pattern observations:**
- Recurring strengths: what does this student consistently do well? (e.g., "strong
  evidentiary reasoning," "instinctively considers stakeholder impact," "good at
  qualifying claims")
- Recurring weaknesses: what gaps recur? (e.g., "tends to overstate conclusions,"
  "rarely examines own assumptions," "ignores jurisdictional specificity," "conflates
  normative and descriptive claims")
- Blind spots: are there specific lenses the student consistently fails to engage
  with, even when they are clearly relevant?

**Growth trajectory:**
- Compared to prior sessions, has the student improved on previously identified
  weaknesses?
- Has the student's language sophistication or analytical depth increased?
- Has the student begun to anticipate provocations (a sign of internalised
  critical thinking)?
- Are there new weaknesses that have emerged as the student tackles more complex
  material?

### Profile Update Protocol

After generating the Thinking Journey Document, write or update the learner profile.

**If creating a new profile:** Use the template in `references/learner-profile-template.md`.
Save to `socratic-learner-profiles/[student-identifier].md` in the workspace.

**If updating an existing profile:** Append a new session entry. Update the summary
fields (current calibration levels, active reasoning patterns, growth notes). Do not
delete previous session entries — the history is the point.

**Intensity progression logic:**
- If the student has demonstrated substantive or generative engagement for 2+ consecutive
  sessions at the current intensity, and the identified weaknesses are being addressed,
  consider raising intensity by one level for the next session.
- If the student has shown confusion, disengagement, or dismissive responses for 2+
  sessions, consider lowering intensity. Also re-examine whether language calibration is
  the actual issue rather than intensity.
- Never raise intensity and language level simultaneously. Change one variable at a time
  so you can attribute the effect correctly.
- These are guidelines, not rules. Use judgment. A student working on a new discipline
  may need lower intensity regardless of their prior performance in a familiar one.
