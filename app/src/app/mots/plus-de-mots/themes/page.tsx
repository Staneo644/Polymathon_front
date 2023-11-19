'use client';
import { checkboxTheme } from '@/app/components/theme';
import { useState } from 'react';
import '../../../globals.css'

export default function SearchByTheme() {
  const [selectedTheme, setSelectedTheme] = useState<string[]>([]);

  return (
    <div className="absolute top-20 flex-col space-y-4 items-center w-100 justify-evenly ">
      <div>
        <h2 className="text-l">De quels thèmes voules-vous voir les mots</h2>
        {checkboxTheme(selectedTheme, setSelectedTheme)}
      </div>
    </div>
  );
}
