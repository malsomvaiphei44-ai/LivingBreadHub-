# 📖 LivingBreadHub - Modern Bible App

A beautiful, responsive mobile-first Bible reading app built with modern web technologies. LivingBreadHub combines spiritual content with engaging user experience features like streaks, goals, and achievements.

## ✨ Features

### Core Features
- 📖 **Verse of the Day** - Daily inspirational verses with sharing capabilities
- 🎙️ **Featured Sermons** - Listen to inspiring sermons from various pastors
- ✅ **Reading Goals** - Track your weekly and monthly reading progress
- 🔥 **Streak Tracker** - Maintain your daily reading streak
- 🏆 **Achievement Badges** - Unlock badges as you progress
- ❓ **Bible Quiz** - Test your Bible knowledge
- 🙏 **Devotions** - Daily devotional content
- 📊 **Reading Stats** - Monitor your reading progress

### User Experience
- 🌙 **Dark Mode** - Easy on the eyes with automatic theme persistence
- 📱 **Fully Responsive** - Perfect experience on mobile, tablet, and desktop
- ⚡ **Smooth Animations** - Polished transitions and interactions
- ⏰ **Time-based Greetings** - Personalized greetings (Morning/Afternoon/Evening)
- 💾 **Local Storage** - Theme preferences saved automatically

## 📂 Project Structure

```
LivingBreadHub/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── app.js          # JavaScript functionality
├── README.md           # This file
└── .gitignore          # Git ignore configuration
```

## 🚀 Getting Started

### Prerequisites
No special requirements! Just a modern web browser.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/malsomvaiphei44-ai/LivingBreadHub-.git
   cd LivingBreadHub
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js http-server
   npx http-server
   ```

3. **Access the app**
   - Open `http://localhost:8000` in your browser

## 🎨 Customization

### Change Colors
Edit the CSS variables in `css/styles.css`:
- Primary color: `#1a2844` (dark blue)
- Accent color: `#d4af37` (gold)
- Update gradient backgrounds as needed

### Add New Verses
Edit the "Trending This Week" section in `index.html`:
```html
<div class="verse-item">
    <div class="verse-item-text">"Your verse text here..."</div>
    <div class="verse-item-ref">Book Chapter:Verse</div>
</div>
```

### Add New Sermons
Add new sermon cards in the "Featured Sermons" section:
```html
<div class="sermon-card">
    <div class="sermon-image" style="background: linear-gradient(135deg, #color1 0%, #color2 100%);">
        <button class="play-btn">▶️</button>
    </div>
    <div class="sermon-info">
        <span class="sermon-category">Category</span>
        <h3 class="sermon-title">Sermon Title</h3>
        <p class="sermon-speaker">Pastor Name</p>
        <div class="sermon-meta">Duration • Date</div>
    </div>
</div>
```

## 🔧 Features You Can Add

### Backend Integration
- [ ] Connect to Bible API (e.g., Bible.com API, ESV API)
- [ ] User authentication system
- [ ] Save bookmarks and favorites to database
- [ ] Sync reading progress across devices

### Frontend Enhancements
- [ ] Full Bible search functionality
- [ ] Multiple Bible versions/translations
- [ ] Note-taking capability
- [ ] Sharing to social media
- [ ] Offline mode with cached content

### Gamification
- [ ] Advanced streak system
- [ ] Leaderboards
- [ ] Social features (share progress, friend challenges)
- [ ] More unlockable badges

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🏃 Performance

- Lightweight (~50KB total for HTML/CSS/JS)
- No external dependencies
- Instant load time
- Smooth 60 FPS animations
- Optimized for mobile devices

## 🌐 Deployment

### Deploy to GitHub Pages

1. Go to your repo → Settings → Pages
2. Select `main` branch as source
3. Save
4. Your site will be available at: `https://malsomvaiphei44-ai.github.io/LivingBreadHub-/`

### Deploy to Other Platforms

**Netlify:**
- Connect your GitHub repo to Netlify
- Automatic deployments on every push

**Vercel:**
- Import from GitHub
- One-click deployment

**Traditional Hosting:**
- Upload files via FTP
- Works on any web server

## 📖 API Integration Examples

### Example: Bible.com API
```javascript
// Fetch verse of the day
fetch('https://api.bible.com/v1/verses/latest?translation=eng-ESV')
    .then(response => response.json())
    .then(data => {
        // Update verse display
        document.querySelector('.verse-text').textContent = data.text;
        document.querySelector('.verse-reference').textContent = data.reference;
    });
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Beautiful design inspired by modern mobile apps
- Responsive design principles from CSS Grid and Flexbox
- All Bible verses are from the Bible (public domain or licensed texts)

## 📧 Contact

- GitHub: [@malsomvaiphei44-ai](https://github.com/malsomvaiphei44-ai)
- Issues: [GitHub Issues](https://github.com/malsomvaiphei44-ai/LivingBreadHub-/issues)

## 🗺️ Roadmap

- **v1.1** - Bible API integration
- **v1.2** - User authentication
- **v1.3** - Offline functionality
- **v2.0** - Native mobile apps (React Native)

---

**Made with ❤️ for Bible readers everywhere**
