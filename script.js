/* =============================================
   WEDDING INVITATION — script.js
   Ильяс & Аруна · 11 тамыз 2026
   Languages: KZ (default) / RU / EN
   ============================================= */

// =========================================
// TRANSLATIONS
// =========================================
const translations = {
  kz: {
    'hero-pre':              'Құрметті қонақтар!<br/>СІЗ(ДЕР)ДІ БАЛАЛАРЫМЫЗ',
    'hero-post':             'ҮЙЛЕНУ ТОЙЫНА АРНАЛҒАН САЛТАНАТТЫ АҚ ДАСТАРХАНЫМЫЗДЫҢ<br/>ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА ШАҚЫРАМЫЗ!',
    'hero-date':             '11 тамыз 2026',
    'hero-time':             '18:00-де',
    'countdown-label':       'Тойға дейін қалды',
    'days-label':            'күн',
    'hours-label':           'сағат',
    'minutes-label':         'минут',
    'seconds-label':         'секунд',
    'details-title':         'Той мәліметтері',
    'detail-time-title':     'Уақыт',
    'detail-time-val':       '11 тамыз 2026<br />Басталуы 18:00-де',
    'detail-venue-title':    'Орын',
    'detail-venue-val':      'Арай Банкетный зал<br /><a href="https://go.2gis.com/hAiEa" target="_blank">Жетісу саябағы, Сарайшық көшесі, 13</a>',
    'quote-text':            'Екі жүрек, бір тағдыр.<br />Бір жол, бір махаббат.',
    'rsvp-title':            'Қатысуды растау',
    'rsvp-subtitle':         '<strong>1 тамызға дейін</strong> хабарлаңыз',
    'rsvp-name-label':       'Сіздің атыңыз',
    'rsvp-name-placeholder': 'Атыңызды енгізіңіз',
    'rsvp-attendance-label': 'Келесіз бе?',
    'rsvp-yes':              '🥂 Иә, келемін!',
    'rsvp-no':               '💌 Өкінішке орай, келе алмаймын',
    'rsvp-guests-label':     'Қонақтар саны (сіз қосылғанда)',
    'rsvp-message-label':    'Жас жұбайларға тілектер (қалауы бойынша)',
    'rsvp-message-placeholder': 'Жылы сөздеріңізді жазыңыз...',
    'rsvp-submit':           'Жіберу',
    'rsvp-success':          'Рахмет! Жауабыңызды алдық 🤍',
    'rsvp-success-sub':      'Мерекемізде сізді асыға күтеміз.',
    'scroll-hint':           'төмен',
    'footer-note':           'Сізді сүйіспеншілікпен күтеміз ✦',
    'guest-1':               '1 адам',
    'guest-2':               '2 адам',
    'guest-3':               '3 адам',
    'guest-4':               '4 адам',
    // Attendance values sent to Formspree
    'attendance-yes':        'Иә, келемін!',
    'attendance-no':         'Өкінішке орай, келе алмаймын',
  },
  ru: {
    'hero-pre':              'Уважаемые гости!<br/>Имеем честь пригласить вас на торжество, посвященное бракосочетанию наших детей —',
    'hero-post':             'Разделите с нами этот светлый и праздничный день, став почетными гостями за нашим праздничным дастарханом.',
    'hero-date':             '11 августа 2026',
    'hero-time':             'в 18:00',
    'countdown-label':       'До свадьбы осталось',
    'days-label':            'дней',
    'hours-label':           'часов',
    'minutes-label':         'минут',
    'seconds-label':         'секунд',
    'details-title':         'Детали торжества',
    'detail-time-title':     'Время',
    'detail-time-val':       '11 августа 2026<br />Начало в 18:00',
    'detail-venue-title':    'Место',
    'detail-venue-val':      'Арай Банкетный зал<br /><a href="https://go.2gis.com/hAiEa" target="_blank">Парк Жетісу, ул. Сарайшык, 13</a>',
    'quote-text':            'Два сердца, одна судьба.<br />Один путь, одна любовь.',
    'rsvp-title':            'Подтверждение участия',
    'rsvp-subtitle':         'Пожалуйста, дайте нам знать до <strong>1 августа 2026</strong>',
    'rsvp-name-label':       'Ваше имя',
    'rsvp-name-placeholder': 'Введите ваше имя',
    'rsvp-attendance-label': 'Вы придёте?',
    'rsvp-yes':              '🥂 Да, приду!',
    'rsvp-no':               '💌 К сожалению, не смогу',
    'rsvp-guests-label':     'Количество гостей (включая вас)',
    'rsvp-message-label':    'Пожелания молодожёнам (по желанию)',
    'rsvp-message-placeholder': 'Напишите ваши тёплые слова...',
    'rsvp-submit':           'Отправить',
    'rsvp-success':          'Спасибо! Мы получили ваш ответ 🤍',
    'rsvp-success-sub':      'С нетерпением ждём вас на нашем празднике.',
    'scroll-hint':           'листай',
    'footer-note':           'С любовью ждём вас ✦',
    'guest-1':               '1 человек',
    'guest-2':               '2 человека',
    'guest-3':               '3 человека',
    'guest-4':               '4 человека',
    'attendance-yes':        'Да, приду!',
    'attendance-no':         'К сожалению, не смогу',
  },
  en: {
    'hero-pre':              'Dear guests!<br/>We are honored to invite you to the celebration dedicated to the wedding of our children —',
    'hero-post':             'Please share this bright and festive day with us as honored guests at our celebration.',
    'hero-date':             'August 11, 2026',
    'hero-time':             'at 6:00 PM',
    'countdown-label':       'Until the wedding',
    'days-label':            'days',
    'hours-label':           'hours',
    'minutes-label':         'minutes',
    'seconds-label':         'seconds',
    'details-title':         'Wedding Details',
    'detail-time-title':     'Time',
    'detail-time-val':       'August 11, 2026<br />Beginning at 6:00 PM',
    'detail-venue-title':    'Venue',
    'detail-venue-val':      'Aray Banquet Hall<br /><a href="https://go.2gis.com/hAiEa" target="_blank">Zhetysu Park, 13 Saraishyk St.</a>',
    'quote-text':            'Two hearts, one destiny.<br />One path, one love.',
    'rsvp-title':            'RSVP',
    'rsvp-subtitle':         'Please let us know by <strong>August 1, 2026</strong>',
    'rsvp-name-label':       'Your Name',
    'rsvp-name-placeholder': 'Enter your name',
    'rsvp-attendance-label': 'Will you attend?',
    'rsvp-yes':              '🥂 Yes, I will be there!',
    'rsvp-no':               '💌 Unfortunately, I cannot attend',
    'rsvp-guests-label':     'Number of guests (including you)',
    'rsvp-message-label':    'Wishes for the newlyweds (optional)',
    'rsvp-message-placeholder': 'Write your warm wishes...',
    'rsvp-submit':           'Send',
    'rsvp-success':          'Thank you! We received your response 🤍',
    'rsvp-success-sub':      'We cannot wait to celebrate with you.',
    'scroll-hint':           'scroll',
    'footer-note':           'With love, we await you ✦',
    'guest-1':               '1 person',
    'guest-2':               '2 people',
    'guest-3':               '3 people',
    'guest-4':               '4 people',
    'attendance-yes':        'Yes, I will be there!',
    'attendance-no':         'Unfortunately, I cannot attend',
  }
};

