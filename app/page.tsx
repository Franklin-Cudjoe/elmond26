const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Mim%20Catholic%20Church%2C%20Mim%2C%20Ghana";
const rsvpUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScUNxIDZquQlce14dAyr9qOYF_0Ab5elU5GrCd6NQUgYIcYgA/viewform?usp=dialog";

const pages = [
  {
    number: 1,
    src: "/invitation/page-1-elmond26.png",
    width: 1060,
    height: 1484,
    className: "art-page-1",
    alt: "Save the date for Richmond and Elizabeth, 17th October 2026, with the hashtag Elmond26.",
  },
  {
    number: 2,
    src: "/invitation/richmond-elizabeth-photo.jpeg",
    width: 892,
    height: 1280,
    className: "art-couple-photo",
    alt: "Richmond and Elizabeth embracing in their save-the-date portrait, announcing 17th October 2026 at Mim Catholic Church.",
  },
  {
    number: 3,
    src: "/invitation/page-2-no-rsvp.png",
    width: 1060,
    height: 1484,
    className: "art-page-2",
    alt: "Traditional marriage ceremony invitation for Richmond and Elizabeth on 17th October 2026 at 9:30 AM at Mim Catholic Church.",
  },
  {
    number: 4,
    src: "/invitation/page-3.jpg",
    width: 1429,
    height: 2000,
    className: "art-page-3",
    alt: "Wedding timeline: ceremony at 9:30 AM, photos at 11:30 AM, cocktails at noon, and couple send off at 12:30 PM.",
  },
  {
    number: 5,
    src: "/invitation/page-4-rsvp-17-october-2026.png",
    width: 1060,
    height: 1484,
    className: "art-page-4",
    alt: "Wedding details covering gifts, an adults-only celebration, an unplugged ceremony, admission, RSVP by 17th October 2026, and the hashtag Elmond26.",
  },
] as const;

export default function Home() {
  return (
    <main
      className="invitation"
      aria-label="Richmond and Elizabeth wedding invitation"
    >
      <ol className="invitation-pages">
        {pages.map((page, index) => (
          <li
            className="invitation-page"
            key={page.number}
            style={{ aspectRatio: `${page.width} / ${page.height}` }}
          >
            <img
              className={`page-art ${page.className}`}
              src={page.src}
              width={page.width}
              height={page.height}
              alt={page.alt}
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </li>
        ))}

        <li className="invitation-page invitation-page-links">
          <img
            className="page-art art-page-5"
            src="/invitation/page-5-background.png"
            width="1500"
            height="2100"
            alt="Direction to the program and RSVP."
            loading="lazy"
            decoding="async"
          />
          <img
            className="page-art direction-art"
            src="/invitation/direction.png"
            width="592"
            height="595"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            className="page-art rsvp-art"
            src="/invitation/rsvp.png"
            width="254"
            height="248"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <a
            className="pdf-link directions-link"
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open directions to Mim Catholic Church"
          />
          <a
            className="pdf-link rsvp-link"
            href={rsvpUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Open the wedding RSVP form"
          />
        </li>
      </ol>

      <section className="sr-only" aria-label="Invitation details">
        <h1>Richmond and Elizabeth</h1>
        <p>#Elmond26. Save the Date. 17th October, 2026.</p>
        <p>
          Together with their families, Richmond and Elizabeth joyfully invite
          you to their traditional marriage ceremony on 17th October, 2026 at
          9:30 AM at Mim Catholic Church. Cocktail to follow.
        </p>
        <h2>Wedding Timeline</h2>
        <p>
          Ceremony at 9:30 AM, photos at 11:30 AM, cocktails session at 12:00
          noon, and couple send off at 12:30 PM.
        </p>
        <h2>Wedding Details</h2>
        <p>
          The celebration is adults only. Guests are kindly asked to put away
          cameras during the unplugged ceremony. Each invitation admits one
          named guest and is non-transferable. Kindly RSVP by 17th October 2026.
        </p>
      </section>
    </main>
  );
}
