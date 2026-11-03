import Image from "next/image";

import { identities, images, videos, work, type Work } from "@/data/portfolio";
import { Gallery } from "./gallery";
import { MotionControl } from "./portfolio-motion";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`signature ${className}`}
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M30 30C7 39-3 20 8 11c11-9 18 6 22 19ZM34 30C25 7 44-3 53 8c9 11-6 18-19 22ZM34 34c23-9 33 10 22 19-11 9-18-6-22-19ZM30 34c9 23-10 33-19 22-9-11 6-18 19-22Z" />
    </svg>
  );
}
function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <a
      className={`wordmark ${small ? "wordmark-small" : ""}`}
      href="#top"
      aria-label="Dariel Failanga, back to top"
    >
      dariel
      <br />
      failanga<span>brand & visual design</span>
    </a>
  );
}
function Cable({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`cable ${className}`}
      viewBox="0 0 1400 788"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-100 240C220 180 110 680 450 620S1000 430 915 260 700 235 830 400 1160 690 1500 470"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
function Art({
  asset,
  className = "",
  eager = false,
  caption,
}: {
  asset: Work;
  className?: string;
  eager?: boolean;
  caption?: string;
}) {
  return (
    <figure className={`art ${className}`}>
      <Image
        src={asset.src}
        alt={asset.title}
        width={asset.width}
        height={asset.height}
        sizes="(max-width: 700px) 70vw, 45vw"
        unoptimized
        loading={eager ? "eager" : "lazy"}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
function Marquee({ children }: { children: string }) {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <span className="marquee-group" key={copy}>
            {Array.from({ length: 7 }, (_, index) => (
              <span key={index}>
                {children}
                <Mark />
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
}
function Chapter({
  number,
  thin,
  bold,
  subtitle,
  id,
  children,
  light = false,
}: {
  number: string;
  thin: string;
  bold: string;
  subtitle: string;
  id: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <section
      className={`chapter ${light ? "paper-grid" : "dark-grid"}`}
      id={id}
      aria-labelledby={`${id}-title`}
    >
      <div className="spread-top">
        <span className="eyebrow">CHAPTER {number}</span>
        <Mark />
      </div>
      <div className="chapter-copy" data-reveal>
        <p className="eyebrow">SELECTED WORK / DARIEL FAILANGA</p>
        <h2 id={`${id}-title`}>
          <span>{thin}</span>
          {bold}
        </h2>
        <span className="paper-label">{subtitle}</span>
      </div>
      <div className="chapter-art">{children}</div>
    </section>
  );
}

export function Portfolio() {
  const apparel = images.filter((item) => item.category === "Tshirt");
  const accessories = images.filter((item) => item.category === "BAG AND HATS");
  const sevenUp = [1, 2, 3, 4, 5].map((n) => work(`Food Ad Poster/${n}.png`));
  const ads = [
    "brew haven coffee.png",
    "anlem.png",
    "nova.png",
    "meal prep.png",
  ].map((name) => work(`Social Media Ads/${name}`));
  const lunara = [1, 2, 3, 4, 5, 6, 7, 8].map((n) =>
    work(`Ecommerce Listing Images/${n}.png`),
  );
  const print = [
    "DWCSJ PINNING LEAFLET 2025 FRONT.jpg",
    "DWCSJ PINNING LEAFLET 2025 BACK.jpg",
    "DWCSJ PINNNING LEAFLET 2026 FRONT.png",
    "DWCSJ PINNING LEAFLET 2026 BACK.png",
  ].map((name) => work(`Print Materials/${name}`));
  return (
    <div id="portfolio">
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <header className="site-header">
        <Wordmark />
        <nav aria-label="Main navigation">
          <a href="#selected-work">
            Work <span>↗</span>
          </a>
          <a href="#about">About</a>
          <a href="#contact">
            Let’s talk <span>↗</span>
          </a>
          <MotionControl />
        </nav>
      </header>
      <main>
        <section
          className="hero dark-grid"
          id="top"
          aria-labelledby="hero-title"
        >
          <Cable />
          <div className="hero-dots" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="hero-float hero-float-one">
            <Art
              asset={work("Brand Identity/LITTLE HEIRLOOM/signage.png")}
              eager
            />
          </div>
          <div className="hero-float hero-float-two">
            <Art asset={accessories[0]} eager />
          </div>
          <div className="hero-float hero-float-three">
            <Art asset={work("Food Ad Poster/1.png")} eager />
          </div>
          <div className="hero-float hero-float-four">
            <Art asset={apparel[1]} eager />
          </div>
          <div className="hero-float hero-float-five">
            <Art
              asset={work("Brand Identity/YO-GU STAR/yogucard mockup.png")}
              eager
            />
          </div>
          <div className="hero-title">
            <div className="hero-title-top">
              <span>GRAPHIC</span>
              <span>SELECTED WORKS / 2026</span>
            </div>
            <h1 id="hero-title">
              Design
              <br />
              Portfolio<span className="hero-asterisk">✳</span>
            </h1>
            <span className="paper-label hero-name">BY DARIEL FAILANGA</span>
            <p>Stories, told through type, color & form.</p>
          </div>
          <div className="hero-bottom">
            <span>BRAND DESIGNER & VISUAL ARTIST</span>
            <a href="#about">
              Scroll to explore <span>↓</span>
            </a>
            <span>MADE WITH A LITTLE HEART ♡</span>
          </div>
        </section>

        <section
          className="about paper-grid"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="spread-top">
            <span className="eyebrow">A LITTLE ABOUT THE DESIGNER</span>
            <Mark />
          </div>
          <div className="portrait-wrap">
            <Image
              className="portrait"
              src="/personal/profile.png"
              alt="Dariel Failanga"
              width={577}
              height={433}
              sizes="(max-width: 700px) 95vw, 43vw"
              unoptimized
            />
            <span className="portrait-label paper-label">
              HELLO, I’M DARIEL ♡
            </span>
            <span className="portrait-note">
              a little color.
              <br />a lot of meaning.
            </span>
          </div>
          <div className="about-copy" data-reveal>
            <h2 id="about-title">
              Hi! I’m <span>Dariel</span>
              <br />
              Failanga<span className="heading-star">✳</span>
            </h2>
            <div className="about-columns">
              <div className="bio">
                <p>
                  A passionate brand designer and visual artist focused on
                  creating vibrant, meaningful designs — from wearable apparel
                  graphics to publication materials and digital pubmats.
                </p>
                <p>
                  I specialize in visual identity systems, print design, and
                  digital media for organizations and personal brands. Every
                  project is an opportunity to tell a story through type, color,
                  and form.
                </p>
              </div>
              <div className="focus">
                <h3>My focus</h3>
                <ul>
                  <li>Brand identity</li>
                  <li>Marketing design</li>
                  <li>Print & layouts</li>
                  <li>Apparel graphics</li>
                  <li>Digital pubmats</li>
                </ul>
                <span className="paper-label">TYPE / COLOR / FORM</span>
              </div>
            </div>
          </div>
          <div className="about-polaroids">
            <Art
              className="polaroid"
              asset={work("Brand Identity/LITTLE HEIRLOOM/mockup.png")}
              caption="thoughtful identities"
            />
            <Art
              className="polaroid"
              asset={work("Food Ad Poster/7up mockup 1.png")}
              caption="a little more color"
            />
            <Art
              className="polaroid"
              asset={apparel[0]}
              caption="ideas you can wear"
            />
          </div>
        </section>

        <Marquee>Brand identity</Marquee>
        <Chapter
          number="01"
          thin="Building"
          bold="brand worlds."
          subtitle="identity, with a little personality"
          id="selected-work"
        >
          <Art
            className="chapter-card chapter-card-one"
            asset={work("Brand Identity/PAWERHOUSE/packaging.png")}
          />
          <Art
            className="chapter-card chapter-card-two"
            asset={work("Brand Identity/YO-GU STAR/2.png")}
          />
          <span className="chapter-doodle" aria-hidden="true">
            ✳
          </span>
        </Chapter>
        <div className="project-tabs paper-grid" aria-label="Brand projects">
          {identities.map((project) => (
            <a href={`#${project.id}`} key={project.id}>
              {project.name}
              <span>↗</span>
            </a>
          ))}
        </div>
        {identities.map((project, index) => (
          <div key={project.id}>
            <section
              className={`identity-spread ${project.className} ${index === 1 ? "dark-grid" : "paper-grid"} ${index % 2 === 1 ? "reverse" : ""}`}
              id={project.id}
              aria-labelledby={`${project.id}-title`}
            >
              <div className="spread-top">
                <span className="category-pill">Branding</span>
                <Mark />
              </div>
              <div className="identity-copy" data-reveal>
                <p className="eyebrow">PROJECT 0{index + 1} / BRAND IDENTITY</p>
                <h2 id={`${project.id}-title`}>{project.name}</h2>
                <p className="project-tagline">{project.label}</p>
                <h3>{project.service}</h3>
                <p className="project-description">{project.description}</p>
                <span className="design-note">
                  A visual system,
                  <br />
                  <em>not just a logo.</em>
                </span>
                <div className="palette" aria-label="Project color palette">
                  {project.palette.map((color) => (
                    <span
                      key={color}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
              <div className="identity-collage">
                {project.assets.map((path, i) => (
                  <Art
                    key={path}
                    className={`identity-art identity-art-${i + 1}`}
                    asset={work(`Brand Identity/${path}`)}
                  />
                ))}
                <span className="collage-spark" aria-hidden="true">
                  ✧
                </span>
                <span className="collage-note">
                  the details make
                  <br />
                  the difference ↗
                </span>
              </div>
              <a className="spread-link" href="#archive">
                Explore the full collection ↗
              </a>
            </section>
            <div
              className={`identity-interlude ${project.className}`}
              aria-hidden="true"
            >
              <span>
                {project.name}
                <Mark />
              </span>
              <span>
                <Mark />
                {project.label}
              </span>
            </div>
          </div>
        ))}

        <Marquee>Marketing & digital design</Marquee>
        <Chapter
          number="02"
          thin="Made to"
          bold="stand out."
          subtitle="campaigns, content & a whole lot of color"
          id="marketing"
        >
          <Art
            className="chapter-card chapter-card-one"
            asset={work("Social Media Ads/nova.png")}
          />
          <Art className="chapter-card chapter-card-two" asset={sevenUp[4]} />
          <span className="chapter-doodle" aria-hidden="true">
            ↗
          </span>
        </Chapter>
        <section className="campaign seven-up" aria-labelledby="seven-up-title">
          <div className="campaign-heading">
            <div>
              <span className="eyebrow">CAMPAIGN / FOOD & BEVERAGE</span>
              <h2 id="seven-up-title">
                Pick your <em>personality.</em>
              </h2>
            </div>
            <p>
              One drink. Five different moods.
              <br />A colorful collection of ad posters.
            </p>
          </div>
          <div className="poster-line">
            {sevenUp.map((asset, i) => (
              <Art
                className={`poster poster-${i}`}
                asset={asset}
                key={asset.id}
              />
            ))}
          </div>
          <div className="campaign-caption">
            <span>7UP / POSTER SERIES</span>
            <span>COLOR THAT DOES THE TALKING ↗</span>
          </div>
        </section>
        <section className="lunara paper-grid" aria-labelledby="lunara-title">
          <div className="campaign-heading">
            <div>
              <span className="eyebrow">DIGITAL DESIGN / E-COMMERCE</span>
              <h2 id="lunara-title">
                A little <em>glow.</em>
              </h2>
            </div>
            <p>
              Lunara / Product listing images
              <br />A complete visual product story.
            </p>
          </div>
          <div className="lunara-grid">
            {lunara.slice(0, 4).map((asset) => (
              <Art asset={asset} key={asset.id} />
            ))}
          </div>
          <div className="campaign-caption">
            <span>BENEFITS / INGREDIENTS / ROUTINE</span>
            <a href="#archive">See the full series ↗</a>
          </div>
        </section>
        <section className="social-spread dark-grid">
          <div className="spread-top">
            <span className="eyebrow">SOCIAL MEDIA / SELECTED DESIGNS</span>
            <Mark />
          </div>
          <div className="social-heading" data-reveal>
            <h2>
              Small squares.
              <br />
              <em>Big impressions.</em>
            </h2>
            <p>Scroll-stopping stories for the digital world.</p>
          </div>
          <div className="social-mosaic">
            {ads.map((asset) => (
              <Art asset={asset} key={asset.id} />
            ))}
          </div>
        </section>

        <Marquee>Print, layouts & publication</Marquee>
        <section
          className="print-spread paper-grid"
          id="print"
          aria-labelledby="print-title"
        >
          <div className="spread-top">
            <span className="eyebrow">CHAPTER 03 / PRINT & PUBLICATION</span>
            <Mark />
          </div>
          <div className="print-copy" data-reveal>
            <h2 id="print-title">
              Good design.
              <br />
              <em>On paper, too.</em>
            </h2>
            <p>
              Publication materials, event layouts, and the considered details
              that bring a printed piece together.
            </p>
            <a className="text-link" href="#archive">
              Print materials & pubmats ↗
            </a>
          </div>
          <div className="print-collage">
            {print.map((asset, i) => (
              <Art
                className={`print-art print-art-${i + 1}`}
                asset={asset}
                key={asset.id}
              />
            ))}
            <span className="paper-label">MADE TO BE HELD.</span>
          </div>
        </section>

        <section
          className="publication-spread paper-grid"
          aria-labelledby="publication-title"
        >
          <div className="campaign-heading">
            <div>
              <span className="eyebrow">
                ANNOUNCEMENTS / EVENTS / GREETINGS / ORGANIZATIONS
              </span>
              <h2 id="publication-title">
                Every message,
                <br />
                <em>its own personality.</em>
              </h2>
            </div>
            <p>
              Publication materials & digital pubmats.
              <br />
              Designed to connect with a community.
            </p>
          </div>
          <div className="publication-grid">
            {[
              "Events/BSIT ORIENTATION 2025.png",
              "Greetings/TERE.png",
              "announce/DWCSJ LONG HOLIDAY WEEKEND.png",
              "Orgs/DATA CLUB.jpg",
            ].map((path) => (
              <Art asset={work(`Pubmats/${path}`)} key={path} />
            ))}
          </div>
          <div className="campaign-caption">
            <span>28 PUBLICATION DESIGNS / FOUR CATEGORIES</span>
            <a href="#archive">Explore all pubmats ↗</a>
          </div>
        </section>
        <Marquee>Wearable ideas</Marquee>
        <section
          className="merch dark-grid"
          id="merch"
          aria-labelledby="merch-title"
        >
          <div className="spread-top">
            <span className="eyebrow">CHAPTER 04 / APPAREL & ACCESSORIES</span>
            <Mark />
          </div>
          <Cable />
          <div className="merch-title" data-reveal>
            <h2 id="merch-title">
              <span>Ideas you</span>
              <br />
              can wear<span className="red">.</span>
            </h2>
            <span className="paper-label">
              a little self-expression, by design
            </span>
          </div>
          <Art className="merch-art merch-one" asset={apparel[0]} />
          <Art className="merch-art merch-two" asset={apparel[2]} />
          <Art className="merch-art merch-three" asset={accessories[2]} />
          <span className="merch-note">
            from the page
            <br />
            to the everyday ♡
          </span>
        </section>

        <Marquee>Motion & video</Marquee>
        <section
          className="motion-section dark-grid"
          id="motion"
          aria-labelledby="motion-title"
        >
          <div className="spread-top">
            <span className="eyebrow">CHAPTER 05 / MOVING IMAGES</span>
            <Mark />
          </div>
          <div className="motion-heading" data-reveal>
            <h2 id="motion-title">
              <span>Stories in</span>
              <br />
              motion<span className="red">.</span>
            </h2>
            <p>
              A different kind of canvas.
              <br />
              Promotional edits, reels, and moving moments.
            </p>
          </div>
          <div className="video-grid">
            {videos.map((asset, i) => (
              <figure className={i === 3 ? "video-feature" : ""} key={asset.id}>
                <video
                  controls
                  preload="none"
                  playsInline
                  poster={asset.poster}
                  width={asset.width}
                  height={asset.height}
                  aria-label={asset.title}
                >
                  <source src={asset.src} type="video/mp4" />
                  Your browser does not support video playback.{" "}
                  <a href={asset.src}>Open {asset.title}</a>
                </video>
                <figcaption>
                  <span>
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {asset.title.replaceAll("_", " ")}
                  </span>
                  <span aria-hidden="true">↗</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
        <Gallery images={images} />
      </main>
      <footer className="contact dark-grid" id="contact">
        <Cable />
        <span className="eyebrow">HAVE A STORY IN MIND?</span>
        <h2 data-reveal>
          Let’s make
          <br />
          <em>something meaningful.</em>
        </h2>
        <a className="email-link" href="mailto:dfailanga.dfx@gmail.com">
          dfailanga.dfx@gmail.com <span>↗</span>
        </a>
        <div className="contact-bottom">
          <div className="footer-identity">
            <Mark />
            <Wordmark small />
          </div>
          <span>BRAND DESIGNER & VISUAL ARTIST</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <svg className="svg-filters" aria-hidden="true">
        <defs>
          <filter
            id="portrait-outline"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            colorInterpolationFilters="sRGB"
          >
            <feMorphology
              in="SourceAlpha"
              operator="dilate"
              radius="8"
              result="expanded"
            />
            <feFlood floodColor="#dc351b" />
            <feComposite in2="expanded" operator="in" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
