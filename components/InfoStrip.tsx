export default function InfoStrip() {
  return (
    <div className="info-strip">
      <div className="info-strip-inner">
        <div className="info-item">
          <div className="info-icon-wrap"></div>
          <div>
            <div className="info-label">Venue</div>
            <div className="info-value">
             Agape New Testament Church<br />
              - east legon
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon-wrap"></div>
          <div>
            <div className="info-label">Date &amp; Time</div>
            <div className="info-value">
              Saturday, 6th June 2026<br />
              Ceremony begins at 12:00 PM
            </div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon-wrap"></div>
          <div>
            <div className="info-label">Enquiries</div>
            <div className="info-value">
              info@agapeacademy.edu.gh<br />
              +233 30 222 1234
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
