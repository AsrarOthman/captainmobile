import "./App.css";
import bgImage from "./assets/bg.jpeg";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="main">
      <div
        className="main2"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "auto",
        }}
      ></div>
      <div className="content">
        <div className="hero">
          {/* <h1 className="herof , bebas-neue-regular">CAPTAIN MOBILE</h1> */}
          <img
            src="/capbg.webp" // atau hanya "logo.jpeg" pun boleh
            width={100}
            height={100}
            alt="logo"
            style={{ borderRadius: "50%" }}
          />
        </div>
      </div>
      <div className="content">
        <div className="card-main">
          <div>
            <h1 className="herof , bebas-neue-regular">CAPTAIN MOBILE</h1>
            <h3 style={{ color: "white" }}> Lubuk iPhone Terbesar Kuantan</h3>
            <h3
              style={{ color: "white", fontSize: "12px", marginBottom: "20px" }}
            >
              iPhone , Android , Laptop , iPad , Apple Watch ( Semua Gadget )
            </h3>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open("https://naktradeinphone.wassap.my/", "_blank")
              }
            >
              <div>
                <img
                  src="/arrows-sort.svg" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">
                NAK TAHU HARGA "TRADE IN' GADGET KORANG ?!
              </div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main "
              onClick={() =>
                window.open("https://beliphone.wassap.my/", "_blank")
              }
            >
              <div>
                <img
                  src="/brand-whatsapp.svg" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">
                Nak Beli iPhone / Android / iPad / Laptop ?
              </div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open("https://jualanurgent.wassap.my/", "_blank")
              }
            >
              <div>
                <img
                  src="/coin.svg" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">Jualan Urgent ( Jual Sahaja )</div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open("https://captainrepair.wassap.my/", "_blank")
              }
            >
              <div>
                <img
                  src="/ambulance.svg" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">
                Tanya Repair ( Android / iPhone )
              </div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open("https://t.me/captainjualmurah", "_blank")
              }
            >
              <div>
                <img
                  src="/bell-ringing.svg" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">Telegram Harga Jackpot</div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/captainmobile.kuantan",
                  "_blank"
                )
              }
            >
              <div>
                <img
                  src="/fb.png" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">Official Facebook Page</div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open(
                  "https://www.tiktok.com/@captainmobilekuantan?lang=en",
                  "_blank"
                )
              }
            >
              <div>
                <img
                  src="/tik.png" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">Official Tiktok</div>
            </button>
          </div>
          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/captainmobilekuantan/?igsh=ZGRrYm1iZzRpZDZ2#",
                  "_blank"
                )
              }
            >
              <div>
                <img
                  src="/instagram.png" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">Official Instagram </div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open(
                  "https://www.whatsapp.com/channel/0029VbAIsByHrDZb6OVZiw36",
                  "_blank"
                )
              }
            >
              <div>
                <img
                  src="/logo.png" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">
                Captain Mobile Phone Jackpot | WhatsApp Channel
              </div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=60179312398&text=Job%20Vacancy%20Captain%20Mobile%0A",
                  "_blank"
                )
              }
            >
              <div>
                <img
                  src="/search.svg" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">Internship Program / Nak Kerja</div>
            </button>
          </div>

          <div>
            <button
              className="card-button-main"
              onClick={() =>
                window.open(
                  "https://api.whatsapp.com/send?phone=601125672454&text=Captain%20Mobile%20Support%20%20%20%0A%0A%20%20(%20Problem%20Link%20)",
                  "_blank"
                )
              }
            >
              <div>
                <img
                  src="/logo.png" // atau hanya "logo.jpeg" pun boleh
                  width={30}
                  height={30}
                  alt="logo"
                />
              </div>
              <div className="fon-center">Link Problem ( 011-2567-2454)</div>
            </button>
            <div>
              <div
                style={{
                  color: "white",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                    marginBottom: "-20px",
                  }}
                >
                  <button
                    className="card-button-main"
                    style={{
                      width: "200px",
                    }}
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps?ll=3.826388,103.303286&z=16&t=m&hl=en&gl=MY&mapclient=embed&cid=11539890990524045290",
                        "_blank"
                      )
                    }
                  >
                    <div></div>
                    <div className="fon-center">Lokasi Kami </div>
                  </button>
                </div>
              </div>

              <ErrorBoundary>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9243727511416!2d103.30071077497433!3d3.8263884961474424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8bb7359e55845%3A0xa025edb704ea97ea!2sCaptain%20Mobile%20Kuantan%20-%20Kedai%20iPhone%20dan%20Android%20%2C%20Gadget%20%26%20Repair%20Phone%20%2C%20LCD%20%2C%20Screen%20%2C%20Battery!5e0!3m2!1sen!2smy!4v1749976310761!5m2!1sen!2smy"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Embed"
                />
              </ErrorBoundary>
            </div>
            <div
              style={{
                color: "white",
                fontSize: "10px",
                marginBottom: "20px",
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              Copyright © 2025 - Captain Mobile. Semua hak cipta dilindungi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
