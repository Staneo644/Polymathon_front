'use client';
import '../../globals.css';
import { getUserEmail } from '@/app/communication/user';
import React, { useEffect, useState } from 'react';

export default function profil(){

    const [email, setEmail] = useState<string>('');
    const login = typeof localStorage !== 'undefined' ? localStorage.getItem('access_token') : '';
    const viewLike = typeof localStorage !== 'undefined' ? localStorage.getItem('viewLike') : '';
    const viewWord = typeof localStorage !== 'undefined' ? localStorage.getItem('viewWord') : '';

    useEffect(() => {
        if (login && login !== '') {
            getUserEmail().then((response) => {

          setEmail(response.email);})
        }
    }, []);

    return(
        <div>
            {email && <>
            <h1>Profil</h1>
            
            <h2>Adresse mail: {email}</h2>
                </>
            }

        </div>
    )
}