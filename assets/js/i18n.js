(() => {
    const toggle = document.getElementById('language-toggle');
    let language = 'zh';
    let typing;
    let desiredLanguage = language;
    let transitioning = false;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wait = milliseconds => new Promise(resolve => setTimeout(resolve, milliseconds));
    const roles = {
        zh: ['RUC学生', 'Adobe国际认证设计师', 'AI 应用开发者', '前端开发者', 'AI产品经理'],
        en: ['an RUC Student', 'an Adobe Certified Professional', 'an AI Application Developer', 'a Frontend Developer', 'an AI Product Manager'],
    };

    function applyLanguage(nextLanguage) {
        if (typing && nextLanguage === language) return;
        language = nextLanguage;
        document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
        document.querySelectorAll('[data-zh][data-en]').forEach(element => {
            const separator = element.parentElement.classList.contains('home__subtitle') ? ' ' : '';
            element.textContent = element.dataset[language] + separator;
        });
        document.querySelectorAll('[data-zh-alt][data-en-alt]').forEach(element => {
            element.alt = element.dataset[`${language}Alt`];
        });
        document.querySelectorAll('[data-zh-label][data-en-label]').forEach(element => {
            element.setAttribute('aria-label', element.dataset[`${language}Label`]);
        });
        document.querySelectorAll('[data-zh-title][data-en-title]').forEach(element => {
            element.title = element.dataset[`${language}Title`];
        });
        toggle.dataset.language = language;
        toggle.setAttribute('aria-label', language === 'zh' ? '语言切换' : 'Language selection');
        toggle.querySelectorAll('button').forEach(button => {
            button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });
        document.querySelector('meta[name="description"]').content = language === 'zh'
            ? '明艺薇（Evie Ming）的个人主页与作品集。中国人民大学金融学学生、AI 应用独立开发者与 Adobe 国际认证设计师，关注 AI 产品、教育科技、前端与全栈开发、产品设计及人机交互。'
            : 'Evie Ming’s personal portfolio: a finance student at Renmin University of China, independent AI application developer, and Adobe Certified Professional working across AI products, education technology, full-stack development, and product design.';
        document.title = language === 'zh'
            ? 'EV0331 · 明艺薇（Evie Ming）个人主页与 AI 产品作品集'
            : 'EV0331 · Evie Ming — AI Application Developer & Product Designer';
        if (typing) typing.destroy();
        typing = new Typed('.auto-input', {
            strings: roles[language],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
        if (window.AOS) AOS.refresh();
    }

    async function transitionLanguage(nextLanguage) {
        desiredLanguage = nextLanguage;
        if (transitioning || desiredLanguage === language) return;
        transitioning = true;
        try {
            while (desiredLanguage !== language) {
                if (!reducedMotion.matches) {
                    document.body.classList.add('language-changing');
                    if (typing) typing.stop();
                    await wait(280);
                }
                applyLanguage(desiredLanguage);
                // Settle the translated layout and carousel sizes while content is hidden.
                document.querySelectorAll('.swiper-container').forEach(container => {
                    if (container.swiper) container.swiper.update();
                });
                if (!reducedMotion.matches) {
                    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
                }
                if (typing) typing.start();
                document.body.classList.remove('language-changing');
                if (!reducedMotion.matches) await wait(480);
            }
        } finally {
            document.body.classList.remove('language-changing');
            transitioning = false;
        }
    }

    toggle.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => transitionLanguage(button.dataset.language));
    });
    applyLanguage('zh');
})();
