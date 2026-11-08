"use client";
import { FadeIn } from "./motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CheckCircle, ArrowRight, RotateCcw, Info } from "lucide-react";
import type {
  Lesson,
  Scenario,
  SourceCheck as SourceCheckData,
} from "../lib/types";
import { quizScore, decisionTransition } from "../lib/logic";
import { writeProgress } from "../lib/persistence";
import { useProgress } from "./persistence-ui";
export function Quiz({
  lesson,
  courseSlug,
}: {
  lesson: Lesson;
  courseSlug: string;
}) {
  const p = useProgress();
  const id = `${courseSlug}/${lesson.slug}`;
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const score = quizScore(lesson.questions, answers);
  return (
    <section className="quiz">
      <span className="eyebrow">KNOWLEDGE CHECK</span>
      <h2>Put the lesson into perspective.</h2>
      {p.lessons[id] !== undefined && !submitted && (
        <p className="completion">
          <CheckCircle size={16} /> Previously completed
        </p>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
          setFailed(
            !writeProgress((p) => ({
              ...p,
              lessons: {
                ...p.lessons,
                [id]: Math.max(p.lessons[id] ?? 0, score),
              },
            })),
          );
        }}
      >
        {lesson.questions.map((q, i) => (
          <fieldset key={q.prompt} disabled={submitted}>
            <legend>{q.prompt}</legend>
            {q.choices.map((choice, j) => (
              <label
                className={`answer-option ${answers[i] === j ? "selected" : ""}`}
                key={choice}
              >
                <input
                  type="radio"
                  name={`question-${i}`}
                  required
                  checked={answers[i] === j}
                  onChange={() =>
                    setAnswers((a) => {
                      const next = [...a];
                      next[i] = j;
                      return next;
                    })
                  }
                />
                <span>{choice}</span>
              </label>
            ))}
          </fieldset>
        ))}
        {!submitted ? (
          <button
            className="button"
            type="submit"
            disabled={
              answers.filter((a) => a !== undefined).length <
              lesson.questions.length
            }
          >
            Check my understanding <ArrowRight size={16} />
          </button>
        ) : (
          <div className="quiz-feedback" role="status">
            <FadeIn>
              <h3>
                {score === lesson.questions.length
                  ? "Well reasoned."
                  : "A useful moment to reflect."}{" "}
                {score}/{lesson.questions.length}
              </h3>
              <ol className="quiz-results">
                {lesson.questions.map((q, i) => (
                  <li key={q.prompt}>
                    <strong>{q.prompt}</strong>
                    <p>
                      {answers[i] === q.answer
                        ? "Correct."
                        : `A stronger answer: ${q.choices[q.answer]}`}
                    </p>
                    <p>{q.explanation}</p>
                  </li>
                ))}
              </ol>
              <p className="small">
                {failed
                  ? "Storage unavailable. Completion could not be saved."
                  : "Lesson completion and your best score are saved in this browser."}
              </p>
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setSubmitted(false);
                  setAnswers([]);
                }}
              >
                <RotateCcw size={15} /> Try again
              </button>
            </FadeIn>
          </div>
        )}
      </form>
    </section>
  );
}
export function SourceCheck({ check }: { check: SourceCheckData }) {
  const [selected, setSelected] = useState<number | null>(null);
  const chosen = selected === null ? null : check.options[selected];
  return (
    <section className="quiz source-check">
      <span className="eyebrow">SOURCE CHECK</span>
      <h2>{check.question}</h2>
      <div className="source-witnesses">
        {check.witnesses.map((w) => (
          <article key={w.label}>
            <strong>{w.label}</strong>
            <p>{w.claim}</p>
          </article>
        ))}
      </div>
      <fieldset>
        <legend>{check.prompt}</legend>
        {check.options.map((option, i) => (
          <label
            className={`answer-option ${selected === i ? "selected" : ""}`}
            key={option.text}
          >
            <input
              type="radio"
              name="source-check"
              checked={selected === i}
              onChange={() => setSelected(i)}
            />
            <span>{option.text}</span>
          </label>
        ))}
      </fieldset>
      {chosen && (
        <div className="quiz-feedback" role="status">
          <FadeIn>
            <h3>
              {chosen.best ? "The strongest approach." : "Worth a second look."}
            </h3>
            <p>{chosen.feedback}</p>
            <p className="small">
              Source checks are for practice and are not scored. Try the other
              answers to compare the reasoning.
            </p>
            <Link
              className="text-link"
              href={
                check.battleSlug
                  ? `/battles/${check.battleSlug}`
                  : `/campaigns/${check.campaignSlug}`
              }
            >
              See this disagreement and its sources
            </Link>
          </FadeIn>
        </div>
      )}
    </section>
  );
}
export function DecisionExercise({ scenario }: { scenario: Scenario }) {
  const progress = useProgress();
  const [selected, setSelected] = useState<number | null>(null);
  const [state, setState] = useState<"briefing" | "feedback">("briefing");
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const saved = progress.scenarios[scenario.slug];
    if (saved !== undefined && saved < scenario.options.length) {
      setSelected(saved);
      setState("feedback");
    }
  }, [progress.scenarios, scenario.slug, scenario.options.length]);
  return (
    <div className="decision-exercise">
      <div className="briefing-grid">
        <section>
          <span className="eyebrow">YOUR ROLE / {scenario.commander}</span>
          <h2>The situation</h2>
          <p>{scenario.situation}</p>
        </section>
        <section>
          <span className="eyebrow">INFORMATION AVAILABLE</span>
          <h3>What you can reasonably know</h3>
          <p>{scenario.known}</p>
          <h3>What remains uncertain</h3>
          <p>{scenario.unknown}</p>
        </section>
      </div>
      <section className="decision-options">
        <span className="eyebrow">A DECISION UNDER UNCERTAINTY</span>
        <h2>What would you prioritize?</h2>
        <p className="muted">
          Choose an approach, then examine its trade-offs. There is no victory
          score.
        </p>
        <fieldset disabled={state === "feedback"}>
          <legend className="sr-only">Choose a historical decision</legend>
          {scenario.options.map((o, i) => (
            <label
              className={`answer-option ${selected === i ? "selected" : ""}`}
              key={o.text}
            >
              <input
                type="radio"
                name="decision"
                checked={selected === i}
                onChange={() => setSelected(i)}
              />
              <span className="option-letter">
                {String.fromCharCode(65 + i)}
              </span>
              <span>{o.text}</span>
            </label>
          ))}
        </fieldset>
        {state === "briefing" ? (
          <button
            className="button"
            disabled={selected === null}
            onClick={() => {
              if (selected === null) return;
              setState(
                decisionTransition(state, selected, scenario.options.length),
              );
              setFailed(
                !writeProgress((p) => ({
                  ...p,
                  scenarios: { ...p.scenarios, [scenario.slug]: selected },
                })),
              );
            }}
          >
            Examine this decision <ArrowRight size={16} />
          </button>
        ) : (
          <div className="decision-feedback" role="status">
            <FadeIn>
              <span className="eyebrow">YOUR DECISION / REFLECTION</span>
              <p>{selected !== null && scenario.options[selected].feedback}</p>
              <h3>What actually happened</h3>
              <p>{scenario.historical}</p>
              <h3>Counterfactual interpretation</h3>
              <p>
                Alternative choices are teaching prompts. Their consequences
                cannot be verified, and the historical outcome does not prove
                that every other choice would have failed.
              </p>
              <div className="note">
                <Info size={16} />
                <span>
                  {failed
                    ? "Browser storage is unavailable. Progress could not be saved."
                    : "Your exploration is saved in this browser. This exercise assesses reasoning, not battlefield performance."}
                </span>
              </div>
              <button
                className="text-button"
                onClick={() => {
                  setState("briefing");
                  setSelected(null);
                  writeProgress((p) => {
                    const scenarios = { ...p.scenarios };
                    delete scenarios[scenario.slug];
                    return { ...p, scenarios };
                  });
                }}
              >
                <RotateCcw size={16} /> Explore another approach
              </button>
            </FadeIn>
          </div>
        )}
      </section>
    </div>
  );
}
