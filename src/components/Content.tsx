import type { ReactNode } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { institution } from "../data/content";
import { Artwork } from "./Artwork";

type SectionHeadingProps = {
  kicker: string;
  title: ReactNode;
  detail?: string;
  light?: boolean;
};

export function SectionHeading({ kicker, title, detail, light = false }: SectionHeadingProps) {
  return (
    <div className={`section-heading ${light ? "on-dark" : ""}`} data-reveal>
      <span className="eyebrow"><i />{kicker}</span>
      <h2>{title}</h2>
      {detail && <p>{detail}</p>}
    </div>
  );
}

export function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link className="text-link" to={to}>
      <span>{children}</span><ArrowUpRight size={16} />
    </Link>
  );
}

export function HomePage() {
  return (
    <>
      <section className="hero" id="top">
        <Artwork variant="hero" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-kicker"><span /> THE WAY, PRACTISED DAILY</div>
          <h1>
            <span>AVR</span>
            <span className="hero-title-second">INSTITUTION<span className="hero-period">.</span></span>
          </h1>
          <p className="hero-line">TRADITION IN EVERY MOVEMENT.<br />EXCELLENCE IN EVERY GENERATION.</p>
          <p className="hero-copy">Discover the discipline, heritage and practice of traditional Shitō-ryū Karate.</p>
          <div className="hero-actions">
            <Link className="button button-red" to="/about">Explore the institution <ArrowUpRight size={16} /></Link>
            <Link className="button button-outline" to="/founder">Discover our legacy <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="hero-aside" aria-hidden="true">
          <span>EST.</span><span className="aside-rule" /><span>THE DO</span>
        </div>
        <a className="scroll-cue" href="#introduction"><span className="scroll-line" />SCROLL TO DISCOVER<ArrowDown size={13} /></a>
        <div className="hero-index"><span>01</span><i /> 04</div>
      </section>

      <section className="intro-section section-pad" id="introduction">
        <div className="intro-left" data-reveal>
          <span className="eyebrow"><i /> OUR PURPOSE</span>
          <p className="intro-quote">The way is not found in a single movement.<br /><em>It is shaped by every one.</em></p>
          <div className="intro-image-wrap"><Artwork variant="dojo" label="DISCIPLINE / RESPECT / PRACTICE" /></div>
        </div>
        <div className="intro-right" data-reveal>
          <span className="eyebrow">01 / THE INSTITUTION</span>
          <h2>A LEGACY<br />BUILT ON <span>DISCIPLINE.</span></h2>
          <p>{institution.introduction}</p>
          <p className="muted-copy">A place to learn with humility, train with purpose and carry the values of karate beyond the dojo.</p>
          <ul className="principles">
            {["Respect before technique", "Practice with intention", "Character through discipline"].map((item) => (
              <li key={item}><Check size={15} />{item}</li>
            ))}
          </ul>
          <ArrowLink to="/about">Discover AVR Institution</ArrowLink>
        </div>
      </section>

      <section className="founder-strip">
        <div className="founder-image"><Artwork variant="founder" label="FOUNDER PROFILE / PORTRAIT TO BE PROVIDED" /></div>
        <div className="founder-content" data-reveal>
          <span className="eyebrow"><i /> THE FOUNDER</span>
          <span className="founder-pretitle">THE VISION BEHIND AVR</span>
          <h2>MASTER<br /><span>RAJALINGAM</span></h2>
          <p className="founder-role">{institution.founderDesignation}</p>
          <div className="gold-rule" />
          <p className="founder-description">
            AVR Institution was founded by Master Rajalingam, whose verified designation reflects a commitment to karate. His wider biography and personal message will be shared here when confirmed.
          </p>
          <ArrowLink to="/founder">Explore the founder’s story</ArrowLink>
          <span className="founder-mark" aria-hidden="true">道</span>
        </div>
      </section>

      <section className="practice-section section-pad">
        <SectionHeading
          kicker="02 / THE PRACTICE"
          title={<>THE ART OF<br /><span>SHITŌ-RYŪ.</span></>}
          detail="A traditional karate practice understood through patient repetition, respect and attention to detail."
        />
        <div className="practice-content">
          <div className="practice-image" data-reveal><Artwork variant="practice" label="KARATE / THE WAY OF EMPTY HAND" /><div className="image-caption"><span>01 — PRACTICE, WITH PURPOSE</span><span>THE ART OF SHITŌ-RYŪ</span></div></div>
          <div className="practice-list">
            {[
              ["Kihon", "The foundations of technique"],
              ["Kata", "Form, focus and memory"],
              ["Kumite", "Timing, distance and control"],
            ].map(([title, summary], index) => (
              <Link className="practice-row" to="/shitoryu" key={title} data-reveal>
                <span className="practice-number">0{index + 1}</span>
                <span className="practice-row-text"><strong>{title}</strong><small>{summary}</small></span>
                <ArrowUpRight size={19} />
              </Link>
            ))}
            <p className="practice-note"><ShieldCheck size={16} /> A practice grounded in respect and safe training.</p>
          </div>
        </div>
      </section>

      <section className="quiet-section">
        <div className="quiet-copy" data-reveal>
          <span className="eyebrow"><i /> A PRACTICE, NOT A PERFORMANCE</span>
          <h2>BEGIN WITH<br /><em>ONE STEP.</em></h2>
          <p>Whether you are discovering karate for the first time or returning to practice, start a conversation with AVR Institution.</p>
          <Link className="button button-dark" to="/contact">Make an enquiry <ArrowUpRight size={16} /></Link>
        </div>
        <div className="quiet-symbol" aria-hidden="true">道</div>
        <div className="quiet-footnote">THE WAY IS MADE<br />BY WALKING IT.</div>
      </section>

      <section className="facts-band">
        <div className="fact-intro"><span className="eyebrow"><i /> WHAT WE KNOW</span><p>Clear facts. A truthful foundation.</p></div>
        <div className="fact"><strong>01</strong><span>Traditional<br />Shitō-ryū Karate</span></div>
        <div className="fact"><strong>02</strong><span>Founded by<br />Master Rajalingam</span></div>
        <div className="fact"><strong>03</strong><span>Training in<br />India</span></div>
      </section>

      <section className="join-cta">
        <Artwork variant="cta" />
        <div className="join-inner" data-reveal>
          <span className="eyebrow"><i /> YOUR JOURNEY STARTS HERE</span>
          <h2>THE PATH TO EXCELLENCE<br /><em>BEGINS WITH DISCIPLINE.</em></h2>
          <p>Take the first step. Reach out to learn more about AVR Institution.</p>
          <Link className="button button-red" to="/contact">Begin your journey <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
