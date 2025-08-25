document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("share-widget");
  if (!container) return;

  // HTML for button + Popup dynamic
  container.innerHTML = `
    <div style="justify-content: center; display: flex; flex-direction: row;">
      <button id="share-btn" style="background:#15202b; padding-right: 2.5%; padding-left: 2.5%; color:grey; justify-content: center; border:none; cursor:pointer;">
        <h3>Share</h3>
      </button>
    </div>

    <div id="qr-popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index:1001;">
      <div style="background:white; padding:20px; border-radius:12px; text-align:center; max-width:90%; box-shadow:0 4px 20px rgba(0,0,0,0.3);">
        <p style="color:black;">Scan the QR-Code:</p>
        <img id="qr-image" alt="QR-Code" style="width:200px; height:200px;" />
        <br>
        <button id="qr-close" style="margin-top:10px; padding:6px 12px; border:none; background:#0077ff; color:white; border-radius:6px; cursor:pointer;">
          Close
        </button>
      </div>
    </div>
  `;

  const btn = document.getElementById("share-btn");
  const popup = document.getElementById("qr-popup");
  const qrImage = document.getElementById("qr-image");
  const closeBtn = document.getElementById("qr-close");

  btn.addEventListener("click", () => {
    const url = encodeURIComponent(window.location.href);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
    popup.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});