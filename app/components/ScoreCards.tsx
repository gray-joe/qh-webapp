import React from 'react';
import Link from 'next/link';

interface ScoreCardProps {
  title: string;
  score: string;
  diff: string;
}

const ScoreCards: React.FC<ScoreCardProps> = ({ title, score, diff }) => {
  return (
    <div className="grid lg:grid-cols-5 gap-4 p-4">
      <div className="lg:col-span-2 col-span-1 bg-gray-800 flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl text-gray-50 font-bold">{title}</p>
          <p className="text-gray-400">{score}</p>
        </div>
        <p className="bg-amber-300 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-800 text-lg">{diff}</span>
        </p>
      </div>
      <div className="lg:col-span-2 col-span-1 bg-gray-800 flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl text-gray-50 font-bold">{title}</p>
          <p className="text-gray-400">{score}</p>
        </div>
        <p className="bg-amber-300 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-800 text-lg">{diff}</span>
        </p>
      </div>
      <div className="bg-gray-800 flex justify-between w-full border p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="text-2xl text-gray-50 font-bold">{title}</p>
          <p className="text-gray-400">{score}</p>
        </div>
        <p className="bg-amber-300 flex justify-center items-center p-2 rounded-lg">
          <span className="text-amber-800 text-lg">{diff}</span>
        </p>
      </div>
    </div>
  );
};

export default ScoreCards;
