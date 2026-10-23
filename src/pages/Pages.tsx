import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { ArrowLeft, ArrowUpRight, Check, Plus, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { disciplines, institution } from "../data/content";
import { ArrowLink, SectionHeading } from "../components/Content";
import { Artwork } from "../components/Artwork";

type PageIntroProps = {
  number: string;
  kicker: string;
  title: ReactNode;
  description: string;
};

function PageIntro({ number, kicker, title, description }: PageIntroProps) {
  return (
    <section className="page-intro" id="top">
      <Artwork variant="page" />
      <div className="page-intro-content">
        <span className="eyebrow"><i /> {number} / {kicker}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <Link to="/" className="back-link"><ArrowLeft size={14} /> Back to the beginning</Link>
      </div>
      <span className="page-intro-index">{number}<i /> AVR INSTITUTION</span>
    </section>
  );
}

export function AboutPage() {
  return (
    <>
      <PageIntro number="01" kicker="ABOUT AVR" title={<>A LEGACY BUILT<br />ON <em>DISCIPLINE.</em></>} description="A home for the practice and preservation of traditional Shitō-ryū Karate." />
      <section className="inner-section about-grid">
        <div>
          <span className="eyebrow"><i /> OUR PURPOSE</span>
          <h2>ROOTED IN<br /><span>THE WAY.</span></h2>
        </div>
        <div className="prose">
          <p className="prose-lead">{institution.introduction}</p>
          <p>AVR Institution's public introduction describes its focus on discipline, technique and character-building. This website reflects those stated values while leaving unconfirmed details open for the institution to provide.</p>
          <div className="values-list">
            {["Traditional martial arts education", "Technical excellence", "Character development", "Respect and discipline", "Developing future generations"].map((value, index) => (
              <div key={value}><span>0{index + 1}</span><strong>{value}</strong><Check size={16} /></div>
            ))}
          </div>
          <p className="source-note"><ShieldCheck size={15} /> Institutional facts are drawn from the <a href={institution.source} target="_blank" rel="noreferrer">official AVR website</a>.</p>
        </div>
      </section>
      <section className="inner-image-section">
        <Artwork variant="dojo" label="AVR INSTITUTION / SHITŌ-RYŪ KARATE" />
        <div><span className="eyebrow">A PLACE TO PRACTISE</span><p>Learning with humility.<br />Training with purpose.</p></div>
      </section>
      <JoinStrip />
    </>
  );
}

export function FounderPage() {
  return (
    <>
      <PageIntro number="02" kicker="OUR FOUNDER" title={<>THE VISION<br />BEHIND <em>AVR.</em></>} description="The verified story of the person who founded AVR Institution — and room for the story still to be told." />
      <section className="founder-profile inner-section">
        <div className="founder-profile-image"><Artwork variant="founder" label="PORTRAIT TO BE PROVIDED BY AVR" /></div>
        <div className="founder-profile-copy">
          <span className="eyebrow"><i /> FOUNDER & INSTITUTIONAL LEADERSHIP</span>
          <h2>MASTER<br /><em>RAJALINGAM</em></h2>
          <p className="designation">Asian Karate Federation (AKF) Judge</p>
          <div className="gold-rule" />
          <p>AVR Institution’s official website identifies Master Rajalingam as its founder and describes him as an Asian Karate Federation (AKF) Judge.</p>
          <p>Further details about his karate journey, qualifications, contributions and achievements have not been independently provided in the public source reviewed. This profile is intentionally limited to verified information.</p>
          <div className="profile-placeholder"><span className="eyebrow">PROFILE CONTENT TO ADD</span><p>Biography · Karate journey · Qualifications · International contributions · Message from the founder</p></div>
          <ArrowLink to="/contact">Help us complete this profile</ArrowLink>
        </div>
      </section>
      <JoinStrip />
    </>
  );
}

export function ShitoryuPage() {
  return (
    <>
      <PageIntro number="03" kicker="THE PRACTICE" title={<>THE ART OF<br /><em>SHITŌ-RYŪ.</em></>} description="A visual introduction to the foundations of karate practice. Explore the ideas behind the training." />
      <section className="inner-section discipline-section">
        <SectionHeading kicker="LEARN THE FOUNDATIONS" title={<>THREE PATHS.<br /><span>ONE PRACTICE.</span></>} detail="Explore Kihon, Kata and Kumite. Select a discipline to focus its introduction." />
        <DisciplineExplorer />
      </section>
      <section className="philosophy-band">
        <span className="eyebrow"><i /> THE SPIRIT OF PRACTICE</span>
        <p>“Respect. Patience. Repetition.”</p>
        <small>Foundational values for learning any martial art; not a direct quotation from AVR.</small>
      </section>
      <JoinStrip />
    </>
  );
}

function DisciplineExplorer() {
  const [selected, setSelected] = useState(0);
  const selectedDiscipline = disciplines[selected];
  return (
    <div className="discipline-explorer">
      <div className="discipline-tabs" role="tablist" aria-label="Karate disciplines">
        {disciplines.map((item, index) => (
          <button key={item.name} type="button" role="tab" id={`discipline-tab-${index}`} aria-selected={selected === index} aria-controls="discipline-panel" onClick={() => setSelected(index)}>
            <span>{item.number}</span>{item.name}<ArrowUpRight size={16} />
          </button>
        ))}
      </div>
      <div className="discipline-panel" role="tabpanel" id="discipline-panel" aria-labelledby={`discipline-tab-${selected}`}>
        <span className="eyebrow">FOUNDATION {selectedDiscipline.number}</span>
        <h3>{selectedDiscipline.name}<em>{selectedDiscipline.subtitle}</em></h3>
        <p>{selectedDiscipline.description}</p>
        <span className="discipline-caveat">A general introduction to karate practice, not a specific AVR syllabus.</span>
      </div>
    </div>
  );
}

export function InstructorsPage() {
  return (
    <>
      <PageIntro number="04" kicker="OUR INSTRUCTORS" title={<>GUIDED BY<br /><em>EXPERIENCE.</em></>} description="Meet the people who pass knowledge on — profiles will appear here when verified by AVR Institution." />
      <section className="empty-state inner-section">
        <span className="empty-icon"><ShieldCheck size={24} /></span>
        <span className="eyebrow">VERIFIED PROFILES ONLY</span>
        <h2>THE RIGHT PEOPLE.<br /><em>THE RIGHT DETAILS.</em></h2>
        <p>No instructor names, grades or biographies were available in the official source reviewed. We won't invent credentials or represent placeholders as real instructors.</p>
        <Link className="button button-dark" to="/contact">Share verified details <ArrowUpRight size={16} /></Link>
      </section>
      <JoinStrip />
    </>
  );
}

export function HallOfFamePage() {
  return (
    <>
      <PageIntro number="05" kicker="HALL OF FAME" title={<>WHERE DEDICATION<br />BECOMES <em>LEGACY.</em></>} description="A record of achievements should be exact, attributable and earned. This space is ready for verified stories." />
      <section className="empty-state inner-section">
        <span className="empty-icon"><span>道</span></span>
        <span className="eyebrow">A RECORD WORTH TRUSTING</span>
        <h2>THE STORY IS<br /><em>STILL UNWRITTEN.</em></h2>
        <p>No competition results, medals or institutional milestones were listed on the source reviewed. When AVR provides verified records, they can be celebrated here with the recognition they deserve.</p>
        <Link className="button button-dark" to="/contact">Submit a verified achievement <ArrowUpRight size={16} /></Link>
      </section>
      <JoinStrip />
    </>
  );
}

export function EventsPage() {
  return (
    <>
      <PageIntro number="06" kicker="EVENTS & CHAMPIONSHIPS" title={<>THE JOURNEY<br /><em>CONTINUES.</em></>} description="Keep up with training gatherings, championships and community events — once confirmed details are available." />
      <section className="events-empty inner-section">
        <div className="events-date"><span>AVR</span><strong>—</strong><small>CALENDAR</small></div>
        <div>
          <span className="eyebrow"><i /> EVENTS WILL BE ANNOUNCED HERE</span>
          <h2>NO CONFIRMED<br /><em>DATES YET.</em></h2>
          <p>There are no confirmed upcoming or past events to display at this time. We won't publish placeholder dates or registration links as if they were real.</p>
          <Link className="text-link" to="/contact"><span>Ask about upcoming events</span><ArrowUpRight size={16} /></Link>
        </div>
      </section>
      <JoinStrip />
    </>
  );
}

export function GalleryPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <PageIntro number="07" kicker="GALLERY" title={<>THE PRACTICE,<br /><em>IN PICTURES.</em></>} description="A considered collection of moments from AVR Institution — shared with care and with the right context." />
      <section className="gallery-section inner-section">
        <div className="gallery-header">
          <div><span className="eyebrow"><i /> FROM THE OFFICIAL WEBSITE</span><h2>A FIRST<br /><em>GLIMPSE.</em></h2></div>
          <p>This gallery is now a typographic study of the practice—not stock imagery. AVR-approved photographs can be added here when they are ready to share.</p>
        </div>
        <button className={`gallery-feature ${expanded ? "expanded" : ""}`} onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>
          <Artwork variant="gallery" label="AVR / THE PRACTICE CONTINUES" />
          <span className="gallery-caption"><span>01 / THE WAY, PRACTISED DAILY</span><span>{expanded ? "CLOSE NOTE" : "EXPLORE THE STORY"} <Plus size={16} /></span></span>
          {expanded && <span className="gallery-note">A considered visual identity, built from form, focus and tradition. Approved AVR photography can be introduced here at any time.</span>}
        </button>
        <p className="source-note"><ShieldCheck size={15} /> No external photos or stock images are used. Member and event photography can be added with AVR’s approval.</p>
      </section>
      <JoinStrip />
    </>
  );
}

