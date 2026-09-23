const directionsUrl = "https://maps.app.goo.gl/s3dvS83ZXdKUNdkA8";
const rsvpUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSfTeDEtJewRPhEcVbnzaJTZXL3bOfTauw6PZ9txJt4Faed79A/viewform?usp=publish-editor";

const pages = [
  {
    number: 1,
    src: "/invitation/page-1.jpg",
    width: 1500,
    height: 2100,
    className: "art-page-1",
    alt: "Save the date for Nana and Akua, 29th August 2026, with the hashtag theaddoopokus.",
  },
  {
    number: 2,
    src: "/invitation/page-2.jpg",
    width: 1060,
    height: 1484,
    className: "art-page-2",
    alt: "Traditional marriage ceremony invitation for Nana and Akua on 29th August 2026 at 9:30 AM in Buoho - Sasa.",
  },
  {
    number: 3,
    src: "/invitation/page-3.jpg",
    width: 1429,
    height: 2000,
    className: "art-page-3",
    alt: "Wedding timeline: ceremony at 9:30 AM, photos at 11:30 AM, cocktails at noon, and couple send off at 12:30 PM.",
  },
  {
    number: 4,
    src: "/invitation/page-4.jpg",
    width: 1429,
    height: 2000,
    className: "art-page-4",
    alt: "Wedding details covering gifts, an adults-only celebration, an unplugged ceremony, admission, and RSVP information.",
  },
] as const;

export default function Home() {
  return (
    <main className="invitation" aria-label="Nana and Akua wedding invitation">
      <ol className="invitation-pages">
        {pages.map((page, index) => (
          <li className="invitation-page" key={page.number}>
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
            aria-label="Open directions to the wedding program"
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
        <h1>Nana and Akua</h1>
        <p>#theaddoopokus. Save the Date. 29th August, 2026.</p>
        <p>
          Together with their families, Nana and Akua joyfully invite you to
          their traditional marriage ceremony on 29th August, 2026 at 9:30 AM
          in Buoho - Sasa. Cocktail to follow.
        </p>
        <p>
          RSVP: Silas - 0201997931; Stephanie - 0559819574; Maka - 0243919166;
          Kate - 0209447326.
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
          named guest and is non-transferable. Kindly RSVP by 22nd August.
        </p>
      </section>
    </main>
  );
}
