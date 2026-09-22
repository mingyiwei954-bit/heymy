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

  cards.forEach(function (card, index) {
    card.classList.add('card-reveal');
    card.style.setProperty('--card-reveal-delay', String((index % 4) * 70) + 'ms');
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('card-reveal--visible');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -7% 0px',
    threshold: 0.08
  });

  cards.forEach(function (card) { observer.observe(card); });
}());
