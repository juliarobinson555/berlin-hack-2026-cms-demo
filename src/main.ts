import Reveal from 'reveal.js';
import RevealNotes from 'reveal.js/plugin/notes';
import { animate, stagger } from 'animejs';
import 'reveal.js/reveal.css';
import './styles.css';

const deck = new Reveal({
  hash: true,
  controls: true,
  progress: true,
  center: true,
  transition: 'fade',
  backgroundTransition: 'none',
  width: 1280,
  height: 720,
  margin: 0,
  minScale: 0.2,
  maxScale: 1.6,
  plugins: [RevealNotes],
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function animateCurrentSlide() {
  if (reduceMotion) return;

  const slide = deck.getCurrentSlide();
  const targets = slide.querySelectorAll(
    'h1, h2, .kicker, .tagline, .built-by, .pain-node, .goal-sub, .idea-card, .approach-card, .flow-step, .cat-card, .transform-side, .d-step, .platform-badge, .demo-switch, .tech-tag, .tech-stat, .impact-card, .value-card, .rm-phase, .win-card, .closing-tagline, .closing-footer'
  );

  animate(targets, {
    opacity: [0, 1],
    translateY: [28, 0],
    scale: [0.985, 1],
    duration: 620,
    delay: stagger(42),
    ease: 'outCubic',
  });
}

deck.initialize().then(() => {
  animateCurrentSlide();
  deck.on('slidechanged', animateCurrentSlide);
});
