const rsvpContacts = [
  ["Silas", "0201997931"],
  ["Stephanie", "0559819574"],
  ["Maka", "0243919166"],
  ["Kate", "0209447326"],
];

const ceremonyFacts = [
  {
    icon: "/assets/icon-calendar.png",
    label: "29TH AUGUST, 2026",
  },
  {
    icon: "/assets/icon-clock.png",
    label: "9:30 AM",
  },
  {
    icon: "/assets/icon-pin.png",
    label: "BUOHO - SASA",
  },
];

const monogramTiles = Array.from({ length: 21 });

export default function Home() {
  return (
    <main className="invitation">
      <section className="sheet cover" aria-label="Save the date">
        <div className="monogram-wall" aria-hidden="true">
          {monogramTiles.map((_, index) => (
            <span key={index}>
              N
              <small>A</small>
            </span>
          ))}
        </div>
        <p className="hashtag">#theaddoopokus</p>
        <div className="cover-lockup">
          <img
            className="cover-monogram"
            src="/assets/monogram-cover.png"
            alt="Nana and Akua monogram"
          />
        </div>
        <div className="save-date">
          <p>Save the Date</p>
          <strong>29th August, 2026</strong>
        </div>
      </section>

      <section className="sheet ceremony" aria-label="Ceremony invitation">
        <p className="caps">TOGETHER WITH</p>
        <p className="caps">THEIR FAMILIES</p>
        <h1>
          Nana <span>&amp;</span> Akua
        </h1>
        <p className="caps invite-line">JOYFULLY INVITE YOU TO THEIR</p>
        <Divider />
        <h2>TRADITIONAL MARRIAGE CEREMONY</h2>
        <Divider />

        <div className="facts">
          {ceremonyFacts.map((fact) => (
            <div className="fact" key={fact.label}>
              <img src={fact.icon} alt="" aria-hidden="true" />
              <span>{fact.label}</span>
            </div>
          ))}
        </div>

        <Divider />
        <div className="rsvp">
          <h3>RSVP</h3>
          <ul>
            {rsvpContacts.map(([name, phone]) => (
              <li key={name}>
                <span>{name}</span> - <a href={`tel:${phone}`}>{phone}</a>
              </li>
            ))}
          </ul>
        </div>
        <p className="cocktail">Cocktail to Follow</p>
      </section>

      <section className="sheet timeline timeline-pdf" aria-label="Wedding timeline">
        <img
          className="timeline-page-art"
          src="/assets/wedding-timeline-page.png"
          alt="Wedding Timeline: ceremony at 9:30 AM, photos at 11:30 AM, cocktails session at 12:00 noon, and couple send off at 12:30 PM."
        />
        <div className="sr-only">
          <h2>Wedding Timeline</h2>
          <p>
            Kindly take note of the sequence of events for our wedding day as we
            celebrate this special occasion with you.
          </p>
          <p>
            We have thoughtfully arranged each moment to make the day meaningful
            and memorable, and we hope this guide will help you follow along as
            our celebration unfolds.
          </p>
          <ol>
            <li>9:30 AM - Ceremony</li>
            <li>11:30 AM - Photos</li>
            <li>12:00 Noon - Cocktails Session</li>
            <li>12:30 PM - Couple Send Off</li>
          </ol>
        </div>
      </section>

      <section className="sheet framed details" aria-label="Wedding details">
        <img className="flowers flowers-top" src="/assets/flowers-top-left.png" alt="" />
        <img
          className="flowers flowers-bottom"
          src="/assets/flowers-bottom-right.png"
          alt=""
        />
        <h2>Wedding Details</h2>

        <div className="details-grid">
          <article className="detail-block gift-block">
            <h3>GIFT NOTES</h3>
            <Divider />
            <p>
              Your love, prayers, and presence are the greatest gifts we could
              ask for. However, should you wish to honor us with a gift, a
              monetary contribution toward our future together would be
              sincerely appreciated.
            </p>
            <img className="qr" src="/assets/qr-momo.png" alt="Momo details QR code" />
            <em>Please scan me for Momo details</em>
          </article>

          <div className="detail-divider" aria-hidden="true" />

          <div className="right-details">
            <article className="detail-block">
              <h3>NOTES ON CHILDREN</h3>
              <Divider />
              <p>
                While we adore your little ones, we've decided to make the
                celebration adults only, so no children allowed. Thank you for
                understanding. We can't wait to celebrate with you.
              </p>
            </article>

            <article className="detail-block">
              <h3>UNPLUGGED CEREMONY</h3>
              <Divider />
              <p>
                We kindly ask that you put away your cameras during our
                ceremony. We have invited a professional photographer to capture
                these special moments, and we would love to see your smiling
                faces rather than your screens.
              </p>
              <p>
                Please prevent sharing of our special moments with other parties
                and on social media.
              </p>
            </article>
          </div>
        </div>

        <div className="policy-row">
          <article>
            <span className="person-icon" aria-hidden="true" />
            <Divider />
            <p>
              This invite admits one person only. It is issued strictly to the
              named guest and is non-transferable.
            </p>
          </article>
          <article>
            <img src="/assets/icon-calendar.png" alt="" aria-hidden="true" />
            <Divider />
            <p>Kindly RSVP by the 22nd of August</p>
          </article>
        </div>

        <p className="footer-hashtag">#theaddoopokus</p>
      </section>

      <section className="sheet links" aria-label="Directions and RSVP">
        <h2>Direction to the Program</h2>
        <a
          className="direction-link"
          href="https://maps.app.goo.gl/s3dvS83ZXdKUNdkA8"
          target="_blank"
          rel="noreferrer"
          aria-label="Open directions to the program"
        >
          <img src="/assets/direction-badge.png" alt="Kindly tap here for direction" />
        </a>
        <a
          className="rsvp-link"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfTeDEtJewRPhEcVbnzaJTZXL3bOfTauw6PZ9txJt4Faed79A/viewform?usp=publish-editor"
          target="_blank"
          rel="noreferrer"
          aria-label="Open RSVP form"
        >
          <img src="/assets/tap-rsvp.png" alt="Tap here to RSVP" />
        </a>
      </section>
    </main>
  );
}

function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span />
    </div>
  );
}
