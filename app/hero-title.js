'use client';
import { useEffect, useState } from 'react';
const words = ['Mechanical Parts', 'Custom Components', 'Industrial Spare Parts'];
export default function HeroTitle(){
 const [frame,setFrame]=useState({index:0,count:words[0].length,phase:'hold'});
 const [paused,setPaused]=useState(false);
 const [reducedMotion,setReducedMotion]=useState(true);
 useEffect(()=>{const media=window.matchMedia('(prefers-reduced-motion: reduce)');const update=()=>setReducedMotion(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update)},[]);
 useEffect(()=>{
  if(paused||reducedMotion)return;
  const timer=setTimeout(()=>setFrame(current=>{
   if(current.phase==='hold')return {...current,phase:'delete'};
   if(current.phase==='delete')return current.count>0?{...current,count:current.count-1}:{index:(current.index+1)%words.length,count:0,phase:'type'};
   return current.count<words[current.index].length?{...current,count:current.count+1}:{...current,phase:'hold'};
  }),frame.phase==='hold'?2600:frame.phase==='delete'?35:75);
  return()=>clearTimeout(timer);
 },[frame,paused,reducedMotion]);
 return <div className="hero-title-wrap"><h1 className="hero-title" aria-label="Your Mechanical Parts Sourcing Partner in China"><span className="typed-line" aria-hidden="true">Your <span className="typed-niche">{reducedMotion?words[0]:words[frame.index].slice(0,frame.count)}<span className={`typing-caret ${paused||reducedMotion?'still':''}`} aria-hidden="true"/></span></span>{' '}<span className="title-static" aria-hidden="true">Sourcing Partner in China</span></h1>{!reducedMotion&&<button className="title-motion-toggle" type="button" aria-label={paused?'Resume title animation':'Pause title animation'} title={paused?'Resume animation':'Pause animation'} onClick={()=>setPaused(!paused)}>{paused?'▶':'Ⅱ'}</button>}</div>
}