export function JoinPage() {
  return (
    <>
      <PageIntro number="08" kicker="TRAINING & MEMBERSHIP" title={<>YOUR JOURNEY<br /><em>STARTS HERE.</em></>} description="Interested in training with AVR Institution? Begin with an enquiry and confirm current details directly with the institution." />
      <section className="inner-section join-page">
        <SectionHeading kicker="A PLACE TO BEGIN" title={<>FIND YOUR<br /><span>FIRST STEP.</span></>} detail="Training programmes and membership information are being prepared for this website." />
        <div className="join-details">
          {[
            ["01", "Training programmes", "Beginner, advanced and competition preparation — programme details to be confirmed by AVR."],
            ["02", "Schedule & locations", "Current training times and locations have not been published here. Please enquire directly."],
            ["03", "Membership", "Membership process and any fees must be confirmed with AVR Institution; none are listed here."],
          ].map(([number, title, detail]) => (
            <div className="join-detail" key={number}><span>{number}</span><div><h3>{title}</h3><p>{detail}</p></div><ArrowUpRight size={16} /></div>
          ))}
        </div>
        <Link to="/contact" className="button button-red">Enquire now <ArrowUpRight size={16} /></Link>
      </section>
      <JoinStrip />
    </>
  );
}

export function ContactPage() {
  const [error, setError] = useState("");
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setError("Please complete the required fields with a valid email address.");
      return;
    }
    setError("Online enquiries are not connected yet. Your message has not been sent; no contact details were provided on the official website.");
  };

  return (
    <>
      <PageIntro number="09" kicker="CONTACT AVR" title={<>BEGIN WITH<br /><em>A CONVERSATION.</em></>} description="Ask about training, programmes or the institution. Contact channels can be added when verified details are available." />
      <section className="contact-section inner-section">
        <div className="contact-copy">
          <span className="eyebrow"><i /> WE’RE HERE TO HELP</span>
          <h2>EVERY JOURNEY<br />STARTS WITH<br /><em>A QUESTION.</em></h2>
          <p>We welcome enquiries about Shitō-ryū Karate and AVR Institution. Contact details from the official website were not available in the source reviewed.</p>
          <div className="contact-placeholder"><ShieldCheck size={17} /><div><strong>Official contact details pending</strong><span>Email, phone and address will be shown once verified by AVR.</span></div></div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading"><span className="eyebrow">SEND AN ENQUIRY</span><span>FIELDS MARKED * ARE REQUIRED</span></div>
          <label>Full name *<input name="name" autoComplete="name" required placeholder="Your name" /></label>
          <div className="form-row">
            <label>Email address *<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label>
            <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="Optional" /></label>
          </div>
          <label>Enquiry type
            <select name="type" defaultValue="">
              <option value="" disabled>Select a topic</option>
              <option>Training and membership</option>
              <option>Shitō-ryū Karate</option>
              <option>Institution information</option>
              <option>Other enquiry</option>
            </select>
          </label>
          <label>Message *<textarea name="message" required rows={5} placeholder="How can we help?" /></label>
          {error && <p className="form-message error" role="alert">{error}</p>}
          <button className="button button-red" type="submit">Send enquiry <ArrowUpRight size={16} /></button>
          <p className="form-privacy">This form is not yet connected to a secure submission service. Do not include sensitive personal information.</p>
        </form>
      </section>
    </>
  );
}

function JoinStrip() {
  return (
    <section className="inner-join">
      <div><span className="eyebrow"><i /> READY TO TAKE THE FIRST STEP?</span><h2>START A CONVERSATION.</h2></div>
      <Link to="/contact" className="button button-red">Contact AVR <ArrowUpRight size={16} /></Link>
    </section>
  );
}

export function NotFoundPage() {
  return (
    <section className="not-found">
      <span className="eyebrow"><i /> 404 / PAGE NOT FOUND</span>
      <h1>THIS PATH<br /><em>ENDS HERE.</em></h1>
      <p>The page may have moved, or the address may be incorrect.</p>
      <Link to="/" className="button button-dark"><ArrowLeft size={16} /> Return home</Link>
    </section>
  );
}
