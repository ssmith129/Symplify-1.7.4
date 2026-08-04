# Voice Documentation AI — Mockup Blueprint

**Reference scope (strict, user-confirmed):**
`src/feature-module/ai/voice-documentation/{VoiceRecorder,TranscriptionEditor,NoteFormatter,MedicalTermsHighlighter}.tsx`

**Source state at audit time:** all four files are scaffolds with `// TODO` markers. No SCSS partial exists (`_voice-documentation.scss` is absent). No parent composition, no state machine, no AI confidence UI, no HIPAA disclosure, no error handling.

Per anti-fabrication policy, every screen below states what the source actually provides and tags everything else `[GAP]`, `[ASSUMED]`, or `[FABRICATED-PLAUSIBLE]`. The Fabrication Ledger at the end is exhaustive.

---

## 1. Mockup Blueprint

### Screen 1 — Entry / Activation
**Workflow position:** clinician opens the Voice Documentation surface, no recording active.

**Layout:** single-column card on a page shell. `[ASSUMED]` page shell = `PageHeader` + Bootstrap container, matching pattern in `pages/ai-modules/shift-handoff/shiftHandoff.tsx`.

**Component inventory (from source):**
- Root: `<div className="voice-recorder">` with `<h3>Voice Recorder</h3>`
- Controls block: `<div className="recorder-controls">` containing:
  - `<button className="btn-record">Start Recording</button>`
  - `<button className="btn-stop" disabled>Stop</button>`
- Indicator: `<div className="recording-indicator"><span>Ready to record</span></div>`

**Props the entry state must respect** (from source): `maxDuration?: number` (default `300` seconds), `onRecordingComplete?(audioBlob: Blob)`, `onTranscriptionReady?(text: string)`.

**State variants covered by source:** idle only.

**AI affordances:** `[GAP — REFERENCE PATTERN NOT FOUND]` — no confidence indicator, no model identity, no privacy disclosure in source.

**Accessibility:** `[GAP]` — no ARIA, no focus rings, no live-region patterns in source. Minimum addition required by brief: `role="status"`, `aria-live="polite"` on `.recording-indicator`. `[FABRICATED-PLAUSIBLE]`.

**Source reference:** `VoiceRecorder.tsx`.

---

### Screen 2 — Active Listening / Capture
**Workflow position:** clinician has tapped Start Recording; capture in progress.

**What source provides:** `[GAP]` — `VoiceRecorder.tsx` body is `// TODO: Implement voice recording logic with Web Audio API`. Only the button pair exists; no waveform, mic-state, pause/resume, or privacy indicator is present.

**Minimum derivable mockup (source-only):**
- Same `.voice-recorder` root.
- `.btn-record` becomes a Stop affordance `[ASSUMED]` (source labels Stop as a separate, initially-disabled button — the state flip is not implemented).
- `.recording-indicator` text changes to a recording-active label — exact copy `[GAP]`.

**Push-to-talk vs hands-free vs ambient modes:** `[GAP]` — no mode selector in source. Brief explicitly conditions these on reference support.

**Waveform visualization:** `[GAP]` — not present.

**Pause/Resume:** `[GAP]` — not present.

**Privacy / recording indicator:** `[GAP]`.

**Source reference:** `VoiceRecorder.tsx` (idle scaffold only).

---

### Screen 3 — Real-Time Transcription Review
**Workflow position:** capture ended (or live), transcript shown for review.

**Component inventory (from source):**
- Root: `<div className="transcription-editor">` with `<h3>Transcription Editor</h3>`
- Body: `<textarea className="transcription-textarea" placeholder="Transcription will appear here..." />`
- Actions: `.editor-actions` with `.btn-save` (disabled when `readOnly`) and `.btn-clear`

**Props (from source):** `initialText`, `onChange(text)`, `onSave(text)`, `readOnly`.

**Speaker attribution:** `[GAP]`.

**Per-token confidence highlighting:** `[GAP]`.

**Inline correction UX (token tap → edit popover):** `[GAP]` — source uses a single `<textarea>`, not a tokenized editor.

**Source reference:** `TranscriptionEditor.tsx`.

---

### Screen 4 — AI Structuring Output (Note Format)
**Workflow position:** raw transcript is reformatted into a clinical note shape.

**Component inventory (from source):**
- Root: `<div className="note-formatter">` with `<h3>Note Formatter</h3>`
- Selector: `.format-selector` with label `"Format Type:"` and `<select>` of four options:
  - `soap` → "SOAP Note"
  - `narrative` → "Narrative"
  - `structured` → "Structured"
  - `custom` → "Custom"
- Preview: `.formatted-preview` with `<h4>Preview</h4>` and `.preview-content` (fallback copy `"No content to format"`).

**Props (from source):** `rawText?: string`, `format?: 'soap'|'narrative'|'structured'|'custom'` (default `'soap'`), `onFormatted(formattedNote: string)`.

**SOAP field layout (S/O/A/P regions):** `[GAP]` — source renders `.preview-content` as a single block; no S/O/A/P substructure is defined.

