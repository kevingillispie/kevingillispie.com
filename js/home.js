// home.js — Optimized, accessible, performant, and future-proof
(() => {
    'use strict';

    // === CONFIG ===
    const BACKGROUND_URL = 'https://picsum.photos/1920/1080?random=';
    const CLOCK_UPDATE_INTERVAL = 16; // ~60fps for perfect mechanical tick
    const RESIZE_DEBOUNCE = 150; // ms

    // === DOM Elements ===
    const refreshBtn = document.getElementById('refreshImage');
    const bgAnnounce = document.getElementById('bg-announce');
    const clock = document.getElementById('clock');
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.modal-close');

    let currentSecond = -1;
    let resizeTimer;

    // === Background Image Handler ===
    function setLoading(state) {
        refreshBtn.disabled = state;
        refreshBtn.textContent = state ? 'Loading...' : 'Refresh Image';
        refreshBtn.setAttribute('aria-busy', state);
    }

    function changeBackground() {
        if (!refreshBtn) return;
        setLoading(true);

        const img = new Image();
        img.loading = 'eager'; // Faster than default lazy
        img.src = `${BACKGROUND_URL}${Date.now()}`;

        img.onload = () => {
            document.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.75)), url('${img.src}')`;
            bgAnnounce.textContent = 'Background image refreshed';
            requestAnimationFrame(() => requestAnimationFrame(() => {
                bgAnnounce.textContent = '';
            }));
            setLoading(false);
        };

        img.onerror = () => {
            console.error('Failed to load background image');
            bgAnnounce.textContent = 'Failed to load image';
            setTimeout(() => bgAnnounce.textContent = '', 3000);
            setLoading(false);
        };
    }

    // === Clock Face Numbers (responsive) ===
    function createNumbers() {
        document.querySelectorAll('.number').forEach(el => el.remove());
        const radius = window.innerWidth <= 900 ? -115 : -155;

        for (let i = 1; i <= 12; i++) {
            const num = document.createElement('div');
            num.className = 'number';
            num.textContent = i;
            num.setAttribute('aria-hidden', 'true');
            const angle = i * 30;
            num.style.transform = `rotate(${angle}deg) translateY(${radius}px) rotate(-${angle}deg)`;
            clock.appendChild(num);
        }
    }

    // Minute marks (only create once)
    if (!clock.dataset.marksCreated) {
        for (let i = 0; i < 60; i++) {
            const mark = document.createElement('div');
            mark.className = i % 5 === 0 ? 'five-minute-mark' : 'minute-mark';
            mark.style.transform = `rotate(${i * 6}deg)`;
            mark.setAttribute('aria-hidden', 'true');
            clock.appendChild(mark);
        }
        clock.dataset.marksCreated = 'true';
    }

    // === Clock Update (mechanical tick perfection) ===
    function updateClock() {
        const now = new Date();
        const s = now.getSeconds();
        const ms = now.getMilliseconds();
        const m = now.getMinutes() + (s + ms / 1000) / 60;
        const h = (now.getHours() % 12) + m / 60;

        // Smooth continuous motion for hour/minute
        minuteHand.style.transform = `rotate(${m * 6}deg) translate(0, -11px)`;
        hourHand.style.transform = `rotate(${h * 30}deg) translate(0, -11px)`;

        // Mechanical tick only on second change
        if (s !== currentSecond) {
            currentSecond = s;

            secondHand.style.transition = 'none';
            secondHand.style.transform = `rotate(${s * 6}deg) translate(0, -11px)`;
            void secondHand.offsetWidth; // Force reflow

            secondHand.style.transition = 'transform 0.08s cubic-bezier(0.1, 0.7, 0.1, 1)';
            secondHand.style.transform = `rotate(${s * 6 - 5}deg) translate(0, -11px)`;

            requestAnimationFrame(() => {
                secondHand.style.transition = 'transform 0.12s cubic-bezier(0.25, 0.9, 0.3, 1)';
                secondHand.style.transform = `rotate(${s * 6}deg) translate(0, -11px)`;
            });
        }
    }

    // === Modal Content ===
    const modalContent = {
        about: `<h2 id="modal-title">Hello! <br>I'm <strong>Kevin Gillispie</strong>.</h2>
      <p>I'm a <strong>full-stack web developer</strong> in Los Angeles. I built the WordPress SEO plugin <strong><a href="https://schemascalpel.com/" target="_blank" rel="noopener">Schema Scalpel</a></strong> and the anti-phishing browser extension <strong><a href="https://overphish.app" target="_blank" rel="noopener">OverPhish</a></strong>. I’m <a href="https://cp.certmetrics.com/comptia/en/public/verify/credential/QGJMZNYCV2Q1CD6F" target="_blank" rel="noopener">Network+</a> and <a href="https://www.coursera.org/account/accomplishments/specialization/2LTDUW8JSXZW" target="_blank" rel="noopener">Google Cybersecurity</a> certified.</p>
      <p>When I’m not battling bugs or <a href="https://codeandkeyboard.com" target="_blank" rel="noopener">blogging</a> about tech news, you'll find me reading, writing, drawing, composing, traveling, and studying (human) languages.</p>`,

        features: `<h2 id="modal-title">Portfolio</h2>
      <ul class="actions stacked portfolio-links">
        <li><a href="https://github.com/kevingillispie" class="button" target="_blank" rel="noopener">GitHub</a></li>
        <li><a href="https://overphish.app/" class="button" target="_blank" rel="noopener">OverPhish</a> (browser extension)</li>
        <li><a href="https://schemascalpel.com/" class="button" target="_blank" rel="noopener">Schema Scalpel</a> (WP plugin)</li>
        <li><a href="https://codeandkeyboard.com" class="button" target="_blank" rel="noopener">Code and Keyboard</a> (tech blog)</li>
      </ul>`
    };

    function openModal(id) {
        if (!modal || !modalBody) return;
        modalBody.innerHTML = modalContent[id] || '<p>Content coming soon...</p>';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        closeBtn?.focus();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // === Event Listeners ===
    refreshBtn?.addEventListener('click', e => {
        e.preventDefault();
        changeBackground();
    });

    document.querySelectorAll('[data-modal]').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            openModal(link.dataset.modal);
        });
    });

    closeBtn?.addEventListener('click', closeModal);
    closeBtn?.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            closeModal();
        }
    });

    modal?.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(createNumbers, RESIZE_DEBOUNCE);
    });

    // === Init ===
    changeBackground();
    createNumbers();
    setInterval(updateClock, CLOCK_UPDATE_INTERVAL);
    updateClock();

})();