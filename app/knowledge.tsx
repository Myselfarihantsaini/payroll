import { Shell, PageHero, SiteLink, Callout, ReportPreview } from './site';
import { ArrowRight, BookOpen, FileCheck2, ShieldCheck } from 'lucide-react';

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
};
const reviewed = '10 September 2026';
export const documents: Record<
  string,
  { title: string; intro: string; sections: Section[] }
> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    intro: 'How information is handled on the Ordin website.',
    sections: [
      {
        id: 'scope',
        title: '1. Scope of this notice',
        paragraphs: [
          'This notice covers visitors to this website and the enquiry preparation form. It does not describe the processing of employee or payroll records under a client engagement. Any such engagement needs its own agreed data-handling arrangements.',
        ],
      },
      {
        id: 'form',
        title: '2. Information you enter',
        paragraphs: [
          'The enquiry form asks for your name, company, phone, email, employee count, operating locations, required service and an optional message. Online delivery is not connected. The form currently prepares a text file for you to download; it does not send those entries to Ordin or save them in an application database.',
          'Form values are held in the current page session. A downloaded enquiry remains on your device until you remove it. Do not enter employee identity documents, bank details, medical information or individual salary records in this public form.',
        ],
      },
      {
        id: 'hosting',
        title: '3. Website hosting and technical information',
        paragraphs: [
          'This website is available through GitHub Pages and OpenAI Sites. When a page is requested, the hosting provider receives technical information such as the IP address, requested URL and browser information. Provider processing and retention are governed by their own policies.',
          'Ordin has not added advertising trackers or an analytics integration to this website. Hosting and platform services may use their own operational or security technologies.',
        ],
      },
      {
        id: 'sharing',
        title: '4. Sharing and external links',
        paragraphs: [
          'The form does not transmit your enquiry to a recipient. If you share the downloaded file yourself, the recipient receives the details you included. Resource links take you to external websites with their own privacy practices.',
          'Service-related processing, authorised recipients, security measures, retention and any cross-border transfers must be documented separately before client records are exchanged.',
        ],
      },
      {
        id: 'control',
        title: '5. Your choices',
        paragraphs: [
          'You can use the website without completing the form, clear the fields, leave the page or delete your downloaded file. Requests concerning a hosting provider’s records should use that provider’s privacy channels.',
          'An Ordin privacy contact has not yet been published, and this website cannot currently receive privacy requests through its enquiry form. For an existing client engagement, use your agreed business contact.',
        ],
      },
      {
        id: 'changes',
        title: '6. Updates',
        paragraphs: [
          'This notice should be updated when enquiry delivery, analytics, account access or other data-processing features are introduced. The review date above identifies this version.',
        ],
      },
    ],
  },
  'terms-of-use': {
    title: 'Terms of Use',
    intro: 'Guidelines for using Ordin’s public website and information.',
    sections: [
      {
        id: 'purpose',
        title: '1. What this website provides',
        paragraphs: [
          'This website introduces Ordin’s payroll, compliance and workforce operations services. It is an information website, not an employee portal or a live payroll processing system. Visiting it or preparing an enquiry does not create a client relationship.',
        ],
      },
      {
        id: 'engagement',
        title: '2. Service engagements',
        paragraphs: [
          'Coverage, fees, delivery responsibilities, timelines, confidentiality and data handling are agreed separately before work begins. Global positioning does not mean every service is available in every jurisdiction. Applicable locations and local requirements are confirmed during assessment.',
        ],
      },
      {
        id: 'information',
        title: '3. Resources and illustrative content',
        paragraphs: [
          'Articles and checklists provide general operational information. They are not a determination of your legal obligations. Check official publications and obtain advice appropriate to your establishments before acting on regulatory information.',
          'Dashboard numbers are sample data. Example case studies describe hypothetical situations and proposed approaches; they are not client testimonials or evidence of achieved results. Workforce-tool descriptions explain capability areas, not a promise of proprietary software.',
        ],
      },
      {
        id: 'use',
        title: '4. Responsible use',
        items: [
          'Use the website for lawful business information and enquiries.',
          'Do not attempt to disrupt the site, gain unauthorised access or introduce harmful code.',
          'Do not submit confidential employee records through the public enquiry form.',
          'Do not present Ordin’s content or identity as your own, or imply an endorsement that has not been agreed.',
        ],
      },
      {
        id: 'external',
        title: '5. External resources and ownership',
        paragraphs: [
          'Third-party names and material belong to their respective owners. Links identify sources for further reading; they do not imply a partnership, endorsement or control over the linked website. Reuse of third-party material is subject to the rights attached to that material.',
        ],
      },
      {
        id: 'availability',
        title: '6. Accuracy, availability and changes',
        paragraphs: [
          'Information and availability can change. Regulatory pages include a review date and source links, but are not a continuously maintained legal feed. Service commitments and any agreed remedies are set out in the engagement documents. Nothing on this page removes rights that cannot lawfully be excluded.',
          'These terms may be updated as the website develops. For questions under an existing engagement, use the contact and terms agreed for that engagement.',
        ],
      },
    ],
  },
};

