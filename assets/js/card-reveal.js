(function () {
  'use strict';

  var cardSelector = [
    '.practice-card',
    '.services__content',
    '.portfolio__content',
    '.contact__information',
    '.contact__form'
  ].join(',');

  var cards = Array.prototype.slice.call(document.querySelectorAll(cardSelector));
  if (!cards.length) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) {
    cards.forEach(function (card) { card.classList.add('card-reveal--visible'); });
    return;
  }

  var lastScrollY = window.scrollY;
  var scrollDirection = 'down';

  window.addEventListener('scroll', function () {
    var currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) > 2) {
      scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      lastScrollY = currentScrollY;
    }
  }, { passive: true });

  cards.forEach(function (card, index) {
    card.classList.add('card-reveal');
    card.style.setProperty('--card-reveal-delay', String((index % 4) * 90) + 'ms');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        entry.target.classList.remove('card-reveal--visible');
        return;
      }

      entry.target.classList.toggle('card-reveal--from-top', scrollDirection === 'up');
      entry.target.classList.add('card-reveal--visible');
    });
  }, {
    rootMargin: '0px 0px -7% 0px',
    threshold: 0.08
  });

  cards.forEach(function (card) { observer.observe(card); });
}());
