import React from 'react';
import ScoreCards from '../components/ScoreCards';
import Header from '@/app/components/Header';
import BarChart from '../components/BarChart';

export default function page() {
  return (
    <main>
      <Header title="Dashboard" user="Joe" />
      <ScoreCards title="LTfC" score="7 hours" diff="+1.3 hours" />
      <div className="p-4 grid md:grd-cols-3 grid-cols-1 gap-4">
        <BarChart />
      </div>
    </main>
  );
}
