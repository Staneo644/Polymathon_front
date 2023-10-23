'use client';
import '../../globals.css';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

function Home(): JSX.Element {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-4 items-center h-100 justify-evenly ">
      <button
        className="btn btn-primary btn-lg w-50 min-w-[200px] max-w-[900px] shadow-md shadow-2xl"
        onClick={() => {
          router.push('/mots/mots-du-jour');
        }}
      >
        <h1>Mots du jour</h1>
      </button>
      <button
        className="btn btn-primary btn-lg w-50 min-w-[200px] max-w-[900px] shadow-md shadow-2xl"
        onClick={() => {
          router.push('/mots/plus-de-mots');
        }}
      >
        <h1>Plus de mots</h1>
      </button>
      <button
        className="btn btn-primary btn-lg w-50 min-w-[200px] max-w-[900px] shadow-md shadow-2xl"
        onClick={() => {
          router.push('/exercices');
        }}
      >
        <h1>Exercices</h1>
      </button>
    </div>
  );
}

export default Home;
