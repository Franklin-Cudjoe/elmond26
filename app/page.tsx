const directionsUrl =
  "https://www.google.com/maps/search/?api=1&query=Mim%20Catholic%20Church%2C%20Mim%2C%20Ghana";
const rsvpUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLScUNxIDZquQlce14dAyr9qOYF_0Ab5elU5GrCd6NQUgYIcYgA/viewform?usp=dialog";
const momoNumber = "0548763626";

const pages = [
  {
    number: 1,
    src: "/invitation/save-the-date-photo.png",
    width: 1060,
    height: 1484,
    className: "art-page-1",
    alt: "Richmond and Elizabeth dressed in white, leaning into each other, above their monogram with Save the Date, 17th October 2026, and the hashtag Elmond26.",
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
    src: "/invitation/white-wedding-navy-gold.png",
    width: 1060,
    height: 1484,
    className: "art-page-2",
    alt: "White Wedding invitation for Richmond and Elizabeth on 17th October 2026 at 9:30 AM at Mim Catholic Church.",
  },
  {
    number: 4,
    src: "/invitation/wedding-timeline-navy-gold.jpg",
    width: 1429,
    height: 2000,
    className: "art-page-3",
    alt: "Wedding timeline: ceremony at 9:30 AM, photos at 11:30 AM, cocktails at noon, and couple send off at 12:30 PM.",
  },
  {
    number: 5,
    src: "/invitation/wedding-details-navy-gold.png",
    width: 1060,
    height: 1484,
    className: "art-page-4",
    alt: "Wedding details covering gift notes with a MoMo QR code, RSVP by 17th October 2026, and the hashtag Elmond26.",
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
            className={`invitation-page${page.className === "art-page-4" ? " invitation-page-details" : ""}`}
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
            {page.className === "art-page-4" && (
              <img
                className="momo-qr"
                src={`/invitation/momo-${momoNumber}.png`}
                width="348"
                height="348"
                alt="MoMo QR code for gift contributions"
                loading="lazy"
                decoding="async"
              />
            )}
          </li>
        ))}

        <li className="invitation-page invitation-page-links">
          <img
            className="page-art art-page-5"
            src="/invitation/directions-rsvp-navy-gold.png"
            width="1500"
            height="2100"
            alt="Direction to the program and RSVP."
            loading="lazy"
            decoding="async"
          />
          <img
            className="page-art direction-art"
            src="/invitation/direction-badge-navy-gold.png"
            width="1254"
            height="1254"
            alt=""
            loading="lazy"
            decoding="async"
          />
          <img
            className="page-art rsvp-art"
            src="/invitation/tap-here-navy.png"
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
          you to their white wedding on 17th October, 2026 at
          9:30 AM at Mim Catholic Church. Cocktail to follow.
        </p>
        <h2>Wedding Timeline</h2>
        <p>
          Ceremony at 9:30 AM, photos at 11:30 AM, cocktails session at 12:00
          noon, and couple send off at 12:30 PM.
        </p>
        <h2>Wedding Details</h2>
        <p>
          Gifts can be sent by scanning the MoMo QR code. Kindly RSVP by 17th
          October 2026.
        </p>
      </section>
    </main>
  );
}
