document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("share-widget");
  if (!container) return;

  // HTML for button + Popup dynamic
  container.innerHTML = `
    <button id="share-btn" style="position:fixed; bottom:20px; right:20px; padding:10px 15px; border-radius:8px; background:#232533; color:white; border:none; cursor:pointer; z-index:1000;">
      Share
    </button>

    <div id="qr-popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index:1001;">
      <div style="background:white; padding:20px; border-radius:12px; text-align:center; max-width:90%; box-shadow:0 4px 20px rgba(0,0,0,0.3);">
        <p style="color:black;">Scan the QR-Code:</p>
        <img id="qr-image" alt="QR-Code" style="width:200px; height:200px;" />
        <p style="color:black;">CocoArdo.org/</p>
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