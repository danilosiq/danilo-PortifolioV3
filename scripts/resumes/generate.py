"""Generate selectable, single-column resumes from the reviewed content.json.

Run with Python + reportlab and pypdf. Outputs are published under public/resumes
and copied to output/pdf for delivery. No images, tables, or text boxes are used.
"""
import json
import shutil
from pathlib import Path
from xml.sax.saxutils import escape

import os
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
FONT_DIR = Path(os.environ.get("RESUME_FONT_DIR", "/System/Library/Fonts/Supplemental"))
pdfmetrics.registerFont(TTFont("ResumeRegular", str(FONT_DIR / "Arial.ttf")))
pdfmetrics.registerFont(TTFont("ResumeBold", str(FONT_DIR / "Arial Bold.ttf")))
pdfmetrics.registerFontFamily("ResumeRegular", normal="ResumeRegular", bold="ResumeBold")
CONTENT = json.loads(Path(__file__).with_name("content.json").read_text())
STYLES = {
    "name": ParagraphStyle("name", fontName="ResumeBold", fontSize=21, leading=25, spaceAfter=3),
    "role": ParagraphStyle("role", fontName="ResumeBold", fontSize=11, leading=14, spaceAfter=4),
    "contact": ParagraphStyle("contact", fontName="ResumeRegular", fontSize=9, leading=12, spaceAfter=1),
    "section": ParagraphStyle("section", fontName="ResumeBold", fontSize=10, leading=13, spaceBefore=8, spaceAfter=4, textColor=colors.HexColor("#153e36")),
    "body": ParagraphStyle("body", fontName="ResumeRegular", fontSize=9.5, leading=12.4, spaceAfter=3, alignment=TA_LEFT),
    "job": ParagraphStyle("job", fontName="ResumeBold", fontSize=10, leading=13, spaceAfter=1),
    "meta": ParagraphStyle("meta", fontName="ResumeRegular", fontSize=9, leading=11.5, textColor=colors.HexColor("#333333"), spaceAfter=3),
    "bullet": ParagraphStyle("bullet", fontName="ResumeRegular", fontSize=9.5, leading=12.4, leftIndent=9, firstLineIndent=-9, spaceAfter=2),
}


def paragraph(text, style="body"):
    return Paragraph(escape(text), STYLES[style])


def generate(locale, data):
    output = ROOT / "output/pdf" / f"Danilo_Dante_Siqueira_{locale}.pdf"
    output.parent.mkdir(parents=True, exist_ok=True)
    story = [paragraph("Danilo Dante Siqueira", "name"), paragraph(data["role"], "role")]
    story.append(paragraph(f'{data["location"]} | danilodantesiqueira@gmail.com', "contact"))
    story.append(Paragraph('<link href="https://github.com/danilosiq" color="#111111">github.com/danilosiq</link> | <link href="https://www.linkedin.com/in/danilo-dante-siqueira-1a31a7234/" color="#111111">linkedin.com/in/danilo-dante-siqueira-1a31a7234</link>', STYLES["contact"]))
    story.extend([paragraph(data["summaryHeading"], "section"), paragraph(data["summary"])])
    story.append(paragraph(data["skillsHeading"], "section"))
    for label, value in data["skills"]:
        story.append(Paragraph(f"<b>{escape(label)}:</b> {escape(value)}", STYLES["body"]))
    story.append(paragraph(data["experienceHeading"], "section"))
    for job in data["jobs"]:
        story.append(KeepTogether([
            paragraph(f'{job["company"]} | {job["role"]}', "job"),
            paragraph(job["details"], "meta"),
            paragraph("- " + job["bullets"][0], "bullet"),
        ]))
        story.extend(paragraph("- " + text, "bullet") for text in job["bullets"][1:])
        story.append(Spacer(1, 4))
    story.extend([
        paragraph(data["educationHeading"], "section"),
        paragraph(data["education"]), paragraph(data["educationDetails"], "meta"),
        paragraph(data["certificationsHeading"], "section"),
    ])
    story.extend(paragraph("- " + text, "bullet") for text in data["certifications"])
    story.extend([paragraph(data["languagesHeading"], "section"), paragraph(data["languages"])])
    doc = SimpleDocTemplate(str(output), pagesize=A4, leftMargin=38, rightMargin=38, topMargin=30, bottomMargin=28,
                           title=f'Danilo Dante Siqueira - {data["role"]}', author="Danilo Dante Siqueira", lang=data["language"])
    doc.build(story)
    reader = PdfReader(output)
    extracted = "\n".join(page.extract_text() for page in reader.pages)
    assert len(reader.pages) == 1, f"{locale}: expected one page, got {len(reader.pages)}"
    assert all(s in extracted for s in ["Exban", "Jira", "WebSocket", "B1", data["educationHeading"]])
    assert not any(page.images for page in reader.pages), "Resume must be text, not an image"
    (ROOT / "tmp/pdfs").mkdir(parents=True, exist_ok=True)
    (ROOT / "tmp/pdfs" / f"{locale}.txt").write_text(extracted)
    public = ROOT / "public/resumes" / output.name
    public.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(output, public)
    print(f"{locale}: {len(reader.pages)} page, {output.stat().st_size} bytes, text extraction OK")


if __name__ == "__main__":
    for locale, data in CONTENT.items():
        generate(locale, data)
    # Preserve older inbound links while the interface uses localized URLs.
    shutil.copyfile(ROOT / "output/pdf/Danilo_Dante_Siqueira_PT-BR.pdf", ROOT / "public/cv.pdf")
