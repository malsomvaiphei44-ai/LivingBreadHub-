<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LivingBreadHub – Feed Your Soul</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>

<!-- ===== NAVBAR ===== -->
<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">📖 LivingBreadHub</a>
  <div class="nav-links" id="navLinks">
    <a href="index.html" class="nav-link active">Home</a>
    <a href="bible.html" class="nav-link">Bible</a>
    <a href="sermons.html" class="nav-link">Sermons</a>
    <a href="quiz.html" class="nav-link">Quiz</a>
    <a href="devotions.html" class="nav-link">Devotions</a>
    <a href="profile.html" class="nav-link">Profile</a>
  </div>
  <div class="nav-actions">
    <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark mode">🌙</button>
    <button class="hamburger" id="hamburger" aria-label="Menu">☰</button>
  </div>
</nav>

<!-- ===== HERO ===== -->
<section class="hero">
  <div class="hero-content">
    <p class="hero-eyebrow">✨ Verse of the Day</p>
    <blockquote class="hero-verse" id="votd">
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."
    </blockquote>
    <p class="hero-ref" id="votd-ref">— John 3:16</p>
    <div class="hero-actions">
      <button class="btn-primary" id="shareVOTD">📤 Share</button>
      <button class="btn-outline" id="saveVOTD">❤️ Save Verse</button>
      <a href="bible.html" class="btn-outline">📖 Read Bible</a>
    </div>
  </div>
  <div class="hero-art">✝</div>
</section>

<!-- ===== STREAK ===== -->
<section class="container section">
  <div class="streak-card">
    <div class="streak-left">
      <span class="streak-fire">🔥</span>
      <div>
        <div class="streak-num" id="streakNum">7</div>
        <div class="streak-label">Day Streak</div>
      </div>
    </div>
    <div class="streak-days" id="streakDays"></div>
    <button class="btn-primary" id="markReadBtn">Mark Today ✓</button>
  </div>
</section>

<!-- ===== QUICK NAV ===== -->
<section class="container section">
  <div class="quick-grid">
    <a href="bible.html" class="quick-card">
      <span class="quick-icon">📖</span>
      <span>Bible</span>
    </a>
    <a href="sermons.html" class="quick-card">
      <span class="quick-icon">🎙️</span>
      <span>Sermons</span>
    </a>
    <a href="quiz.html" class="quick-card">
      <span class="quick-icon">❓</span>
      <span>Quiz</span>
    </a>
    <a href="devotions.html" class="quick-card">
      <span class="quick-icon">🙏</span>
      <span>Devotions</span>
    </a>
  </div>
</section>

<!-- ===== TRENDING VERSES ===== -->
<section class="container section">
  <h2 class="section-title">📌 Trending Bible Verses</h2>
  <div class="verses-grid" id="trendingVerses"></div>
</section>

<!-- ===== FEATURED SERMONS ===== -->
<section class="container section">
  <h2 class="section-title">🎙️ Featured Sermons</h2>
  <div class="sermons-scroll" id="featuredSermons"></div>
</section>

<!-- ===== DAILY DEVOTION ===== -->
<section class="container section">
  <h2 class="section-title">🌅 Today's Devotion</h2>
  <div class="devotion-card">
    <div class="devotion-tag">DAY 21</div>
    <h3 class="devotion-title">Walking in Faith, Not by Sight</h3>
    <p class="devotion-text">
      Every morning we have a choice — to walk by what we see, or to walk by what we believe. God's promises do not change with our circumstances. When the storms of life rise, the anchor of faith holds us firm. Let today be a reminder that your steps are ordered, your path is lit, and your God is near.
    </p>
    <a href="devotions.html" class="btn-primary">Read Full Devotion →</a>
  </div>
</section>

<!-- ===== PRAYER REQUEST ===== -->
<section class="container section">
  <h2 class="section-title">🙏 Prayer Requests</h2>
  <div class="prayer-box">
    <textarea id="prayerInput" class="prayer-textarea" placeholder="Share your prayer request here... God hears every word." rows="4"></textarea>
    <button class="btn-primary" id="submitPrayer">Submit Prayer Request</button>
    <div class="prayer-list" id="prayerList"></div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer class="footer">
  <div class="footer-inner">
    <p class="footer-logo">📖 LivingBreadHub</p>
    <div class="footer-nav">
      <a href="index.html">Home</a>
      <a href="bible.html">Bible</a>
      <a href="sermons.html">Sermons</a>
      <a href="quiz.html">Quiz</a>
      <a href="devotions.html">Devotions</a>
      <a href="profile.html">Profile</a>
    </div>
    <p class="footer-credit">Made with ❤️ for Bible readers everywhere</p>
    <p class="footer-copy">© 2026 LivingBreadHub. All rights reserved.</p>
  </div>
</footer>

<script src="js/app.js"></script>
<script>
  /* ---- Trending verses data ---- */
  const trending = [
    { ref: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart and lean not on your own understanding." },
    { ref: "Philippians 4:13", text: "I can do all things through Christ who strengthens me." },
    { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, plans to prosper you and not to harm you." },
    { ref: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him." },
    { ref: "Isaiah 40:31", text: "But those who hope in the Lord will renew their strength." },
    { ref: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
  ];

  const tGrid = document.getElementById("trendingVerses");
  trending.forEach(v => {
    tGrid.innerHTML += `
      <div class="verse-card fade-in">
        <p class="vc-text">"${v.text}"</p>
        <p class="vc-ref">${v.ref}</p>
        <div class="vc-actions">
          <button class="vc-btn" onclick="copyVerse('${v.ref}','${v.text}')">📋 Copy</button>
          <button class="vc-btn" onclick="saveVerse('${v.ref}','${v.text}')">❤️ Save</button>
        </div>
      </div>`;
  });

  /* ---- Featured sermons ---- */
  const sermons = [
    { title: "The Power of Belief", pastor: "Pastor John Smith", dur: "45:32", color: "#667eea,#764ba2", cat: "Faith" },
    { title: "God's Love Never Fails", pastor: "Pastor Sarah Johnson", dur: "52:15", color: "#f093fb,#f5576c", cat: "Love" },
    { title: "Walking in Purpose", pastor: "Bishop Michael Brown", dur: "38:10", color: "#4facfe,#00f2fe", cat: "Purpose" },
  ];

  const sScroll = document.getElementById("featuredSermons");
  sermons.forEach(s => {
    sScroll.innerHTML += `
      <div class="sermon-mini">
        <div class="sermon-thumb" style="background:linear-gradient(135deg,#${s.color})">
          <a href="sermons.html" class="play-icon" aria-label="Play ${s.title}">▶</a>
        </div>
        <span class="sermon-cat">${s.cat}</span>
        <h4 class="sermon-mini-title">${s.title}</h4>
        <p class="sermon-mini-pastor">${s.pastor} · ${s.dur}</p>
      </div>`;
  });

  /* ---- Streak days ---- */
  const days = ["M","T","W","T","F","S","S"];
  const doneCount = 6;
  const sDiv = document.getElementById("streakDays");
  days.forEach((d,i) => {
    sDiv.innerHTML += `<div class="streak-day ${i < doneCount ? 'done' : ''}">${d}</div>`;
  });

  /* ---- Mark today ---- */
  document.getElementById("markReadBtn").addEventListener("click", function() {
    const undone = document.querySelector(".streak-day:not(.done)");
    if (undone) {
      undone.classList.add("done");
      const n = document.getElementById("streakNum");
      n.textContent = parseInt(n.textContent) + 1;
      this.textContent = "✅ Done!";
      this.disabled = true;
      saveToStorage("lastRead", new Date().toDateString());
    }
  });

  /* ---- Share VOTD ---- */
  document.getElementById("shareVOTD").addEventListener("click", () => {
    const text = document.getElementById("votd").textContent + " " + document.getElementById("votd-ref").textContent;
    if (navigator.share) {
      navigator.share({ title: "Verse of the Day – LivingBreadHub", text });
    } else {
      navigator.clipboard.writeText(text).then(() => showToast("Verse copied to clipboard!"));
    }
  });

  /* ---- Save VOTD ---- */
  document.getElementById("saveVOTD").addEventListener("click", () => {
    saveVerse("John 3:16", "For God so loved the world...");
    showToast("Verse saved to your profile! ❤️");
  });

  /* ---- Prayer ---- */
  const prayers = getFromStorage("prayers") || [];
  renderPrayers();

  document.getElementById("submitPrayer").addEventListener("click", () => {
    const val = document.getElementById("prayerInput").value.trim();
    if (!val) return showToast("Please write your prayer request first.");
    prayers.unshift({ text: val, date: new Date().toLocaleDateString() });
    saveToStorage("prayers", prayers);
    document.getElementById("prayerInput").value = "";
    renderPrayers();
    showToast("Your prayer has been submitted 🙏");
  });

  function renderPrayers() {
    const list = document.getElementById("prayerList");
    list.innerHTML = prayers.slice(0, 5).map(p =>
      `<div class="prayer-item"><p class="prayer-text">"${p.text}"</p><span class="prayer-date">${p.date}</span></div>`
    ).join("");
  }
</script>
</body>
</html>
/* ============================================================
   LivingBreadHub – styles.css
   Global stylesheet shared by ALL pages
   ============================================================ */

/* ---------- CSS Variables (Light Mode) ---------- */
:root {
  --primary:      #1a2844;
  --primary-light:#2d4a6e;
  --gold:         #d4af37;
  --gold-light:   #f0d060;
  --bg:           #f7f8fc;
  --card:         #ffffff;
  --text:         #1a1a2e;
  --text-muted:   #6b7280;
  --border:       #e5e7eb;
  --shadow:       0 4px 20px rgba(0,0,0,0.07);
  --radius:       14px;
  --nav-h:        64px;
  --transition:   0.25s ease;
}

/* ---------- Dark Mode ---------- */
body.dark {
  --bg:        #0d1117;
  --card:      #161b27;
  --text:      #e6edf3;
  --text-muted:#8b949e;
  --border:    #30363d;
  --shadow:    0 4px 20px rgba(0,0,0,0.4);
}

/* ---------- Reset & Base ---------- */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
  transition: background var(--transition), color var(--transition);
  padding-top: var(--nav-h);
}

a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
button { cursor: pointer; font-family: inherit; }

/* ---------- Utility ---------- */
.container { max-width: 1100px; margin: 0 auto; padding: 0 18px; }
.section { padding: 40px 0; }
.section-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(20px, 4vw, 26px);
  font-weight: 700;
  color: var(--text);
  margin-bottom: 24px;
}
.fade-in { animation: fadeIn 0.5s ease both; }
@keyframes fadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:none; } }

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: var(--nav-h);
  background: var(--primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 999;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
}

