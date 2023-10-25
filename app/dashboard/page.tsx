import React from 'react';
import ScoreCards from '../components/ScoreCards';

export default function page() {
  return (
    <main>
      <h1>Dashboard</h1>
      <ScoreCards title="LTfC" score="7 hours" diff="+1.3 hours" />
    </main>
  );
}
