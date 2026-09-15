const pages = [
  {
    src: "/invite-1.png",
    alt: "Save the date for Nana and Akua, 29th August 2026.",
  },
  {
    src: "/invite-2.png",
    alt: "Nana and Akua invite you to their traditional marriage ceremony on 29th August 2026 at 9:30 AM, Buoho - Sasa. RSVP contacts: Silas, Stephanie, Maka, and Kate.",
  },
  {
    src: "/invite-3.png",
    alt: "Wedding timeline: ceremony at 9:30 AM, photos at 11:30 AM, cocktails session at 12:00 noon, and couple send off at 12:30 PM.",
  },
  {
    src: "/invite-4.png",
    alt: "Wedding details including gift notes, Momo QR code, adults-only note, unplugged ceremony note, non-transferable invite notice, and RSVP deadline of 22nd August.",
  },
  {
    src: "/invite-5.png",
    alt: "Direction to the program and tap here to RSVP.",
    links: true,
  },
];

export default function Home() {
  return (
    <main className="invitation" aria-label="Nana and Akua wedding invitation">
      {pages.map((page, index) => (
        <section className="invite-page" key={page.src} aria-label={`Invitation page ${index + 1}`}>
          <img src={page.src} alt={page.alt} />
          {page.links ? <PageLinks /> : null}
        </section>
      ))}

      <div className="sr-only">
        <h1>Nana &amp; Akua Wedding Invitation</h1>
        <p>#theaddoopokus</p>
        <p>Traditional Marriage Ceremony: 29th August, 2026 at 9:30 AM, Buoho - Sasa.</p>
        <p>RSVP: Silas - 0201997931, Stephanie - 0559819574, Maka - 0243919166, Kate - 0209447326.</p>
        <h2>Wedding Timeline</h2>
        <ol>
          <li>9:30 AM - Ceremony</li>
          <li>11:30 AM - Photos</li>
          <li>12:00 Noon - Cocktails Session</li>
          <li>12:30 PM - Couple Send Off</li>
        </ol>
        <h2>Wedding Details</h2>
        <p>
          Your love, prayers, and presence are the greatest gifts. Monetary contributions toward the couple's future are appreciated.
        </p>
        <p>The celebration is adults only, with no children allowed.</p>
        <p>Please put away cameras during the ceremony and avoid sharing special moments on social media.</p>
      </div>
    </main>
  );
}

function PageLinks() {
  return (
    <>
      <a
        className="tap-area directions"
        href="https://maps.app.goo.gl/s3dvS83ZXdKUNdkA8"
        target="_blank"
        rel="noreferrer"
        aria-label="Open directions to the program"
      />
      <a
        className="tap-area rsvp"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfTeDEtJewRPhEcVbnzaJTZXL3bOfTauw6PZ9txJt4Faed79A/viewform?usp=publish-editor"
        target="_blank"
        rel="noreferrer"
        aria-label="Open RSVP form"
      />
    </>
  );
}
