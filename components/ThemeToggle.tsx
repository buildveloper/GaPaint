'use client';
import { useEffect,useState } from 'react';
export default function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{const d=localStorage.getItem('theme')==='dark';setDark(d);document.documentElement.classList.toggle('dark',d);},[]);return <button className='btn-ghost text-sm' onClick={()=>{const n=!dark;setDark(n);document.documentElement.classList.toggle('dark',n);localStorage.setItem('theme',n?'dark':'light')}}>{dark?'Light':'Dark'} Mode</button>}
