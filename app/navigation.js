'use client';
import Icon from "./line-icon";

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef(null);
  const pathname = usePathname();
  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <p><span className="dot" aria-hidden="true"></span>Mon–Fri, 09:00–17:00 · China (UTC+8)</p>
          <div><a href="mailto:info@hachimsouaiki.com">info@hachimsouaiki.com</a><a href="https://wa.me/8617589879618" target="_blank" rel="noopener noreferrer">+86 175 8987 9618</a></div>
        </div>
      </div>
      <header className="site-header" onKeyDown={event => { if (open && event.key === "Escape") { setOpen(false); menuButton.current?.focus(); } }}>
        <div className="container header-inner">
          <a onClick={() => setOpen(false)} className="brand " href="/"><svg className="logo-mark " viewBox="0 0 108.14 100" aria-hidden="true" focusable="false"><path d="M69.2 0L62.8 13.23H28.31A15.08 15.08 0 0 0 28.31 43.38H79.84A28.31 28.31 0 0 1 79.84 100H38.94L45.34 86.77H79.84A15.08 15.08 0 0 0 79.84 56.62H28.31A28.31 28.31 0 0 1 28.31 0Z" fill="var(--logo-red, #ad302a)"></path><path d="M89.42 0L103.99 0L66.92 76.69L52.35 76.69ZM18.73 100L4.15 100L41.22 23.31L55.79 23.31Z" fill="var(--logo-yellow, #ffda58)"></path></svg><span className="brand-name"><span>Hachim</span><span>Souaiki</span></span></a>
          <button ref={menuButton} className="menu-toggle" aria-expanded={open} onClick={() => setOpen(!open)} aria-controls="main-nav"><span className="sr-only">{open ? "Close menu" : "Open menu"}</span><span className="burger" aria-hidden="true"><span></span><span></span></span></button>
          <nav id="main-nav" className={open ? "nav is-open" : "nav"} aria-label="Main navigation"><a onClick={() => setOpen(false)} href="/services/" aria-current={pathname === "/services/" ? "page" : undefined}>Services</a><a onClick={() => setOpen(false)} href="/evaluation/" aria-current={pathname === "/evaluation/" ? "page" : undefined}>Evaluation</a><a onClick={() => setOpen(false)} href="/how-it-works/" aria-current={pathname === "/how-it-works/" ? "page" : undefined}>How it works</a><a onClick={() => setOpen(false)} href="/faq/" aria-current={pathname === "/faq/" ? "page" : undefined}>FAQ</a><a onClick={() => setOpen(false)} href="/insights/" aria-current={pathname === "/insights/" ? "page" : undefined}>Insights</a><a onClick={() => setOpen(false)} href="/about/" aria-current={pathname === "/about/" ? "page" : undefined}>About</a><a onClick={() => setOpen(false)} className="btn btn-primary btn-sm" href="/contact/" aria-current={pathname === "/contact/" ? "page" : undefined}>Discuss your project <Icon name="arrow-right"/></a></nav>
        </div>
      </header>
    </>
  );
}
