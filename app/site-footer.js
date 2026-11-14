import Icon from "./line-icon";
export default function SiteFooter() {
  return (
    <footer className="footer" data-area="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="brand " href="#main"><svg className="logo-mark " viewBox="0 0 108.14 100" aria-hidden="true" focusable="false"><path d="M69.2 0L62.8 13.23H28.31A15.08 15.08 0 0 0 28.31 43.38H79.84A28.31 28.31 0 0 1 79.84 100H38.94L45.34 86.77H79.84A15.08 15.08 0 0 0 79.84 56.62H28.31A28.31 28.31 0 0 1 28.31 0Z" fill="var(--logo-red, #ad302a)"></path><path d="M89.42 0L103.99 0L66.92 76.69L52.35 76.69ZM18.73 100L4.15 100L41.22 23.31L55.79 23.31Z" fill="var(--logo-yellow, #ffda58)"></path></svg><span className="brand-name"><span>Hachim</span><span>Souaiki</span></span></a>
          <p>China-based industrial sourcing for European companies: custom parts, industrial machinery and supplier coordination.</p>
        </div>
        <nav aria-label="Services">
          <p className="footer-title">Services</p>
          <a href="/services/#parts">Custom parts sourcing</a>
          <a href="/services/#machinery">Machinery sourcing</a>
          <a href="/services/#coordination">Assessment &amp; coordination</a>
          <a href="/evaluation/">Technical evaluation</a>
        </nav>
        <nav aria-label="Resources">
          <p className="footer-title">Resources</p>
          <a href="/how-it-works/">How it works</a>
          <a href="/sample-report/">Sample report</a>
          <a href="/faq/">FAQ</a>
          <a href="/privacy/">Privacy</a>
          <a href="/insights/">Insights</a>
        </nav>
        <div>
          <p className="footer-title">Contact</p>
          <a href="mailto:info@hachimsouaiki.com"><Icon name="mail"/>info@hachimsouaiki.com</a>
          <a href="https://wa.me/8617589879618" target="_blank" rel="noopener noreferrer"><svg className="icon " viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12.04 2.5a9.43 9.43 0 00-8.1 14.27L2.5 21.5l4.86-1.4A9.43 9.43 0 1012.04 2.5zm0 17.2a7.8 7.8 0 01-3.97-1.09l-.28-.17-2.88.83.85-2.8-.19-.29a7.78 7.78 0 116.47 3.52zm4.28-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.16.23-.6.76-.74.92-.14.15-.27.17-.5.06a6.4 6.4 0 01-1.89-1.17 7.1 7.1 0 01-1.3-1.63c-.14-.23 0-.36.1-.47.11-.11.24-.27.35-.41.12-.14.16-.23.24-.39.08-.15.04-.29-.02-.4-.06-.12-.53-1.27-.72-1.74-.19-.46-.39-.4-.53-.4h-.45a.87.87 0 00-.63.29 2.65 2.65 0 00-.82 1.96 4.6 4.6 0 00.96 2.44 10.5 10.5 0 004.03 3.56c.56.24 1 .39 1.35.5.56.18 1.08.15 1.48.09.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.15-.45-.27z"></path></svg>+86 175 8987 9618</a>
          <div className="socials"><a href="https://www.linkedin.com/in/hachim-souaiki-07435920a/" target="_blank" rel="noopener noreferrer" aria-label="Hachim Souaiki on LinkedIn"><svg className="icon " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="17" height="17" rx="3"></rect><path d="M8 10.5V16.5M8 7.5v.01M11.5 16.5v-6M11.5 13.2c0-1.6 1-2.7 2.4-2.7s2.1 1 2.1 2.7v3.3"></path></svg></a><a href="https://www.instagram.com/hachim.souaiki/" target="_blank" rel="noopener noreferrer" aria-label="Hachim Souaiki on Instagram"><svg className="icon " viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="3.5" y="3.5" width="17" height="17" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><path d="M17.2 6.8h.01"></path></svg></a><a href="https://wa.me/8617589879618" target="_blank" rel="noopener noreferrer" aria-label="Hachim Souaiki on WhatsApp"><svg className="icon " viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor"><path d="M12.04 2.5a9.43 9.43 0 00-8.1 14.27L2.5 21.5l4.86-1.4A9.43 9.43 0 1012.04 2.5zm0 17.2a7.8 7.8 0 01-3.97-1.09l-.28-.17-2.88.83.85-2.8-.19-.29a7.78 7.78 0 116.47 3.52zm4.28-5.83c-.23-.12-1.38-.68-1.6-.76-.21-.08-.37-.12-.53.12-.16.23-.6.76-.74.92-.14.15-.27.17-.5.06a6.4 6.4 0 01-1.89-1.17 7.1 7.1 0 01-1.3-1.63c-.14-.23 0-.36.1-.47.11-.11.24-.27.35-.41.12-.14.16-.23.24-.39.08-.15.04-.29-.02-.4-.06-.12-.53-1.27-.72-1.74-.19-.46-.39-.4-.53-.4h-.45a.87.87 0 00-.63.29 2.65 2.65 0 00-.82 1.96 4.6 4.6 0 00.96 2.44 10.5 10.5 0 004.03 3.56c.56.24 1 .39 1.35.5.56.18 1.08.15 1.48.09.45-.07 1.38-.56 1.58-1.11.2-.55.2-1.02.14-1.12-.06-.1-.21-.15-.45-.27z"></path></svg></a></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Hachim Souaiki</span><span>Industrial sourcing · China → Europe</span><a href="#main">Back to top</a></div>
    </footer>
  );
}
