document.getElementById("header-placeholder").innerHTML = `
<header>
        <div class="menu-icon" onclick="openMenu()">☰</div>
        <div class="title">キムグムギュ</div>
        <div class="language">KOR</div>
      </header>
      
  <div id="menuOverlay" class="menu-overlay">
    <div class="close-btn" onclick="closeMenu()">✕</div>
    <div class="overlay-content">
      <div class="left-menu">
        <p class="selected">キムグムギュ</p>
      </div>
      <div class="right-menu">
        <p><a href="index.html">Go Main</a></p>
        <p><a href="aboutme.html">ABOUT ME</a></p>
        <p><a href="myfavoritegame.html">My Favortie Game</a></p>
        <p><a href="goodsite.html">Good Sites</a></p>
      </div>
    </div>
  </div>
`;

function openMenu() {
    document.getElementById('menuOverlay').style.display = 'block';
  }
  
  function closeMenu() {
    document.getElementById('menuOverlay').style.display = 'none';
  }
  const links = document.querySelectorAll('.right-menu a');
links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});
