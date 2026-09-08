'use client';
import { useEffect, useState } from 'react';
import type { ComponentType, SyntheticEvent } from 'react';
import {
  ArrowUpRight,
  ArrowRight,
  Check,
  ShieldCheck,
  Users,
  Building2,
  Wallet,
  FileCheck2,
  ClipboardCheck,
  ChartNoAxesCombined,
  Menu,
  X,
  Factory,
  Truck,
  Hotel,
  HardHat,
  HeartPulse,
  Warehouse,
  GraduationCap,
  Rocket,
  Layers,
  CircleCheck,
  LockKeyhole,
  ChevronDown,
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

type IconComponent = ComponentType<{ size?: number; className?: string }>;

export default function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header className="header">
        <a className="brand" href="#home" aria-label="Ordin home">
          <span className="brand-mark">
            <Layers size={23} />
          </span>
          ordin<span className="brand-dot">.</span>
        </a>
        <nav className={menu ? 'nav open' : 'nav'} aria-label="Main navigation">
          {['Home', 'Services', 'Industries', 'About', 'Contact'].map((n) => (
            <a
              key={n}
              href={'#' + n.toLowerCase()}
              onClick={() => setMenu(false)}
            >
              {n}
              {n === 'Services' && <ChevronDown size={12} />}
            </a>
          ))}
        </nav>
        <a href="#contact" className="button header-cta">
          Book a Consultation <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="home">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="green-dot" /> PEOPLE. PROCESSES. PEACE OF MIND.
            </div>
            <h1>
              Payroll &<br />
              Compliance.
              <br />
              <span>Simplified.</span>
            </h1>
            <p>
              We manage payroll, statutory compliance and workforce operations
              so you can focus on running your business.
            </p>
            <div className="cta-row">
              <a className="button" href="#contact">
                Book a Consultation <ArrowUpRight size={17} />
              </a>
              <a className="button secondary" href="#services">
                Explore Services <ArrowRight size={17} />
              </a>
            </div>
            <div className="hero-foot">
              <ShieldCheck size={17} /> Built for Indian businesses{' '}
              <span>•</span> Designed for clarity
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-top">
              <span className="green-dot" /> YOUR WORKFORCE. IN SYNC.
            </div>
            <Dashboard />
            <div className="floating-note">
              <span className="note-icon">
                <Check size={19} />
              </span>
              <div>
                <strong>Everything, accounted for.</strong>
                <small>Less follow-up. More peace of mind.</small>
              </div>
            </div>
            <div className="visual-caption">
              Illustrative compliance overview
            </div>
          </div>
        </section>
        <section className="value-strip wrap">
          {(
            [
              [
                Wallet,
                'Accurate Payroll',
                'Reliable monthly payroll operations.',
              ],
              [
                ShieldCheck,
                'Compliance Management',
                'Structured statutory and labour compliance support.',
              ],
              [
                Users,
                'Contractor Control',
                'Track contractor documentation and workforce compliance.',
              ],
              [
                ChartNoAxesCombined,
                'Clear Reporting',
                'Know exactly what is complete, pending and at risk.',
              ],
            ] as Array<[IconComponent, string, string]>
          ).map(([Icon, title, desc]) => (
            <div className="value-card" key={title}>
              <Icon size={21} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </section>
        <section className="section wrap" id="services">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>
                Complex requirements.
                <br />
                Straightforward support.
              </h2>
            </div>
            <p>
              From every payslip to every compliance check.
              <br />
              We bring it all together.
            </p>
          </div>
          <Services />
        </section>
      </main>
      <MoreSections />
      <footer className="wrap footer">
        <div>
          <a className="brand" href="#home">
            <span className="brand-mark">
              <Layers size={22} />
            </span>
            ordin.
          </a>
          <p>Payroll | Compliance | Workforce Operations</p>
        </div>
        <div className="footer-links">
          {['Services', 'Industries', 'About', 'Contact'].map((n) => (
            <a key={n} href={'#' + n.toLowerCase()}>
              {n}
            </a>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Ordin. All rights reserved.</span>
          <Legal />
        </div>
      </footer>
    </>
  );
}
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dash-heading">
        <div>
          <span className="mini-logo">
            <Layers size={16} />
          </span>
          <strong>Workforce overview</strong>
        </div>
        <span className="period">Monthly snapshot</span>
      </div>
      <div className="dash-greeting">
        <h3>A little clarity. A lot of confidence.</h3>
        <p>Your people and compliance, at a glance.</p>
      </div>
      <div className="dash-stats">
        <div>
          <span>
            <Users size={15} /> Employees
          </span>
          <strong>
            186 <small>Active workforce</small>
          </strong>
        </div>
        <div>
          <span>
            <Building2 size={15} /> Contractors
          </span>
          <strong>
            04 <small>Active partners</small>
          </strong>
        </div>
      </div>
      <div className="payroll-row">
        <div className="payroll-icon">
          <Wallet size={20} />
        </div>
        <div>
          <strong>Payroll Status</strong>
          <small>Monthly payroll processing</small>
        </div>
        <span className="status">
          <Check size={12} /> Completed
        </span>
      </div>
      <div className="dash-bottom">
        <div className="status-list">
          <div>
            <span>PF Status</span>
            <span className="status">
              <span className="green-dot" /> Compliant
            </span>
          </div>
          <div>
            <span>ESI Status</span>
            <span className="status">
              <span className="green-dot" /> Compliant
            </span>
          </div>
          <div>
            <span>Pending Compliance</span>
            <span className="warning">7 open issues</span>
          </div>
        </div>
        <div className="health">
          <div className="health-ring">
            <strong>
              94<span>%</span>
            </strong>
          </div>
          <strong>Compliance Health</strong>
          <small>Documents complete</small>
        </div>
      </div>
      <div className="dash-footer">
        <span className="green-dot" /> Clear records. Better decisions.
        <ShieldCheck size={14} />
      </div>
    </div>
  );
}
const services = [
  {
    icon: Wallet,
    title: 'Payroll Management',
    desc: 'Monthly payroll, salary calculations, payslips, F&F and reporting.',
    items: [
      'Monthly salary calculations and processing',
      'Payslips and payroll reporting',
      'Full and final settlement support',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Statutory Compliance',
    desc: 'PF, ESI and payroll-related statutory compliance support.',
    items: [
      'PF and ESI compliance coordination',
      'Payroll-related statutory documentation',
      'Recurring compliance tracking',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Labour Compliance',
    desc: 'Employee records, registers, wage requirements and establishment compliance.',
    items: [
      'Employee records and registers',
      'Wage requirement checks',
      'Establishment compliance support',
    ],
  },
  {
    icon: Users,
    title: 'Contractor Compliance',
    desc: 'Contractor documentation, workforce records and compliance verification.',
    items: [
      'Contractor documentation review',
      'Workforce record verification',
      'Missing document and exception tracking',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Audit',
    desc: 'Identify gaps, risks and missing documentation.',
    items: [
      'Payroll and workforce compliance review',
      'Document gap identification',
      'Prioritised findings and action planning',
    ],
  },
  {
    icon: Building2,
    title: 'HR Operations',
    desc: 'Onboarding, exits, documentation and recurring HR administration.',
    items: [
      'Employee onboarding and exit documentation',
      'Employee record maintenance',
      'Recurring HR administration',
    ],
  },
];
function Services() {
  return (
    <div className="service-grid">
      {services.map((s) => (
        <Dialog key={s.title}>
          <DialogTrigger className="service-card">
            <s.icon size={24} />
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span>
              Explore service <ArrowUpRight size={17} />
            </span>
          </DialogTrigger>
          <DialogContent className="service-dialog">
            <s.icon size={30} color="#176342" />
            <DialogTitle className="modal-title">{s.title}</DialogTitle>
            <DialogDescription className="modal-description">
              {s.desc}
            </DialogDescription>
            <ul className="service-details">
              {s.items.map((t) => (
                <li key={t}>
                  <CircleCheck size={17} />
                  {t}
                </li>
              ))}
            </ul>
            <DialogClose
              className="button"
              onClick={() => {
                window.dispatchEvent(
                  new CustomEvent('ordin-service', { detail: s.title }),
                );
                location.hash = 'contact';
              }}
            >
              Discuss your requirements <ArrowUpRight size={17} />
            </DialogClose>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
function MoreSections() {
  return (
    <>
      <section className="process-section">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">HOW IT WORKS</div>
              <h2>A clear process. From day one.</h2>
            </div>
            <p>
              Five connected steps.
              <br />
              Nothing left to guesswork.
            </p>
          </div>
          <div className="process-grid">
            {[
              ['Assess', 'Understand workforce and compliance requirements.'],
              ['Setup', 'Structure payroll, employee and contractor data.'],
              ['Manage', 'Handle recurring payroll and compliance operations.'],
              ['Monitor', 'Track exceptions and missing requirements.'],
              [
                'Report',
                'Provide clear management-level compliance visibility.',
              ],
            ].map(([title, desc], i) => (
              <div className="process-step" key={title}>
                <div className="step-line">
                  <span>0{i + 1}</span>
                  {i < 4 && <ArrowRight size={16} />}
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap section visibility-section">
        <div className="visibility-copy">
          <div className="eyebrow">SEE THE BIGGER PICTURE</div>
          <h2>
            All the details.
            <br />
            One clear view.
          </h2>
          <p>
            Know where you stand across payroll, people and compliance. Clear
            reporting turns scattered information into confident decisions.
          </p>
          <div className="visibility-checks">
            <span>
              <CircleCheck /> Track what’s complete and what needs attention
            </span>
            <span>
              <CircleCheck /> Spot missing documents before they become gaps
            </span>
            <span>
              <CircleCheck /> Keep your management team informed
            </span>
          </div>
          <a className="text-link" href="#contact">
            Bring clarity to your operations <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="overview-preview">
          <div className="overview-head">
            <div>
              <ChartNoAxesCombined size={19} />
              <strong>Compliance snapshot</strong>
            </div>
            <span className="status">Illustrative view</span>
          </div>
          <div className="overview-numbers">
            <div>
              <span>Employees</span>
              <strong>186</strong>
            </div>
            <div>
              <span>Contractors</span>
              <strong>4</strong>
            </div>
            <div>
              <span>Open Issues</span>
              <strong className="amber">7</strong>
            </div>
          </div>
          <div className="overview-status">
            {[
              ['Payroll', 'Completed'],
              ['PF', 'Compliant'],
              ['ESI', 'Compliant'],
            ].map(([a, b]) => (
              <div key={a}>
                <span>{a}</span>
                <span className="status">
                  <Check size={13} />
                  {b}
                </span>
              </div>
            ))}
          </div>
          <div className="document-progress">
            <div>
              <span>Documents complete</span>
              <strong>94%</strong>
            </div>
            <Progress value={94} aria-label="Documents complete" />
            <small>Clear visibility into the remaining requirements.</small>
          </div>
          <p className="preview-note">
            Sample reporting view. Not a live system or software offering.
          </p>
        </div>
      </section>
      <section className="wrap section industries" id="industries">
        <div className="section-heading">
          <div>
            <div className="eyebrow">WHO WE SUPPORT</div>
            <h2>
              Different industries.
              <br />
              The same need for clarity.
            </h2>
          </div>
          <p>
            Support shaped around your people,
            <br />
            your operations and your industry.
          </p>
        </div>
        <div className="industry-grid">
          {(
            [
              [Factory, 'Manufacturing'],
              [Truck, 'Logistics'],
              [Hotel, 'Hospitality'],
              [HardHat, 'Construction'],
              [HeartPulse, 'Healthcare'],
              [Warehouse, 'Warehousing'],
              [GraduationCap, 'Education'],
              [Rocket, 'Startups & SMEs'],
            ] as Array<[IconComponent, string]>
          ).map(([Icon, title]) => (
            <a
              key={title}
              href="#contact"
              onClick={() =>
                window.dispatchEvent(
                  new CustomEvent('ordin-industry', { detail: title }),
                )
              }
            >
              <Icon size={26} />
              <span>{title}</span>
              <ArrowUpRight className="industry-arrow" size={14} />
            </a>
          ))}
        </div>
      </section>
      <section className="why-section">
        <div className="wrap section">
          <div className="why-intro">
            <div className="eyebrow">WHY ORDIN</div>
            <h2>
              One Partner.
              <br />
              Clearer Compliance.
            </h2>
            <p>
              Less complexity in your day.
              <br />
              More confidence in your operations.
            </p>
          </div>
          <div className="why-grid">
            {(
              [
                [
                  Layers,
                  'Centralized Operations',
                  'One place for payroll and workforce compliance.',
                ],
                [
                  ClipboardCheck,
                  'Structured Processes',
                  'Clear workflows and verification controls.',
                ],
                [
                  ChartNoAxesCombined,
                  'Better Visibility',
                  'Understand compliance status without chasing spreadsheets.',
                ],
                [
                  Rocket,
                  'Scalable Support',
                  'Processes that grow with your workforce.',
                ],
              ] as Array<[IconComponent, string, string]>
            ).map(([Icon, title, desc]) => (
              <div key={title}>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap diagnostic">
        <div>
          <div className="eyebrow">A GOOD PLACE TO START</div>
          <h2>
            Not sure where your
            <br />
            compliance gaps are?
          </h2>
          <p>Start with a payroll and workforce compliance diagnostic.</p>
        </div>
        <a
          className="button"
          href="#contact"
          onClick={() =>
            window.dispatchEvent(
              new CustomEvent('ordin-service', { detail: 'Compliance Audit' }),
            )
          }
        >
          Request a Compliance Review <ArrowUpRight size={17} />
        </a>
      </section>
      <section className="wrap about section" id="about">
        <div>
          <div className="eyebrow">ABOUT ORDIN</div>
          <h2>
            Workforce complexity.
            <br />
            Made manageable.
          </h2>
        </div>
        <p>
          We help Indian businesses simplify payroll and workforce compliance
          through structured processes, reliable operations and clear reporting.
        </p>
      </section>
      <Contact />
    </>
  );
}
const CONTACT_EMAIL = '';
function Contact() {
  const [service, setService] = useState<string | null>(null);
  const [message, setMessage] = useState('');
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
            Make room for
            <br />
            what’s next.
          </h2>
          <p>
            Tell us a little about your business.
            <br />
            Let’s make payroll and compliance simpler.
          </p>
          <div className="contact-promise">
            <ShieldCheck size={22} />
            <span>
              Your business. Your requirements.
              <br />A conversation built around you.
            </span>
          </div>
          <div className="contact-location">
            <Building2 size={16} /> Supporting businesses across India
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
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
                placeholder: 'e.g. 186',
                auto: 'off',
              },
              {
                name: 'City',
                type: 'text',
                placeholder: 'Your city',
                auto: 'address-level2',
              },
            ].map((f) => (
              <label key={f.name}>
                {f.name}
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
            <span id="service-label">Service Required</span>
            <Select name="service" value={service} onValueChange={setService}>
              <SelectTrigger
                aria-labelledby="service-label"
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
            Message{' '}
            <textarea
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={4000}
              placeholder="A little about what you need…"
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
              Preview form: enquiry delivery is awaiting contact setup.
            </p>
          )}
          <output aria-live="polite">
            {feedback && (
              <div className="form-feedback">
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
function Legal() {
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
