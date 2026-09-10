'use client';
import { useState } from 'react';
import type { AnchorHTMLAttributes } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Check,
  ShieldCheck,
  Wallet,
  Users,
  FileCheck2,
  MapPin,
  CircleCheck,
  ClipboardCheck,
  BarChart3,
} from 'lucide-react';
import { services, industries } from './content';
import { Contact } from './enquiry';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
export function SiteLink({
  href = '',
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const target =
    href.startsWith('/') && !href.startsWith('//') ? basePath + href : href;
  return (
    <a {...props} href={target}>
      {children}
    </a>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <SiteLink className="skip-link" href="#main">
        Skip to content
      </SiteLink>
      <header className="site-header">
        <div className="header-inner">
          <SiteLink className="wordmark" href="/" aria-label="Ordin home">
            <Image
              className="brand-logo brand-logo-header"
              src={`${basePath}/images/ordin-logo.png`}
              alt="ORDIN — Payroll, Compliance, People Operations"
              width={1254}
              height={1254}
              unoptimized
              priority
            />
          </SiteLink>
          <button
            className="mobile-toggle"
            aria-label={open ? 'Close navigation' : 'Open navigation'}
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="site-nav"
            className={open ? 'site-nav is-open' : 'site-nav'}
            aria-label="Main navigation"
          >
            <SiteLink href="/">Home</SiteLink>
            <div className="nav-group">
              <SiteLink href="/services">
                Services <ChevronDown size={13} />
              </SiteLink>
              <div className="nav-submenu">
                <SiteLink href="/solutions">Solutions overview</SiteLink>
                <SiteLink href="/products">
                  Workforce tools & reporting
                </SiteLink>
                {services.map((s) => (
                  <SiteLink key={s.slug} href={'/services/' + s.slug}>
                    {s.title}
                  </SiteLink>
                ))}
              </div>
            </div>
            <SiteLink href="/industries">Industries</SiteLink>
            <SiteLink href="/about">About</SiteLink>
            <SiteLink href="/contact">Contact</SiteLink>
          </nav>
          <SiteLink href="/contact" className="button header-action">
            Book a Consultation
          </SiteLink>
        </div>
      </header>
    </>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <SiteLink className="wordmark" href="/" aria-label="Ordin home">
            <Image
              className="brand-logo brand-logo-footer"
              src={`${basePath}/images/ordin-logo.png`}
              alt="ORDIN — People in harmony with progress"
              width={1254}
              height={1254}
              unoptimized
            />
          </SiteLink>
          <p>
            Payroll | Compliance
            <br />
            Workforce Operations
          </p>
          <span className="footer-country">
            <MapPin size={16} /> Supporting businesses around the globe
          </span>
        </div>
        <div>
          <h3>Our services</h3>
          {services.map((s) => (
            <SiteLink key={s.slug} href={'/services/' + s.slug}>
              {s.title}
            </SiteLink>
          ))}
        </div>
        <div>
          <h3>Explore Ordin</h3>
          <SiteLink href="/">Home</SiteLink>
          <SiteLink href="/solutions">Solutions</SiteLink>
          <SiteLink href="/products">Workforce tools</SiteLink>
          <SiteLink href="/industries">Industries</SiteLink>
          <SiteLink href="/about">About us</SiteLink>
          <SiteLink href="/#approach">Our approach</SiteLink>
          <SiteLink href="/#faqs">FAQs</SiteLink>
          <SiteLink href="/contact">Contact us</SiteLink>
        </div>
        <div>
          <h3>Resources</h3>
          <SiteLink href="/resources">Resource centre</SiteLink>
          <SiteLink href="/resources/regulatory-insights/indias-four-labour-codes">
            India’s four labour codes
          </SiteLink>
          <SiteLink href="/resources/case-studies">
            Example case studies
          </SiteLink>
          <SiteLink href="/resources/notifications">
            Regulatory notifications
          </SiteLink>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Ordin. All rights reserved.</span>
        <div className="legal-links">
          <SiteLink href="/privacy-policy">Privacy Policy</SiteLink>
          <SiteLink href="/terms-of-use">Terms of Use</SiteLink>
        </div>
      </div>
    </footer>
  );
}
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
const faqs = [
  [
    'What does Ordin do?',
    'Ordin supports businesses around the globe with payroll management, statutory and labour compliance, contractor compliance, compliance audits and HR operations.',
  ],
  [
    'Who are these services designed for?',
    'HR and Finance teams managing employees, contractors and frontline workforces across plants, branches, properties or project sites.',
  ],
  [
    'Can we use individual services?',
    'Yes. The scope can cover one service or a coordinated set of payroll and workforce compliance activities, depending on your requirements.',
  ],
  [
    'How do you manage multiple locations?',
    'We agree site owners, input formats, review points and reporting responsibilities, then bring location-level status into a consolidated view.',
  ],
  [
    'What does a compliance review include?',
    'An agreed review of payroll, workforce and contractor documentation, with gaps, outstanding records and next actions identified.',
  ],
  [
    'Is the reporting preview a software product?',
    'The previews show illustrative reporting formats and sample data. Service delivery and reporting tools are agreed with you; these are not live software screens.',
  ],
  [
    'What do you need to get started?',
    'A view of your workforce, locations, current payroll process and priority challenges. Detailed document requirements follow the initial assessment.',
  ],
  [
    'What happens after we connect?',
    'We discuss your current process and define a practical scope, responsibilities and reporting expectations before work begins.',
  ],
];
export function Faq() {
  return (
    <section className="container section faq-section" id="faqs">
      <h2 className="center-title">Frequently asked questions</h2>
      <div className="faq-grid">
        {faqs.map(([q, a]) => (
          <details key={q}>
            <summary>
              {q}
              <span>+</span>
            </summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function Callout() {
  return (
    <section className="container closing-banner">
      <div>
        <span className="eyebrow">LET’S MOVE FORWARD</span>
        <h2>
          Simplify payroll.
          <br />
          Strengthen workforce compliance.
        </h2>
        <p>
          Start with a conversation about your people, locations and operating
          challenges.
        </p>
        <SiteLink className="button" href="/contact">
          Book a Consultation <ArrowRight size={17} />
        </SiteLink>
      </div>
      <div className="closing-motif" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
export function HomePage() {
  return (
    <Shell>
      <section className="container photo-hero">
        <Image
          unoptimized
          src={basePath + '/images/workforce-hero.jpg'}
          alt="Workforce analytics reviewed by a payroll professional"
          width="1536"
          height="1024"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="hero-copy">
          <span className="hero-label">PEOPLE. PROCESSES. CLARITY.</span>
          <h1>
            HR, Payroll,
            <br />
            Compliance &<br />
            Workforce Solutions
          </h1>
          <p>
            We help HR and Finance leaders simplify payroll and compliance for
            large, multi-location frontline workforces around the globe.
          </p>
          <div className="hero-actions">
            <SiteLink className="button" href="/services">
              Explore Services
            </SiteLink>
            <SiteLink className="button outline" href="/contact">
              Contact Us
            </SiteLink>
          </div>
        </div>
      </section>
      <section className="container intro-band">
        <div>
          <span className="eyebrow">CONNECTED WORKFORCE OPERATIONS</span>
          <h2>
            Many locations.
            <br />
            One coordinated approach.
          </h2>
        </div>
        <div>
          <p>
            From monthly payroll to contractor documentation, Ordin brings
            structure to the work behind your workforce.
          </p>
          <SiteLink className="text-link" href="/about">
            Meet Ordin <ArrowRight size={17} />
          </SiteLink>
        </div>
      </section>
      <section className="container outcomes">
        {[
          [
            Wallet,
            'Accurate payroll',
            'Reviewed inputs. Clear approvals. Reliable monthly operations.',
          ],
          [
            ShieldCheck,
            'Structured compliance',
            'Organised records and follow-up across establishments.',
          ],
          [
            Users,
            'Contractor oversight',
            'Documentation, verification and workforce visibility.',
          ],
          [
            BarChart3,
            'Clear reporting',
            'Know what is complete, pending and ready for review.',
          ],
        ].map(([Icon, h, p]) => {
          const I = Icon as typeof Wallet;
          return (
            <div key={h as string}>
              <I />
              <h3>{h as string}</h3>
              <p>{p as string}</p>
            </div>
          );
        })}
      </section>
      <section className="container ecosystem section" id="services">
        <div className="section-center">
          <span className="section-pill">Our service ecosystem</span>
          <h2>
            Connected solutions for
            <br />
            complex workforce operations.
          </h2>
          <p>
            Payroll, people administration and compliance support, brought
            together around the way your business works.
          </p>
        </div>
        <SolutionPanel index={0} />
        <SolutionPanel index={1} />
        <SolutionPanel index={3} />
        <div className="secondary-solutions">
          {[2, 4, 5].map((i) => {
            const s = services[i];
            return (
              <SiteLink href={'/services/' + s.slug} key={s.slug}>
                <s.icon size={29} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span>
                  Explore service <ArrowRight size={17} />
                </span>
              </SiteLink>
            );
          })}
        </div>
      </section>
      <IndustryGrid />
      <section className="approach-band" id="approach">
        <div className="container">
          <div className="approach-heading">
            <span className="eyebrow">OUR APPROACH</span>
            <h2>
              Doing the everyday work.
              <br />
              <span>With clarity, every cycle.</span>
            </h2>
          </div>
          <div className="process-grid">
            {[
              [
                'Assess',
                'Understand your workforce, locations and requirements.',
              ],
              ['Setup', 'Agree data, owners, cut-offs and approval steps.'],
              ['Manage', 'Coordinate payroll and recurring compliance work.'],
              ['Monitor', 'Track exceptions and missing requirements.'],
              ['Report', 'Bring status and open actions into one clear view.'],
            ].map(([t, d], i) => (
              <div key={t}>
                <span className="step-number">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container section story-section">
        <div className="story-visual">
          <span className="section-pill">Illustrative management view</span>
          <ReportPreview type="overview" />
        </div>
        <div>
          <span className="eyebrow">ONE PARTNER. CLEARER COMPLIANCE.</span>
          <h2>
            Close to your people.
            <br />
            Clear across your business.
          </h2>
          <p>
            Local teams need workable processes. Central teams need dependable
            inputs. Leaders need a view of the whole business.
          </p>
          <ul className="tick-list">
            <li>
              <CircleCheck />
              Defined responsibilities across locations
            </li>
            <li>
              <CircleCheck />
              Supporting records alongside status
            </li>
            <li>
              <CircleCheck />
              Reporting shaped for HR and Finance
            </li>
          </ul>
          <SiteLink className="button" href="/about">
            Why Ordin <ArrowRight size={17} />
          </SiteLink>
        </div>
      </section>
      <section className="container section resource-teaser">
        <div className="section-heading">
          <span className="eyebrow">WORKFORCE KNOWLEDGE</span>
          <h2>Clarity for your next decision.</h2>
          <p>Practical reading for HR, Finance and compliance teams.</p>
        </div>
        <div className="secondary-solutions">
          <SiteLink href="/resources/regulatory-insights/indias-four-labour-codes">
            <ShieldCheck />
            <h3>India’s four labour codes</h3>
            <p>
              A plain-language introduction and an operational review checklist.
            </p>
            <span>
              Read the overview <ArrowRight size={16} />
            </span>
          </SiteLink>
          <SiteLink href="/resources/case-studies">
            <Users />
            <h3>Workforce scenarios</h3>
            <p>
              Explore example approaches to fragmented inputs, contractor
              records and business change.
            </p>
            <span>
              Explore examples <ArrowRight size={16} />
            </span>
          </SiteLink>
          <SiteLink href="/resources/notifications">
            <FileCheck2 />
            <h3>Regulatory sources</h3>
            <p>
              Find official notices and organise the actions that matter to your
              locations.
            </p>
            <span>
              View sources <ArrowRight size={16} />
            </span>
          </SiteLink>
        </div>
        <div className="section-end">
          <SiteLink className="text-link" href="/resources">
            Visit the resource centre <ArrowRight size={17} />
          </SiteLink>
        </div>
      </section>
      <Faq />
      <Callout />
      <section className="container section home-contact">
        <div>
          <span className="eyebrow">START WITH A REVIEW</span>
          <h2>
            Where are your
            <br />
            compliance gaps?
          </h2>
          <p>
            Discuss your current payroll process, workforce records and
            contractor requirements.
          </p>
        </div>
        <SiteLink className="button" href="/contact?service=Compliance%20Audit">
          Request a Compliance Review <ArrowRight size={17} />
        </SiteLink>
      </section>
    </Shell>
  );
}
function SolutionPanel({ index }: { index: number }) {
  const s = services[index];
  return (
    <article className="solution-panel">
      <div className="solution-copy">
        <span className="service-tag">
          {index === 0 ? 'Payroll' : index === 1 ? 'Compliance' : 'Contractors'}
        </span>
        <h3>
          {index === 0
            ? 'Payroll management for every location'
            : index === 1
              ? 'Compliance support for workforce governance'
              : 'Contractor records with clearer oversight'}
        </h3>
        <p>{s.desc}</p>
        <strong className="capabilities-label">Key capabilities</strong>
        <div className="chips">
          {s.items.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <SiteLink className="button" href={'/services/' + s.slug}>
          Explore {s.title} <ArrowRight size={16} />
        </SiteLink>
      </div>
      <div className="solution-visual">
        <ReportPreview
          type={
            index === 0 ? 'payroll' : index === 1 ? 'compliance' : 'contractor'
          }
        />
      </div>
    </article>
  );
}
export function ReportPreview({ type }: { type: string }) {
  const rows =
    type === 'payroll'
      ? [
          ['Employee inputs', 'Reviewed'],
          ['Salary calculations', 'Completed'],
          ['Payslips', 'Ready'],
          ['F&F records', 'In review'],
        ]
      : type === 'contractor'
        ? [
            ['Workforce records', 'Verified'],
            ['Wage documents', 'Verified'],
            ['PF / ESI records', 'In review'],
            ['Site allocations', 'Verified'],
          ]
        : [
            ['Payroll', 'Completed'],
            ['PF status', 'Compliant'],
            ['ESI status', 'Compliant'],
            ['Open issues', '7 to review'],
          ];
  return (
    <div className="report-preview">
      <div className="report-top">
        <div className="report-icon">
          {type === 'payroll' ? (
            <Wallet />
          ) : type === 'contractor' ? (
            <Users />
          ) : (
            <ShieldCheck />
          )}
        </div>
        <div>
          <h4>
            {type === 'payroll'
              ? 'Monthly payroll'
              : type === 'contractor'
                ? 'Contractor review'
                : 'Workforce overview'}
          </h4>
          <span>Illustrative reporting view</span>
        </div>
        <span className="sample-label">SAMPLE</span>
      </div>
      <div className="report-metrics">
        <div>
          <small>Employees</small>
          <strong>186</strong>
        </div>
        <div>
          <small>Contractors</small>
          <strong>04</strong>
        </div>
        <div>
          <small>Locations</small>
          <strong>04</strong>
        </div>
      </div>
      <div className="report-rows">
        {rows.map(([label, status]) => (
          <div key={label}>
            <span>{label}</span>
            <span
              className={status.includes('review') ? 'status amber' : 'status'}
            >
              {status.includes('review') ? null : <Check size={12} />} {status}
            </span>
          </div>
        ))}
      </div>
      <div className="completion">
        <div>
          <span>Documents complete</span>
          <strong>94%</strong>
        </div>
        <div className="progress-track">
          <span />
        </div>
      </div>
      <div className="report-caption">
        <FileCheck2 size={15} /> Records, status and next actions in one view.
      </div>
    </div>
  );
}
export function IndustryGrid() {
  return (
    <section className="container section" id="industries">
      <div className="section-center">
        <h2>
          Industry-specific payroll
          <br />& compliance support
        </h2>
        <p>
          Built around the realities of distributed teams, frontline operations
          and different workforce needs.
        </p>
      </div>
      <div className="industry-grid">
        {industries.map((i) => (
          <SiteLink
            key={i.slug}
            href={'/industries/' + i.slug}
            className="industry-card"
          >
            <i.icon size={37} strokeWidth={1.4} />
            <h3>{i.name}</h3>
            <strong>{i.focus}</strong>
            <p>{i.desc}</p>
            <span>
              View solutions <ArrowRight size={16} />
            </span>
          </SiteLink>
        ))}
      </div>
      <div className="section-end">
        <SiteLink href="/contact" className="button">
          Talk to our team <ArrowRight size={17} />
        </SiteLink>
      </div>
    </section>
  );
}
export function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <section className="container page-hero">
      <div>
        <SiteLink href="/">Home</SiteLink>
        <span>/</span>
        <span>{label}</span>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
export function ServicesPage() {
  return (
    <Shell>
      <PageHero
        label="Services"
        title="Solutions for your workforce."
        description="Six connected services to simplify payroll, strengthen documentation and give your teams clearer oversight."
      />
      <section className="container section">
        <div className="service-directory">
          {services.map((s) => (
            <SiteLink key={s.slug} href={'/services/' + s.slug}>
              <s.icon />
              <h2>{s.title}</h2>
              <p>{s.desc}</p>
              <span className="text-link">
                Explore service <ArrowRight size={17} />
              </span>
            </SiteLink>
          ))}
        </div>
      </section>
      <Callout />
    </Shell>
  );
}
export function ServicePage({ slug }: { slug: string }) {
  const s = services.find((s) => s.slug === slug)!;
  return (
    <Shell>
      <PageHero label={s.title} title={s.title} description={s.desc} />
      <section className="container section detail-layout">
        <div>
          <span className="eyebrow">BUILT AROUND YOUR OPERATIONS</span>
          <h2>{s.title} for distributed teams.</h2>
          <p>{s.audience}</p>
          <h3>What we handle</h3>
          <ul className="tick-list">
            {s.items.map((t) => (
              <li key={t}>
                <CircleCheck />
                {t}
              </li>
            ))}
          </ul>
          <SiteLink
            className="button"
            href={'/contact?service=' + encodeURIComponent(s.title)}
          >
            Discuss your requirements <ArrowRight size={16} />
          </SiteLink>
        </div>
        <ReportPreview
          type={
            slug === 'payroll-management'
              ? 'payroll'
              : slug === 'contractor-compliance'
                ? 'contractor'
                : 'compliance'
          }
        />
      </section>
      <section className="container detail-deliverables">
        <article>
          <FileCheck2 />
          <h2>What we start with</h2>
          <p>{s.inputs}</p>
        </article>
        <article>
          <ClipboardCheck />
          <h2>What you receive</h2>
          <p>{s.deliverable}</p>
        </article>
      </section>
      <p className="container scope-note">
        Coverage, responsibilities and reporting formats are agreed during
        assessment.
      </p>
      <section className="container section">
        <h2>Explore related services</h2>
        <div className="related-links">
          {services
            .filter((x) => x.slug !== slug)
            .map((x) => (
              <SiteLink key={x.slug} href={'/services/' + x.slug}>
                {x.title}
                <ArrowRight size={16} />
              </SiteLink>
            ))}
        </div>
      </section>
      <Callout />
    </Shell>
  );
}
export function IndustryPage({ slug }: { slug: string }) {
  const item = industries.find((i) => i.slug === slug)!;
  return (
    <Shell>
      <PageHero
        label={item.name}
        title={'Workforce support for ' + item.name.toLowerCase() + '.'}
        description={item.desc}
      />
      <section className="container section detail-layout">
        <div>
          <item.icon size={45} className="coral-icon" />
          <h2>{item.focus}</h2>
          <p>
            Connect your local operations with a consistent payroll and
            compliance process. Ordin helps your central HR and Finance teams
            organise the inputs, records and follow-up that keep work moving.
          </p>
          <ul className="tick-list">
            {item.needs.map((n) => (
              <li key={n}>
                <CircleCheck />
                {n}
              </li>
            ))}
          </ul>
          <SiteLink
            className="button"
            href={'/contact?industry=' + encodeURIComponent(item.name)}
          >
            Discuss your workforce <ArrowRight size={17} />
          </SiteLink>
        </div>
        <ReportPreview type="overview" />
      </section>
      <section className="container section related-section">
        <h2>Services for your operations</h2>
        <div className="related-links">
          {services.map((s) => (
            <SiteLink key={s.slug} href={'/services/' + s.slug}>
              {s.title}
              <ArrowRight size={16} />
            </SiteLink>
          ))}
        </div>
      </section>
      <Callout />
    </Shell>
  );
}
export function AboutPage() {
  return (
    <Shell>
      <PageHero
        label="About Ordin"
        title="Clarity behind every workforce."
        description="Payroll and compliance support for businesses managing people across locations."
      />
      <section className="container section detail-layout">
        <div>
          <span className="eyebrow">MEET ORDIN</span>
          <h2>
            People move your business.
            <br />
            We help organise the work behind them.
          </h2>
          <p>
            We help businesses around the globe simplify payroll and workforce
            compliance through structured processes, reliable operations and
            clear reporting.
          </p>
          <p>
            Our work connects HR, Finance, site teams and contractors, with a
            practical focus on recurring operations and the records that support
            them.
          </p>
          <h3>Global outlook. Local requirements.</h3>
          <p>
            As organisations add locations, payroll calendars, workforce
            categories and reporting needs become more complex. We start by
            mapping those differences and agreeing the work that each team owns.
            Country-specific requirements and delivery coverage are assessed for
            each engagement.
          </p>
          <h3>How we work together</h3>
          <p>
            Bring us your current process and the gaps you want to address.
            Together, we define inputs, review controls, escalation paths and
            reporting. A named owner for each action helps your teams follow
            issues through to closure.
          </p>
        </div>
        <div className="about-principles">
          {[
            [
              'Centralised operations',
              'A coordinated view of payroll and workforce requirements.',
            ],
            [
              'Structured processes',
              'Clear workflows, responsibilities and review points.',
            ],
            [
              'Better visibility',
              'Status, supporting records and next actions together.',
            ],
            [
              'Scalable support',
              'Scope that adapts as locations and workforce needs change.',
            ],
          ].map(([h, p]) => (
            <div key={h}>
              <CircleCheck />
              <div>
                <h3>{h}</h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Callout />
    </Shell>
  );
}
export function ContactPage() {
  return (
    <Shell>
      <PageHero
        label="Contact"
        title="How can we help you?"
        description="Tell us about your workforce, operating locations and the challenges your team wants to solve."
      />
      <Contact />
    </Shell>
  );
}
