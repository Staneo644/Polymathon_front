'use client';
import '../globals.css';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

function Home(): JSX.Element {
  const router = useRouter();
  const login = typeof localStorage !== 'undefined' ? localStorage.getItem('access_token') : '';
    const [token, setToken] = useState(false);

  useEffect(() => {
    if (login) {
      setToken(true);
    }
  }, [login]);

  return (
    <div className="flex flex-col space-y-0 items-center h-100 justify-evenly ">
      <button
        className="btn btn-primary btn-lg w-50 min-w-[200px] max-w-[900px] shadow-md shadow-2xl"
        onClick={() => {
          router.push('/chercher/mot');
        }}
      >
        <h1>Chercher un mot</h1>
      </button>
          <button
          className="btn btn-primary btn-lg w-50 min-w-[200px] max-w-[900px] shadow-md shadow-2xl"
          onClick={() => {
              router.push('/chercher/populaires');
            }}
            >
        <h1>Les plus populaires</h1>
      </button>
      {token && (
      <button
        className="btn btn-primary btn-lg w-50 min-w-[200px] max-w-[900px] shadow-md shadow-2xl"
        onClick={() => {
          router.push('/chercher/favoris');
        }}
      >
        <h1>Mes favoris</h1>
      </button>
    )}
    </div>
  );
}

export default Home;