**SBAR option:** `[GAP]` — not in source enum. Brief allows "as supported by reference patterns" — SBAR is excluded.

**Format-switch behavior (preserve edits across switches, diff view):** `[GAP]`.

**Source reference:** `NoteFormatter.tsx`.

---

### Screen 5 — Confidence Threshold & Review Gates
**Workflow position:** before save, low-confidence segments require attestation.

**Source coverage:** `[GAP]` — no confidence field on any prop, no threshold logic, no gate UI in any of the four reference files.

**Brief requires** a visible confidence indicator + clinician override path on every AI state. This contradicts strict-source mode for this screen. Two options:
1. Mark the screen `[GAP — BLOCKING]` and ship without it.
2. Tag the screen `[FABRICATED-PLAUSIBLE]` end-to-end.

This blueprint takes option 1.

**Source reference:** none.

---

### Screen 6 — Edit / Redact / Revise (incl. PHI redaction)
**Workflow position:** clinician modifies transcript or note prior to sign-off.

**What source provides:** `TranscriptionEditor.tsx` exposes a plain editable `<textarea>` and a `readOnly` prop. That is the entirety of the edit surface.

**Redaction affordance:** `[GAP]`.

**PHI detection/highlighting:** `[GAP]` — `MedicalTermsHighlighter.tsx` enumerates `medication | diagnosis | procedure | anatomy | symptom`. PHI (names, MRN, dates, addresses) is not in the category enum.

**Edit lineage / version history:** `[GAP]`.

**Source reference:** `TranscriptionEditor.tsx`, `MedicalTermsHighlighter.tsx`.

---

### Screen 7 — Save / Sign / Route to EHR
**Workflow position:** final commit of the note.

**What source provides:** a single `<button className="btn-save">Save</button>` in `TranscriptionEditor.tsx` and an `onSave(text)` callback. That is all.

**Electronic signature affordance:** `[GAP]`.

**EHR routing (destination picker, encounter binding):** `[GAP]`.

**Audit trail / confirmation receipt:** `[GAP]`.

**Source reference:** `TranscriptionEditor.tsx`.

---

### Screen 8 — Errors & Recovery
**Workflow position:** capture or transcription fails.

**Source coverage:** `[GAP]` — none of the four files contain any error state, error copy, or recovery UI.

Sub-cases all `[GAP]`:
- Low confidence
- Unrecognized speaker
- Network loss
- Microphone permission denied

**Source reference:** none.

---

### Screen 9 — Empty / Loading / Skeleton
**What source provides:**
- Empty: `TranscriptionEditor` placeholder `"Transcription will appear here..."`; `NoteFormatter` preview fallback `"No content to format"`; `MedicalTermsHighlighter` text fallback `"No text to analyze"`.
- Loading: `[GAP]`.
- Skeleton: `[GAP]`.

**Source reference:** all four files (empty copy only).

---

### Bonus surface — Medical Terms Legend (derivable in full)
**Component inventory (from source):**
- Root: `<div className="medical-terms-highlighter">` with `<h3>Medical Terms</h3>`
- Body: `.text-content` (fallback `"No text to analyze"`)
- Legend: `.terms-legend` containing five `.legend-item` spans:
  - `medication` → "Medications"
  - `diagnosis` → "Diagnoses"
  - `procedure` → "Procedures"
  - `anatomy` → "Anatomy"
  - `symptom` → "Symptoms"

**MedicalTerm interface (from source):** `{ term: string; category: 'medication'|'diagnosis'|'procedure'|'anatomy'|'symptom'; definition?: string }`. `onTermClick(term)` callback.

**Highlight colors per category:** `[GAP]` — no SCSS partial exists.

**Source reference:** `MedicalTermsHighlighter.tsx`.

---

## 2. Source Coverage & Gap Analysis

| Screen / State | Reference TSX Source | Pattern Coverage | Gaps Flagged | Fabrication Risk |
|---|---|---|---|---|
| 1. Entry / Activation | `VoiceRecorder.tsx` | Partial (controls + title + idle indicator) | `[GAP]` AI affordances, `[GAP]` ARIA, `[ASSUMED]` page shell | Low |
| 2. Active Listening / Capture | `VoiceRecorder.tsx` (TODO body) | Missing | `[GAP]` waveform, modes, privacy indicator, pause/resume, copy | High if rendered |
| 3. Transcription Review | `TranscriptionEditor.tsx` | Partial (textarea + Save/Clear) | `[GAP]` speaker attribution, confidence highlight, tokenized edit | High if rendered |
| 4. AI Structuring (Note Format) | `NoteFormatter.tsx` | Partial (selector + preview shell) | `[GAP]` SOAP S/O/A/P layout, `[GAP]` SBAR, `[GAP]` format-switch behavior | Medium |
| 5. Confidence & Review Gates | none | Missing | `[GAP — BLOCKING]` no confidence field anywhere in source | Excluded |
| 6. Edit / Redact / Revise | `TranscriptionEditor.tsx`, `MedicalTermsHighlighter.tsx` | Partial (plain edit only) | `[GAP]` redaction, `[GAP]` PHI detection, `[GAP]` lineage | High if rendered |
| 7. Save / Sign / Route to EHR | `TranscriptionEditor.tsx` (Save button + callback) | Partial (button only) | `[GAP]` signature, EHR routing, audit | High if rendered |
| 8. Errors & Recovery | none | Missing | `[GAP]` all four sub-cases | Excluded |
| 9. Empty / Loading / Skeleton | all four (empty copy only) | Partial (empty only) | `[GAP]` loading, skeleton | Low for empty, excluded for the rest |
| Bonus: Medical Terms Legend | `MedicalTermsHighlighter.tsx` | Full (structurally) | `[GAP]` category colors | Low |

