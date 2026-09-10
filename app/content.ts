import {
  Wallet,
  ShieldCheck,
  FileCheck2,
  Users,
  ClipboardCheck,
  Building2,
  Factory,
  Truck,
  Hotel,
  HardHat,
  HeartPulse,
  Warehouse,
  GraduationCap,
  Rocket,
} from 'lucide-react';
export const services = [
  {
    icon: Wallet,
    slug: 'payroll-management',
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
    slug: 'statutory-compliance',
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
    slug: 'labour-compliance',
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
    slug: 'contractor-compliance',
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
    slug: 'compliance-audit',
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
    slug: 'hr-operations',
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
export const industries = [
  {
    slug: 'manufacturing',
    name: 'Manufacturing',
    icon: Factory,
    focus: 'Plant & shift operations',
    desc: 'Coordinate attendance, wage records and contractor documentation across plants.',
    needs: [
      'Shift and attendance inputs',
      'Plant-wise payroll records',
      'Contractor documentation',
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics',
    icon: Truck,
    focus: 'Distributed workforce coordination',
    desc: 'Bring field, hub and branch workforce inputs into a consistent monthly process.',
    needs: [
      'Hub and branch inputs',
      'Employee movement records',
      'Consolidated reporting',
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality',
    icon: Hotel,
    focus: 'People operations across properties',
    desc: 'Keep employee changes, attendance and payroll aligned across properties.',
    needs: [
      'Property-wise attendance',
      'Joiner and exit documentation',
      'Payroll approvals',
    ],
  },
  {
    slug: 'construction',
    name: 'Construction',
    icon: HardHat,
    focus: 'Project & contractor oversight',
    desc: 'Organise project-site workforce records and contractor compliance checks.',
    needs: [
      'Project workforce records',
      'Contractor verification',
      'Site-wise action tracking',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: HeartPulse,
    focus: 'Workforce clarity across facilities',
    desc: 'Coordinate employee records, payroll inputs and recurring requirements.',
    needs: [
      'Facility-wise inputs',
      'Employee documentation',
      'Recurring compliance records',
    ],
  },
  {
    slug: 'warehousing',
    name: 'Warehousing',
    icon: Warehouse,
    focus: 'Frontline operations at scale',
    desc: 'Manage workforce records and contractor documentation across warehouse locations.',
    needs: [
      'Warehouse attendance inputs',
      'Contractor records',
      'Exception follow-up',
    ],
  },
  {
    slug: 'education',
    name: 'Education',
    icon: GraduationCap,
    focus: 'Connected campus operations',
    desc: 'Structure payroll and workforce administration across institutions and campuses.',
    needs: [
      'Campus-wise payroll inputs',
      'Employee records',
      'Establishment documentation',
    ],
  },
  {
    slug: 'startups-smes',
    name: 'Startups & SMEs',
    icon: Rocket,
    focus: 'A foundation for growing teams',
    desc: 'Create clear payroll, documentation and compliance processes as your business grows.',
    needs: [
      'Payroll setup',
      'Employee onboarding records',
      'Recurring compliance support',
    ],
  },
];
