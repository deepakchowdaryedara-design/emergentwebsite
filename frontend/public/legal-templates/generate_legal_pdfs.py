from pathlib import Path

from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


OUTPUT_DIR = Path(__file__).resolve().parent


def p(text: str, style: ParagraphStyle):
    return Paragraph(text.replace("\n", "<br/>"), style)


def build_pdf(filename: str, title: str, subtitle: str, sections: list[tuple[str, str]]):
    doc = SimpleDocTemplate(
        str(OUTPUT_DIR / filename),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title=title,
    )
    styles = getSampleStyleSheet()
    title_style = ParagraphStyle("DocTitle", parent=styles["Heading1"], fontSize=16, leading=20, spaceAfter=10)
    subtitle_style = ParagraphStyle("Subtitle", parent=styles["Normal"], fontSize=10, leading=14, textColor="#334155", spaceAfter=12)
    h_style = ParagraphStyle("Heading", parent=styles["Heading2"], fontSize=12, leading=16, spaceBefore=8, spaceAfter=5)
    body_style = ParagraphStyle("Body", parent=styles["Normal"], fontSize=10, leading=14, spaceAfter=7)

    story = [p(title, title_style), p(subtitle, subtitle_style)]
    for heading, body in sections:
        story.append(p(heading, h_style))
        for block in body.split("\n\n"):
            story.append(p(block, body_style))
        story.append(Spacer(1, 2))
    doc.build(story)


JURISDICTION_COMMON = [
    (
        "1. Purpose and Use",
        "This template is a full drafting baseline for master service agreements and statements of work. It is designed for enterprise procurement, regulated workloads, and cross-border delivery models. Replace bracketed fields and align with commercial schedules before signature.",
    ),
    (
        "2. Governing Law and Jurisdiction Clause",
        "Governing Law and Jurisdiction. This Agreement, including any non-contractual obligations, is governed by the laws of [Jurisdiction], excluding conflict-of-law principles. Subject to Section 3 (Arbitration Option), courts located in [Venue] have exclusive jurisdiction over disputes arising out of or in connection with this Agreement.",
    ),
    (
        "3. Arbitration Option",
        "Any dispute, controversy, or claim arising out of or in connection with this Agreement will be finally resolved by arbitration under [Arbitration Rules]. The seat is [Seat], language is English, and tribunal consists of [one/three] arbitrator(s). The award is final and binding and may be enforced in any court of competent jurisdiction.",
    ),
    (
        "4. Pre-Dispute Escalation and Cure Process",
        "Before initiating formal proceedings, parties must escalate the dispute to designated commercial and legal contacts and participate in a good-faith resolution process for [30] days, unless urgent interim relief is required.",
    ),
    (
        "5. Interim and Injunctive Relief",
        "Nothing in this clause prevents either party from seeking urgent interim, injunctive, or protective relief from a court of competent jurisdiction to prevent unauthorized disclosure, misuse of confidential information, or irreparable harm to intellectual property rights.",
    ),
    (
        "6. Service of Process and Notices",
        "Each party must appoint legal notice contacts in writing. Formal notices, including service of process where permitted, must be delivered under the notice mechanics in the Agreement and are effective on confirmed delivery events.",
    ),
    (
        "7. Class Action and Jury Trial Position (Optional)",
        "To the extent permitted by law, parties may agree to waive jury trial rights and class or representative proceedings for contractual claims, while preserving rights that cannot be waived under mandatory law.",
    ),
    (
        "8. Mandatory Law Savings",
        "If mandatory law in any applicable jurisdiction overrides part of this clause, only the non-compliant portion will be adjusted to the minimum extent required, and the remainder of this clause will continue in full force.",
    ),
    (
        "9. Enforcement and Survival",
        "Dispute, governing law, confidentiality, limitation of liability, intellectual property, and payment obligations survive expiration or termination to the extent required for enforcement and legal closure.",
    ),
    (
        "10. Drafting Checklist",
        "- Confirm enforceability with local counsel.\n- Align with liability caps, indemnity scope, and limitation language.\n- Confirm arbitration, court venue, or hybrid enforcement model.\n- Verify entity naming, affiliate coverage, and parent guarantees.\n- Ensure consistency with data transfer and privacy appendices.",
    ),
]


