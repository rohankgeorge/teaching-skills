# Teaching Skills

Claude Code plugins for teaching and learning. The core principle: AI should increase the cognitive demand on the learner, not decrease it.

---

## Plugins

### Socratic Teaching Assistant

Develops critical thinking through structured provocation. The skill generates questions, challenges, and counterarguments rather than answers or completed work. Two modes:

- Student Mode runs the ACSR protocol (Articulate, Challenge, Strengthen, Reflect) with adaptive intensity calibration, source verification, and cross-session learning via persistent learner profiles.
- Instructor Mode generates provocations and facilitation guides for classroom use.

### Knowledge Exploration and Verification

Guides knowledge acquisition through mastery-based questioning. The skill works through questions designed to be answered by engaging with source material, testing understanding at progressively deeper levels. Seven stages from foundational factual recall through application. Prepares research briefs when no source material exists. Advances students who demonstrate reasonable mastery at each stage, with a ceiling protocol that prevents motivation collapse when a student is stuck.

### How the skills work together

The two skills share a learner profile and can operate independently or as a pipeline in either direction. A student might complete a Socratic session to stress-test their reasoning, then feed the Thinking Journey document into Knowledge Exploration for mastery testing and consolidation. Or a student might start with Knowledge Exploration to build a factual foundation, then move to the Socratic skill to develop arguments on that foundation. Neither skill requires the other.

---

## Installation

Add the marketplace to Claude Code:

```
/plugin marketplace add rohankgeorge/teaching-skills
```

Install the plugin:

```
/plugin install socratic-teaching-assistant@teaching-skills
```

Both skills are included in a single plugin. See the [plugin README](socratic-teaching-assistant/) for detailed usage instructions and alternative deployment options (Claude Projects, ChatGPT).

## License

This work is licensed under [CC BY 4.0](LICENSE).

## Author

Rohan K George
