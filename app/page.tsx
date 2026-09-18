const invitationPages = [
  {
    number: 1,
    src: "/nana-akua-page-1.png",
    alt: "#theaddoopokus save the date for Nana and Akua, 29th August 2026.",
  },
  {
    number: 2,
    src: "/nana-akua-page-2.png",
    alt: "Traditional marriage ceremony invitation for Nana and Akua on 29th August, 2026 at 9:30 AM in Buoho - Sasa.",
  },
  {
    number: 3,
    src: "/nana-akua-page-3.png",
    alt: "Wedding timeline with ceremony at 9:30 AM, photos at 11:30 AM, cocktail session at 12:00 noon, and couple send off at 12:30 PM.",
  },
  {
    number: 4,
    src: "/nana-akua-page-4.png",
    alt: "Wedding details for gifts, children, unplugged ceremony, invite admission, RSVP date, and hashtag.",
  },
  {
    number: 5,
    src: "/nana-akua-page-5.png",
    alt: "Direction to the program and RSVP page with tap targets.",
  },
];

export default function Home() {
  return (
    <main className="invitation-shell" aria-label="Nana and Akua wedding invitation">
      <ol className="invitation-pages">
        {invitationPages.map((page, index) => (
          <li className="invitation-page" key={page.src}>
            <img
              src={page.src}
              alt={page.alt}
              width="720"
              height="1008"
              loading={index === 0 ? "eager" : "lazy"}
              decoding={index === 0 ? "sync" : "async"}
            />

            {page.number === 5 ? (
              <>
                <a
                  className="page-link page-link-directions"
                  href="https://maps.app.goo.gl/s3dvS83ZXdKUNdkA8"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open directions to the program"
                />
                <a
                  className="page-link page-link-rsvp"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfTeDEtJewRPhEcVbnzaJTZXL3bOfTauw6PZ9txJt4Faed79A/viewform?usp=publish-editor"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open the RSVP form"
                />
              </>
            ) : null}
          </li>
        ))}
      </ol>

      <section className="sr-only" aria-label="Invitation text">
        <h1>Nana and Akua Wedding Invitation</h1>
        <p>#theaddoopokus. Save the Date. 29th August, 2026.</p>
        <p>
          Together with their families, Nana and Akua joyfully invite you to their
          traditional marriage ceremony on 29th August, 2026 at 9:30 AM in
          Buoho - Sasa. Cocktail to follow.
        </p>
        <p>
          RSVP: Silas - 0201997931, Stephanie - 0559819574, Maka - 0243919166,
          Kate - 0209447326.
        </p>
        <p>
          Wedding timeline: ceremony at 9:30 AM, photos at 11:30 AM, cocktails
          session at 12:00 noon, and couple send off at 12:30 PM.
        </p>
        <p>
          Wedding details include gift notes, notes on children, an unplugged
          ceremony request, one-person admission, and kindly RSVP by the 22nd of
          August.
        </p>
      </section>
    </main>
  );
}