PRIVACY_COMMON = [
    (
        "1. Purpose and Request Scope",
        "Use this form to submit formal data-subject or consumer privacy requests. Request types can include access, correction, deletion/erasure, restriction, portability, objection, opt-out rights, consent withdrawal, and complaint escalation rights where available under applicable law.",
    ),
    (
        "2. Requester Identity and Authority",
        "Requester must provide full legal name, contact details, jurisdiction of residence, and relationship to the data subject. Authorized agents must provide signed authorization and evidence reasonably required to validate authority.",
    ),
    (
        "3. Verification Requirements",
        "The organization may request reasonable identity and authority evidence before processing. Processing timelines begin after verification is complete. Incomplete, unverifiable, or fraudulent requests may be rejected or paused where permitted by law.",
    ),
    (
        "4. Request Detail Requirements",
        "Provide clear request type, relevant systems or services, date ranges, known identifiers, and desired outcome. Broad or ambiguous requests may require clarification and may be scoped to ensure lawful and proportionate handling.",
    ),
    (
        "5. Lawful Exceptions, Limitations, and Refusal Grounds",
        "Requests may be denied, limited, or deferred where permitted by law, including legal privilege, security concerns, disproportionate burden, conflicting rights of others, fraud prevention obligations, or record-retention duties.",
    ),
    (
        "6. Response Timelines and Extensions",
        "Responses are issued within legally required timelines for the requester jurisdiction. Complex or multi-system requests may require lawful extension notices with reasons and revised completion dates.",
    ),
    (
        "7. Delivery, Security, and Evidence",
        "Response packages may be delivered through secure channels and may be redacted where required by law. The organization may maintain request records, verification evidence, and response logs for compliance and legal defense.",
    ),
    (
        "8. Appeal, Escalation, and Supervisory Authority",
        "If a request is denied or partially fulfilled, the response should include lawful basis and available appeal or complaint path, including supervisory authority routes where applicable.",
    ),
    (
        "9. Request Template Block",
        "To: Data Protection Officer / Privacy Team\nSubject: Privacy Rights Request\nRequest Type: [Specify]\nRequest Details: [Specify]\nIdentity and Contact Information: [Specify]\nVerification Attachments: [Specify]\nDeclaration: I confirm that this request is accurate and submitted in good faith.\nSignature and Date: [Specify]",
    ),
]


JURISDICTION_ADDENDA = {
    "india": "India Addendum: Validate enforceability under the Arbitration and Conciliation Act, 1996, seat/venue distinction, interim relief strategy, and stamp-duty implications for contract instruments.",
    "uk": "UK Addendum: Confirm England and Wales law positioning, treatment of non-contractual obligations, and coordination with UK GDPR and sectoral regulatory obligations.",
    "eu": "EU Addendum: Select member-state governing law explicitly, verify mandatory consumer or employment protections where relevant, and align with Brussels/Recast and local procedural rules.",
    "us-delaware": "US (Delaware) Addendum: Confirm Delaware venue strategy (state/federal), arbitration enforceability under FAA, class action waiver compatibility, and emergency relief carve-outs.",
    "singapore": "Singapore Addendum: Confirm SIAC options, emergency arbitrator access, and enforceability planning under New York Convention and Singapore procedural standards.",
    "uae-difc": "UAE (DIFC) Addendum: Confirm DIFC law and court/arbitration route, including enforceability path between DIFC and onshore UAE courts where counterparties or assets are onshore.",
}


PRIVACY_ADDENDA = {
    "india": "India Addendum: Map requests to Digital Personal Data Protection Act obligations, including consent-manager pathways, correction/erasure handling, and grievance redress channels.",
    "uk": "UK Addendum: Include UK GDPR data-subject rights framing, lawful refusal analysis, and ICO complaint pathway disclosures where required.",
    "eu": "EU Addendum: Include GDPR article mappings, controller/processor role checks, and supervisory authority complaint rights in the relevant member state.",
    "us": "US Addendum: Support CCPA/CPRA and state-specific rights, including know/access, deletion, correction, opt-out of sale/sharing, and sensitive PI limitation workflows where applicable.",
    "singapore": "Singapore Addendum: Align request handling to PDPA access/correction obligations, verification steps, and lawful refusal conditions with response rationale.",
    "uae": "UAE Addendum: Align request handling to applicable UAE federal and free-zone frameworks, including lawful basis checks and cross-border transfer considerations.",
}


