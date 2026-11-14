'use client';

import { useState } from 'react';

export default function CookieNotice() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <aside className="cookie-banner" aria-label="Cookie information">
      <p>No tracking cookies. <a href="/privacy/">Privacy Policy</a></p>
      <div className="cookie-buttons">
        <button className="btn btn-primary btn-sm" type="button" onClick={() => setVisible(false)}>OK</button>
      </div>
    </aside>
  );
}
