'use client';
import Icon from "./line-icon";
import {useEffect,useRef,useState} from 'react';
const endpoint='https://greenyellow-termite-168707.hostingersite.com/enquiry.php';
const projectDefaults = {
  drawing: ['', 'I need a supplier for a part made to my drawing. '],
  alternative: ['', 'I need to compare alternatives to my current supplier. '],
  spare: ['Industrial spare parts', 'I need to source a replacement spare part. '],
  equipment: ['Industrial machinery', 'I need to compare CNC machines or production equipment. '],
  quotes: ['', 'I would like help evaluating quotations I already have. '],
  production: ['', 'I need coordination for an order already in progress. '],
};

export default function EnquiryForm(){
 const categoryField = useRef(null);
 const descriptionField = useRef(null);
 useEffect(() => {
   const project = new URLSearchParams(window.location.search).get('project');
   if (!Object.hasOwn(projectDefaults, project)) return;
   const [category, description] = projectDefaults[project];
   if (!categoryField.current.value) categoryField.current.value = category;
   if (!descriptionField.current.value) descriptionField.current.value = description;
 }, []);
 const [status,setStatus]=useState('idle');const [message,setMessage]=useState('');const result=useRef(null);const token=useRef(null);const pending=useRef(false);
 async function getToken(){const response=await fetch(endpoint,{cache:'no-store'});if(!response.ok)throw new Error('Unable to connect. Please try again or email info@hachimsouaiki.com.');const data=await response.json();return data.token;}
 async function send(event){event.preventDefault();if(pending.current)return;pending.current=true;setStatus('sending');setMessage('Sending your enquiry…');const form=event.currentTarget;const fields=new FormData(form);const values=Object.fromEntries(fields);values.consent=fields.has('consent');
 try {token.current=token.current||await getToken();const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...values,token:token.current}),signal:AbortSignal.timeout(30000)});const data=await response.json();if(!response.ok||!data.ok){if(response.status===403)token.current=null;throw new Error(data.message||'Your enquiry could not be sent. Please try again or email info@hachimsouaiki.com.');}token.current=null;setStatus('success');setMessage('Thank you. Your enquiry has been sent to Hachim.');form.reset();requestAnimationFrame(()=>result.current?.focus());}
 catch(error){setStatus('error');setMessage(error.name==='TimeoutError'?'The connection timed out. Please retry once; duplicate enquiries are prevented.':error.message||'Your enquiry could not be sent. Please email info@hachimsouaiki.com.');requestAnimationFrame(()=>result.current?.focus());}
 finally{pending.current=false;}
 }
 return (
  <form onSubmit={send} id="enquiry-form" className="form-mockup" aria-label="Project enquiry" aria-busy={status === "sending"}>
    <div className="form-heading"><h3>Tell me about your sourcing requirement.</h3>
    <p>The project type, quantity and destination help define the scope. Fields marked * are required.</p>
    </div>
    <div className="form-grid">
    <label>Name *<input id="f-name" required maxLength={100} placeholder="Your name" autoComplete="name" name="name"/></label>
    <label>Business email *<input id="f-email" type="email" required maxLength={200} placeholder="you@company.com" autoComplete="email" inputMode="email" name="email"/></label>
    <label>Company *<input id="f-company" required maxLength={150} placeholder="Company name" autoComplete="organization" name="company"/></label>
    <label>Destination country *<input id="f-country" required maxLength={100} placeholder="e.g. Germany" autoComplete="country-name" name="country"/></label>
    <label className="full">What type of project do you have? *<select ref={categoryField} defaultValue="" name="category" id="f-category" required><option value="" disabled>Select the type of project</option><option value="CNC-machined components">CNC-machined components</option><option value="Sheet-metal fabrication">Sheet-metal fabrication</option><option value="Industrial spare parts">Industrial spare parts</option><option value="Industrial machinery">Industrial machinery</option><option value="Production equipment / automation">Production equipment / automation</option><option value="Other">Other</option></select></label>
    <label className="full">Project description *<textarea ref={descriptionField} name="description" id="f-description" required maxLength={2500} rows={4} placeholder="Describe the part or machine, its application, available specifications and the sourcing support you need. No confidential drawings at this stage." /></label>
    </div>
    <details className="optional-fields"><summary>Add budget &amp; phone <span>Optional +</span></summary>
    <div className="form-grid">
    <label>Approximate budget<input id="f-budget" maxLength={100} placeholder="e.g. EUR 10,000–20,000" name="budget"/></label>
    <label>Phone or WhatsApp<input id="f-phone" type="tel" maxLength={40} placeholder="+49 …" autoComplete="tel" inputMode="tel" name="phone"/></label>
    </div></details>
    <div className="enquiry-honeypot" aria-hidden="true">
    <label>Website<input tabIndex="-1" autoComplete="off" name="website"/></label>
    </div>
    <label className="privacy-check"><input id="f-consent" type="checkbox" required name="consent"/><span>I agree to be contacted about this enquiry. <a href="/privacy/">Privacy Policy</a></span></label>
    <button className="btn btn-primary btn-block" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send my enquiry"}<Icon name="arrow-right"/></button>
    <p className={`form-note enquiry-result ${status}`} role="status" ref={result} tabIndex={-1}>{message || "Your enquiry is sent securely to info@hachimsouaiki.com."}</p>
    </form>
 );
}
