'use client';

import { FormEvent } from 'react';
import type { AgentConfig } from '@/lib/generator';

type Props = {
  config: AgentConfig;
  onUpdate: (config: AgentConfig) => void;
  onGenerate: () => void;
  isGenerating: boolean;
};

const tones: AgentConfig['tone'][] = ['motivational', 'educational', 'entertaining', 'dramatic'];
const paces: AgentConfig['pace'][] = ['fast', 'medium', 'slow'];

export const AgentForm = ({ config, onUpdate, onGenerate, isGenerating }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onGenerate();
  };

  return (
    <form className="panel" onSubmit={handleSubmit}>
      <header className="panel__header">
        <div>
          <h2 className="panel__title">Creative Blueprint</h2>
          <p className="panel__subtitle">Define the short you want to craft — pacing, tone, and audience drive every beat.</p>
        </div>
        <button className="primary" type="submit" disabled={isGenerating}>
          {isGenerating ? 'Generating…' : 'Generate Plan'}
        </button>
      </header>

      <div className="form__grid">
        <label className="field">
          <span>Topic</span>
          <input
            value={config.topic}
            onChange={(event) => onUpdate({ ...config, topic: event.target.value })}
            placeholder="e.g. Viral productivity hack"
            required
          />
        </label>

        <label className="field">
          <span>Audience</span>
          <input
            value={config.audience}
            onChange={(event) => onUpdate({ ...config, audience: event.target.value })}
            placeholder="e.g. Busy creators"
            required
          />
        </label>

        <label className="field">
          <span>Tone</span>
          <select value={config.tone} onChange={(event) => onUpdate({ ...config, tone: event.target.value as AgentConfig['tone'] })}>
            {tones.map((tone) => (
              <option key={tone} value={tone}>
                {tone.charAt(0).toUpperCase() + tone.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Pace</span>
          <select value={config.pace} onChange={(event) => onUpdate({ ...config, pace: event.target.value as AgentConfig['pace'] })}>
            {paces.map((pace) => (
              <option key={pace} value={pace}>
                {pace.charAt(0).toUpperCase() + pace.slice(1)}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span>Duration (seconds)</span>
          <input
            type="number"
            min={15}
            max={60}
            value={config.duration}
            onChange={(event) => onUpdate({ ...config, duration: Number(event.target.value) })}
          />
        </label>
      </div>
    </form>
  );
};
