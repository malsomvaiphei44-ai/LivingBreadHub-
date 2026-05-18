// ==================== GREETING FUNCTION ====================
function updateGreeting() {
    const hour = new Date().getHours();
    const greeting = document.getElementById('greeting');
    
    if (hour < 12) {
        greeting.textContent = '☀️ Good Morning, Friend';
    } else if (hour < 18) {
        greeting.textContent = '🌤️ Good Afternoon, Friend';
    } else {
        greeting.textContent = '🌙 Good Evening, Friend';
    }
}

// ==================== DARK MODE TOGGLE ====================
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// ==================== APPLY SAVED THEME ====================
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeToggle').textContent = '☀️';
    }
    updateGreeting();
});

// ==================== NAVIGATION HANDLING ====================
function setActive(event) {
    event.preventDefault();
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    event.target.closest('.nav-item').classList.add('active');
}

// ==================== ACTION BUTTONS ====================
function shareVerse() {
    const verseText = "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.";
    const verseRef = "John 3:16";
    
    if (navigator.share) {
        navigator.share({
            title: 'Verse of the Day',
            text: verseText + ' - ' + verseRef,
            url: window.location.href
        });
    } else {
        alert('Share: ' + verseText + '\n\n' + verseRef);
    }
}

function bookmarkVerse(e) {
    const btn = e.target;
    btn.textContent = '✅ Saved!';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = '❤️ Save';
        btn.style.background = 'rgba(255, 255, 255, 0.1)';
    }, 2000);
}

function readFull() {
    alert('Opening full Bible passage...');
}

function goToSection(section) {
    alert('Navigating to ' + section + ' section...');
}
