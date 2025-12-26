import type { ResourceTip } from '@/lib/generator';

type Props = {
  callToAction: string;
  soundtrack: string;
  tips: ResourceTip[];
};

export const SupportPanel = ({ callToAction, soundtrack, tips }: Props) => (
  <section className="panel">
    <header className="panel__header">
      <div>
        <h2 className="panel__title">Execution Checklist</h2>
        <p className="panel__subtitle">Lock in audio, CTA, and tools so your short ships fast.</p>
      </div>
    </header>

    <div className="support">
      <div className="support__item">
        <h3>Signature CTA</h3>
        <p>{callToAction}</p>
      </div>
      <div className="support__item">
        <h3>Soundtrack Cue</h3>
        <p>{soundtrack}</p>
      </div>
      <div className="support__tips">
        <h3>Stack Your Toolkit</h3>
        <ul>
          {tips.map((tip) => (
            <li key={tip.url}>
              <a href={tip.url} target="_blank" rel="noreferrer">
                {tip.label}
              </a>
              <p>{tip.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
