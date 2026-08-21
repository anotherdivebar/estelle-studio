"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const playlistUrl =
  "https://music.apple.com/us/playlist/session-work/pl.u-76oNkyeIvG6VdE7";

const services = [
  {
    number: "01",
    title: "Session Drums",
    body: "Dialed-in tones, musical choices, and clean multitracks—tracked remotely or in the room.",
    note: "Remote · On-site",
  },
  {
    number: "02",
    title: "Production",
    body: "From first demo to final arrangement, with a drummer’s instinct for dynamics, space, and feel.",
    note: "Songs · EPs · Records",
  },
  {
    number: "03",
    title: "Touring",
    body: "Prepared, adaptable, and locked in. A road-ready player for rehearsals, fly dates, and full runs.",
    note: "Rehearsals · Fly dates · Tours",
  },
];

const gear = [
  {
    title: "Interfaces",
    count: "04",
    items: [
      "MacBook Pro M4 · macOS Sequoia",
      "UAD Volt 276 Interface",
      "Behringer U-Phoria UMC1820 Interface",
      "Behringer Ultragain Digital ADA8200",
    ],
  },
  {
    title: "Microphones",
    count: "09",
    items: [
      "sE V-Kick",
      "Sennheiser 421 ×2",
      "Sennheiser e945",
      "Shure SM57 ×2",
      "Shure SM7B",
      "AKG C214 matched pair",
      "AKG C5600 ×2",
    ],
  },
  {
    title: "Drums",
    count: "04",
    items: [
      "SJC custom maple · 22×14 kick, 13×8 + 16×14 toms",
      "Pearl Masters birch · 22×14 kick, 12×8 + 16×16 toms",
      "Ludwig Black Beauty · 14×6.5",
      "Ludwig Acrolite · 14×5",
    ],
  },
  {
    title: "Cymbals",
    count: "04",
    items: [
      "Zildjian 16\" K Light Hi-Hats",
      "Zildjian 20\" K Sweet Crash",
      "Zildjian 22\" K Paper Thin Crash",
      "Zildjian 24\" K Light Ride",
    ],
  },
  {
    title: "Hardware",
    count: "09",
    items: [
      "DW 9000 Cymbal Stand ×3",
      "DW 5000 Hi-Hat Stand",
      "DW 9000 Snare Stand ×2",
      "DW 9000 Throne",
      "DW 5000 Single Kick Pedal",
    ],
  },
];

