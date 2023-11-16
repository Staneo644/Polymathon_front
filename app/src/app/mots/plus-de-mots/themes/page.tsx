'use client';
import { checkboxTheme } from '@/app/components/theme';
import { useState } from 'react';

export default function SearchByTheme() {
    const [selectedTheme, setSelectedTheme] = useState<string[]>([]);

    return (
        <>
        {checkboxTheme(selectedTheme, setSelectedTheme)}
        </>
    )

}