# YT Shorts Agent

A Next.js workspace that helps you plan, script, and execute YouTube Shorts without any guesswork. Drop a topic, define your audience, and the agent instantly spins up hooks, beat-by-beat scripts, visual cues, and an execution checklist tailored for vertical video creators.

## Features

- 🎯 **Hook Lab** – Generates scroll-stopping openers with pattern interruptions and delivery angles.
- 🎬 **Storyboard Builder** – Breaks your short into timed beats with narration, visual prompts, and editor actions.
- 🔊 **Execution Toolkit** – Suggests CTAs, soundtrack directions, and handy production resources.
- ⚙️ **Configurable Blueprint** – Tune topic, tone, pace, audience, and runtime to remix strategies fast.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the agent locally. Update `src/app/page.tsx` and supporting components to customise behaviour.

## Production Build

```bash
npm run build
npm run start
```

## Deployment

Deploy straight to Vercel:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-665573a4
```

Once the command succeeds, wait a few seconds and verify the deployment with:

```bash
curl https://agentic-665573a4.vercel.app
```

## Tech Stack

- Next.js App Router (TypeScript)
- Modern CSS styling with glassmorphism accents
- Stateless generation logic for reproducible planning flows

Enjoy building shorts that hit publish-ready quality in minutes.