export default function Home() {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = pageRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const handlePointer = (event: PointerEvent) => {
      if (reduceMotion) return;
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;
      root.style.setProperty("--pointer-x", x.toFixed(3));
      root.style.setProperty("--pointer-y", y.toFixed(3));
    };

    const handleScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      const progress = available > 0 ? window.scrollY / available : 0;
      root.style.setProperty("--scroll-progress", progress.toFixed(4));
    };

    window.addEventListener("pointermove", handlePointer, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("pointermove", handlePointer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main ref={pageRef} className="site-shell">
      <div className="scroll-meter" aria-hidden="true" />

      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="J. Peavey, back to top">
          <span className="wordmark-mark">JP</span>
          <span>J. Peavey</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#gear">Gear</a>
        </nav>
        <a className="nav-cta" href="#booking">
          Let’s work <span aria-hidden="true">↘</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span>Session drummer</span>
            <span>Producer</span>
            <span>Touring musician</span>
          </p>
          <h1>
            Built for the
            <span>take that stays.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Character-rich drums, decisive production, and a pocket that puts
              the song first.
            </p>
            <div className="hero-actions">
              <a
                className="button button-primary"
                href={playlistUrl}
                target="_blank"
                rel="noreferrer"
              >
                Hear session work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#services">
                See capabilities <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-stage" aria-label="J. Peavey’s recording room">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <figure className="hero-frame">
            <Image
              src="/studio-wide.webp"
              alt="A dark SJC drum kit surrounded by microphones in J. Peavey’s olive-green recording room"
              fill
              priority
              unoptimized
              sizes="(max-width: 760px) 92vw, 53vw"
            />
            <figcaption>
              <span>Live room / 01</span>
              <span>Ready to record</span>
            </figcaption>
          </figure>
          <span className="stage-index" aria-hidden="true">
            01
          </span>
        </div>

        <div className="hero-rail" aria-hidden="true">
          <span>Independent studio</span>
          <span className="rail-line" />
          <span>Est. now</span>
        </div>
      </section>

      <section className="signal-strip" aria-label="Studio capabilities">
        <p>Remote session files</p>
        <span aria-hidden="true">✦</span>
        <p>Full-song production</p>
        <span aria-hidden="true">✦</span>
        <p>Tour-ready performance</p>
      </section>

      <section className="services section-wrap" id="services">
        <div className="section-heading">
          <p className="section-kicker">01 / What I do</p>
          <h2>One player.<br />Every phase.</h2>
          <p className="section-intro">
            From the first voice memo to the last encore, every choice serves
            the same thing: a better song.
          </p>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-topline">
                <span>{service.number}</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
              <small>{service.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="work section-wrap" id="work">
        <div className="work-collage" aria-label="Inside the studio">
          <figure className="photo-card photo-main">
            <Image
              src="/studio-kit.webp"
              alt="View from behind the drum kit with cymbals, microphones, and studio rack gear"
              fill
              unoptimized
              sizes="(max-width: 760px) 92vw, 58vw"
            />
            <figcaption>Behind the kit / SJC maple</figcaption>
          </figure>
          <figure className="photo-card photo-float">
            <Image
              src="/studio-overhead.webp"
              alt="Overhead view of a fully miked drum kit inside the studio"
              fill
              unoptimized
              sizes="(max-width: 760px) 48vw, 27vw"
            />
            <figcaption>Room perspective / 02</figcaption>
          </figure>
          <div className="tape-label" aria-hidden="true">
            TAKE / 001
          </div>
        </div>

        <div className="work-copy">
          <p className="section-kicker">02 / Selected work</p>
          <h2>Feel first.<br />Always.</h2>
          <p>
            A running collection of records and tracks shaped from behind the
            kit—across artists, rooms, and styles.
          </p>
          <a
            className="button button-light"
            href={playlistUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open on Apple Music <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="player-shell">
          <div className="player-label">
            <span>Session Work</span>
            <span>Apple Music</span>
          </div>
          <iframe
            title="J. Peavey session work playlist on Apple Music"
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/us/playlist/session-work/pl.u-76oNkyeIvG6VdE7?theme=dark"
          />
        </div>
      </section>

      <section className="process section-wrap">
        <div className="process-heading">
          <p className="section-kicker">03 / The process</p>
          <h2>Send it.<br />Shape it.<br />Ship it.</h2>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <h3>Share the song</h3>
              <p>Demo, references, stems, tempo map, and the feeling you’re chasing.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Build the part</h3>
              <p>The right kit, tuning, mics, and performance for the track—not a preset.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Get the files</h3>
              <p>Organized multitracks and a clear reference mix, ready for your session.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="gear section-wrap" id="gear">
        <div className="gear-heading">
          <p className="section-kicker">04 / The room</p>
          <h2>Tools with<br />a point of view.</h2>
          <p>
            Two distinct kits, studio-standard microphones, and a flexible
            digital front end—selected for tone, not spec-sheet theater.
          </p>
        </div>

        <div className="gear-list">
          {gear.map((group, index) => (
            <details key={group.title} open={index === 0}>
              <summary>
                <span className="gear-count">{group.count}</span>
                <span className="gear-title">{group.title}</span>
                <span className="gear-toggle" aria-hidden="true" />
              </summary>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      <section className="booking" id="booking">
        <div className="booking-bg" aria-hidden="true">
          <Image
            src="/studio-wide.webp"
            alt=""
            fill
            unoptimized
            sizes="100vw"
          />
        </div>
        <div className="booking-content section-wrap">
          <p className="section-kicker">Available for the right project</p>
          <h2>
            Let’s make it
            <span>hit different.</span>
          </h2>
          <p className="booking-copy">
            Remote sessions, production work, and touring opportunities.
            Send the song, the dates, and the vision.
          </p>
          <div className="booking-actions">
            <a
              className="button button-primary"
              href="mailto:?subject=Project%20inquiry%20for%20J.%20Peavey"
            >
              Draft a project brief <span aria-hidden="true">↗</span>
            </a>
            <a
              className="text-link text-link-light"
              href={playlistUrl}
              target="_blank"
              rel="noreferrer"
            >
              Hear the work <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#top" aria-label="J. Peavey, back to top">
          <span className="wordmark-mark">JP</span>
          <span>J. Peavey</span>
        </a>
        <p>Session drums · Production · Touring</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
