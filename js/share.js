document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("share-widget");
  if (!container) return;

  // HTML for Popup
  container.innerHTML = `
    <div id="notification" style="display:none; position:fixed; top:20px; left:50%; transform:translateX(-50%); background:#4CAF50; color:white; padding:10px 20px; border-radius:5px; z-index:1002;">
      Copied!
    </div>

    <div style="justify-content: center; display: flex; flex-direction: row;">
      <button id="share-btn" style="background:#15202b; padding-right: 2.5%; padding-left: 2.5%; color:grey; justify-content: center; border:none; cursor:pointer;">
        <h3>Share</h3>
      </button>
    </div>

    <div id="qr-popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index:1001;">
      <div style="background:white; padding:20px; border-radius:12px; text-align:center; max-width:90%; box-shadow:0 4px 20px rgba(0,0,0,0.3);">
        <p style="color:black;">Scan the QR-Code:</p>
        <img id="qr-image" alt="QR-Code" style="width:200px; height:200px;" />

        <p id="copy-url" style="cursor:pointer; color:#0077ff; text-decoration:underline;">
          Loading URL...
        </p>

        <button id="qr-close" style="margin-top:10px; padding:6px 12px; border:none; background:#0077ff; color:white; border-radius:6px; cursor:pointer;">
          Close
        </button>
      </div>
    </div>
  `;
  
  // Display current URL
  const copyText = document.getElementById("copy-url");
  if (copyText) {
    const fullUrl = window.location.href;
    const urlObj = new URL(fullUrl);
    const displayUrl = urlObj.hostname + urlObj.pathname + urlObj.search + urlObj.hash;
    copyText.textContent = displayUrl;
  }
  
  // Define the showNotification function
  function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 2000); // hide after 2 seconds
  }

  // Copy text to clipboard event
  copyText.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showNotification("Copied!");
    } catch (err) {
      showNotification("Error: " + err);
    }
  });

// Create QR code
  const btn = document.getElementById("share-btn");
  const popup = document.getElementById("qr-popup");
  const qrImage = document.getElementById("qr-image");
  const closeBtn = document.getElementById("qr-close");

  btn.addEventListener("click", () => {
    const url = encodeURIComponent(window.location.href);
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${url}`;
    popup.style.display = "flex";
  });

// Close widget
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
  });
});