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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
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
              <span className="green-dot" /> FOR ENTERPRISE HR & FINANCE LEADERS
            </div>
            <h1>
              Payroll & compliance.
              <br />
              <span>Across every location.</span>
            </h1>
            <p>
              We help HR and Finance leaders simplify payroll and compliance for
              large, multi-location frontline workforces across India.
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
              <ShieldCheck size={17} /> Site-level coordination. Central
              oversight.
            </div>
          </div>
          <div className="hero-visual">
            <Dashboard />
            <div className="visual-caption">
              Illustrative reporting view · Sample workforce and locations
            </div>
          </div>
        </section>
        <section className="value-strip wrap">
          {(
            [
              [
                Wallet,
                'Bring inputs together',
                'Consolidate site-wise attendance, employee changes and payroll inputs.',
              ],
              [
                ShieldCheck,
                'Coordinate compliance',
                'Track requirements, records and outstanding actions by establishment.',
              ],
              [
                Users,
                'Keep contractors in view',
                'See which contractor records are verified and which need follow-up.',
              ],
              [
                ChartNoAxesCombined,
                'Give leaders clarity',
                'Bring payroll status and site-level exceptions into one management view.',
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
                From site inputs
                <br />
                to management reporting.
              </h2>
            </div>
            <p>
              Six connected services for your central HR team, Finance team and
              local operations. Scope shaped around your workforce.
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
            <h3>Many locations. One view.</h3>
            <p>Payroll, workforce records and exceptions by site.</p>
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
            <small>Across 4 sample locations</small>
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
        <div
          className="site-summary"
          aria-label="Illustrative workforce by location"
        >
          <div className="site-summary-title">
            <span>LOCATION VIEW</span>
            <span>Employees / open issues</span>
          </div>
          <div className="site-grid">
            {[
              ['Plant', '64', '3 issues'],
              ['Warehouse', '52', '2 issues'],
              ['Project site', '42', '2 issues'],
              ['Regional office', '28', 'No open issues'],
            ].map(([site, count, issues]) => (
              <div key={site}>
                <span>{site}</span>
                <strong>{count}</strong>
                <small>{issues}</small>
              </div>
            ))}
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
    audience:
      'HR and Finance teams coordinating monthly payroll across plants, branches and sites.',
    inputs:
      'Employee master, attendance and leave inputs, salary changes and approved adjustments.',
    deliverable:
      'Consolidated and site-wise payroll summaries, payslips and full-and-final settlement records.',
    desc: 'Site-wise inputs, salary calculations, payslips and consolidated payroll reporting.',
    items: [
      'Consolidation and review of payroll inputs from each site',
      'Salary calculations and exception review for approval',
      'Payslips, payroll reports and full-and-final settlement support',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Statutory Compliance',
    audience:
      'Central HR and Finance teams coordinating payroll-related statutory requirements.',
    inputs:
      'Payroll records, establishment details and existing contribution documentation.',
    deliverable:
      'An establishment-wise status summary with supporting records and outstanding actions.',
    desc: 'PF, ESI and payroll-related requirements, with establishment-wise tracking.',
    items: [
      'PF and ESI compliance coordination',
      'Payroll-related documentation organised by establishment',
      'Tracking of recurring requirements and pending records',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Labour Compliance',
    audience:
      'HR and site operations teams managing workforce records across locations.',
    inputs:
      'Location details, employee records, wage information and existing registers.',
    deliverable:
      'Site-wise records and registers, with documentation gaps and follow-up actions identified.',
    desc: 'Workforce records, wage requirements and registers organised by location.',
    items: [
      'Employee records and registers',
      'Wage requirement checks',
      'Establishment compliance support',
    ],
  },
  {
    icon: Users,
    title: 'Contractor Compliance',
    audience:
      'Enterprises coordinating contractors and frontline teams across multiple sites.',
    inputs:
      'Contractor list, site allocations, workforce records and available compliance documents.',
    deliverable:
      'A contractor-wise documentation tracker with verification status and missing records.',
    desc: 'Contractor-wise records, document verification and site-level follow-up.',
    items: [
      'Contractor documentation review',
      'Workforce record verification',
      'Missing document and exception tracking',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Compliance Audit',
    audience:
      'HR and Finance leaders seeking a clear view of gaps across their workforce operations.',
    inputs:
      'An agreed list of establishments, payroll records and employee or contractor documents.',
    deliverable:
      'A prioritised findings report covering missing documentation, risks and next steps.',
    desc: 'Review gaps across locations and turn findings into prioritised actions.',
    items: [
      'Payroll and workforce compliance review',
      'Document gap identification',
      'Prioritised findings and action planning',
    ],
  },
  {
    icon: Building2,
    title: 'HR Operations',
    audience:
      'Central HR teams coordinating joiners, employee changes and exits with local teams.',
    inputs:
      'Employee information, joiner and exit details, and approved workforce changes.',
    deliverable:
      'Organised employee documentation and a clear view of pending onboarding and exit actions.',
    desc: 'Joiners, exits and employee documentation coordinated across sites.',
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
            <div className="service-audience">
              <h3 className="service-detail-label">What we start with</h3>
              <p>{s.inputs}</p>
            </div>
            <div className="service-deliverable">
              <h3 className="service-detail-label">What you receive</h3>
              <p>{s.deliverable}</p>
            </div>
            <p className="service-scope">
              Coverage, responsibilities and reporting formats are agreed during
              assessment.
            </p>
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
type ReportView = 'finance' | 'hr' | 'leadership';
const reportLabels: Record<ReportView, string> = {
  finance: 'Finance view',
  hr: 'HR view',
  leadership: 'Leadership view',
};
const reportData: Record<
  ReportView,
  Array<{
    requirement: string;
    scope: string;
    status: string;
    owner: string;
    action: string;
    tone?: string;
  }>
> = {
  finance: [
    {
      requirement: 'Payroll summary',
      scope: 'All 4 locations',
      status: 'Completed',
      owner: 'Payroll team',
      action: 'Review consolidated and site-wise totals',
    },
    {
      requirement: 'PF / ESI records',
      scope: 'Establishment records',
      status: 'Compliant',
      owner: 'Compliance team',
      action: 'Retain verified records',
    },
    {
      requirement: 'Contractor documents',
      scope: 'Warehouse / project site',
      status: 'Pending',
      owner: 'Contractor',
      action: 'Supply missing records',
      tone: 'pending',
    },
    {
      requirement: 'Wage register',
      scope: 'Plant',
      status: 'In review',
      owner: 'Compliance team',
      action: 'Resolve record exceptions',
      tone: 'review',
    },
  ],
  hr: [
    {
      requirement: 'New joiner records',
      scope: 'Plant / warehouse',
      status: 'Completed',
      owner: 'Site HR',
      action: 'Review 3 new records',
    },
    {
      requirement: 'Employee changes',
      scope: 'All 4 locations',
      status: 'Completed',
      owner: 'HR team',
      action: 'Confirm monthly updates',
    },
    {
      requirement: 'Contractor documents',
      scope: 'Warehouse / project site',
      status: 'Pending',
      owner: 'Contractor',
      action: 'Supply missing records',
      tone: 'pending',
    },
    {
      requirement: 'Exit documentation',
      scope: 'Project site',
      status: 'In review',
      owner: 'HR team',
      action: 'Close 2 open files',
      tone: 'review',
    },
  ],
  leadership: [
    {
      requirement: 'Monthly payroll',
      scope: '186 employees / 4 locations',
      status: 'Completed',
      owner: 'Payroll team',
      action: 'No action required',
    },
    {
      requirement: 'Compliance exceptions',
      scope: '3 locations with open issues',
      status: '7 open',
      owner: 'Compliance team',
      action: 'Review priority actions',
      tone: 'pending',
    },
    {
      requirement: 'Contractor records',
      scope: '4 contractors',
      status: 'Pending',
      owner: 'Operations',
      action: 'Assign document owners',
      tone: 'pending',
    },
    {
      requirement: 'Audit actions',
      scope: 'Site-wise follow-up',
      status: 'In review',
      owner: 'Compliance team',
      action: 'Track closure status',
      tone: 'review',
    },
  ],
};
function MoreSections() {
  return (
    <>
      <section className="process-section">
        <div className="wrap section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">OUR OPERATING APPROACH</div>
              <h2>Local inputs. A coordinated process.</h2>
            </div>
            <p>
              Agree the responsibilities, review points and reporting your teams
              need before operations begin.
            </p>
          </div>
          <div className="process-grid">
            {[
              [
                'Assess',
                'Map locations, workforce groups, contractors and existing workflows.',
              ],
              [
                'Setup',
                'Agree data formats, site owners, cut-offs and approval responsibilities.',
              ],
              [
                'Manage',
                'Coordinate inputs, payroll processing and recurring compliance work.',
              ],
              [
                'Monitor',
                'Track missing records and exceptions with the responsible teams.',
              ],
              [
                'Report',
                'Bring site-wise status, open actions and supporting records together.',
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
          <div className="eyebrow">VISIBILITY FOR EVERY DECISION-MAKER</div>
          <h2>
            Close to the details.
            <br />
            Across the business.
          </h2>
          <p>
            HR needs complete employee records. Finance needs reviewed payroll
            inputs and outputs. Leadership needs a clear view of exceptions
            across locations.
          </p>
          <div className="visibility-checks">
            <span>
              <CircleCheck /> Finance: site-wise payroll summaries and approvals
            </span>
            <span>
              <CircleCheck /> HR: joiners, exits and contractor documentation
            </span>
            <span>
              <CircleCheck /> Leadership: locations, open issues and action
              owners
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
          <Tabs defaultValue="finance" className="report-views">
            <TabsList
              className="report-tabs"
              aria-label="Reporting views"
              variant="line"
            >
              {(['finance', 'hr', 'leadership'] as ReportView[]).map((view) => (
                <TabsTrigger key={view} value={view} className="report-tab">
                  {reportLabels[view]}
                </TabsTrigger>
              ))}
            </TabsList>
            {(['finance', 'hr', 'leadership'] as ReportView[]).map((view) => (
              <TabsContent key={view} value={view} className="report-panel">
                <Table className="report-table">
                  <TableHeader>
                    <TableRow>
                      <TableHead scope="col">Requirement</TableHead>
                      <TableHead scope="col">Status</TableHead>
                      <TableHead scope="col">Owner / next action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportData[view].map((row) => (
                      <TableRow key={row.requirement}>
                        <TableCell>
                          {row.requirement}
                          <small>{row.scope}</small>
                        </TableCell>
                        <TableCell>
                          <span className={'status ' + (row.tone || '')}>
                            {row.status}
                          </span>
                        </TableCell>
                        <TableCell>
                          <strong>{row.owner}</strong>
                          <small>{row.action}</small>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
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
            <div className="eyebrow">WHERE FRONTLINE WORK HAPPENS</div>
            <h2>
              Frontline workforces.
              <br />
              Across industries.
            </h2>
          </div>
          <p>
            Payroll and compliance support shaped around your locations,
            workforce mix and operating requirements.
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
              A defined way of working between your central teams, site teams
              and Ordin.
            </p>
          </div>
          <div className="why-grid">
            {(
              [
                [
                  Layers,
                  'Clear responsibilities',
                  'Agree who provides inputs, reviews exceptions and approves each payroll cycle.',
                ],
                [
                  ClipboardCheck,
                  'Consistent review points',
                  'Use shared input formats and verification steps across locations.',
                ],
                [
                  ChartNoAxesCombined,
                  'Evidence behind the status',
                  'Keep supporting records and outstanding actions visible alongside reports.',
                ],
                [
                  Rocket,
                  'A plan for changing needs',
                  'Review the scope as locations, headcount and contractor requirements change.',
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
          <div className="eyebrow">START WITH YOUR OPERATING CHALLENGES</div>
          <h2>
            Where does your
            <br />
            monthly process get stuck?
          </h2>
          <p>
            Review site inputs, payroll handoffs and compliance gaps with us.
          </p>
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
            Your workforce is distributed.
            <br />
            Your oversight should be clear.
          </h2>
        </div>
        <p>
          Ordin works with HR and Finance leaders in India to simplify payroll,
          compliance and workforce operations for large, multi-location
          frontline teams. Our focus is structured processes, reliable
          coordination and clear reporting.
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
            Tell us about your workforce, operating locations and the challenges
            your HR or Finance team is working through.
          </p>
          <div className="contact-promise">
            <ShieldCheck size={22} />
            <span>
              Start with your current process.
              <br />
              Discuss scope, handoffs and reporting needs.
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
