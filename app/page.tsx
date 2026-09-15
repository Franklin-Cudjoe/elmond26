export default function Home() {
  return (
    <main className="page-shell" aria-label="Richmond and Elizabeth save the date">
      <section className="save-card">
        <div className="floral-mark" aria-hidden="true">
          <span className="sprig sprig-top" />
          <span className="sprig sprig-bottom" />
          <p>
            Save <small>The</small>
            <span>Date</span>
          </p>
        </div>

        <div className="couple-frame" aria-hidden="true">
          <span className="portrait bride" />
          <span className="portrait groom" />
          <span className="embrace" />
        </div>

        <div className="card-copy">
          <p className="names">
            Richmond
            <span>&amp;</span>
            Elizabeth
          </p>
          <time dateTime="2026-10-17">17 / 10 / 26</time>
          <p className="venue">Mim Catholic Church</p>
        </div>
      </section>
    </main>
  );
}