// HTML lang attribute per language
const htmlLang = { kz: 'kk', ru: 'ru', en: 'en' };

// =========================================
// LANGUAGE ENGINE
// =========================================
let currentLang = localStorage.getItem('wedding-lang') || 'kz';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('wedding-lang', lang);

  // Update <html lang>
  document.documentElement.lang = htmlLang[lang];

  const t = translations[lang];

  // Update all [data-i18n] elements (innerHTML for line breaks)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update all [data-i18n-html] (same but explicitly innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update all [data-i18n-placeholder] elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update active lang button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update radio option values (shown to user, not submitted)
  updateRadioLabels();
}

function updateRadioLabels() {
  // Keep submitted value language-neutral (yes/no), display label translated
  const yesRadio = document.querySelector('#opt-yes input');
  const noRadio  = document.querySelector('#opt-no input');
  if (yesRadio) yesRadio.value = translations[currentLang]['attendance-yes'];
  if (noRadio)  noRadio.value  = translations[currentLang]['attendance-no'];
}


// =========================================
// MAIN INIT
// =========================================
document.addEventListener('DOMContentLoaded', () => {

  // Apply saved language
  setLanguage(currentLang);

  // Language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      // Animate transition
      document.body.style.transition = 'opacity 0.2s ease';
      document.body.style.opacity = '0.85';
      setTimeout(() => {
        setLanguage(lang);
        document.body.style.opacity = '1';
      }, 150);
    });
  });


  // =========================================
  // SCROLL REVEAL (Intersection Observer)
  // =========================================
  const revealEls = document.querySelectorAll('.reveal-up, .reveal-photo');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Trigger hero elements immediately
  document.querySelectorAll('.hero .reveal-up, .hero .reveal-photo').forEach(el => {
    el.classList.add('visible');
  });

  revealEls.forEach(el => {
    if (!el.closest('.hero')) observer.observe(el);
  });


  // =========================================
  // COUNTDOWN TIMER
  // =========================================
  const weddingDate = new Date('2026-08-11T18:00:00');

  function updateCountdown() {
    const now  = new Date();
    const diff = weddingDate - now;

    if (diff <= 0) {
      const msg = { kz: 'Бүгін біздің күніміз! 🤍', ru: 'Сегодня наш день! 🤍', en: 'Today is our day! 🤍' };
      document.getElementById('countdown').innerHTML =
        `<p style="font-family:var(--font-serif);font-size:28px;font-style:italic;color:var(--gold)">${msg[currentLang]}</p>`;
      return;
    }

    const pad = n => String(n).padStart(2, '0');
    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    animNum('days',    days);
    animNum('hours',   hours);
    animNum('minutes', minutes);
    animNum('seconds', seconds);
  }

  function animNum(id, val) {
    const el     = document.getElementById(id);
    const padded = String(val).padStart(2, '0');
    if (el && el.textContent !== padded) {
      el.style.transform = 'translateY(-4px)';
      el.style.opacity   = '0.5';
      setTimeout(() => {
        el.textContent   = padded;
        el.style.transform = '';
        el.style.opacity   = '';
      }, 120);
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


  // =========================================
  // FALLING PETALS
  // =========================================
  const petalsContainer = document.getElementById('petals');
  const petalColors = [
    'rgba(214,183,170,0.55)',
    'rgba(229,200,188,0.5)',
    'rgba(198,169,109,0.35)',
    'rgba(240,220,210,0.5)',
  ];

  function createPetal() {
    const petal  = document.createElement('div');
    petal.classList.add('petal');
    const size   = Math.random() * 8 + 5;
    const left   = Math.random() * 100;
    const delay  = Math.random() * 6;
    const dur    = Math.random() * 8 + 10;
    const color  = petalColors[Math.floor(Math.random() * petalColors.length)];
    petal.style.cssText = `
      left:${left}%;width:${size}px;height:${size}px;
      background:${color};
      border-radius:${Math.random() > 0.5 ? '50% 0 50% 0' : '0 50% 0 50%'};
      transform:rotate(${Math.random()*360}deg);
      animation-duration:${dur}s;animation-delay:${delay}s;
    `;
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), (delay + dur) * 1000);
  }

  for (let i = 0; i < 15; i++) createPetal();
  setInterval(createPetal, 1200);


  // =========================================
  // MUSIC PLAYER
  // =========================================
  const musicBtn   = document.getElementById('music-btn');
  const musicIcon  = document.getElementById('music-icon');
  const musicWaves = document.getElementById('music-waves');
  const bgMusic    = document.getElementById('bg-music');
  let   isPlaying  = false;

  function setPlaying(state) {
    isPlaying = state;
    musicIcon.style.display = state ? 'none' : 'block';
    musicWaves.classList.toggle('active', state);
  }

  musicBtn.addEventListener('click', () => {
    if (isPlaying) {
      bgMusic.pause();
      setPlaying(false);
    } else {
      bgMusic.volume = 0.25;
      bgMusic.play().catch(() => {});
      setPlaying(true);
    }
  });

  // Auto-start on first interaction
  document.body.addEventListener('click', () => {
    if (!isPlaying && bgMusic.paused) {
      bgMusic.volume = 0;
      bgMusic.play().then(() => {
        let vol = 0;
        const fade = setInterval(() => {
          vol = Math.min(vol + 0.02, 0.25);
          bgMusic.volume = vol;
          if (vol >= 0.25) { clearInterval(fade); setPlaying(true); }
        }, 150);
      }).catch(() => {});
    }
  }, { once: true });


  // =========================================
  // RSVP — show guest count on "yes"
  // =========================================
  const radioButtons = document.querySelectorAll('input[name="attendance"]');
  const guestsField  = document.getElementById('guests-field');

  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      document.querySelectorAll('.radio-option').forEach(o => o.classList.remove('selected'));
      radio.closest('.radio-option').classList.add('selected');
      const isYes = radio.closest('.radio-option').id === 'opt-yes';
      guestsField.style.display = isYes ? 'flex' : 'none';
      if (isYes) {
        guestsField.style.flexDirection = 'column';
        guestsField.style.animation = 'fadeDown 0.4s ease';
      }
    });
  });


  // =========================================
  // RSVP — AJAX Submit
  // =========================================
  const form        = document.getElementById('rsvp-form');
  const submitBtn   = document.getElementById('submit-btn');
  const formSuccess = document.getElementById('form-success');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btnText  = submitBtn.querySelector('span');
    const original = btnText.textContent;
    btnText.textContent = '...';
    submitBtn.disabled  = true;

    const action = form.getAttribute('action');

    // Demo mode
    if (action.includes('YOUR_FORM_ID') || action.includes('mjgdqbza')) {
      await new Promise(r => setTimeout(r, 1000));
      showSuccess();
      return;
    }

    // Build params (Google Apps Script needs URLSearchParams or FormData)
    const formData = new FormData(form);
    formData.append('lang', currentLang); // передаём язык

    // Google Apps Script endpoint — использует no-cors, поэтому
    // мы не можем читать ответ, но данные всё равно доходят
    const isGoogleScript = action.includes('script.google.com');

    try {
      if (isGoogleScript) {
        // Google Apps Script не поддерживает CORS для чтения ответа,
        // поэтому отправляем через no-cors и считаем успехом
        await fetch(action, {
          method: 'POST',
          mode:   'no-cors',
          body:   new URLSearchParams(formData),
        });
        showSuccess();
      } else {
        // Formspree или другой CORS-совместимый бэкенд
        const response = await fetch(action, {
          method:  'POST',
          body:    formData,
          headers: { 'Accept': 'application/json' }
        });
        const data = await response.json().catch(() => ({}));
        if (response.ok && data.ok !== false) {
          showSuccess();
        } else {
          throw new Error(data?.errors?.map(e => e.message).join(', ') || `${response.status}`);
        }
      }
    } catch (err) {
      console.error('Submit error:', err);
      btnText.textContent        = '⚠ ' + (err.message || 'Ошибка');
      submitBtn.style.background = '#c0392b';
      setTimeout(() => {
        btnText.textContent        = original;
        submitBtn.style.background = '';
        submitBtn.disabled         = false;
      }, 4000);
    }
  });

  function showSuccess() {
    Array.from(form.children).forEach(child => {
      if (!child.classList.contains('form-success')) {
        child.style.opacity    = '0';
        child.style.transform  = 'translateY(-8px)';
        child.style.transition = 'all 0.35s ease';
        setTimeout(() => child.style.display = 'none', 350);
      }
    });
    setTimeout(() => formSuccess.classList.add('show'), 400);
  }


  // =========================================
  // PARALLAX on hero photo (desktop only)
  // =========================================
  const heroImg = document.getElementById('hero-img');
  if (window.matchMedia('(min-width: 768px)').matches && heroImg) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight) {
        heroImg.style.transform = `translateY(${window.scrollY * 0.18}px)`;
      }
    }, { passive: true });
  }


  // =========================================
  // Extra CSS injected for animations
  // =========================================
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-8px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    #days, #hours, #minutes, #seconds {
      transition: opacity 0.15s ease, transform 0.15s ease;
    }
  `;
  document.head.appendChild(style);

});
