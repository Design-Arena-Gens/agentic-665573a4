import type { ScriptBeat } from '@/lib/generator';

type Props = {
  beats: ScriptBeat[];
};

export const Storyboard = ({ beats }: Props) => (
  <section className="panel">
    <header className="panel__header">
      <div>
        <h2 className="panel__title">Storyboard & Script</h2>
        <p className="panel__subtitle">Map each beat with narration, visuals, and editor notes so production is plug-and-play.</p>
      </div>
    </header>

    <div className="storyboard">
      {beats.map((beat) => (
        <article key={beat.id} className="beat">
          <div className="beat__timestamp">{beat.timestamp}</div>
          <div className="beat__content">
            <h3>{beat.title}</h3>
            <p className="beat__narration">{beat.narration}</p>
            <p className="beat__visuals">{beat.visuals}</p>
            <ul className="beat__actions">
              {beat.actions.map((action, index) => (
                <li key={index}>{action}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);