**Coverage roll-up:** ~25% of the brief is derivable from source. ~75% would require fabrication and is excluded per user's strict-mode choice.

---

## 3. Strategic Recommendations

**Senior-level reads on this state:**

1. **The reference is a scaffold, not a design spec.** Treating it as authoritative produces a deliverable that mostly enumerates absences. The first product decision is whether Voice Documentation is being designed *here* or being inherited from a parallel source (Figma, EHR vendor SDK, dictation partner). Without that source, every downstream design choice will be invented.

2. **Confidence + override is non-negotiable per the brief but absent from source.** This is the single largest blocker. Two near-term paths: (a) borrow `assistant/ConfidenceIndicator` and `assistant/HIPAABadge` patterns into voice-documentation explicitly, treating them as the design system answer; (b) defer the feature until a confidence model contract exists. Recommend (a) — the cost of inconsistent confidence UI across AI modules is higher than the cost of a small policy decision.

3. **The format enum (`soap | narrative | structured | custom`) is committed in source but SBAR is not.** Clinical leadership will ask about SBAR for handoff parity with `shift-handoff/SBARGenerator`. Open question: is SBAR intentionally excluded or just unimplemented?

4. **The category enum for `MedicalTermsHighlighter` omits PHI.** This is a problem: redaction work depends on PHI being a first-class category. Either extend the enum or build PHI detection on a separate channel. Decision needed before redaction screens can be designed.

5. **Honest miss:** my prior assumption that voice-documentation had any production implementation was wrong; the audit only surfaced this after the user requested strict mode. The brief's "production-grade, build-ready mockups" expectation cannot be met from this source — what can be delivered is a contract sketch for the four stubs plus a labeled gap inventory.

**Cuttable scope (cut-order):**

- `[CUTTABLE — first]` Tablet 1024×768 variants. Source has no responsive evidence; these would be 100% fabricated.
- `[CUTTABLE — second]` Error & recovery screens (Screen 8). All four sub-cases are `[GAP]`; ship later once an error contract exists.
- `[CUTTABLE — third]` PHI redaction surface (part of Screen 6). Blocked by the `MedicalTermsHighlighter` category enum gap.
- `[CUTTABLE — fourth]` SBAR format option. Not in source enum; cut unless clinical confirms parity requirement.

**Objection-readiness:**

- *Clinical safety:* expect "where's the confidence threshold?" — answer is in Recommendation 2; we either borrow `assistant/` patterns or we don't ship.
- *AI trust:* expect "how does the clinician know what the model heard wrong?" — current source gives a plain textarea. The token-confidence highlight is the cheapest credible answer and is `[GAP]`.
- *Workflow disruption:* expect "does this fit in a 90-second visit close?" — Screen 7 (Save/Sign/Route) is one button in source. Without EHR routing affordance, the workflow exit is undefined.

---

## Fabrication Ledger

Every item below is content I either invented or borrowed from outside the strict reference path. Confirm or strike.

| ID | Where | Item | Source basis |
|---|---|---|---|
| F1 | Screen 1 layout | Page shell = `PageHeader` + Bootstrap container | `[ASSUMED]` from sibling pages (`shiftHandoff.tsx`), not from voice-documentation files |
| F2 | Screen 1 a11y | `role="status"` + `aria-live="polite"` on `.recording-indicator` | `[FABRICATED-PLAUSIBLE]` — derived from WCAG 2.1 AA brief constraint, no source evidence |
| F3 | Screen 2 | Stop-button flip on Start | `[ASSUMED]` — source declares both buttons but does not wire the state transition |
| F4 | Recommendations §2 | Borrow `assistant/ConfidenceIndicator` + `assistant/HIPAABadge` | Cross-module borrow; not in voice-documentation source |
| F5 | HTML preview color tokens | Bootstrap-aligned greys + clinical accent on category chips | `[FABRICATED-PLAUSIBLE]` — no `_voice-documentation.scss` exists. Colors chosen to be visually neutral, not committed to the design system |

No other content was fabricated. Screens 5 and 8 were explicitly excluded rather than fabricated. Sub-items inside Screens 2, 6, 7 are flagged `[GAP]` rather than rendered.