export function DocumentPage({ slug }: { slug: string }) {
  const doc = documents[slug];
  return (
    <Shell>
      <PageHero label={doc.title} title={doc.title} description={doc.intro} />
      <div className="container reading-layout section">
        <aside className="contents-nav">
          <span>ON THIS PAGE</span>
          {doc.sections.map((s) => (
            <a href={'#' + s.id} key={s.id}>
              {s.title}
            </a>
          ))}
        </aside>
        <article className="reading-body">
          <p className="review-date">Last reviewed: {reviewed}</p>
          {doc.sections.map((s) => (
            <section id={s.id} key={s.id}>
              <h2>{s.title}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {s.items && (
                <ul>
                  {s.items.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          {slug === 'privacy-policy' && (
            <section>
              <h2>Hosting provider policies</h2>
              <p>
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement">
                  GitHub Privacy Statement
                </a>{' '}
                ·{' '}
                <a href="https://openai.com/policies/privacy-policy/">
                  OpenAI Privacy Policy
                </a>
              </p>
            </section>
          )}
        </article>
      </div>
    </Shell>
  );
}

export function ProductsPage() {
  return (
    <Shell>
      <PageHero
        label="Workforce tools"
        title="Better-connected workforce information."
        description="Understand the tools, records and reporting capabilities that support payroll and compliance operations."
      />
      <section className="container section">
        <p className="information-note">
          These are capability areas to assess with your team. Ordin’s current
          offering is service-led; the examples below are not proprietary
          software products available for purchase.
        </p>
        <div className="knowledge-grid">
          {[
            [
              'Employee records',
              'Keep joiners, workforce changes and exits connected to one consistent employee record.',
              'Review attendance, leave inputs, employee documents and handoffs into payroll.',
              '/services/hr-operations',
            ],
            [
              'Payroll review',
              'Bring approved inputs, calculation checks and monthly outputs into a repeatable workflow.',
              'Look for exception checks, approval history and location-level summaries.',
              '/services/payroll-management',
            ],
            [
              'Compliance tracking',
              'Connect each requirement with its supporting record, responsible owner and next action.',
              'Organise establishment documents, contractor records and audit follow-up.',
              '/services/statutory-compliance',
            ],
            [
              'Workforce reporting',
              'Give HR, Finance and leaders a consistent view of operational status.',
              'Agree what each report means, the data source and the review responsibility.',
              '/services/compliance-audit',
            ],
          ].map(([h, p, d, link]) => (
            <article key={h}>
              <FileCheck2 />
              <h2>{h}</h2>
              <p>{p}</p>
              <p>{d}</p>
              <SiteLink className="text-link" href={link}>
                Explore related support <ArrowRight size={16} />
              </SiteLink>
            </article>
          ))}
        </div>
      </section>
      <section className="container detail-layout section">
        <div>
          <span className="eyebrow">SELECT AROUND YOUR PROCESS</span>
          <h2>Start with the work. Then assess the tools.</h2>
          <p>
            Document your approval flow, existing systems, access needs and
            reporting gaps before choosing new technology.
          </p>
          <p>
            Benefits records, expenses, self-service and financial wellness may
            sit in other systems. Clarify ownership and data handoffs before
            including them in a wider workforce programme.
          </p>
          <p>
            Any integration, automation or additional service needs a specific
            feasibility and scope review.
          </p>
        </div>
        <ReportPreview type="overview" />
      </section>
      <Callout />
    </Shell>
  );
}

export function SolutionsPage() {
  return (
    <Shell>
      <PageHero
        label="Solutions"
        title="Start with your workforce challenge."
        description="Connect recurring payroll, employee administration and compliance work around the outcomes your teams need."
      />
      <section className="container section">
        <div className="knowledge-grid">
          {[
            [
              'Payroll across locations',
              'Different input formats and approval practices can slow a monthly payroll cycle. Establish a shared calendar, agreed data checks and a consolidated reporting format.',
              'Payroll inputs → exception review → approval → reporting',
              '/services/payroll-management',
            ],
            [
              'Compliance oversight',
              'Records spread across sites make it difficult to see what needs attention. Build a requirement register, assign owners and connect status to supporting documentation.',
              'Requirements → evidence → open actions → closure',
              '/services/labour-compliance',
            ],
            [
              'Contractor workforce',
              'Contractor documentation needs a clear collection and review process. Track the workforce at each site, request missing records and record verification outcomes.',
              'Contractor list → records → verification → follow-up',
              '/services/contractor-compliance',
            ],
            [
              'Employee operations',
              'Joiners, changes and exits affect both people records and payroll. Agree handoffs between site teams, central HR and Finance.',
              'Joiners → changes → payroll handoff → exits',
              '/services/hr-operations',
            ],
          ].map(([h, p, f, l]) => (
            <article key={h}>
              <ShieldCheck />
              <h2>{h}</h2>
              <p>{p}</p>
              <p className="workflow-copy">{f}</p>
              <SiteLink href={l} className="text-link">
                Explore the service <ArrowRight size={16} />
              </SiteLink>
            </article>
          ))}
        </div>
        <div className="information-note">
          <h3>Working across countries or entities?</h3>
          <p>
            Map the employing entities, locations, currencies, local
            requirements and responsibilities first. Delivery coverage and
            country-specific requirements are agreed for each engagement.
          </p>
        </div>
        <div className="related-links">
          <SiteLink href="/products">
            Workforce tools <ArrowRight size={16} />
          </SiteLink>
          <SiteLink href="/services">
            All services <ArrowRight size={16} />
          </SiteLink>
          <SiteLink href="/resources">
            Resource centre <ArrowRight size={16} />
          </SiteLink>
        </div>
      </section>
      <Callout />
    </Shell>
  );
}

export const resourceCards = [
  {
    title: 'India’s four labour codes',
    tag: 'Regulatory insights · India',
    description:
      'An overview of the four codes, official source material and an operational review checklist.',
    href: '/resources/regulatory-insights/indias-four-labour-codes',
  },
  {
    title: 'Example case studies',
    tag: 'Workforce operations',
    description:
      'Illustrative approaches to payroll consolidation, contractor documentation and organisational change.',
    href: '/resources/case-studies',
  },
  {
    title: 'Regulatory notifications',
    tag: 'Official sources · India',
    description:
      'A starting point for government notices, PF and ESI circulars, and location-specific follow-up.',
    href: '/resources/notifications',
  },
];
export function ResourcesPage() {
  return (
    <Shell>
      <PageHero
        label="Resources"
        title="Knowledge for clearer workforce decisions."
        description="Practical guidance, example scenarios and official sources for HR, Finance and compliance teams."
      />
      <section className="container section">
        <div className="knowledge-grid three">
          {resourceCards.map((r) => (
            <article key={r.href}>
              <BookOpen />
              <span className="resource-tag">{r.tag}</span>
              <h2>{r.title}</h2>
              <p>{r.description}</p>
              <SiteLink href={r.href} className="text-link">
                Explore resource <ArrowRight size={16} />
              </SiteLink>
            </article>
          ))}
        </div>
        <div className="information-note">
          <h3>Use the right context</h3>
          <p>
            Our business supports globally distributed workforces. The
            regulatory material in this resource centre currently focuses on
            India. Confirm the country, state, establishment and workforce
            category before applying any guidance.
          </p>
        </div>
      </section>
      <Callout />
    </Shell>
  );
}

export function LabourCodesPage() {
  return (
    <Shell>
      <PageHero
        label="Regulatory insights · India"
        title="India’s four labour codes."
        description="A starting point for reviewing workforce records, payroll processes and compliance responsibilities."
      />
      <div className="container reading-layout section">
        <aside className="contents-nav">
          <span>IN THIS GUIDE</span>
          <a href="#overview">The four codes</a>
          <a href="#review">Operational review</a>
          <a href="#source">Official source</a>
          <SiteLink href="/resources/notifications">
            More regulatory sources
          </SiteLink>
        </aside>
        <article className="reading-body">
          <p className="review-date">
            Reviewed: {reviewed} · India · General information
          </p>
          <section id="overview">
            <h2>What changed?</h2>
            <p>
              The Government of India announced that the four labour codes took
              effect on 21 November 2025, consolidating 29 central labour laws.
              The announcement also describes transitional arrangements. Check
              the latest rules and notifications for your specific
              establishment.
            </p>
            <div className="code-grid">
              {[
                [
                  'Code on Wages, 2019',
                  'Wages, payment practices and related payroll records.',
                ],
                [
                  'Industrial Relations Code, 2020',
                  'Employment relations and related workplace procedures.',
                ],
                [
                  'Code on Social Security, 2020',
                  'Social security arrangements and associated workforce records.',
                ],
                [
                  'Occupational Safety, Health and Working Conditions Code, 2020',
                  'Safety, working conditions and establishment responsibilities.',
                ],
              ].map(([h, p]) => (
                <div key={h}>
                  <h3>{h}</h3>
                  <p>{p}</p>
                </div>
              ))}
            </div>
          </section>
          <section id="review">
            <h2>A practical review for HR and Finance</h2>
            <p>
              Use these questions to organise an assessment, rather than as a
              complete legal compliance checklist.
            </p>
            <ol>
              <li>
                <strong>Map the workforce.</strong> Identify employing entities,
                establishments, states, employee categories and contractor
                arrangements.
              </li>
              <li>
                <strong>Review payroll inputs.</strong> Bring salary components,
                attendance, overtime and settlement processes into the review.
              </li>
              <li>
                <strong>Check supporting records.</strong> Locate appointment
                documents, registers, contribution records and contractor
                evidence.
              </li>
              <li>
                <strong>Assign decisions and actions.</strong> Record which
                questions need legal interpretation, who owns each action and
                what evidence will close it.
              </li>
              <li>
                <strong>Communicate agreed changes.</strong> Align HR, Finance,
                site teams and contractors before implementing revised
                processes.
              </li>
            </ol>
            <p>
              Rates, eligibility, thresholds and deadlines depend on applicable
              provisions and notifications. Obtain advice for your circumstances
              before changing payroll or employment policies.
            </p>
          </section>
          <section id="source">
            <h2>Official source</h2>
            <p>
              <a href="https://www.pib.gov.in/PressReleasePage.aspx?PRID=2194018">
                Ministry of Labour & Employment announcement, published by PIB
                on 25 November 2025
              </a>
            </p>
            <p>
              This guide was reviewed on {reviewed}; it is not a live update
              service.
            </p>
            <SiteLink
              className="button"
              href="/contact?service=Compliance%20Audit"
            >
              Discuss a compliance review <ArrowRight size={16} />
            </SiteLink>
          </section>
        </article>
      </div>
    </Shell>
  );
}

export function CaseStudiesPage() {
  return (
    <Shell>
      <PageHero
        label="Example case studies"
        title="Common challenges. Practical approaches."
        description="Explore how a structured operating process could address recurring workforce problems."
      />
      <section className="container section">
        <p className="information-note">
          The following are hypothetical scenarios for discussion. They do not
          describe Ordin clients, completed engagements or measured results.
        </p>
        <div className="scenario-list">
          {[
            [
              '01',
              'Consolidating payroll inputs',
              'A business receives attendance and salary changes from several sites in different formats. Late corrections make approvals difficult.',
              'Agree a shared input template, responsible site owners and an exception log. Review changes before approval and retain the approved version.',
              'Site-wise input tracker, approval record and consolidated payroll summary.',
              'Fewer unresolved input exceptions and a more predictable approval process.',
              'Payroll Management',
            ],
            [
              '02',
              'Making contractor records visible',
              'A central team cannot easily identify which contractors have supplied complete workforce and contribution records.',
              'Create a contractor and site register. Define required evidence, record the verification status and assign missing-document follow-up.',
              'Contractor-wise document tracker with outstanding records and action owners.',
              'A clearer view of documentation gaps before review meetings.',
              'Contractor Compliance',
            ],
            [
              '03',
              'Coordinating a business transition',
              'A reorganisation changes reporting lines and employee allocations while monthly payroll must continue.',
              'Map the old and new records, reconcile employee changes and agree who approves the transition data. Review exceptions before the next cycle.',
              'Change register, reconciliation checklist and handover notes.',
              'Clear ownership and traceable changes during the transition.',
              'HR Operations',
            ],
          ].map(([n, h, c, a, d, o, s]) => (
            <article key={n}>
              <span className="resource-tag">ILLUSTRATIVE SCENARIO {n}</span>
              <h2>{h}</h2>
              <div className="scenario-columns">
                <div>
                  <h3>The challenge</h3>
                  <p>{c}</p>
                  <h3>Proposed approach</h3>
                  <p>{a}</p>
                </div>
                <div>
                  <h3>Example deliverable</h3>
                  <p>{d}</p>
                  <h3>Intended outcome</h3>
                  <p>{o}</p>
                </div>
              </div>
              <SiteLink
                href={'/contact?service=' + encodeURIComponent(s)}
                className="text-link"
              >
                Discuss a similar challenge <ArrowRight size={16} />
              </SiteLink>
            </article>
          ))}
        </div>
      </section>
    </Shell>
  );
}

export function NotificationsPage() {
  return (
    <Shell>
      <PageHero
        label="Regulatory notifications"
        title="Find the source. Identify the action."
        description="Official starting points for Indian workforce and payroll regulatory information."
      />
      <section className="container section">
        <p className="review-date">
          Directory reviewed: {reviewed} · Curated references, not a live
          notification feed
        </p>
        <div className="knowledge-grid">
          {[
            [
              'Labour codes & central notices',
              'Ministry of Labour & Employment',
              'Check central announcements, publications and links to applicable rules.',
              'https://www.labour.gov.in/',
            ],
            [
              'Provident fund circulars',
              'Employees’ Provident Fund Organisation',
              'Use the official portal to find circulars, employer information and service notices.',
              'https://www.epfindia.gov.in/site_en/index.php',
            ],
            [
              'Employees’ state insurance',
              'Employees’ State Insurance Corporation',
              'Check official employer guidance, circulars and scheme announcements.',
              'https://www.esic.gov.in/',
            ],
            [
              'Four labour codes announcement',
              'PIB · 25 November 2025',
              'Government announcement of implementation from 21 November 2025, with transition context.',
              'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2194018',
            ],
          ].map(([h, a, p, u]) => (
            <article key={u}>
              <FileCheck2 />
              <span className="resource-tag">{a}</span>
              <h2>{h}</h2>
              <p>{p}</p>
              <a href={u} className="text-link">
                Open official source <ArrowRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <div className="information-note">
          <h3>Turn a notice into a tracked action</h3>
          <p>
            Capture the issuing authority, reference number, publication date,
            effective date, applicable locations, owner and required evidence.
            Distinguish a draft from a final notification. Verify amendments and
            state-level requirements with the relevant authority before changing
            a process.
          </p>
          <p>
            For state matters such as establishment requirements, holidays and
            local wage notifications, consult the relevant state labour
            department or official gazette. This directory is not an exhaustive
            list.
          </p>
        </div>
        <SiteLink
          href="/resources/regulatory-insights/indias-four-labour-codes"
          className="text-link"
        >
          Read our labour-code overview <ArrowRight size={16} />
        </SiteLink>
      </section>
    </Shell>
  );
}