.nav-logo {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.4px;
}

.nav-links {
  display: flex;
  gap: 6px;
}

.nav-link {
  color: rgba(255,255,255,0.75);
  font-size: 14px;
  font-weight: 500;
  padding: 7px 13px;
  border-radius: 8px;
  transition: all var(--transition);
}
.nav-link:hover, .nav-link.active {
  color: #fff;
  background: rgba(212,175,55,0.2);
}
.nav-link.active { color: var(--gold); }

.nav-actions { display: flex; align-items: center; gap: 10px; }

.theme-toggle {
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: 8px;
  padding: 7px 10px;
  font-size: 18px;
  color: #fff;
  transition: background var(--transition);
}
.theme-toggle:hover { background: rgba(255,255,255,0.2); }

.hamburger {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 26px;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: var(--nav-h);
    left: 0; right: 0;
    background: var(--primary);
    padding: 12px 0 20px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .nav-links.open { display: flex; }
  .nav-link { padding: 12px 24px; border-radius: 0; }
  .hamburger { display: block; }
}

/* ============================================================
   BUTTONS
   ============================================================ */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--gold);
  color: var(--primary);
  border: none;
  border-radius: 10px;
  padding: 11px 22px;
  font-weight: 700;
  font-size: 14px;
  transition: all var(--transition);
  text-decoration: none;
}
.btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }

.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 10px;
  padding: 9px 20px;
  font-weight: 600;
  font-size: 14px;
  transition: all var(--transition);
  text-decoration: none;
}
.btn-outline:hover { border-color: var(--gold); color: var(--gold); }

.btn-sm {
  padding: 7px 15px;
  font-size: 13px;
  border-radius: 8px;
}

/* ============================================================
   HERO (index)
   ============================================================ */
.hero {
  background: linear-gradient(135deg, var(--primary) 0%, #3b5998 55%, #6b5b95 100%);
  color: #fff;
  padding: 70px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  position: relative;
  overflow: hidden;
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
.hero-content { max-width: 620px; position: relative; z-index: 1; }
.hero-eyebrow {
  display: inline-block;
  background: rgba(212,175,55,0.2);
  color: var(--gold);
  border: 1px solid rgba(212,175,55,0.4);
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 20px;
}
.hero-verse {
  font-family: 'Playfair Display', serif;
  font-size: clamp(18px, 3.5vw, 26px);
  font-weight: 600;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 14px;
}
.hero-ref { color: var(--gold); font-weight: 600; margin-bottom: 28px; font-size: 14px; }
.hero-actions { display: flex; gap: 12px; flex-wrap: wrap; }
.hero-art {
  font-size: 140px;
  opacity: 0.06;
  position: absolute;
  right: 40px;
  top: 50%;
  transform: translateY(-50%);
  user-select: none;
}

/* ============================================================
   STREAK
   ============================================================ */
.streak-card {
  background: linear-gradient(135deg, #f5576c, #f093fb);
  border-radius: var(--radius);
  padding: 22px 24px;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.streak-left { display: flex; align-items: center; gap: 12px; }
.streak-fire { font-size: 36px; }
.streak-num { font-size: 34px; font-weight: 700; line-height: 1; }
.streak-label { font-size: 13px; opacity: 0.85; }
.streak-days { display: flex; gap: 6px; flex: 1; justify-content: center; flex-wrap: wrap; }
.streak-day {
  width: 34px; height: 34px;
  border-radius: 50%;
  background: rgba(255,255,255,0.25);
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 12px;
  transition: background var(--transition);
}
.streak-day.done { background: rgba(255,255,255,0.9); color: #f5576c; }

/* ============================================================
   QUICK GRID
   ============================================================ */
.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}
@media (max-width: 600px) { .quick-grid { grid-template-columns: repeat(2, 1fr); } }

.quick-card {
  background: var(--card);
  border-radius: var(--radius);
  padding: 24px 12px;
  text-align: center;
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 13px;
  color: var(--text);
  transition: transform var(--transition), box-shadow var(--transition);
  border: 1px solid var(--border);
}
.quick-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,0.1); }
.quick-icon { font-size: 30px; }

/* ============================================================
   VERSE CARDS
   ============================================================ */
.verses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
}
.verse-card {
  background: var(--card);
  border-left: 4px solid var(--gold);
  border-radius: var(--radius);
  padding: 20px;
  box-shadow: var(--shadow);
  transition: transform var(--transition);
}
.verse-card:hover { transform: translateY(-2px); }
.vc-text { font-style: italic; font-size: 14px; line-height: 1.7; color: var(--text); margin-bottom: 10px; }
.vc-ref { color: var(--gold); font-weight: 700; font-size: 13px; margin-bottom: 12px; }
.vc-actions { display: flex; gap: 8px; }
.vc-btn {
  flex: 1;
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 7px 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text);
  transition: all var(--transition);
}
.vc-btn:hover { background: var(--gold); color: var(--primary); border-color: var(--gold); }

/* ============================================================
   SERMON SCROLL (home featured)
   ============================================================ */
.sermons-scroll {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  padding-bottom: 10px;
  scrollbar-width: thin;
  scrollbar-color: var(--gold) transparent;
}
.sermon-mini {
  min-width: 230px;
  background: var(--card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  flex-shrink: 0;
  transition: transform var(--transition);
}
.sermon-mini:hover { transform: translateY(-3px); }
.sermon-thumb {
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.play-icon {
  width: 52px; height: 52px;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  color: var(--primary);
  box-shadow: 0 4px 16px rgba(0,0,0,0.25);
  transition: transform var(--transition);
  padding-left: 4px;
  text-decoration: none;
}
.play-icon:hover { transform: scale(1.08); }
.sermon-cat {
  display: inline-block;
  margin: 10px 12px 4px;
  background: #fef3c7;
  color: #b45309;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.sermon-mini-title { font-size: 14px; font-weight: 700; padding: 0 12px; color: var(--text); margin-bottom: 4px; }
.sermon-mini-pastor { font-size: 12px; color: var(--text-muted); padding: 0 12px 14px; }

/* ============================================================
   DEVOTION CARD
   ============================================================ */
.devotion-card {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: #fff;
  border-radius: var(--radius);
  padding: 32px 28px;
}
.devotion-tag {
  display: inline-block;
  background: rgba(212,175,55,0.25);
  color: var(--gold);
  border: 1px solid rgba(212,175,55,0.4);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 14px;
}
.devotion-title { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; margin-bottom: 14px; }
.devotion-text { font-size: 15px; line-height: 1.8; opacity: 0.9; margin-bottom: 22px; }

/* ============================================================
   PRAYER BOX
   ============================================================ */
.prayer-box {
  background: var(--card);
  border-radius: var(--radius);
  padding: 24px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
}
.prayer-textarea {
  width: 100%;
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px;
  font-size: 14px;
  font-family: inherit;
  background: var(--bg);
  color: var(--text);
  resize: vertical;
  outline: none;
  margin-bottom: 14px;
  transition: border-color var(--transition);
}
.prayer-textarea:focus { border-color: var(--gold); }
.prayer-list { margin-top: 20px; display: flex; flex-direction: column; gap: 12px; }
.prayer-item {
  background: var(--bg);
  border-left: 3px solid var(--gold);
  border-radius: 8px;
  padding: 12px 14px;
}
.prayer-text { font-size: 13px; font-style: italic; color: var(--text); }
.prayer-date { font-size: 11px; color: var(--text-muted); margin-top: 4px; display: block; }

/* ============================================================
   BIBLE PAGE
   ============================================================ */
.bible-hero {
  background: linear-gradient(135deg, #1a2844 0%, #1e3a5f 100%);
  color: #fff;
  padding: 50px 20px;
  text-align: center;
}
.bible-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(28px, 5vw, 42px); margin-bottom: 12px; }
.bible-hero p { opacity: 0.8; font-size: 15px; margin-bottom: 24px; }

.search-bar {
  display: flex;
  max-width: 520px;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}
.search-input {
  flex: 1;
  padding: 14px 18px;
  font-size: 15px;
  border: none;
  outline: none;
  font-family: inherit;
  color: var(--primary);
}
.search-btn {
  background: var(--gold);
  border: none;
  padding: 0 22px;
  font-size: 20px;
  cursor: pointer;
  transition: background var(--transition);
  color: var(--primary);
}
.search-btn:hover { background: var(--gold-light); }

.cat-tabs {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 28px;
}
.cat-tab {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: 25px;
  padding: 8px 18px;
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  transition: all var(--transition);
}
.cat-tab:hover, .cat-tab.active {
  background: var(--gold);
  color: var(--primary);
  border-color: var(--gold);
}

.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}
.book-card {
  background: var(--card);
  border-radius: 12px;
  padding: 18px 16px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  cursor: pointer;
  transition: all var(--transition);
}
.book-card:hover { transform: translateY(-2px); border-color: var(--gold); }
.book-name { font-weight: 700; font-size: 14px; color: var(--text); margin-bottom: 4px; }
.book-chap { font-size: 12px; color: var(--text-muted); }
.book-testament {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-bottom: 8px;
}
.ot { color: #b45309; }
.nt { color: #0284c7; }

.result-box {
  background: var(--card);
  border-radius: var(--radius);
  padding: 28px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  display: none;
}
.result-box.visible { display: block; }

/* ============================================================
   SERMONS PAGE
   ============================================================ */
.page-hero {
  background: linear-gradient(135deg, #1a2844 0%, #4a0080 100%);
  color: #fff;
  padding: 50px 20px;
  text-align: center;
}
.page-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(26px,5vw,38px); margin-bottom: 10px; }
.page-hero p { opacity: 0.8; font-size: 15px; }

.filter-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  align-items: center;
}
.filter-label { font-weight: 600; font-size: 14px; color: var(--text-muted); margin-right: 4px; }

.sermon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
  gap: 20px;
}
.sermon-card {
  background: var(--card);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  transition: transform var(--transition), box-shadow var(--transition);
}
.sermon-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.12); }
.sc-thumb {
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.sc-duration {
  position: absolute;
  bottom: 10px; right: 10px;
  background: rgba(0,0,0,0.7);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 5px;
}
.sc-info { padding: 16px; }
.sc-cat {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 8px;
  background: #fef3c7;
  color: #b45309;
}
.sc-title { font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 6px; line-height: 1.4; }
.sc-pastor { font-size: 13px; color: var(--text-muted); }
.sc-meta { font-size: 12px; color: var(--text-muted); margin-top: 6px; }
.sc-play {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 12px 16px 16px;
  background: var(--primary);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 11px;
  font-size: 14px;
  font-weight: 600;
  width: calc(100% - 32px);
  transition: background var(--transition);
}
.sc-play:hover { background: var(--gold); color: var(--primary); }

/* Modal player */
.player-modal {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  z-index: 2000;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.player-modal.open { display: flex; }
.player-inner {
  background: var(--card);
  border-radius: var(--radius);
  padding: 28px;
  max-width: 500px;
  width: 100%;
  position: relative;
}
.player-close {
  position: absolute;
  top: 14px; right: 14px;
  background: none;
  border: none;
  font-size: 24px;
  color: var(--text-muted);
}
.player-close:hover { color: var(--text); }
.player-art {
  height: 160px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 20px;
  font-size: 60px;
}
.player-title { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
.player-pastor { font-size: 13px; color: var(--text-muted); margin-bottom: 20px; }
.player-track { height: 6px; background: var(--border); border-radius: 3px; margin-bottom: 12px; }
.player-fill { height: 100%; width: 35%; background: var(--gold); border-radius: 3px; transition: width 1s linear; }
.player-controls { display: flex; justify-content: center; gap: 20px; }
.pc-btn {
  background: none; border: none; font-size: 28px; color: var(--text);
  transition: transform var(--transition);
}
.pc-btn:hover { transform: scale(1.15); }
.pc-btn.main {
  background: var(--gold); border-radius: 50%;
  width: 54px; height: 54px;
  display: flex; align-items: center; justify-content: center;
  font-size: 24px;
  color: var(--primary);
}

/* ============================================================
   QUIZ PAGE
   ============================================================ */
.quiz-hero {
  background: linear-gradient(135deg, #1a2844, #0f3460);
  color: #fff;
  padding: 50px 20px;
  text-align: center;
}
.quiz-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(26px,5vw,38px); margin-bottom: 10px; }

.quiz-categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px;
  margin-bottom: 36px;
}
.qcat-card {
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: var(--radius);
  padding: 22px 16px;
  text-align: center;
  cursor: pointer;
  transition: all var(--transition);
}
.qcat-card:hover, .qcat-card.active {
  border-color: var(--gold);
  background: #fffbf0;
  transform: translateY(-2px);
}
body.dark .qcat-card:hover, body.dark .qcat-card.active {
  background: #1e1a0a;
}
.qcat-icon { font-size: 36px; display: block; margin-bottom: 8px; }
.qcat-name { font-weight: 700; font-size: 14px; }
.qcat-count { font-size: 12px; color: var(--text-muted); }

.quiz-board {
  background: var(--card);
  border-radius: var(--radius);
  padding: 32px;
  box-shadow: var(--shadow);
  border: 1px solid var(-
  /* ============================================================
   LivingBreadHub – app.js
   Shared utilities loaded on every page
   ============================================================ */

/* ---------- Dark Mode ---------- */
(function applyTheme() {
  if (localStorage.getItem("lbh-theme") === "dark") {
    document.body.classList.add("dark");
  }
})();

document.addEventListener("DOMContentLoaded", () => {
  /* ---------- Theme toggle ---------- */
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    const isDark = () => document.body.classList.contains("dark");
    toggleBtn.textContent = isDark() ? "☀️" : "🌙";
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      localStorage.setItem("lbh-theme", isDark() ? "dark" : "light");
      toggleBtn.textContent = isDark() ? "☀️" : "🌙";
    });
  }

  /* ---------- Hamburger ---------- */
  const hamburger = document.getElementById("hamburger");
  const navLinks  = document.getElementById("navLinks");
  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
    });
    // close on link click
    navLinks.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        navLinks.classList.remove("open");
        hamburger.textContent = "☰";
      })
    );
  }

  /* ---------- Active nav link ---------- */
  const page = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
    else a.classList.remove("active");
  });

  /* ---------- Toast element ---------- */
  if (!document.getElementById("lbhToast")) {
    const t = document.createElement("div");
    t.id = "lbhToast";
    t.className = "toast";
    document.body.appendChild(t);
  }
});

