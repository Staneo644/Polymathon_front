'use client';
import '../../globals.css';
import { getUserEmail } from '@/app/communication/user';
import React, { useEffect, useState } from 'react';

export default function profil(){

    const [email, setEmail] = useState<string>('');
    const login = typeof localStorage !== 'undefined' ? localStorage.getItem('access_token') : '';


    useEffect(() => {
        if (login && login !== '') {
            getUserEmail().then((response) => {

          setEmail(response.email);})
        }
    }, []);

    return(
        <div>
        <h1>Profil</h1>
        <h2>Adresse mail</h2>
        <p>{email}</p>
        </div>
    )
}