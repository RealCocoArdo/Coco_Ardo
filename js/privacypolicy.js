document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("privacy-widget");
  if (!container) return;

  // HTML for button + Popup dynamic
  container.innerHTML = `
    <div id="privacypolicy-popup">
    <div id="privacypolicy-box">
    <h2>Privacy policy</h2>
    <p>
      This website does not use cookies and does not collect any personal data.
      This notice is displayed in compliance with the European GDPR law. 
      <br><br> By clicking "I understand" you confirm that you have read this information.
      "I don't consent" will lead you to a wikipedia article about the European GDPR law.
    </p>
    <button onclick="declineprivacypolicy()" id="redb">I don't consent</button>
    <button onclick="acceptprivacypolicy()" id="blueb">I understand</button>
    </div>
  </div>
  `;
});