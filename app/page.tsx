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
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table';
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
        <nav
          id="main-navigation"
          className={menu ? 'nav open' : 'nav'}
          aria-label="Main navigation"
        >
          {['Home', 'Services', 'Industries', 'About', 'Contact'].map((n) => (
            <a
              key={n}
              href={'#' + n.toLowerCase()}
              onClick={() => setMenu(false)}
            >
              {n}
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
          aria-controls="main-navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>
      <main id="home">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="green-dot" /> PAYROLL & WORKFORCE COMPLIANCE ·
              INDIA
            </div>
            <h1>
              Payroll & Compliance.
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
              <ShieldCheck size={17} /> Managed by people. Supported by clear
              reporting.
            </div>
          </div>
          <div className="hero-visual">
            <Dashboard />
            <div className="visual-caption">
              Illustrative reporting view · Sample data, not a software product
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
                Your workforce operations.
                <br />
                Taken care of.
              </h2>
            </div>
            <p>
              Six connected services. One accountable partner for your payroll,
              people and compliance.
            </p>
          </div>
          <Services />
        </section>
        <MoreSections />
      </main>
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
      <div className="dash-rail" aria-hidden="true">
        <Layers size={22} />
        <span />
        <ChartNoAxesCombined size={20} />
        <Users size={20} />
        <Wallet size={20} />
        <FileCheck2 size={20} />
        <ShieldCheck size={20} />
        <span className="rail-bottom">o.</span>
      </div>
      <div className="dash-content">
        <div className="dash-heading">
          <div>
            <span className="dashboard-breadcrumb">Operations</span>
            <span>/</span>
            <strong>Workforce overview</strong>
          </div>
          <span className="period">Sample monthly report</span>
        </div>
        <div className="dash-intro">
          <div>
            <h3>Everything in view.</h3>
            <p>Your people, payroll and compliance status.</p>
          </div>
          <span className="status">
            <Check size={14} /> Payroll completed
          </span>
        </div>
        <div className="dash-stats">
          <div>
            <span>
              <Users size={16} /> Employees
            </span>
            <strong>186</strong>
            <small>Active workforce</small>
          </div>
          <div>
            <span>
              <Building2 size={16} /> Contractors
            </span>
            <strong>04</strong>
            <small>Active partners</small>
          </div>
          <div>
            <span>
              <FileCheck2 size={16} /> Documents complete
            </span>
            <strong>
              94<span>%</span>
            </strong>
            <Progress value={94} aria-label="Sample document completeness" />
            <small>Document coverage only</small>
          </div>
          <div className="attention-stat">
            <span>
              <ClipboardCheck size={16} /> Pending compliance
            </span>
            <strong>07</strong>
            <small>Open issues to review</small>
          </div>
        </div>
        <div className="dash-footer">
          <span>
            <ShieldCheck size={16} /> Compliance health
          </span>
          <div>
            <span className="green-dot" /> PF compliant
          </div>
          <div>
            <span className="green-dot" /> ESI compliant
          </div>
          <span className="dash-review">
            7 items need attention <ArrowUpRight size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}
const services = [
  {
    icon: Wallet,
    title: 'Payroll Management',
    audience: 'Businesses looking for reliable recurring payroll support.',
    deliverable:
      'A monthly payroll summary, payslips and settlement records for review.',
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
    audience: 'Employers managing PF, ESI and payroll-related requirements.',
    deliverable:
      'An organised record of statutory documentation, completed requirements and pending actions.',
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
    audience: 'Businesses maintaining workforce records across establishments.',
    deliverable:
      'Structured employee records and registers, with exceptions clearly identified.',
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
    audience: 'Businesses working with contractors or a distributed workforce.',
    deliverable:
      'A contractor-wise documentation tracker with verification status and missing records.',
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
    audience: 'Teams that need to understand gaps before deciding what to fix.',
    deliverable:
      'A prioritised findings report covering missing documentation, risks and next steps.',
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
    audience: 'Growing teams managing recurring employee administration.',
    deliverable:
      'Organised employee documentation and a clear view of pending onboarding and exit actions.',
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
      {services.map((s, index) => (
        <Dialog key={s.title}>
          <DialogTrigger className="service-card">
            <s.icon size={24} />
            <span className="service-index">0{index + 1}</span>
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
            <div className="service-audience">
              <h3 className="service-detail-label">Who it’s for</h3>
              <p>{s.audience}</p>
            </div>
            <h3 className="service-detail-label">What we handle</h3>
            <ul className="service-details">
              {s.items.map((t) => (
                <li key={t}>
                  <CircleCheck size={17} />
                  {t}
                </li>
              ))}
            </ul>
            <div className="service-deliverable">
              <h3 className="service-detail-label">What you receive</h3>
              <p>{s.deliverable}</p>
            </div>
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
            Clear records.
            <br />
            Clear next steps.
          </h2>
          <p>
            See what’s complete, what needs attention and who owns the next
            action.
          </p>
          <div className="visibility-checks">
            <span>
              <CircleCheck /> Finance: payroll summaries ready for review
            </span>
            <span>
              <CircleCheck /> HR: employee and contractor record visibility
            </span>
            <span>
              <CircleCheck /> Leadership: prioritised issues and next steps
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
              <strong>Monthly compliance review</strong>
            </div>
            <span className="status">Example report</span>
          </div>
          <div className="report-summary">
            <div>
              <span>OPEN ISSUES</span>
              <strong>
                7 <small>items to review</small>
              </strong>
            </div>
            <ClipboardCheck size={28} />
          </div>
          <Table className="report-table">
            <TableHeader>
              <TableRow>
                <TableHead scope="col">Requirement</TableHead>
                <TableHead scope="col">Status</TableHead>
                <TableHead scope="col">Owner / next action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Payroll summary</TableCell>
                <TableCell>
                  <span className="status">Completed</span>
                </TableCell>
                <TableCell>
                  <strong>Payroll team</strong>
                  <small>Review salary summary</small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>PF / ESI records</TableCell>
                <TableCell>
                  <span className="status">Compliant</span>
                </TableCell>
                <TableCell>
                  <strong>Compliance team</strong>
                  <small>Retain verified records</small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Contractor documents</TableCell>
                <TableCell>
                  <span className="status pending">Pending</span>
                </TableCell>
                <TableCell>
                  <strong>Contractor</strong>
                  <small>Supply missing records</small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wage register</TableCell>
                <TableCell>
                  <span className="status review">In review</span>
                </TableCell>
                <TableCell>
                  <strong>Compliance team</strong>
                  <small>Resolve record exceptions</small>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className="document-progress">
            <div>
              <span>Documents complete</span>
              <strong>94%</strong>
            </div>
            <Progress value={94} aria-label="Documents complete" />
            <small>Document coverage is separate from compliance status.</small>
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
            Share your workforce size, locations and priorities. We’ll use these
            to understand the support your business needs.
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
