(function () {
    'use strict';

    const data = {
        'pajamas': { title: 'رسم بجايم', type: 'img', items: ['https://i.postimg.cc/sDzD93n8/Picsart-26-04-05-11-17-55-276.jpg', 'https://i.postimg.cc/WzJWh6v9/3487897b-4d79-4e19-9ecc-699e36acf854.jpg', 'https://i.postimg.cc/85dd3KTV/1a864f55-4c58-4056-a652-5db07cc2fa4e.jpg', 'https://i.postimg.cc/65VqD82X/IMG-20260405-WA0028.jpg', 'https://i.postimg.cc/SxTShCyx/Picsart-26-04-05-11-17-32-951.jpg', 'https://i.postimg.cc/vB9bfK5r/Picsart-26-04-05-11-19-36-843.jpg'] },
        'family': { title: 'رسم عائلي', type: 'img', items: ['https://i.postimg.cc/Njj75kBF/e66c54c3-9a23-4281-816d-66e73b09ff33.jpg', 'https://i.postimg.cc/pXJ78Cjn/8589a603-a5d9-41c5-93f2-fa1dad7a4a14.jpg', 'https://i.postimg.cc/Y9ZjwVwn/Picsart-26-04-05-11-52-43-335.jpg', 'https://i.postimg.cc/VLjv3DZB/Picsart-26-04-05-11-53-30-376.png', 'https://i.postimg.cc/KYYY3FGN/Picsart-26-04-05-11-53-51-013.jpg', 'https://i.postimg.cc/hvV4Rtsq/Picsart-26-04-05-11-54-05-814.jpg'] },
        'couple': { title: 'رسم شخصين', type: 'img', items: ['https://i.postimg.cc/m2QqCHk0/Picsart-26-04-05-12-11-27-972.jpg', 'https://i.postimg.cc/7LQQw1tG/Picsart-26-04-05-12-11-40-561.jpg', 'https://i.postimg.cc/MTCPj6Sz/Picsart-26-04-05-12-11-53-142.jpg', 'https://i.postimg.cc/m2GpLgVs/Picsart-26-04-05-12-12-17-294.jpg', 'https://i.postimg.cc/x1663yQC/Picsart-26-04-05-12-12-31-214.jpg', 'https://i.postimg.cc/CKtJWhzw/Picsart-26-04-05-12-12-45-428.jpg', 'https://i.postimg.cc/RhxdZg7G/Picsart-26-04-05-12-12-59-130.jpg', 'https://i.postimg.cc/bN8LXFNJ/Picsart-26-04-05-12-13-25-426.jpg', 'https://i.postimg.cc/wjjVMymn/Picsart-26-04-05-12-13-48-509.jpg', 'https://i.postimg.cc/SsCL3cBk/Picsart-26-04-05-12-14-03-511.jpg', 'https://i.postimg.cc/Kj5PvxvF/IMG-20260405-WA0029.jpg', 'https://i.postimg.cc/5Nx5KYnH/IMG-20260405-WA0030.jpg', 'https://i.postimg.cc/9FJd6mns/IMG-20260405-WA0031.jpg'] },
        'invites': { title: 'رسم دعوات', type: 'img', items: ['https://i.postimg.cc/4NL8zQZj/Picsart-26-04-05-12-36-58-295.jpg', 'https://i.postimg.cc/vH2rp6wT/528f85b4-f291-426e-8513-a13f2c26efbb.jpg', 'https://i.postimg.cc/85GMhRMr/131f4e4d-61cb-4102-b7a2-856b8089bec1.jpg', 'https://i.postimg.cc/nz4RB8hb/Picsart-26-04-05-12-36-32-847.jpg', 'https://i.postimg.cc/CM4rKV2p/Picsart-26-04-05-12-36-46-113.jpg', 'https://i.postimg.cc/DwSx54ws/IMG-20260405-WA0032.jpg'] },
        'dresses': { title: 'رسم فساتين', type: 'img', items: ['https://i.postimg.cc/Wz9Ft7CX/IMG-20260405-WA0034.jpg', 'https://i.postimg.cc/KzDghb5V/Picsart-26-04-05-14-15-26-548.jpg', 'https://i.postimg.cc/TYYnGKFz/Picsart-26-04-05-14-12-03-189.jpg', 'https://i.postimg.cc/QxxcsFwp/Picsart-26-04-05-14-12-29-322.jpg', 'https://i.postimg.cc/NFN9LxSb/IMG-20260405-WA0033.jpg', 'https://i.postimg.cc/T1kLhcFN/IMG-20260405-WA0035.jpg', 'https://i.postimg.cc/90xRzBKk/IMG-20260405-WA0036.jpg', 'https://i.postimg.cc/Qt3WzCcP/Picsart-26-04-05-14-12-46-913.jpg', 'https://i.postimg.cc/ydHSGx0t/Picsart-26-04-05-14-13-21-385.jpg', 'https://i.postimg.cc/Y9HmP0Qy/Picsart-26-04-05-14-13-43-974.jpg', 'https://i.postimg.cc/FRVJXvxW/Picsart-26-04-05-14-14-15-905.png', 'https://i.postimg.cc/LXpZW5zd/Picsart-26-04-05-14-14-38-236.jpg', 'https://i.postimg.cc/4dQhRG5k/Picsart-26-04-05-14-14-50-988.png', 'https://i.postimg.cc/XJky6Wgz/Picsart-26-04-05-14-15-10-251.jpg', 'https://i.postimg.cc/Y02LpPnq/Picsart-26-04-05-14-15-38-831.png', 'https://i.postimg.cc/x8jN0ZxC/Picsart-26-04-05-14-15-56-441.png', 'https://i.postimg.cc/j2qns1gt/Picsart-26-04-05-14-16-13-833.jpg', 'https://i.postimg.cc/yx63VGQD/Picsart-26-04-05-14-16-25-582.png', 'https://i.postimg.cc/6q649Pj7/Picsart-26-04-05-14-17-08-851.jpg', 'https://i.postimg.cc/Wzpq2yWk/Picsart-26-04-05-14-17-21-335.jpg', 'https://i.postimg.cc/j2qns1gz/Picsart-26-04-05-14-17-47-075.jpg', 'https://i.postimg.cc/6qH2ThgR/Picsart-26-04-05-14-18-04-272.jpg', 'https://i.postimg.cc/8ckf1YKB/Picsart-26-04-05-14-19-06-193.jpg', 'https://i.postimg.cc/T1kLhcF9/Picsart-26-04-05-14-19-19-474.jpg', 'https://i.postimg.cc/mkdzhSJy/Picsart-26-04-05-14-19-36-150.jpg', 'https://i.postimg.cc/3NL4WZVt/Picsart-26-04-05-14-20-00-469.jpg'] }
    };

    const videos = [
        { src: 'https://res.cloudinary.com/dfgrqpvq2/video/upload/v1775536352/WhatsApp_Video_2026-04-05_at_9.40.35_AM_ouwyh0.mp4', title: 'تصميم بشارة المواليد' },
        { src: 'https://res.cloudinary.com/dfgrqpvq2/video/upload/v1775536676/VN%D9%A2%D9%A0%D9%A2%D9%A6%D9%A0%D9%A4%D9%A0%D9%A5_%D9%A1%D9%A8%D9%A2%D9%A3%D9%A3%D9%A8_dtiomv.mp4', title: 'تصميم بشارة المواليد' },
        { src: 'https://res.cloudinary.com/dfgrqpvq2/video/upload/v1775536761/AhaTok_to.8338_c972834c-b68a-4691-8851-a077f8620514__we4kjx.mp4', title: 'تصميم بشارة المواليد' },
        { src: 'https://res.cloudinary.com/dfgrqpvq2/video/upload/v1775536900/AhaTok_to.8338_8733d216-6ad8-4ed2-bc9d-3f9a22a1b410__ymafx0.mp4', title: 'تصميم عقد القرآن' },
        { src: 'https://res.cloudinary.com/dfgrqpvq2/video/upload/v1775536985/AhaTok_to.8338_624e7bd5-968a-40d3-9a3d-50e5962e6e08__zpdmik.mp4', title: 'تصميم عقد القرآن' },
        { src: 'https://res.cloudinary.com/dfgrqpvq2/video/upload/v1775537158/AhaTok_to.8338_27cd9eb3-c33f-4ad2-9ed3-4517ef2b76d5__smvpfl.mp4', title: 'تصميم عقد القرآن' }
    ];

    const videoGrid = document.getElementById('videoGrid');
    if (videoGrid) {
        videos.forEach((v, i) => {
            const card = document.createElement('div');
            card.className = 'video-card reveal';
            card.style.setProperty('--reveal-delay', (i % 6) * 0.07 + 's');
            card.setAttribute('role', 'button');
            card.setAttribute('tabindex', '0');
            card.setAttribute('aria-label', 'تشغيل ' + v.title);
            card.dataset.testid = 'video-card-' + (i + 1);
            card.innerHTML =
                '<video muted loop playsinline preload="metadata" src="' + v.src + '"></video>' +
                '<div class="video-play-badge"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg></div>' +
                '<div class="video-label">' + v.title + '</div>';
            const open = () => openLightbox(videos.map(x => x.src), i, 'video');
            card.addEventListener('click', open);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
            });
            videoGrid.appendChild(card);
        });

        if ('IntersectionObserver' in window) {
            const vio = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const vid = entry.target;
                    if (entry.isIntersecting) {
                        vid.play().catch(() => {});
                    } else {
                        vid.pause();
                    }
                });
            }, { threshold: 0.25 });
            videoGrid.querySelectorAll('video').forEach(v => vio.observe(v));
        }

        if ('IntersectionObserver' in window) {
            const rio = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        rio.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            videoGrid.querySelectorAll('.reveal').forEach(el => rio.observe(el));
        }
    }

    const mainGallery = document.getElementById('mainGallery');
    const groupView = document.getElementById('groupView');
    const groupTitle = document.getElementById('groupTitle');
    const groupGrid = document.getElementById('groupGrid');
    let currentGroup = null;

    document.querySelectorAll('.category-card').forEach(card => {
        const open = () => showGroup(card.dataset.group);
        card.addEventListener('click', open);
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
    });

    function showGroup(key) {
        const group = data[key];
        if (!group) return;
        currentGroup = group;
        groupTitle.textContent = group.title;
        groupGrid.innerHTML = '';

        group.items.forEach((src, i) => {
            const item = document.createElement('div');
            item.className = 'masonry-item';
            item.setAttribute('role', 'button');
            item.setAttribute('tabindex', '0');
            item.setAttribute('aria-label', group.title + ' — عرض مكبر');
            item.dataset.testid = 'group-item-' + (i + 1);
            const img = document.createElement('img');
            img.src = src;
            img.alt = group.title;
            img.loading = 'lazy';
            img.decoding = 'async';
            img.addEventListener('error', () => window.lamsaImgFallback(img), { once: true });
            item.appendChild(img);
            const open = () => openLightbox(group.items, i, 'img');
            item.addEventListener('click', open);
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
            });
            groupGrid.appendChild(item);
        });

        mainGallery.style.display = 'none';
        groupView.classList.add('open');
        window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    }

    function hideGroup() {
        mainGallery.style.display = '';
        groupView.classList.remove('open');
        currentGroup = null;
    }

    const backBtn = document.getElementById('groupBackBtn');
    if (backBtn) backBtn.addEventListener('click', hideGroup);

    const tabs = document.querySelectorAll('.gallery-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            const filter = tab.dataset.filter;
            document.querySelectorAll('.gallery-block').forEach(block => {
                block.style.display = (filter === 'all' || block.dataset.type === filter) ? '' : 'none';
            });
        });
    });

    const lightbox = document.getElementById('lightbox');
    const stage = document.getElementById('lightboxStage');
    const counter = document.getElementById('lightboxCounter');
    const btnClose = document.getElementById('lightboxClose');
    const btnPrev = document.getElementById('lightboxPrev');
    const btnNext = document.getElementById('lightboxNext');

    let lbItems = [];
    let lbType = 'img';
    let lbIndex = 0;

    function openLightbox(items, index, type) {
        lbItems = items;
        lbType = type;
        lbIndex = index;
        renderLightbox();
        lightbox.classList.add('open');
        document.body.classList.add('no-scroll');
        btnClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('open');
        document.body.classList.remove('no-scroll');
        const vid = stage.querySelector('video');
        if (vid) vid.pause();
        stage.innerHTML = '';
    }

    function renderLightbox() {
        const vid = stage.querySelector('video');
        if (vid) vid.pause();
        stage.innerHTML = '';
        const src = lbItems[lbIndex];

        if (lbType === 'img') {
            const img = document.createElement('img');
            img.src = src;
            img.alt = 'عرض مكبر للتصميم';
            img.decoding = 'async';
            stage.appendChild(img);
        } else {
            const video = document.createElement('video');
            video.src = src;
            video.controls = true;
            video.autoplay = true;
            video.muted = true;
            video.playsInline = true;
            stage.appendChild(video);
        }

        const many = lbItems.length > 1;
        btnPrev.style.display = many ? '' : 'none';
        btnNext.style.display = many ? '' : 'none';
        counter.style.display = many ? '' : 'none';
        counter.textContent = (lbIndex + 1) + ' / ' + lbItems.length;
    }

    function stepLightbox(dir) {
        lbIndex = (lbIndex + dir + lbItems.length) % lbItems.length;
        renderLightbox();
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    stage.addEventListener('click', (e) => e.stopPropagation());
    btnClose.addEventListener('click', closeLightbox);
    btnPrev.addEventListener('click', () => stepLightbox(-1));
    btnNext.addEventListener('click', () => stepLightbox(1));

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (lbItems.length > 1) {
            if (e.key === 'ArrowLeft') stepLightbox(1);
            if (e.key === 'ArrowRight') stepLightbox(-1);
        }
    });

    let touchX = null;
    lightbox.addEventListener('touchstart', (e) => {
        touchX = e.changedTouches[0].clientX;
    }, { passive: true });
    lightbox.addEventListener('touchend', (e) => {
        if (touchX === null || lbItems.length <= 1) return;
        const dx = e.changedTouches[0].clientX - touchX;
        if (Math.abs(dx) > 50) stepLightbox(dx > 0 ? 1 : -1);
        touchX = null;
    }, { passive: true });
})();