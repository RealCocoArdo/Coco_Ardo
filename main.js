function dropping() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.bar')) {

      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

function acceptprivacypolicy() {
      localStorage.setItem('privacypolicyAccepted', 'true');
      document.getElementById('privacypolicy-popup').style.display = 'none';
    }

    // Check when loading whether consent has already been given
    window.addEventListener('DOMContentLoaded', () => {
      if (localStorage.getItem('privacypolicyAccepted') === 'true') {
        document.getElementById('privacypolicy-popup').style.display = 'none';
      }
    });

function declineprivacypolicy() {
window.location.href = "https://en.wikipedia.org/wiki/General_Data_Protection_Regulation"
}