def main():
    jurisdiction_files = [
        ("jurisdiction-template-india.pdf", "Jurisdiction Selection Clause Template - India", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "india"),
        ("jurisdiction-template-uk.pdf", "Jurisdiction Selection Clause Template - United Kingdom", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "uk"),
        ("jurisdiction-template-eu.pdf", "Jurisdiction Selection Clause Template - European Union", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "eu"),
        ("jurisdiction-template-us-delaware.pdf", "Jurisdiction Selection Clause Template - United States (Delaware)", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "us-delaware"),
        ("jurisdiction-template-singapore.pdf", "Jurisdiction Selection Clause Template - Singapore", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "singapore"),
        ("jurisdiction-template-uae-difc.pdf", "Jurisdiction Selection Clause Template - UAE (DIFC)", "Comprehensive enterprise drafting template for governing law, venue, and dispute routing.", "uae-difc"),
    ]

    for filename, title, subtitle, key in jurisdiction_files:
        build_pdf(
            filename,
            title,
            subtitle,
            JURISDICTION_COMMON
            + [
                ("11. Jurisdiction-Specific Guidance", JURISDICTION_ADDENDA[key]),
                ("12. Optional Enterprise Clause Pack", "Include aligned clauses for confidentiality survival, liability cap mechanics, indemnity trigger standards, force majeure, sanctions compliance, and audit rights where contract model requires."),
                ("13. Legal Validation", "This template is not legal advice. Final language must be validated by qualified legal counsel before execution."),
            ],
        )

    privacy_files = [
        ("privacy-request-template-india.pdf", "Privacy Rights Request Template - India", "Comprehensive intake template for rights requests and verification workflows.", "india"),
        ("privacy-request-template-uk.pdf", "Privacy Rights Request Template - United Kingdom", "Comprehensive intake template for rights requests and verification workflows.", "uk"),
        ("privacy-request-template-eu.pdf", "Privacy Rights Request Template - European Union / EEA", "Comprehensive intake template for rights requests and verification workflows.", "eu"),
        ("privacy-request-template-us.pdf", "Privacy Rights Request Template - United States", "Comprehensive intake template for rights requests and verification workflows.", "us"),
        ("privacy-request-template-singapore.pdf", "Privacy Rights Request Template - Singapore", "Comprehensive intake template for rights requests and verification workflows.", "singapore"),
        ("privacy-request-template-uae.pdf", "Privacy Rights Request Template - UAE", "Comprehensive intake template for rights requests and verification workflows.", "uae"),
    ]

    for filename, title, subtitle, key in privacy_files:
        build_pdf(
            filename,
            title,
            subtitle,
            PRIVACY_COMMON
            + [
                ("10. Jurisdiction-Specific Guidance", PRIVACY_ADDENDA[key]),
                ("11. Organization Internal Control Checklist", "Validate requester identity, confirm legal basis, check exemptions, route to legal for high-risk requests, and record final disposition in compliance logs."),
                ("12. Legal Validation", "This template is not legal advice. Final handling and response determinations must follow applicable law and qualified legal counsel direction."),
            ],
        )

    build_pdf(
        "legal-risk-dashboard.pdf",
        "Legal Risk Dashboard (Board Summary)",
        "Governance summary for legal, compliance, and executive oversight.",
        [
            ("1. Executive Summary", "Current legal framework establishes a strong company-protective posture across operational, financial, compliance, IP, and dispute domains."),
            ("2. RAG Snapshot", "Operational: Green\nFinancial: Green\nRegulatory/Compliance: Amber\nIntellectual Property: Green\nDispute/Litigation: Amber"),
            ("3. Control Highlights", "Liability cap fallback, IP retention, verification-gated rights handling, suspension rights for payment and security events, and jurisdiction framework controls."),
            ("4. Residual Risk", "Residual exposure remains jurisdiction-specific and contract-specific, requiring annual legal mapping and counsel validation for high-risk markets."),
            ("5. Next 90-Day Actions", "Finalize jurisdiction annexes, align MSA/SOW controls, maintain policy revision logs, and implement legal redline escalation workflow."),
            ("6. Legal Notice", "This dashboard is internal governance material and does not constitute legal advice."),
        ],
    )


if __name__ == "__main__":
    main()
