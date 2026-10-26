'use client';
import { useEffect, useRef, useState } from 'react';
import { whatsapp, hachimPortrait } from './site-content';
import { getBusinessAvailability, BUSINESS_HOURS_LABEL } from './business-hours.mjs';
export function WhatsAppIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M20.5 11.5a8.5 8.5 0 0 1-12.4 7.6L3 20.5l1.4-5.1a8.5 8.5 0 1 1 16.1-3.9Z"/><path d="M8.1 7.6c-.9 1.6 1.4 5.9 4.9 7.5 1.5.7 2.9.2 3.1-1.3l-2.3-1.1-.9 1c-1.6-.7-2.7-1.9-3.2-3.1l.8-1-1.1-2.2-1.3.2Z"/></svg>}
export default function WhatsAppWidget(){
 const [open,setOpen]=useState(false);
 const [availability,setAvailability]=useState(null);
 const trigger=useRef(null);const closeButton=useRef(null);const interacted=useRef(false);const openMode=useRef('automatic');
 useEffect(()=>{const refresh=()=>setAvailability(getBusinessAvailability());refresh();const interval=setInterval(refresh,30000);return()=>clearInterval(interval)},[]);
 useEffect(()=>{let timer;const autoOpen=()=>{
  if(interacted.current)return;
  if(document.hidden||document.activeElement?.matches('input,textarea,select')){timer=setTimeout(autoOpen,2500);return}
  openMode.current='automatic';setOpen(true);
 };timer=setTimeout(autoOpen,8000);return()=>clearTimeout(timer)},[]);
 useEffect(()=>{if(open&&openMode.current==='manual')closeButton.current?.focus()},[open]);
 function close(){interacted.current=true;setOpen(false);trigger.current?.focus()}
 function toggle(){interacted.current=true;if(open){close()}else{openMode.current='manual';setOpen(true)}}
 const available=availability?.available;
 const message=available?'Hello Hachim, I would like to discuss a mechanical parts sourcing project in China.':'Hello Hachim, I have a mechanical parts sourcing project. Please contact me when you are available so we can arrange a call.';
 const chatLink=`${whatsapp}?text=${encodeURIComponent(message)}`;
 return <div className={`whatsapp-widget ${open?'is-open':''}`} onKeyDown={event=>{if(event.key==='Escape'&&open){event.preventDefault();close()}}}>
  {open&&<section className="whatsapp-panel" id="whatsapp-panel" role="dialog" aria-labelledby="whatsapp-title">
   <div className="whatsapp-heading"><span className="chat-avatar" title={hachimPortrait?'Hachim Souaiki':'Hachim’s portrait — photo to add'}>{hachimPortrait?<img src={hachimPortrait} alt="Hachim Souaiki"/>:<span className="avatar-placeholder">HS</span>}<span className={`avatar-status ${available?'available':'offline'}`}/></span><div><h2 id="whatsapp-title">Hachim Souaiki</h2><p className={`chat-availability ${available?'available':'offline'}`}>{availability?(available?'Available now · Working hours':'Offline · Leave a message'):'Checking availability…'}</p></div><button ref={closeButton} className="chat-close" onClick={close} aria-label="Close WhatsApp panel">×</button></div>
   <div className="whatsapp-conversation"><div className="chat-message"><strong>Hachim Souaiki</strong><p>{available?<>Hi 👋<br/>Looking for a manufacturer in China? Tell me about your mechanical part or the suppliers you want to compare.</>:<>Hi 👋 I’m away right now.<br/>Leave your sourcing requirement and a good time to call. I’ll get back to you during my next working hours.</>}</p><span className="chat-timestamp">{availability?.chinaTime||'—'} · China</span></div></div>
   <div className="whatsapp-body"><a className="button whatsapp-start" href={chatLink} target="_blank" rel="noopener noreferrer"><WhatsAppIcon/>{available?'Start the conversation':'Leave a message for a callback'}</a><p className="chat-hours">{BUSINESS_HOURS_LABEL}</p><p className="chat-note">Availability follows working hours, not live WhatsApp activity.</p><a className="chat-email" href="mailto:info@hachimsouaiki.com">Or email info@hachimsouaiki.com</a></div>
  </section>}
  <button ref={trigger} type="button" className="whatsapp-launcher" aria-label={open?'Close WhatsApp chat':'Open WhatsApp chat'} aria-expanded={open} aria-controls="whatsapp-panel" onClick={toggle}><WhatsAppIcon/><span>{open?'Close':'Chat with Hachim'}</span></button>
 </div>
}
