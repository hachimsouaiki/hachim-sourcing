export const metadata = {
  title: 'Privacy & Contact Information | Hachim Souaiki',
  alternates: { canonical: '/privacy/' },
};

export default function Page() {
  return (
    <main className="shell legal" id="main">
      <a href="/">← Back to the website</a>
      <p className="eyebrow" style={{ marginTop: 40 }}>PRIVACY / CONTACT INFORMATION</p>
      <h1>Your enquiry.<br/>Your choice to share.</h1>
      <p>This page explains how the project enquiry form and contact links use the information you choose to share.</p>
      <h2>Who to contact</h2>
      <p>For questions about a project or information you have shared, contact Hachim Souaiki at <a href="mailto:info@hachimsouaiki.com">info@hachimsouaiki.com</a>.</p>
      <h2>How the enquiry form works</h2>
      <p>When you submit the form, your name, business email, company, destination country, project type and description — and any optional details you add about the parts or machine, quantity, delivery date, budget or phone number — are sent over HTTPS to this website’s enquiry service, which runs on Vercel. That service sends your enquiry through Hostinger’s encrypted SMTP service to info@hachimsouaiki.com. The professional mailbox forwards a copy to Hachim’s Gmail. Your email is used as the reply address so Hachim can respond.</p>
      <h2>Information you choose to send</h2>
      <p>The requested details help Hachim understand your company, the sourcing requirement and how to respond. Do not include confidential drawings or sensitive technical details in the initial enquiry. Confidentiality and file-sharing arrangements can be discussed separately. No newsletter or marketing subscription is included.</p>
      <h2>Storage and requests</h2>
      <p>Enquiries are received and retained as email correspondence for handling your request and any resulting project. The form service does not maintain a separate database of enquiry content. A hashed network identifier and submission references are held temporarily in server memory to limit abuse and avoid duplicate messages; hosting providers may also keep security and connection logs. Contact Hachim to request access, correction or deletion of information you have shared.</p>
      <h2>External services</h2>
      <p>The website and its enquiry service are hosted by Vercel. Hostinger provides the email delivery and mailbox, and Google operates the forwarding mailbox. These services and Hachim may process information in different countries, including China. Email, WhatsApp and Cal.com operate under their own privacy policies. Opening those contact links takes you to the relevant service.</p>
      <h2>Cookies and tracking</h2>
      <p>This website sets no tracking or marketing cookies and loads no analytics scripts. Two settings may be stored in your own browser and are never sent anywhere: that you closed the cookie notice (hs-notice), and that the WhatsApp panel has already opened automatically during this visit (hs-wa-auto, cleared when the tab is closed). If analytics is introduced later, this page and the notice will be updated first.</p>
    </main>
  );
}
