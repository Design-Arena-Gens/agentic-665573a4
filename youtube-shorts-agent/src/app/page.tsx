'use client';

import { useMemo, useState } from 'react';
import { AgentForm } from '@/components/AgentForm';
import { IdeaBoard } from '@/components/IdeaBoard';
import { Storyboard } from '@/components/Storyboard';
import { SupportPanel } from '@/components/SupportPanel';
import { defaultConfig, generateHooks, generateScript, generateSupport } from '@/lib/generator';

export default function Home() {
  const [config, setConfig] = useState(defaultConfig);
  const [hooks, setHooks] = useState(() => generateHooks(defaultConfig));
  const [beats, setBeats] = useState(() => generateScript(defaultConfig));
  const [support, setSupport] = useState(() => generateSupport());
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    window.requestAnimationFrame(() => {
      setHooks(generateHooks(config));
      setBeats(generateScript(config));
      setSupport(generateSupport());
      setIsGenerating(false);
    });
  };

  const paceInsights = useMemo(() => {
    const wordsPerMinute = config.pace === 'fast' ? 180 : config.pace === 'medium' ? 150 : 120;
    const estimatedWords = Math.round((config.duration / 60) * wordsPerMinute);
    const editStyle =
      config.pace === 'fast'
        ? 'tight cuts, kinetic text, smash zooms'
        : config.pace === 'medium'
        ? 'balanced cuts, subtle zooms, paced captions'
        : 'linger on visuals, slow push-ins, soft transitions';

    return {
      headline: `${config.pace.toUpperCase()} pace • ≈ ${estimatedWords} scripted words` as const,
      description: `Balance your delivery around ${Math.round(config.duration / 3)} key beats and prioritise ${editStyle}.`,
    };
  }, [config.pace, config.duration]);

  return (
    <main className="page">
      <section className="hero">
        <div>
          <p className="eyebrow">YT Shorts Agent</p>
          <h1>Plan, script, and ship your next viral short in minutes.</h1>
          <p className="lede">
            Drop your topic and this agent drafts hooks, beat-by-beat narration, visual cues, and the execution checklist to
            publish without second-guessing.
          </p>
        </div>
        <aside className="hero__badge">
          <span>{paceInsights.headline}</span>
          <p>{paceInsights.description}</p>
        </aside>
      </section>

      <AgentForm config={config} onUpdate={setConfig} onGenerate={handleGenerate} isGenerating={isGenerating} />

      <div className="grid">
        <IdeaBoard hooks={hooks} topic={config.topic} audience={config.audience} />
        <SupportPanel callToAction={support.callToAction} soundtrack={support.soundtrack} tips={support.tips} />
      </div>

      <Storyboard beats={beats} />
    </main>
  );
}
