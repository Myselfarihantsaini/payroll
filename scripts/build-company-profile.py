"""Build the public OrdinHR capability profile without unverified client claims."""
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor, white
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import shutil

ROOT = Path(__file__).resolve().parents[1]
FONTS = Path('/Users/arihantsaini/.cache/codex-runtimes/codex-primary-runtime/dependencies/native/libreoffice-headless/libreoffice/LibreOfficeDev.app/Contents/Resources/fonts/truetype')
for name, filename in [('Body', 'DejaVuSans.ttf'), ('Strong', 'DejaVuSans-Bold.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONTS / filename)))
NAVY, BLUE, CORAL, GRAY, PALE = map(HexColor, ['#071f43', '#246dbb', '#ff5b50', '#526174', '#eef3f8'])
W, H, M = 595.28, 841.89, 44
OUT = ROOT / 'output/pdf/OrdinHR-Company-Profile.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUT), pagesize=(W, H))
c.setTitle('OrdinHR | Company Profile')
c.setAuthor('OrdinHR')
c.setSubject('Payroll, compliance and people operations for local and multi-location businesses')

def rect(x, y, w, h, color):
    c.setFillColor(color); c.rect(x, H-y-h, w, h, fill=1, stroke=0)

def text(value, x, y, size=11, color=NAVY, bold=False):
    c.setFillColor(color); c.setFont('Strong' if bold else 'Body', size)
    c.drawString(x, H-y-size, value)

def para(value, x, y, width=W-2*M, size=10.5, color=GRAY, bold=False):
    p=Paragraph(value, ParagraphStyle('p', fontName='Strong' if bold else 'Body', fontSize=size, leading=size*1.5, textColor=color))
    _,height=p.wrap(width,H)
    assert y+height< H-48, (value, y, height)
    p.drawOn(c,x,H-y-height)
    return y+height

def rule(y): rect(M,y,W-2*M,0.6,HexColor('#d6dfe9'))

def frame(page, label):
    text('OrdinHR',M,29,13,bold=True)
    text(label.upper(),W-225,33,8,color=GRAY)
    rule(61)
    rule(787)
    text('PEOPLE  /  PROCESS  /  PROGRESS',M,802,7.5,color=GRAY)
    text(f'COMPANY PROFILE     {page:02d} / 04',W-206,802,7.5,color=GRAY)

def heading(kicker,title):
    text(kicker.upper(),M,89,9,color=BLUE,bold=True)
    text(title,M,114,27,bold=True)
    rect(M,158,42,3,CORAL)

# 01 - Company overview
frame(1,'Payroll & compliance')
c.drawImage(str(ROOT/'public/images/ordinhr-logo.png'),M, H-186, width=236,height=118,mask='auto')
text('COMPANY PROFILE',M,215,10,color=BLUE,bold=True)
text('Workforce operations.',M,249,31,bold=True)
text('Clearer control.',M,291,31,bold=True)
para('Payroll. Compliance. People operations.',M,350,size=15,color=NAVY,bold=True)
para('OrdinHR helps business owners, HR leaders and Finance teams bring structure to payroll, workforce documentation and recurring compliance activities.',M,399,size=12)
para('From a local establishment to a business operating across several sites, we connect the inputs, responsibilities and records behind your workforce.',M,473,size=12)
rect(M,566,W-2*M,128,NAVY)
text('ONE COORDINATED APPROACH',M+22,586,10,color=white,bold=True)
para('Organised inputs. Defined responsibilities.<br/>Reviewed outputs. Clear management reporting.',M+22,615,W-2*M-44,size=13,color=white)
text('Local business focus. Multi-location capability.',M,726,11,bold=True)
c.showPage()

# 02 - Scope
frame(2,'Services')
heading('Our capabilities','Six connected service areas.')
para('Engage us for a defined requirement or a coordinated scope across payroll, compliance and HR operations.',M,182,size=11)
services=[
('01','Payroll Management','Monthly salary calculations, payroll input checks, payslips, full-and-final settlements and management reporting.','Deliverables: payroll summary, payslips and exception list.'),
('02','Statutory Compliance','PF, ESI and payroll-related statutory compliance support in India, with organised records and recurring follow-up.','Deliverables: compliance tracker and supporting-record checklist.'),
('03','Labour Compliance','Employee records, statutory registers, wage documentation and establishment-related compliance support.','Deliverables: register review and outstanding-document tracker.'),
('04','Contractor Compliance','Contractor documentation, workforce records and verification of agreed compliance requirements.','Deliverables: contractor status summary and missing-record list.'),
('05','Compliance Audit','An agreed review of payroll and workforce records to identify gaps, exceptions and corrective actions.','Deliverables: findings register, priorities and action owners.'),
('06','HR Operations','Onboarding documentation, employee record maintenance, workforce changes, exits and recurring administration.','Deliverables: employee-record tracker and onboarding/exit checklist.'),
]
for i,(num,title,desc,deliverable) in enumerate(services):
    y=249+i*82
    text(num,M,y,10,color=BLUE,bold=True)
    text(title,M+35,y-2,13,bold=True)
    para(desc,M+35,y+20,W-2*M-35,size=9.3)
    para(deliverable,M+35,y+51,W-2*M-35,size=8.3,color=BLUE)
    if i<5:rule(y+73)
para('Deliverables shown are examples; the final scope is agreed for each engagement.',M,753,size=8.4)
c.showPage()

# 03 - Local relevance
frame(3,'Business applications')
heading('Practical business support','Built around real operations.')
para('Typical business situations we can support. These describe service applications, not completed client engagements.',M,182,size=10.5)
applications=[
('Local businesses & growing SMEs','An owner or small HR team needs a repeatable monthly process.','Organise employee inputs, establish a payroll calendar and track pending records.'),
('Manufacturing & warehousing','Plant teams coordinate attendance, shifts and contractor records.','Consolidate location inputs, review exceptions and maintain document follow-up.'),
('Hospitality, healthcare & education','Teams manage joining, exits and recurring employee administration.','Standardise employee checklists, payroll handoffs and records across departments.'),
('Construction & logistics','Employees and contractors work across changing project or operating sites.','Map site responsibilities and maintain workforce and contractor status summaries.'),
]
for i,(title,situation,response) in enumerate(applications):
    y=244+i*122
    rect(M,y,4,99,BLUE)
    text(title,M+18,y,13,bold=True)
    para(situation,M+18,y+28,W-2*M-18,size=10)
    para(response,M+18,y+62,W-2*M-18,size=10,color=NAVY)
para('Service coverage is agreed by location and requirement. India-specific statutory services are assessed against the applicable establishment and workforce scope.',M,747,size=8.4)
c.showPage()

# 04 - Delivery & contact
frame(4,'Delivery & contact')
heading('Working with OrdinHR','Clear scope. Clear ownership.')
steps=[('Assess','Understand workforce size, locations, current processes and priority gaps.'),('Set up','Agree input formats, responsibilities, review points and reporting needs.'),('Manage','Coordinate recurring payroll, documentation and agreed compliance work.'),('Monitor','Track exceptions, pending records and items requiring escalation.'),('Report','Share status, findings and next actions with business, HR and Finance teams.')]
for i,(title,desc) in enumerate(steps):
    y=190+i*55
    text(f'0{i+1}',M,y,10,color=BLUE,bold=True)
    text(title,M+35,y-2,12,bold=True)
    para(desc,M+35,y+18,W-2*M-35,size=9.2)
rule(480)
text('A proposal shaped around your business',M,502,15,bold=True)
para('Share your employee and contractor counts, operating locations, required services, current systems and any pending work. We use these inputs to define responsibilities, deliverables and a tailored quotation.',M,535,size=10.5)
rect(M,623,W-2*M,139,NAVY)
text('LET’S DISCUSS YOUR REQUIREMENTS',M+20,641,9,color=white,bold=True)
text('H. Arihant',M+20,664,19,color=white,bold=True)
text('+91 90579 18251',M+20,696,13,color=white)
text('shambhavaa.com/payroll/',M+20,728,10,color=white)
c.linkURL('tel:+919057918251',(M+20,H-719,M+220,H-694),relative=0,thickness=0)
c.linkURL('https://shambhavaa.com/payroll/',(M+20,H-749,M+270,H-726),relative=0,thickness=0)
c.save()
target=ROOT/'public/documents/OrdinHR-Company-Profile.pdf'
target.parent.mkdir(parents=True,exist_ok=True)
shutil.copy2(OUT,target)
print(OUT)