/* ---------- Toast helper ---------- */
function showToast(msg, duration = 3000) {
  const t = document.getElementById("lbhToast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), duration);
}

/* ---------- LocalStorage helpers ---------- */
function saveToStorage(key, value) {
  try { localStorage.setItem("lbh-" + key, JSON.stringify(value)); } catch {}
}
function getFromStorage(key) {
  try {
    const v = localStorage.getItem("lbh-" + key);
    return v ? JSON.parse(v) : null;
  } catch { return null; }
}

/* ---------- Save verse globally ---------- */
function saveVerse(ref, text) {
  const saved = getFromStorage("savedVerses") || [];
  if (saved.find(v => v.ref === ref)) {
    showToast("Already saved! ❤️");
    return;
  }
  saved.unshift({ ref, text });
  saveToStorage("savedVerses", saved);
  showToast("Verse saved! ❤️");
}

/* ---------- Copy verse ---------- */
function copyVerse(ref, text) {
  navigator.clipboard.writeText(`"${text}" — ${ref}`)
    .then(() => showToast("Copied to clipboard! 📋"))
    .catch(() => showToast("Could not copy."));
}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bible – LivingBreadHub</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>

<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">📖 LivingBreadHub</a>
  <div class="nav-links" id="navLinks">
    <a href="index.html" class="nav-link">Home</a>
    <a href="bible.html" class="nav-link active">Bible</a>
    <a href="sermons.html" class="nav-link">Sermons</a>
    <a href="quiz.html" class="nav-link">Quiz</a>
    <a href="devotions.html" class="nav-link">Devotions</a>
    <a href="profile.html" class="nav-link">Profile</a>
  </div>
  <div class="nav-actions">
    <button class="theme-toggle" id="themeToggle">🌙</button>
    <button class="hamburger" id="hamburger">☰</button>
  </div>
</nav>

<!-- HERO -->
<section class="bible-hero">
  <h1>📖 The Holy Bible</h1>
  <p>Search scriptures, explore books, and discover God's word</p>
  <div class="search-bar">
    <input class="search-input" id="bibleSearch" type="text" placeholder="Search a verse, keyword, or reference…" />
    <button class="search-btn" id="searchBtn">🔍</button>
  </div>
</section>

<!-- CATEGORIES -->
<div class="container section">
  <div class="cat-tabs" id="catTabs">
    <button class="cat-tab active" data-cat="all">All</button>
    <button class="cat-tab" data-cat="faith">🙏 Faith</button>
    <button class="cat-tab" data-cat="hope">🌟 Hope</button>
    <button class="cat-tab" data-cat="love">❤️ Love</button>
    <button class="cat-tab" data-cat="prayer">🕊️ Prayer</button>
    <button class="cat-tab" data-cat="strength">💪 Strength</button>
    <button class="cat-tab" data-cat="wisdom">📚 Wisdom</button>
  </div>

  <!-- Category verses -->
  <div class="verses-grid" id="catVerses" style="margin-bottom:40px;"></div>

  <!-- Search Result -->
  <div class="result-box" id="resultBox">
    <h3 style="font-family:'Playfair Display',serif;margin-bottom:16px;font-size:20px;" id="resultRef"></h3>
    <p style="font-style:italic;line-height:1.8;font-size:16px;margin-bottom:18px;" id="resultText"></p>
    <div style="display:flex;gap:10px;flex-wrap:wrap;">
      <button class="btn-primary btn-sm" id="saveResultBtn">❤️ Save</button>
      <button class="btn-outline btn-sm" id="copyResultBtn" style="color:var(--text);border-color:var(--border);">📋 Copy</button>
    </div>
  </div>

  <!-- Books -->
  <h2 class="section-title" id="booksHeading">📚 Old Testament</h2>
  <div class="books-grid" id="otBooks" style="margin-bottom:40px;"></div>

  <h2 class="section-title">📖 New Testament</h2>
  <div class="books-grid" id="ntBooks"></div>
</div>

<footer class="footer">
  <div class="footer-inner">
    <p class="footer-logo">📖 LivingBreadHub</p>
    <div class="footer-nav">
      <a href="index.html">Home</a><a href="bible.html">Bible</a>
      <a href="sermons.html">Sermons</a><a href="quiz.html">Quiz</a>
      <a href="devotions.html">Devotions</a><a href="profile.html">Profile</a>
    </div>
    <p class="footer-credit">Made with ❤️ for Bible readers everywhere</p>
    <p class="footer-copy">© 2026 LivingBreadHub.</p>
  </div>
</footer>

<script src="js/app.js"></script>
<script>
/* ===== Data ===== */
const categoryVerses = {
  faith: [
    { ref:"Hebrews 11:1",   text:"Now faith is confidence in what we hope for and assurance about what we do not see." },
    { ref:"Matthew 17:20",  text:"If you have faith as small as a mustard seed, you can move mountains." },
    { ref:"Romans 10:17",   text:"Faith comes from hearing the message, and the message is heard through the word about Christ." },
    { ref:"James 2:17",     text:"Faith by itself, if it is not accompanied by action, is dead." },
  ],
  hope: [
    { ref:"Romans 15:13",   text:"May the God of hope fill you with all joy and peace as you trust in him." },
    { ref:"Jeremiah 29:11", text:"For I know the plans I have for you — plans to prosper you and not to harm you, plans to give you hope and a future." },
    { ref:"Isaiah 40:31",   text:"Those who hope in the Lord will renew their strength. They will soar on wings like eagles." },
    { ref:"Psalm 31:24",    text:"Be strong and take heart, all you who hope in the Lord." },
  ],
  love: [
    { ref:"1 Corinthians 13:4", text:"Love is patient, love is kind. It does not envy, it does not boast, it is not proud." },
    { ref:"John 3:16",         text:"For God so loved the world that he gave his one and only Son." },
    { ref:"1 John 4:8",        text:"Whoever does not love does not know God, because God is love." },
    { ref:"Romans 8:38-39",    text:"Neither death nor life… nor anything else in all creation will be able to separate us from the love of God." },
  ],
  prayer: [
    { ref:"Philippians 4:6",  text:"Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God." },
    { ref:"Matthew 6:9-10",   text:"Our Father in heaven, hallowed be your name, your kingdom come, your will be done." },
    { ref:"1 Thessalonians 5:17", text:"Pray continually." },
    { ref:"James 5:16",       text:"The prayer of a righteous person is powerful and effective." },
  ],
  strength: [
    { ref:"Philippians 4:13", text:"I can do all this through him who gives me strength." },
    { ref:"Isaiah 41:10",     text:"Do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you." },
    { ref:"Psalm 46:1",       text:"God is our refuge and strength, an ever-present help in trouble." },
    { ref:"2 Corinthians 12:9", text:"My grace is sufficient for you, for my power is made perfect in weakness." },
  ],
  wisdom: [
    { ref:"Proverbs 3:5-6",   text:"Trust in the Lord with all your heart and lean not on your own understanding." },
    { ref:"James 1:5",        text:"If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault." },
    { ref:"Proverbs 4:7",     text:"The beginning of wisdom is this: Get wisdom, and whatever you get, get insight." },
    { ref:"Psalm 111:10",     text:"The fear of the Lord is the beginning of wisdom." },
  ],
};

const searchData = [
  { ref:"John 3:16",        text:"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." },
  { ref:"Romans 8:28",      text:"And we know that in all things God works for the good of those who love him." },
  { ref:"Proverbs 3:5",     text:"Trust in the Lord with all your heart and lean not on your own understanding." },
  { ref:"Philippians 4:13", text:"I can do all things through Christ who strengthens me." },
  { ref:"Isaiah 40:31",     text:"But those who hope in the Lord will renew their strength. They will soar on wings like eagles." },
  { ref:"Jeremiah 29:11",   text:"For I know the plans I have for you, declares the Lord." },
  { ref:"Psalm 23:1",       text:"The Lord is my shepherd, I lack nothing." },
  { ref:"Matthew 5:3",      text:"Blessed are the poor in spirit, for theirs is the kingdom of heaven." },
  { ref:"Genesis 1:1",      text:"In the beginning God created the heavens and the earth." },
  { ref:"John 1:1",         text:"In the beginning was the Word, and the Word was with God, and the Word was God." },
];

const otBooks = [
  { name:"Genesis",       chapters:50 }, { name:"Exodus",        chapters:40 },
  { name:"Leviticus",     chapters:27 }, { name:"Numbers",       chapters:36 },
  { name:"Deuteronomy",   chapters:34 }, { name:"Joshua",        chapters:24 },
  { name:"Judges",        chapters:21 }, { name:"Ruth",          chapters:4  },
  { name:"1 Samuel",      chapters:31 }, { name:"2 Samuel",      chapters:24 },
  { name:"1 Kings",       chapters:22 }, { name:"2 Kings",       chapters:25 },
  { name:"Psalms",        chapters:150}, { name:"Proverbs",      chapters:31 },
  { name:"Ecclesiastes",  chapters:12 }, { name:"Isaiah",        chapters:66 },
  { name:"Jeremiah",      chapters:52 }, { name:"Ezekiel",       chapters:48 },
  { name:"Daniel",        chapters:12 }, { name:"Jonah",         chapters:4  },
];

const ntBooks = [
  { name:"Matthew",        chapters:28 }, { name:"Mark",          chapters:16 },
  { name:"Luke",           chapters:24 }, { name:"John",          chapters:21 },
  { name:"Acts",           chapters:28 }, { name:"Romans",        chapters:16 },
  { name:"1 Corinthians",  chapters:16 }, { name:"2 Corinthians", chapters:13 },
  { name:"Galatians",      chapters:6  }, { name:"Ephesians",     chapters:6  },
  { name:"Philippians",    chapters:4  }, { name:"Colossians",    chapters:4  },
  { name:"1 Timothy",      chapters:6  }, { name:"Hebrews",       chapters:13 },
  { name:"James",          chapters:5  }, { name:"1 Peter",       chapters:5  },
  { name:"Revelation",     chapters:22 },
];

/* ===== Render books ===== */
function renderBooks(list, containerId, testament) {
  const el = document.getElementById(containerId);
  el.innerHTML = list.map(b => `
    <div class="book-card fade-in" onclick="openBook('${b.name}')">
      <div class="book-testament ${testament === 'OT' ? 'ot' : 'nt'}">${testament}</div>
      <div class="book-name">${b.name}</div>
      <div class="book-chap">${b.chapters} chapters</div>
    </div>`).join("");
}
renderBooks(otBooks, "otBooks", "OT");
renderBooks(ntBooks, "ntBooks", "NT");

/* ===== Open book (links to Bible Gateway) ===== */
function openBook(name) {
  const url = `https://www.biblegateway.com/passage/?search=${encodeURIComponent(name+"+1")}&version=NIV`;
  window.open(url, "_blank");
}

/* ===== Category tabs ===== */
let activeCat = "all";
document.getElementById("catTabs").addEventListener("click", e => {
  const btn = e.target.closest(".cat-tab");
  if (!btn) return;
  document.querySelectorAll(".cat-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeCat = btn.dataset.cat;
  renderCatVerses();
});

function renderCatVerses() {
  const el = document.getElementById("catVerses");
  if (activeCat === "all") { el.innerHTML = ""; return; }
  const verses = categoryVerses[activeCat] || [];
  el.innerHTML = verses.map(v => `
    <div class="verse-card fade-in">
      <p class="vc-text">"${v.text}"</p>
      <p class="vc-ref">${v.ref}</p>
      <div class="vc-actions">
        <button class="vc-btn" onclick="copyVerse('${v.ref}','${v.text.replace(/'/g,"\\'")}')">📋 Copy</button>
        <button class="vc-btn" onclick="saveVerse('${v.ref}','${v.text.replace(/'/g,"\\'")}')">❤️ Save</button>
      </div>
    </div>`).join("");
}

/* ===== Search ===== */
function doSearch() {
  const q = document.getElementById("bibleSearch").value.trim().toLowerCase();
  const box = document.getElementById("resultBox");
  if (!q) { box.classList.remove("visible"); return; }
  const found = searchData.find(v =>
    v.ref.toLowerCase().includes(q) || v.text.toLowerCase().includes(q)
  );
  if (found) {
    document.getElementById("resultRef").textContent = found.ref;
    document.getElementById("resultText").textContent = '"' + found.text + '"';
    document.getElementById("saveResultBtn").onclick = () => saveVerse(found.ref, found.text);
    document.getElementById("copyResultBtn").onclick = () => copyVerse(found.ref, found.text);
    box.classList.add("visible");
    box.scrollIntoView({ behavior:"smooth", block:"center" });
  } else {
    document.getElementById("resultRef").textContent = "Not found";
    document.getElementById("resultText").textContent = `No match for "${q}". Try "John 3:16", "faith", or "love".`;
    box.classList.add("visible");
  }
}

document.getElementById("searchBtn").addEventListener("click", doSearch);
document.getElementById("bibleSearch").addEventListener("keydown", e => {
  if (e.key === "Enter") doSearch();
});
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sermons – LivingBreadHub</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>

<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">📖 LivingBreadHub</a>
  <div class="nav-links" id="navLinks">
    <a href="index.html" class="nav-link">Home</a>
    <a href="bible.html" class="nav-link">Bible</a>
    <a href="sermons.html" class="nav-link active">Sermons</a>
    <a href="quiz.html" class="nav-link">Quiz</a>
    <a href="devotions.html" class="nav-link">Devotions</a>
    <a href="profile.html" class="nav-link">Profile</a>
  </div>
  <div class="nav-actions">
    <button class="theme-toggle" id="themeToggle">🌙</button>
    <button class="hamburger" id="hamburger">☰</button>
  </div>
</nav>

<section class="page-hero">
  <h1>🎙️ Sermon Library</h1>
  <p>Be inspired, edified, and transformed by God's word</p>
</section>

<div class="container section">
  <!-- Filters -->
  <div class="filter-row">
    <span class="filter-label">Filter:</span>
    <div class="cat-tabs" id="sermonFilter" style="margin:0;">
      <button class="cat-tab active" data-cat="all">All</button>
      <button class="cat-tab" data-cat="Faith">Faith</button>
      <button class="cat-tab" data-cat="Love">Love</button>
      <button class="cat-tab" data-cat="Hope">Hope</button>
      <button class="cat-tab" data-cat="Purpose">Purpose</button>
      <button class="cat-tab" data-cat="Grace">Grace</button>
      <button class="cat-tab" data-cat="Prayer">Prayer</button>
    </div>
  </div>

  <div class="sermon-grid" id="sermonGrid"></div>
</div>

<!-- Player Modal -->
<div class="player-modal" id="playerModal">
  <div class="player-inner">
    <button class="player-close" id="playerClose">✕</button>
    <div class="player-art" id="playerArt"></div>
    <h3 class="player-title" id="playerTitle"></h3>
    <p class="player-pastor" id="playerPastor"></p>
    <div class="player-track">
      <div class="player-fill" id="playerFill"></div>
    </div>
    <p style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-muted);margin-bottom:16px;">
      <span id="playerCurrent">15:45</span><span id="playerTotal">45:32</span>
    </p>
    <div class="player-controls">
      <button class="pc-btn" id="pcRewind">⏪</button>
      <button class="pc-btn main" id="pcPlay">▶</button>
      <button class="pc-btn" id="pcFwd">⏩</button>
    </div>
  </div>
</div>

<footer class="footer">
  <div class="footer-inner">
    <p class="footer-logo">📖 LivingBreadHub</p>
    <div class="footer-nav">
      <a href="index.html">Home</a><a href="bible.html">Bible</a>
      <a href="sermons.html">Sermons</a><a href="quiz.html">Quiz</a>
      <a href="devotions.html">Devotions</a><a href="profile.html">Profile</a>
    </div>
    <p class="footer-credit">Made with ❤️ for Bible readers everywhere</p>
    <p class="footer-copy">© 2026 LivingBreadHub.</p>
  </div>
</footer>

<script src="js/app.js"></script>
<script>
const sermons = [
  { id:1, title:"The Power of Belief",       pastor:"Pastor John Smith",      dur:"45:32", cat:"Faith",   grad:"#667eea,#764ba2", date:"Mar 15, 2026", verse:"Mark 9:23", emoji:"🙏" },
  { id:2, title:"God's Love Never Fails",    pastor:"Pastor Sarah Johnson",   dur:"52:15", cat:"Love",    grad:"#f093fb,#f5576c", date:"Mar 14, 2026", verse:"1 Cor 13:8", emoji:"❤️" },
  { id:3, title:"Walking in Purpose",        pastor:"Bishop Michael Brown",   dur:"38:10", cat:"Purpose", grad:"#4facfe,#00f2fe", date:"Mar 13, 2026", verse:"Jer 29:11", emoji:"🌟" },
  { id:4, title:"Finding Hope in Darkness",  pastor:"Reverend David Wilson",  dur:"44:20", cat:"Hope",    grad:"#43e97b,#38f9d7", date:"Mar 12, 2026", verse:"Ps 31:24", emoji:"🌅" },
  { id:5, title:"Amazing Grace, Everyday",   pastor:"Bishop Maria Garcia",    dur:"49:05", cat:"Grace",   grad:"#fa709a,#fee140", date:"Mar 11, 2026", verse:"Eph 2:8", emoji:"✨" },
  { id:6, title:"The Prayer That Changes All",pastor:"Pastor James Lee",      dur:"41:30", cat:"Prayer",  grad:"#a18cd1,#fbc2eb", date:"Mar 10, 2026", verse:"Phil 4:6", emoji:"🕊️" },
  { id:7, title:"Standing on God's Word",    pastor:"Evangelist Ruth Okonkwo",dur:"36:55", cat:"Faith",   grad:"#ffecd2,#fcb69f", date:"Mar 9, 2026",  verse:"Heb 4:12", emoji:"📖" },
  { id:8, title:"Love Your Neighbor",        pastor:"Pastor John Smith",      dur:"40:12", cat:"Love",    grad:"#ff9a9e,#fad0c4", date:"Mar 8, 2026",  verse:"Matt 22:39", emoji:"🤝" },
  { id:9, title:"Renewed Strength",          pastor:"Pastor Sarah Johnson",   dur:"33:47", cat:"Hope",    grad:"#a1c4fd,#c2e9fb", date:"Mar 7, 2026",  verse:"Isa 40:31", emoji:"💪" },
];

let activeFilter = "all";
let playing = false;
let playTimer = null;
let fillPct = 35;

function renderSermons() {
  const grid = document.getElementById("sermonGrid");
  const filtered = activeFilter === "all" ? sermons : sermons.filter(s => s.cat === activeFilter);
  grid.innerHTML = filtered.map(s => `
    <div class="sermon-card fade-in">
      <div class="sc-thumb" style="background:linear-gradient(135deg,#${s.grad})">
        <span style="font-size:50px;">${s.emoji}</span>
        <span class="sc-duration">${s.dur}</span>
      </div>
      <div class="sc-info">
        <span class="sc-cat">${s.cat}</span>
        <h3 class="sc-title">${s.title}</h3>
        <p class="sc-pastor">${s.pastor}</p>
        <p class="sc-meta">📅 ${s.date} · 📖 ${s.verse}</p>
      </div>
      <button class="sc-play" onclick="openPlayer(${s.id})">▶ Play Sermon</button>
    </div>`).join("");
}
renderSermons();

/* Filter tabs */
document.getElementById("sermonFilter").addEventListener("click", e => {
  const btn = e.target.closest(".cat-tab");
  if (!btn) return;
  document.querySelectorAll("#sermonFilter .cat-tab").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  activeFilter = btn.dataset.cat;
  renderSermons();
});

/* Player */
function openPlayer(id) {
  const s = sermons.find(x => x.id === id);
  if (!s) return;
  document.getElementById("playerArt").style.background = `linear-gradient(135deg,#${s.grad})`;
  document.getElementById("playerArt").innerHTML = `<span style="font-size:70px;">${s.emoji}</span>`;
  document.getElementById("playerTitle").textContent  = s.title;
  document.getElementById("playerPastor").textContent = s.pastor + " · " + s.date;
  document.getElementById("playerTotal").textContent  = s.dur;
  document.getElementById("playerFill").style.width   = "35%";
  document.getElementById("playerCurrent").textContent = "15:45";
  document.getElementById("pcPlay").textContent = "▶";
  playing = false;
  clearInterval(playTimer);
  fillPct = 35;
  document.getElementById("playerModal").classList.add("open");
}

document.getElementById("playerClose").addEventListener("click", () => {
  document.getElementById("playerModal").classList.remove("open");
  clearInterval(playTimer);
  playing = false;
});

document.getElementById("playerModal").addEventListener("click", e => {
  if (e.target === document.getElementById("playerModal")) {
    document.getElementById("playerModal").classList.remove("open");
    clearInterval(playTimer);
  }
});

document.getElementById("pcPlay").addEventListener("click", function() {
  playing = !playing;
  this.textContent = playing ? "⏸" : "▶";
  if (playing) {
    playTimer = setInterval(() => {
      fillPct = Math.min(fillPct + 0.5, 100);
      document.getElementById("playerFill").style.width = fillPct + "%";
      if (fillPct >= 100) {
        clearInterval(playTimer); playing = false;
        document.getElementById("pcPlay").textContent = "▶";
        showToast("Sermon complete! God bless you 🙏");
      }
    }, 300);
  } else {
    clearInterval(playTimer);
  }
});

document.getElementById("pcRewind").addEventListener("click", () => {
  fillPct = Math.max(0, fillPct - 10);
  document.getElementById("playerFill").style.width = fillPct + "%";
});
document.getElementById("pcFwd").addEventListener("click", () => {
  fillPct = Math.min(100, fillPct + 10);
  document.getElementById("playerFill").style.width = fillPct + "%";
});
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz – LivingBreadHub</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>

<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">📖 LivingBreadHub</a>
  <div class="nav-links" id="navLinks">
    <a href="index.html" class="nav-link">Home</a>
    <a href="bible.html" class="nav-link">Bible</a>
    <a href="sermons.html" class="nav-link">Sermons</a>
    <a href="quiz.html" class="nav-link active">Quiz</a>
    <a href="devotions.html" class="nav-link">Devotions</a>
    <a href="profile.html" class="nav-link">Profile</a>
  </div>
  <div class="nav-actions">
    <button class="theme-toggle" id="themeToggle">🌙</button>
    <button class="hamburger" id="hamburger">☰</button>
  </div>
</nav>

<section class="quiz-hero">
  <h1>❓ Bible Quiz</h1>
  <p>Test your knowledge of God's Word and grow stronger in faith</p>
</section>

<div class="container section">

  <!-- Category Selection -->
  <div id="categorySection">
    <h2 class="section-title" style="text-align:center;">Choose a Category</h2>
    <div class="quiz-categories" id="quizCategories"></div>
  </div>

  <!-- Score Summary (above quiz) -->
  <div class="card" style="display:flex;gap:20px;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:28px;" id="scoreSummary">
    <div style="text-align:center;">
      <div style="font-size:28px;font-weight:700;color:var(--gold);" id="totalScore">0</div>
      <div style="font-size:12px;color:var(--text-muted);">TOTAL SCORE</div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:28px;font-weight:700;color:#22c55e;" id="totalCorrect">0</div>
      <div style="font-size:12px;color:var(--text-muted);">CORRECT</div>
    </div>
    <div style="text-align:center;">
      <div style="font-size:28px;font-weight:700;color:#ef4444;" id="totalWrong">0</div>
      <div style="font-size:12px;color:var(--text-muted);">INCORRECT</div>
    </div>
    <button class="btn-primary" id="resetScoreBtn">Reset Score</button>
  </div>

  <!-- Quiz Board -->
  <div class="quiz-board" id="quizBoard" style="display:none;">
    <div class="quiz-prog-bar"><div class="quiz-prog-fill" id="quizFill"></div></div>
    <div class="quiz-meta">
      <span id="quizCounter">Question 1 of 5</span>
      <span id="quizCatLabel"></span>
    </div>
    <p class="quiz-q" id="quizQuestion"></p>
    <div class="quiz-options" id="quizOptions"></div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div style="display:flex;justify-content:flex-end;margin-top:22px;">
      <button class="btn-primary" id="nextBtn" style="display:none;">Next Question →</button>
    </div>
  </div>

  <!-- Score Card (end) -->
  <div class="score-card" id="scoreCard">
    <div class="score-circle" id="scoreCircle"></div>
    <h2 class="score-title" id="scoreTitle"></h2>
    <p class="score-msg" id="scoreMsg"></p>
    <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <button class="btn-primary" id="retryBtn">🔄 Try Again</button>
      <button class="btn-outline" id="diffCatBtn" style="color:#fff;">📂 New Category</button>
    </div>
  </div>

</div>

<footer class="footer">
  <div class="footer-inner">
    <p class="footer-logo">📖 LivingBreadHub</p>
    <div class="footer-nav">
      <a href="index.html">Home</a><a href="bible.html">Bible</a>
      <a href="sermons.html">Sermons</a><a href="quiz.html">Quiz</a>
      <a href="devotions.html">Devotions</a><a href="profile.html">Profile</a>
    </div>
    <p class="footer-credit">Made with ❤️ for Bible readers everywhere</p>
    <p class="footer-copy">© 2026 LivingBreadHub.</p>
  </div>
</footer>

<script src="js/app.js"></script>
<script>
/* ===== Quiz Data ===== */
const quizData = {
  General: {
    icon:"📖", count:5,
    questions:[
      { q:"Who was swallowed by a great fish?",       opts:["Elijah","Moses","Jonah","Daniel"],        ans:2, exp:"Jonah 1:17 — God provided a great fish to swallow Jonah." },
      { q:"How many days did creation take?",         opts:["5","6","7","10"],                          ans:1, exp:"Genesis 1 — God created for 6 days and rested on the 7th." },
      { q:"Who built the ark?",                       opts:["Abraham","Moses","Noah","Solomon"],        ans:2, exp:"Genesis 6:14 — God commanded Noah to build the ark." },
      { q:"Which river was Jesus baptized in?",       opts:["Nile","Euphrates","Jordan","Tigris"],      ans:2, exp:"Matthew 3:13 — Jesus was baptized in the Jordan River." },
      { q:"Who was the first king of Israel?",        opts:["David","Solomon","Saul","Samuel"],         ans:2, exp:"1 Samuel 10:1 — Saul was anointed the first king of Israel." },
    ]
  },
  Gospels: {
    icon:"✝️", count:5,
    questions:[
      { q:"In which city was Jesus born?",            opts:["Jerusalem","Nazareth","Bethlehem","Hebron"], ans:2, exp:"Luke 2:4-7 — Jesus was born in Bethlehem." },
      { q:"How many apostles did Jesus choose?",      opts:["7","10","12","14"],                          ans:2, exp:"Luke 6:13 — Jesus chose twelve apostles." },
      { q:"Who baptized Jesus?",                      opts:["Peter","John the Baptist","Paul","Elijah"],  ans:1, exp:"Matthew 3:13-15 — John the Baptist baptized Jesus." },
      { q:"What was Jesus's first miracle?",          opts:["Healing a blind man","Walking on water","Turning water to wine","Feeding 5000"], ans:2, exp:"John 2:1-11 — Jesus turned water to wine at Cana." },
      { q:"Who denied Jesus three times?",            opts:["Judas","Thomas","Peter","John"],             ans:2, exp:"Matthew 26:75 — Peter denied Jesus three times before the rooster crowed." },
    ]
  },
  OldTestament: {
    icon:"📜", count:5,
    questions:[
      { q:"What were the Ten Commandments written on?", opts:["Papyrus","Stone tablets","Wood","Gold"],  ans:1, exp:"Exodus 31:18 — God wrote on two tablets of stone." },
      { q:"Who killed Goliath?",                     opts:["Samson","Saul","Solomon","David"],           ans:3, exp:"1 Samuel 17:49-50 — David killed Goliath with a sling and stone." },
      { q:"How many plagues were sent to Egypt?",    opts:["7","8","10","12"],                           ans:2, exp:"Exodus 7–12 — God sent 10 plagues upon Egypt." },
      { q:"Who was the wisest king of Israel?",      opts:["Saul","David","Solomon","Rehoboam"],         ans:2, exp:"1 Kings 3:12 — God gave Solomon unparalleled wisdom." },
      { q:"Who interpreted Pharaoh's dreams?",       opts:["Moses","Daniel","Joseph","Elijah"],          ans:2, exp:"Genesis 41 — Joseph interpreted Pharaoh's seven years of dreams." },
    ]
  },
  Faith: {
    icon:"🙏", count:5,
    questions:[
      { q:"Faith is the substance of things ______.",  opts:["Seen","Hoped for","Known","Feared"],       ans:1, exp:"Hebrews 11:1 — Faith is the substance of things hoped for." },
      { q:"Without faith it is impossible to ______.", opts:["Sin","Pray","Please God","Love"],           ans:2, exp:"Hebrews 11:6 — Without faith it is impossible to please God." },
      { q:"Faith comes by ______.",                    opts:["Works","Sight","Hearing","Feeling"],        ans:2, exp:"Romans 10:17 — Faith comes by hearing the word of God." },
      { q:"Faith without ______ is dead.",             opts:["Prayer","Works","Hope","Love"],             ans:1, exp:"James 2:17 — Faith without works is dead." },
      { q:"Jesus said: 'If you have faith as small as a ______.'", opts:["Grain of wheat","Mustard seed","Pebble","Drop of water"], ans:1, exp:"Matthew 17:20 — A mustard seed of faith can move mountains." },
    ]
  },
};

/* ===== State ===== */
let currentCat  = null;
let currentQ    = 0;
let score       = 0;
let answered    = false;
let questions   = [];

const stats = getFromStorage("quizStats") || { correct: 0, wrong: 0, total: 0 };
renderStats();

/* ===== Render categories ===== */
const catEl = document.getElementById("quizCategories");
Object.entries(quizData).forEach(([cat, data]) => {
  catEl.innerHTML += `
    <div class="qcat-card" onclick="startQuiz('${cat}')">
      <span class="qcat-icon">${data.icon}</span>
      <div class="qcat-name">${cat}</div>
      <div class="qcat-count">${data.count} questions</div>
    </div>`;
});

/* ===== Start quiz ===== */
function startQuiz(cat) {
  currentCat = cat;
  questions  = quizData[cat].questions;
  currentQ   = 0;
  score      = 0;
  answered   = false;

  document.getElementById("categorySection").style.display = "none";
  document.getElementById("scoreCard").classList.remove("show");
  document.getElementById("quizBoard").style.display = "block";
  document.getElementById("quizCatLabel").textContent = quizData[cat].icon + " " + cat;
  loadQuestion();
}

function loadQuestion() {
  const q = questions[currentQ];
  const total = questions.length;
  const pct   = ((currentQ) / total) * 100;

  document.getElementById("quizFill").style.width     = pct + "%";
  document.getElementById("quizCounter").textContent  = `Question ${currentQ + 1} of ${total}`;
  document.getElementById("quizQuestion").textContent = q.q;
  document.getElementById("quizFeedback").classList.remove("show","correct-fb","wrong-fb");
  document.getElementById("nextBtn").style.display = "none";
  answered = false;

  const letters = ["A","B","C","D"];
  document.getElementById("quizOptions").innerHTML = q.opts.map((opt, i) => `
    <button class="quiz-opt" onclick="answer(${i})" id="opt${i}">
      <span class="opt-letter">${letters[i]}</span> ${opt}
    </button>`).join("");
}

function answer(idx) {
  if (answered) return;
  answered = true;
  const q = questions[currentQ];
  const opts = document.querySelectorAll(".quiz-opt");
  const fb   = document.getElementById("quizFeedback");

  opts.forEach(o => o.disabled = true);

  if (idx === q.ans) {
    opts[idx].classList.add("correct");
    fb.className = "quiz-feedback show correct-fb";
    fb.innerHTML = "✅ Correct! " + q.exp;
    score++;
    stats.correct++;
  } else {
    opts[idx].classList.add("wrong");
    opts[q.ans].classList.add("correct");
    fb.className = "quiz-feedback show wrong-fb";
    fb.innerHTML = "❌ Incorrect. " + q.exp;
    stats.wrong++;
  }
  stats.total++;
  saveToStorage("quizStats", stats);
  renderStats();
  document.getElementById("nextBtn").style.display = "inline-flex";
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  document.getElementById("quizBoard").style.display = "none";
  const pct = Math.round((score / questions.length) * 100);
  const card = document.getElementById("scoreCard");
  document.getElementById("scoreCircle").textContent = pct + "%";
  document.getElementById("scoreTitle").textContent  =
    pct >= 80 ? "Excellent Work! 🏆" :
    pct >= 60 ? "Good Job! 🌟" : "Keep Studying! 📖";
  document.getElementById("scoreMsg").textContent    =
    `You got ${score} out of ${questions.length} correct in the ${currentCat} category.`;
  card.classList.add("show");
}

document.getElementById("retryBtn").addEventListener("click", () => startQuiz(currentCat));
document.getElementById("diffCatBtn").addEventListener("click", () => {
  document.getElementById("scoreCard").classList.remove("show");
  document.getElementById("categorySection").style.display = "block";
});
document.getElementById("resetScoreBtn").addEventListener("click", () => {
  stats.correct = 0; stats.wrong = 0; stats.total = 0;
  saveToStorage("quizStats", stats);
  renderStats();
  showToast("Score reset!");
});

function renderStats() {
  document.getElementById("totalScore").textContent   = stats.total;
  document.getElementById("totalCorrect").textContent = stats.correct;
  document.getElementById("totalWrong").textContent   = stats.wrong;
}
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Devotions – LivingBreadHub</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>

<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">📖 LivingBreadHub</a>
  <div class="nav-links" id="navLinks">
    <a href="index.html" class="nav-link">Home</a>
    <a href="bible.html" class="nav-link">Bible</a>
    <a href="sermons.html" class="nav-link">Sermons</a>
    <a href="quiz.html" class="nav-link">Quiz</a>
    <a href="devotions.html" class="nav-link active">Devotions</a>
    <a href="profile.html" class="nav-link">Profile</a>
  </div>
  <div class="nav-actions">
    <button class="theme-toggle" id="themeToggle">🌙</button>
    <button class="hamburger" id="hamburger">☰</button>
  </div>
</nav>

<section class="devot-hero">
  <h1>🌅 Daily Devotions</h1>
  <p>Nourish your soul with God's living word every day</p>
</section>

<!-- Devotion Modal -->
<div class="player-modal" id="devotModal">
  <div class="player-inner" style="max-width:600px;">
    <button class="player-close" id="devotClose">✕</button>
    <div class="devot-day" id="modalDay" style="font-size:12px;font-weight:700;letter-spacing:1px;color:var(--gold);margin-bottom:8px;text-transform:uppercase;"></div>
    <h2 class="player-title" style="font-family:'Playfair Display',serif;font-size:22px;line-height:1.4;margin-bottom:14px;" id="modalTitle"></h2>
    <p style="font-size:13px;font-weight:600;color:var(--gold);margin-bottom:16px;" id="modalVerse"></p>
    <p style="font-size:15px;line-height:1.8;color:var(--text-muted);margin-bottom:20px;" id="modalBody"></p>
    <p style="font-size:14px;font-style:italic;border-top:1px solid var(--border);padding-top:16px;color:var(--text);" id="modalPrayer"></p>
    <div style="display:flex;gap:10px;margin-top:16px;flex-wrap:wrap;">
      <button class="btn-primary" id="devotSaveBtn">❤️ Save Verse</button>
      <button class="btn-outline" id="devotShareBtn" style="color:var(--text);border-color:var(--border);">📤 Share</button>
    </div>
  </div>
</div>

<div class="container section">

  <!-- Today's Devotion (featured) -->
  <div class="devotion-card" style="margin-bottom:40px;">
    <div class="devotion-tag">TODAY · DAY 21</div>
    <h2 class="devotion-title">Walking in Faith, Not by Sight</h2>
    <p class="devotion-text">Every morning we have a choice — to walk by what we see, or to walk by what we believe. God's promises do not change with our circumstances. When the storms of life rise, the anchor of faith holds us firm. Let today be a reminder that your steps are ordered, your path is lit, and your God is near. Lean not on your own understanding, and He will direct your path.</p>
    <p style="color:var(--gold);font-size:13px;font-weight:600;margin-bottom:20px;">📖 2 Corinthians 5:7 · Proverbs 3:5-6</p>
    <button class="btn-primary" onclick="openDevot(0)">Read Full Devotion →</button>
  </div>

  <!-- Devotion grid -->
  <h2 class="section-title">📚 All Devotions</h2>
  <div class="devot-grid" id="devotGrid"></div>

  <!-- Quotes -->
  <h2 class="section-title" style="margin-top:48px;">💬 Inspirational Quotes</h2>
  <div class="quotes-grid" id="quotesGrid"></div>

  <!-- Prayer section -->
  <div class="prayer-devot" style="margin-top:48px;">
    <h2>🕊️ Daily Prayer Guide</h2>
    <p>Prayer is the breath of the believer. Begin your day with gratitude, intercede for others at noon, and close your evening with thanksgiving. God hears every word spoken in sincerity.</p>
    <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px;margin-bottom:20px;text-align:left;">
      <p style="font-weight:700;margin-bottom:10px;">🌅 Morning Prayer</p>
      <p style="opacity:0.85;font-size:14px;line-height:1.7;">"Lord, as I begin this day, let your light guide every step I take. Fill me with your Spirit, your wisdom, and your love. Let my life be a testimony of your goodness. Amen."</p>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px;margin-bottom:20px;text-align:left;">
      <p style="font-weight:700;margin-bottom:10px;">🌤️ Midday Prayer</p>
      <p style="opacity:0.85;font-size:14px;line-height:1.7;">"Father, in the middle of this day's work, I pause to remember your presence. Renew my strength, focus my mind, and let my work be an offering unto You. Amen."</p>
    </div>
    <div style="background:rgba(255,255,255,0.1);border-radius:12px;padding:20px;text-align:left;">
      <p style="font-weight:700;margin-bottom:10px;">🌙 Evening Prayer</p>
      <p style="opacity:0.85;font-size:14px;line-height:1.7;">"Lord, thank you for this day. Forgive where I have fallen short. Guard my sleep and let your angels encamp around me. I surrender tomorrow into your hands. Amen."</p>
    </div>
    <button class="btn-primary" onclick="showToast('Praying with you 🙏')">🙏 Join in Prayer</button>
  </div>

</div>

<footer class="footer">
  <div class="footer-inner">
    <p class="footer-logo">📖 LivingBreadHub</p>
    <div class="footer-nav">
      <a href="index.html">Home</a><a href="bible.html">Bible</a>
      <a href="sermons.html">Sermons</a><a href="quiz.html">Quiz</a>
      <a href="devotions.html">Devotions</a><a href="profile.html">Profile</a>
    </div>
    <p class="footer-credit">Made with ❤️ for Bible readers everywhere</p>
    <p class="footer-copy">© 2026 LivingBreadHub.</p>
  </div>
</footer>

<script src="js/app.js"></script>
<script>
const devotions = [
  {
    day:"Day 21", title:"Walking in Faith, Not by Sight",
    verse:"2 Corinthians 5:7", emoji:"🌅", bg:"#667eea,#764ba2",
    excerpt:"Every morning we choose to walk by faith, not by fear...",
    body:"Every morning we have a choice — to walk by what we see, or to walk by what we believe. God's promises do not change with our circumstances. When the storms of life rise, the anchor of faith holds us firm. Let today be a reminder that your steps are ordered, your path is lit, and your God is near. Lean not on your own understanding, and He will direct your path. The journey of faith is not always easy, but God promises to be with us every step of the way.",
    prayer:"Lord, today I choose to trust you even when I cannot see. Let my faith be stronger than my fears, and my hope greater than my doubts. Amen."
  },
  {
    day:"Day 20", title:"The God Who Provides",
    verse:"Philippians 4:19", emoji:"🙏", bg:"#43e97b,#38f9d7",
    excerpt:"He who fed five thousand will never leave you wanting...",
    body:"Jehovah Jireh — the Lord our Provider. This name of God was first revealed to Abraham on Mount Moriah, when God provided a ram in the thicket. Today, God still provides in ways we cannot predict or plan. He sees your lack, He knows your need, and He has already set your provision in motion. Cast all your anxieties on Him, for He cares for you deeply.",
    prayer:"Father, you are my provider. I release every financial, emotional, and spiritual need into your hands. Supply all my needs according to your riches in glory. Amen."
  },
  {
    day:"Day 19", title:"Perfect Peace in Troubled Times",
    verse:"Isaiah 26:3", emoji:"☮️", bg:"#4facfe,#00f2fe",
    excerpt:"Peace that surpasses all understanding is yours today...",
    body:"In a world filled with noise, conflict, and uncertainty, God offers something the world cannot give — perfect peace. This is not the absence of trouble, but a supernatural calm in the middle of the storm. When your mind is stayed on God, He keeps you in perfect peace. It is a choice to fix your eyes on the eternal rather than the temporary.",
    prayer:"Lord, quiet my anxious heart. Replace worry with worship, and fear with faith. Let your peace, which passes all understanding, guard my heart and mind. Amen."
  },
  {
    day:"Day 18", title:"Renewed Every Morning",
    verse:"Lamentations 3:22-23", emoji:"🌄", bg:"#fa709a,#fee140",
    excerpt:"His mercies are new every morning — start fresh today...",
    body:"No matter what happened yesterday — the failures, the mistakes, the missed opportunities — today is a brand new page. God's mercies are not rationed. They are renewed every single morning, as sure as the sunrise. You do not have to carry yesterday's burden into today. His compassions never fail. Great is His faithfulness to you.",
    prayer:"Thank you, Father, that your mercies are new today. I lay down yesterday's burdens and receive your fresh grace for this moment. Help me to start again with renewed hope. Amen."
  },
  {
    day:"Day 17", title:"The Armor of God",
    verse:"Ephesians 6:11", emoji:"⚔️", bg:"#a18cd1,#fbc2eb",
    excerpt:"Stand firm with the full armor of God — you are equipped...",
    body:"The Christian life is not passive — it is a spiritual battle. God has not left us defenseless. He has given us the full armor: the belt of truth, the breastplate of righteousness, shoes of peace, the shield of faith, the helmet of salvation, and the sword of the Spirit. Each piece is essential. Each piece is a promise. Suit up today and stand firm.",
    prayer:"Lord, I put on your full armor today. Let truth guard my words, righteousness protect my heart, and faith shield me from every fiery dart of the enemy. Amen."
  },
  {
    day:"Day 16", title:"Love That Never Gives Up",
    verse:"1 Corinthians 13:7", emoji:"❤️", bg:"#ff9a9e,#fad0c4",
    excerpt:"God's love bears all things, hopes all things, endures all things...",
    body:"The love of God is not conditional. It does not waver based on your performance. It does not diminish when you fail. It does not abandon you in your weakness. This love bears all things, believes all things, hopes all things, endures all things. And God calls us to love one another with this same extravagant, persistent, self-giving love.",
    prayer:"Lord, help me to love others the way you love me — without conditions, without limits, and without giving up. Pour your love through me to everyone I meet today. Amen."
  },
];

const quotes = [
  { text:"God never said the journey would be easy, but He did say the arrival would be worthwhile.", author:"Max Lucado" },
  { text:"Prayer does not change God, but it changes him who prays.", author:"Søren Kierkegaard" },
  { text:"Faith is taking the first step even when you don't see the whole staircase.", author:"Martin Luther King Jr." },
  { text:"God's work done in God's way will never lack God's supply.", author:"Hudson Taylor" },
  { text:"We may speak of the love of God, but until we meet it personally, it remains a doctrine.", author:"Corrie ten Boom" },
  { text:"The Christian life is not a constant high. I have my moments of deep discouragement. I have to go to God in prayer with tears in my eyes.", author:"Billy Graham" },
];

/* Render devotions */
const grid = document.getElementById("devotGrid");
devotions.forEach((d, i) => {
  grid.innerHTML += `
    <div class="devot-card fade-in">
      <div class="devot-banner" style="background:linear-gradient(135deg,#${d.bg})">
        <span>${d.emoji}</span>
      </div>
      <div class="devot-body">
        <div class="devot-day">${d.day}</div>
        <h3 class="devot-title">${d.title}</h3>
        <p class="devot-excerpt">${d.excerpt}</p>
        <button class="btn-primary btn-sm" onclick="openDevot(${i})">Read More →</button>
      </div>
    </div>`;
});

/* Render quotes */
const qGrid = document.getElementById("quotesGrid");
quotes.forEach(q => {
  qGrid.innerHTML += `
    <div class="quote-card fade-in">
      <span class="quote-mark">"</span>
      <p class="quote-text">${q.text}</p>
      <p class="quote-author">— ${q.author}</p>
    </div>`;
});

/* Modal */
function openDevot(i) {
  const d = devotions[i];
  document.getElementById("modalDay").textContent   = d.day;
  document.getElementById("modalTitle").textContent = d.title;
  document.getElementById("modalVerse").textContent = "📖 " + d.verse;
  document.getElementById("modalBody").textContent  = d.body;
  document.getElementById("modalPrayer").textContent = "🙏 " + d.prayer;
  document.getElementById("devotSaveBtn").onclick = () => {
    saveVerse(d.verse, d.excerpt);
    showToast("Devotion verse saved! ❤️");
  };
  document.getElementById("devotShareBtn").onclick = () => {
    const text = `"${d.title}" — ${d.verse}\n\n${d.excerpt}\n\nFrom LivingBreadHub`;
    if (navigator.share) navigator.share({ title: d.title, text });
    else navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard!"));
  };
  document.getElementById("devotModal").classList.add("open");
}

document.getElementById("devotClose").addEventListener("click", () =>
  document.getElementById("devotModal").classList.remove("open"));
document.getElementById("devotModal").addEventListener("click", e => {
  if (e.target === document.getElementById("devotModal"))
    document.getElementById("devotModal").classList.remove("open");
});
</script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profile – LivingBreadHub</title>
  <link rel="stylesheet" href="css/styles.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body>

<nav class="navbar" id="navbar">
  <a href="index.html" class="nav-logo">📖 LivingBreadHub</a>
  <div class="nav-links" id="navLinks">
    <a href="index.html" class="nav-link">Home</a>
    <a href="bible.html" class="nav-link">Bible</a>
    <a href="sermons.html" class="nav-link">Sermons</a>
    <a href="quiz.html" class="nav-link">Quiz</a>
    <a href="devotions.html" class="nav-link">Devotions</a>
    <a href="profile.html" class="nav-link active">Profile</a>
  </div>
  <div class="nav-actions">
    <button class="theme-toggle" id="themeToggle">🌙</button>
    <button class="hamburger" id="hamburger">☰</button>
  </div>
</nav>

<!-- Hero -->
<section class="profile-hero">
  <div class="profile-avatar" id="profileAvatar">😊</div>
  <h1 class="profile-name" id="profileName">Bible Lover</h1>
  <p class="profile-since">Member since March 2026 · LivingBreadHub</p>
</section>

<!-- Content -->
<div class="profile-content">

  <!-- Edit name -->
  <div class="profile-card" style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
    <input id="nameInput" type="text" placeholder="Change your name…" style="flex:1;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-size:14px;background:var(--bg);color:var(--text);font-family:inherit;outline:none;min-width:140px;" />
    <button class="btn-primary btn-sm" id="saveNameBtn">Save</button>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button style="font-size:24px;background:none;border:2px solid var(--border);border-radius:50%;width:42px;height:42px;cursor:pointer;" onclick="setAvatar('😊')">😊</button>
      <button style="font-size:24px;background:none;border:2px solid var(--border);border-radius:50%;width:42px;height:42px;cursor:pointer;" onclick="setAvatar('🧑‍💼')">🧑‍💼</button>
      <button style="font-size:24px;background:none;border:2px solid var(--border);border-radius:50%;width:42px;height:42px;cursor:pointer;" onclick="setAvatar('🙋‍♀️')">🙋‍♀️</button>
      <button style="font-size:24px;background:none;border:2px solid var(--border);border-radius:50%;width:42px;height:42px;cursor:pointer;" onclick="setAvatar('👦')">👦</button>
    </div>
  </div>

  <!-- Stats -->
  <div class="stats-grid" id="statsGrid">
    <div class="stat-card"><div class="stat-num" id="statStreak">7</div><div class="stat-lbl">DAY STREAK</div></div>
    <div class="stat-card"><div class="stat-num" id="statVerses">0</div><div class="stat-lbl">SAVED VERSES</div></div>
    <div class="stat-card"><div class="stat-num" id="statQuiz">0</div><div class="stat-lbl">QUIZ SCORE</div></div>
  </div>

  <!-- Achievements -->
  <div class="profile-card">
    <h3>🏆 Achievements</h3>
    <div class="badges-grid" id="badgesGrid">
      <div class="badge-card unlocked"><span class="badge-icon">📖</span><div class="badge-name">First Read</div></div>
      <div class="badge-card unlocked"><span class="badge-icon">🔥</span><div class="badge-name">7-Day Streak</div></div>
      <div class="badge-card unlocked"><span class="badge-icon">🙏</span><div class="badge-name">First Prayer</div></div>
      <div class="badge-card" id="badge10streak"><span class="badge-icon">⚡</span><div class="badge-name">10-Day Streak</div></div>
      <div class="badge-card" id="badgeQuiz"><span class="badge-icon">🎯</span><div class="badge-name">Quiz Master</div></div>
      <div class="badge-card" id="badgeSaved"><span class="badge-icon">❤️</span><div class="badge-name">5 Saves</div></div>
      <div class="badge-card"><span class="badge-icon">🌟</span><div class="badge-name">30-Day Streak</div></div>
      <div class="badge-card"><span class="badge-icon">📚</span><div class="badge-name">Bible Scholar</div></div>
      <div class="badge-card"><span class="badge-icon">✝️</span><div class="badge-name">Faithful One</div></div>
    </div>
  </div>

  <!-- Reading Goals -->
  <div class="profile-card">
    <h3 style="margin-bottom:20px;">📊 Reading Goals</h3>
    <div class="goals-list" id="goalsList">
      <div class="goal-row">
        <div class="goal-top"><span>This Week</span><span id="weekGoal">13 / 20 chapters</span></div>
        <div class="goal-bar"><div class="goal-fill" id="weekFill" style="width:65%;"></div></div>
      </div>
      <div class="goal-row">
        <div class="goal-top"><span>This Month</span><span id="monthGoal">42 / 100 chapters</span></div>
        <div class="goal-bar"><div class="goal-fill" id="monthFill" style="width:42%;"></div></div>
      </div>
      <div class="goal-row">
        <div class="goal-top"><span>This Year</span><span id="yearGoal">210 / 1000 chapters</span></div>
        <div class="goal-bar"><div class="goal-fill" id="yearFill" style="width:21%;"></div></div>
      </div>
    </div>
    <div style="display:flex;gap:12px;margin-top:18px;flex-wrap:wrap;">
      <button class="btn-primary btn-sm" id="addChapterBtn">+ Log Chapter Read</button>
    </div>
  </div>

  <!-- Saved Verses -->
  <div class="profile-card">
    <h3 style="margin-bottom:16px;">❤️ Saved Verses</h3>
    <div class="saved-list" id="savedList"></div>
    <p id="noSaved" style="color:var(--text-muted);font-size:13px;text-align:center;padding:10px 0;">
      No saved verses yet. Explore the <a href="bible.html" style="color:var(--gold);">Bible page</a> to save some!
    </p>
    <button class="btn-outline btn-sm" id="clearSavedBtn" style="color:var(--text);border-color:var(--border);margin-top:12px;display:none;">🗑️ Clear All Saved</button>
  </div>

  <!-- Reset All -->
  <div class="profile-card" style="text-align:center;">
    <p style="font-size:13px;color:var(--text-muted);margin-bottom:14px;">Clear all local data and reset your progress.</p>
    <button class="btn-outline btn-sm" id="resetAllBtn" style="color:#ef4444;border-color:#ef4444;">⚠️ Reset All Data</button>
  </div>

</div><!-- end profile-content -->

<div style="height:40px;"></div>

<footer class="footer" style="margin-top:30px;">
  <div class="footer-inner">
    <p class="footer-logo">📖 LivingBreadHub</p>
    <div class="footer-nav">
      <a href="index.html">Home</a><a href="bible.html">Bible</a>
      <a href="sermons.html">Sermons</a><a href="quiz.html">Quiz</a>
      <a href="devotions.html">Devotions</a><a href="profile.html">Profile</a>
    </div>
    <p class="footer-credit">Made with ❤️ for Bible readers everywhere</p>
    <p class="footer-copy">© 2026 LivingBreadHub.</p>
  </div>
</footer>

<script src="js/app.js"></script>
<script>
/* ===== Load stored data ===== */
let profileName   = getFromStorage("profileName")   || "Bible Lover";
let profileAvatar = getFromStorage("profileAvatar") || "😊";
let chapters      = getFromStorage("chapters")       || { week:13, month:42, year:210 };
const quizStats   = getFromStorage("quizStats")      || { total:0, correct:0 };
const savedVerses = getFromStorage("savedVerses")    || [];

document.getElementById("profileName").textContent   = profileName;
document.getElementById("profileAvatar").textContent = profileAvatar;
document.getElementById("nameInput").value           = profileName;

/* Stats */
document.getElementById("statVerses").textContent = savedVerses.length;
document.getElementById("statQuiz").textContent   = quizStats.correct;

/* Badges based on data */
if (savedVerses.length >= 5) document.getElementById("badgeSaved").classList.add("unlocked");
if (quizStats.correct >= 10) document.getElementById("badgeQuiz").classList.add("unlocked");

/* ===== Save name ===== */
document.getElementById("saveNameBtn").addEventListener("click", () => {
  const val = document.getElementById("nameInput").value.trim();
  if (!val) return showToast("Please enter a name.");
  profileName = val;
  saveToStorage("profileName", val);
  document.getElementById("profileName").textContent = val;
  showToast("Name saved! ✅");
});

function setAvatar(emoji) {
  profileAvatar = emoji;
  saveToStorage("profileAvatar", emoji);
  document.getElementById("profileAvatar").textContent = emoji;
}

/* ===== Saved Verses ===== */
function renderSaved() {
  const list  = document.getElementById("savedList");
  const none  = document.getElementById("noSaved");
  const clear = document.getElementById("clearSavedBtn");
  const verses = getFromStorage("savedVerses") || [];
  document.getElementById("statVerses").textContent = verses.length;

  if (!verses.length) {
    list.innerHTML = ""; none.style.display = "block"; clear.style.display = "none"; return;
  }
  none.style.display  = "none";
  clear.style.display = "inline-flex";
  list.innerHTML = verses.map((v, i) => `
    <div class="saved-verse">
      <div>
        <div class="sv-ref">${v.ref}</div>
        <div style="font-size:13px;font-style:italic;margin-top:4px;color:var(--text);">"${v.text}"</div>
      </div>
      <button class="sv-del" onclick="deleteVerse(${i})">🗑</button>
    </div>`).join("");
}
renderSaved();

function deleteVerse(i) {
  const verses = getFromStorage("savedVerses") || [];
  verses.splice(i, 1);
  saveToStorage("savedVerses", verses);
  renderSaved();
  showToast("Verse removed.");
}

document.getElementById("clearSavedBtn").addEventListener("click", () => {
  if (!confirm("Clear all saved verses?")) return;
  saveToStorage("savedVerses", []);
  renderSaved();
  showToast("All verses cleared.");
});

/* ===== Chapter logging ===== */
function updateGoals() {
  document.getElementById("weekGoal").textContent  = `${chapters.week} / 20 chapters`;
  document.getElementById("monthGoal").textContent = `${chapters.month} / 100 chapters`;
  document.getElementById("yearGoal").textContent  = `${chapters.year} / 1000 chapters`;
  document.getElementById("weekFill").style.width  = Math.min((chapters.week/20)*100,100) + "%";
  document.getElementById("monthFill").style.width = Math.min((chapters.month/100)*100,100) + "%";
  document.getElementById("yearFill").style.width  = Math.min((chapters.year/1000)*100,100) + "%";
}
updateGoals();

document.getElementById("addChapterBtn").addEventListener("click", () => {
  chapters.week++;
  chapters.month++;
  chapters.year++;
  saveToStorage("chapters", chapters);
  updateGoals();
  showToast("Chapter logged! Keep going 📖");
});

/* ===== Reset all ===== */
document.getElementById("resetAllBtn").addEventListener("click", () => {
  if (!confirm("This will delete ALL your data. Are you sure?")) return;
  ["savedVerses","quizStats","prayers","profileName","profileAvatar","chapters","lastRead","lbh-theme"]
    .forEach(k => localStorage.removeItem("lbh-" + k.replace("lbh-","")));
  localStorage.removeItem("lbh-theme");
  showToast("All data reset. Refreshing…");
  setTimeout(() => location.reload(), 1500);
});
</script>
</body>
</html>
LivingBreadHub/
├── index.html          ← Home page
├── bible.html          ← Bible library & search
├── sermons.html        ← Sermon player
├── quiz.html           ← Interactive Bible quiz
├── devotions.html      ← Daily devotions & prayer
├── profile.html        ← User profile & stats
├── css/
│   └── styles.css      ← All shared styles
├── js/
│   └── app.js          ← Shared utilities (theme, toast, storage)
└── assets/
    └── images/         ← Place your custom images here
    git clone https://github.com/YOUR-USERNAME/LivingBreadHub.git
# Copy all project files into the folder
cd LivingBreadHub
git add .
git commit -m "Initial upload of LivingBreadHub"
git push origin main<blockquote class="hero-verse" id="votd">
  "YOUR VERSE HERE"
</blockquote>
<p class="hero-ref" id="votd-ref">— REFERENCE HERE</p>
{ q:"Your question here?",
  opts:["Option A","Option B","Option C","Option D"],
  ans: 1,   // ← 0-based index of correct answer
  exp:"Explanation here — verse reference." },
  {
  day:"Day 22", title:"Your Title",
  verse:"Reference", emoji:"🌟", bg:"#ff9a9e,#fad0c4",
  excerpt:"Short preview text...",
  body:"Full devotion body text goes here...",
  prayer:"Your closing prayer text. Amen."
},
:root {
  --primary:  #1a2844;   /* Dark navy — navbar, hero backgrounds */
  --gold:     #d4af37;   /* Gold accents — active items, highlights */
  --bg:       #f7f8fc;   /* Page background */
  --card:     #ffffff;   /* Card backgrounds */
}
/* In sermons.html sermon card: */
.sc-thumb { background: url('../assets/images/your-image.jpg'); }
git add .
git commit -m "Update sermon list and verse of the day"
git push origin main
