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

function hide(variable1) {
    const divs = document.querySelectorAll('div[id^="d"]');
    const targetDiv = document.getElementById(variable1);
    
    if (targetDiv.style.display === "block") {
      if(targetDiv.className === "nodouble") {
        targetDiv.style.display = "block";
        }
      else{
        // If the target div is already visible, hide it
        targetDiv.style.display = "none";
      }
    } else {
        // Show the target div and hide others
        divs.forEach(div => {
            if (div.id === variable1) {
                div.style.display = "block";
            } else {
                div.style.display = "none";
            }
        });
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
  const notification = document.getElementById('notifi');
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 1000);
}