(function () {
    'use strict';

    const navbar = document.querySelector('.navbar');
    if (navbar) {
        const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 12);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    const toggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    function closeMobileMenu() {
        if (!toggle || !mobileMenu) return;
        toggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('open');
    }

    if (toggle && mobileMenu) {
        toggle.addEventListener('click', () => {
            const open = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!open));
            mobileMenu.classList.toggle('open', !open);
        });

        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMobileMenu));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeMobileMenu();
        });

        document.addEventListener('click', (e) => {
            if (mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(e.target) && !toggle.contains(e.target)) {
                closeMobileMenu();
            }
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth > 860) closeMobileMenu();
        });
    }

    const revealEls = document.querySelectorAll('.reveal');
    if (revealEls.length && 'IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        revealEls.forEach(el => io.observe(el));
    } else {
        revealEls.forEach(el => el.classList.add('is-visible'));
    }

    window.lamsaImgFallback = function (img) {
        const fallback = document.createElement('div');
        fallback.className = 'img-fallback';
        fallback.setAttribute('role', 'img');
        fallback.setAttribute('aria-label', img.alt || 'تصميم من متجر لمسة');
        fallback.innerHTML =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>' +
            '<span>تعذّر تحميل التصميم</span>';
        img.replaceWith(fallback);
    };

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', () => window.lamsaImgFallback(img), { once: true });
        if (img.complete && img.naturalWidth === 0 && img.src) {
            window.lamsaImgFallback(img);
        }
    });

    const popup = document.getElementById('webPopup');
    const popupTrigger = document.querySelector('.wants-website');
    let lastFocused = null;

    function openPopup() {
        if (!popup) return;
        lastFocused = document.activeElement;
        popup.classList.add('open');
        const closeBtn = popup.querySelector('.close-popup');
        if (closeBtn) closeBtn.focus();
    }

    function closePopup() {
        if (!popup) return;
        popup.classList.remove('open');
        if (lastFocused) lastFocused.focus();
    }

    if (popup && popupTrigger) {
        popupTrigger.addEventListener('click', openPopup);
        popupTrigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPopup(); }
        });

        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePopup();
        });

        const closeBtn = popup.querySelector('.close-popup');
        if (closeBtn) closeBtn.addEventListener('click', closePopup);

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('open')) closePopup();
        });
    }
})();