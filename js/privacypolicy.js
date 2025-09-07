document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("privacy-widget");
  if (!container) return;

  // HTML for button + Popup dynamic
  container.innerHTML = `
    <div id="notifi" style="display:none; position:fixed; top:20px; left:50%; transform:translateX(-50%); background:red; color:white; padding:10px 20px; border-radius:5px; z-index:10000;">
      No access.
    </div>
    <div id="privacypolicy-popup">
    <div id="privacypolicy-box">
    <h2>Privacy policy</h2>
    <p>
      This website does not use cookies and does not collect any personal data.
      This notice is displayed in compliance with the European GDPR law. 
      <br><br> By clicking "I understand" you confirm that you have read this information.
      "You can't acces the website without consent.
    </p>
    <button onclick="declineprivacypolicy()" id="redb">I don't consent</button>
    <button onclick="acceptprivacypolicy()" id="blueb">I understand</button>
    </div>
  </div>
  `;
});