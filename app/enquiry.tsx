'use client';
import { useState, useEffect } from 'react';
import type { SyntheticEvent } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  ShieldCheck,
  Building2,
  LockKeyhole,
  Phone,
} from 'lucide-react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { services } from './content';
const CONTACT_EMAIL = '';
export function Contact() {
  const [service, setService] = useState<string | null>(() => {
    if (typeof window === 'undefined') return null;
    const value = new URLSearchParams(window.location.search).get('service');
    return services.some((item) => item.title === value) ? value : null;
  });
  const [message, setMessage] = useState(() => {
    if (typeof window === 'undefined') return '';
    const value = new URLSearchParams(window.location.search).get('industry');
    return value
      ? `I would like to discuss payroll and compliance support for our ${value.toLowerCase()} business.`
      : '';
  });
  const [feedback, setFeedback] = useState('');
  const [draft, setDraft] = useState('');
  useEffect(() => {
    const pick = (e: Event) => setService((e as CustomEvent<string>).detail);
    const industry = (e: Event) =>
      setMessage(
        'I would like to discuss payroll and compliance support for our ' +
          (e as CustomEvent<string>).detail.toLowerCase() +
          ' business.',
      );
    window.addEventListener('ordin-service', pick);
    window.addEventListener('ordin-industry', industry);
    return () => {
      window.removeEventListener('ordin-service', pick);
      window.removeEventListener('ordin-industry', industry);
    };
  }, []);
  function submit(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!service) {
      setFeedback('Please select the service you need.');
      document.getElementById('service-required')?.focus();
      return;
    }
    const data = new FormData(e.currentTarget);
    const body =
      [...data.entries()]
        .filter(([k]) => k !== 'service')
        .map(([k, v]) => `${k}: ${typeof v === 'string' ? v : v.name}`)
        .join('\n') +
      '\nService Required: ' +
      service;
    setDraft(body);
    if (CONTACT_EMAIL) {
      window.location.href =
        'mailto:' +
        CONTACT_EMAIL +
        '?subject=' +
        encodeURIComponent(
          'Consultation enquiry — ' +
            (() => {
              const company = data.get('Company');
              return typeof company === 'string' ? company : '';
            })(),
        ) +
        '&body=' +
        encodeURIComponent(body);
      setFeedback(
        'Your email draft is ready. Please send it from your email app to complete your enquiry.',
      );
    } else {
      setFeedback(
        'Your enquiry is ready, but online delivery is not connected yet. Download a copy below; your details have not been sent.',
      );
    }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([draft], { type: 'text/plain' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ordin-consultation-enquiry.txt';
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <section className="contact-section" id="contact">
      <div className="wrap section contact-layout">
        <div className="contact-copy">
          <div className="eyebrow">LET’S TALK</div>
          <h2>
            Let’s talk about
            <br />
            your workforce.
          </h2>
          <p>
            Tell us about your workforce, operating locations and the challenges
            your HR or Finance team is working through.
          </p>
          <div className="contact-person">
            <strong>H. Arihant</strong>
            <a href="tel:+919057918251">
              <Phone size={18} aria-hidden="true" /> +91 90579 18251
            </a>
          </div>
          <div className="contact-promise">
            <ShieldCheck size={22} />
            <span>
              Start with your current process.
              <br />
              Discuss scope, handoffs and reporting needs.
            </span>
          </div>
          <div className="contact-location">
            <Building2 size={16} /> Supporting businesses around the globe
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <p className="form-notice">Fields marked * are required.</p>
          <div className="form-grid">
            {[
              {
                name: 'Name',
                type: 'text',
                placeholder: 'Your full name',
                auto: 'name',
              },
              {
                name: 'Company',
                type: 'text',
                placeholder: 'Company name',
                auto: 'organization',
              },
              { name: 'Phone', type: 'tel', placeholder: '+91', auto: 'tel' },
              {
                name: 'Email',
                type: 'email',
                placeholder: 'you@company.com',
                auto: 'email',
              },
              {
                name: 'Employee Count',
                type: 'number',
                placeholder: 'Total across all locations',
                auto: 'off',
              },
              {
                name: 'Operating locations',
                type: 'text',
                placeholder: 'Cities / states and number of sites',
                auto: 'off',
              },
            ].map((f) => (
              <label key={f.name}>
                {f.name}
                {['Name', 'Company', 'Email', 'Phone'].includes(f.name)
                  ? ' *'
                  : ' (optional)'}
                <input
                  name={f.name}
                  type={f.type}
                  autoComplete={f.auto}
                  required={['Name', 'Company', 'Email', 'Phone'].includes(
                    f.name,
                  )}
                  min={f.type === 'number' ? 1 : undefined}
                  maxLength={f.type === 'number' ? undefined : 200}
                  placeholder={f.placeholder}
                />
              </label>
            ))}
          </div>
          <div className="form-field">
            <span id="service-label">Service Required *</span>
            <Select name="service" value={service} onValueChange={setService}>
              <SelectTrigger
                id="service-required"
                aria-labelledby="service-label"
                aria-invalid={!service && !!feedback}
                aria-describedby={
                  !service && feedback ? 'form-feedback' : undefined
                }
                className="service-select"
              >
                <SelectValue placeholder="How can we help?" />
              </SelectTrigger>
              <SelectContent>
                {[
                  ...services.map((s) => s.title),
                  'Not sure — help me assess',
                ].map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <label className="form-field">
            Message (optional){' '}
            <textarea
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={4000}
              placeholder="Tell us about your current payroll process, contractors and the gaps you want to address."
              rows={3}
            />
          </label>
          <div className="form-bottom">
            <span>
              <LockKeyhole size={13} /> Your details stay private.
            </span>
            <button className="button" type="submit">
              Talk to Us <ArrowUpRight size={17} />
            </button>
          </div>
          {!CONTACT_EMAIL && (
            <p className="form-notice">
              Online enquiries are not yet available. You can prepare and
              download your details.
            </p>
          )}
          <output aria-live="polite">
            {feedback && (
              <div className="form-feedback" id="form-feedback">
                <p>{feedback}</p>
                {draft && (
                  <button
                    type="button"
                    className="text-link"
                    onClick={download}
                  >
                    Download enquiry <ArrowRight size={15} />
                  </button>
                )}
              </div>
            )}
          </output>
        </form>
      </div>
    </section>
  );
}
export function Legal() {
  return (
    <div className="legal-links">
      {[
        {
          title: 'Privacy Policy',
          text: CONTACT_EMAIL
            ? 'This form prepares an email using your chosen email app. Details are shared only when you send the email. Do not include sensitive employee records.'
            : 'This preview form holds your details only in the current page session. It does not send enquiries or save form data on a server. Downloading an enquiry saves a text file on your device. Do not include sensitive employee records.',
        },
        {
          title: 'Terms',
          text: 'This website provides an overview of Ordin’s services. Dashboard figures are illustrative and do not represent live customer data. Service scope, responsibilities and fees will be agreed separately before work begins.',
        },
      ].map((item) => (
        <Dialog key={item.title}>
          <DialogTrigger>{item.title}</DialogTrigger>
          <DialogContent className="service-dialog">
            <DialogTitle className="modal-title">{item.title}</DialogTitle>
            <DialogDescription className="modal-description">
              {item.text}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
