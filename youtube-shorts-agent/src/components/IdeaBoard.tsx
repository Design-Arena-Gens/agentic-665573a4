import type { HookIdea } from '@/lib/generator';

type Props = {
  hooks: HookIdea[];
  topic: string;
  audience: string;
};

export const IdeaBoard = ({ hooks, topic, audience }: Props) => (
  <section className="panel">
    <header className="panel__header">
      <div>
        <h2 className="panel__title">Hook Lab</h2>
        <p className="panel__subtitle">Pick a starting line that instantly stops {audience || 'viewers'} mid-scroll.</p>
      </div>
    </header>

    <div className="hooks__grid">
      {hooks.map((hook, index) => (
        <article key={index} className="card">
          <h3 className="card__title">Hook #{index + 1}</h3>
          <p className="card__body">{hook.line}</p>
          <ul className="card__meta">
            <li>
              <strong>Angle</strong>
              <span>{hook.angle}</span>
            </li>
            <li>
              <strong>Pattern Break</strong>
              <span>{hook.patternBreak}</span>
            </li>
          </ul>
        </article>
      ))}
    </div>

    <footer className="panel__footer">
      <p>
        🎯 Aim for a visual opener within the first 0.7 seconds that reinforces &quot;{topic || 'your story'}&quot;.
      </p>
    </footer>
  </section>
);
