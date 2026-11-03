const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
}

const stories = {
  'little-game': {
    type: 'FEATURE 01 / CEDARVILLE ATHLETICS',
    title: 'Finding joy in the little game',
    summary: 'Feature story published by Cedarville Athletics.',
    main: 'assets/images/little-dribblers.jpg', detail: 'assets/images/little-dribblers.jpg', label: 'PHOTO BY<br>EMILY TUTTLE', note: 'Little Dribblers.', link: 'https://yellowjackets.cedarville.edu/news/2026/10/29/mens-soccer-finding-joy-in-the-little-game.aspx', action: 'Read the feature', external: true
  },
  sundays: {
    type: 'FEATURE 02 / CEDARS MAGAZINE',
    title: 'Sidelining Sundays: The impact of youth sports',
    summary: "the purpose of the story was to write about the impact of youth sports on church attendance and the difficult dichotomy of priorities and the growing draw of the youth sports world involvement.",
    main: 'assets/images/sidelining-sundays-magazine.jpg', detail: 'assets/images/sidelining-sundays-award.png', label: 'CEDARS<br>MAGAZINE', note: 'Sources, story, and space to consider.', link: 'sidelining-sundays.html', action: 'Open the magazine spread', external: false
  }
};

const stage = document.querySelector('.feature-stage');
const choices = document.querySelectorAll('.story-choice');
if (stage && choices.length) {
  choices.forEach((choice) => choice.addEventListener('click', () => {
    const story = stories[choice.dataset.story];
    choices.forEach((item) => { item.classList.toggle('is-active', item === choice); item.setAttribute('aria-selected', String(item === choice)); });
    stage.classList.add('is-changing');
    window.setTimeout(() => {
      stage.className = `feature-stage ${choice.dataset.story}-stage`;
      stage.setAttribute('aria-labelledby', choice.id);
      stage.querySelector('.stage-main').src = story.main;
      stage.querySelector('.stage-detail').src = story.detail;
      stage.querySelector('.visual-label').innerHTML = story.label;
      stage.querySelector('.feature-type').textContent = story.type;
      stage.querySelector('h3').textContent = story.title;
      stage.querySelector('.feature-summary').textContent = story.summary;
      stage.querySelector('.read-link').href = story.link;
      stage.querySelector('.read-link').toggleAttribute('target', story.external);
      stage.querySelector('.read-link').toggleAttribute('rel', story.external);
      if (story.external) stage.querySelector('.read-link').setAttribute('rel', 'noreferrer');
      stage.querySelector('.read-link').firstChild.textContent = `${story.action} `;
      stage.querySelector('.stage-note p').textContent = story.note;
      stage.classList.remove('is-changing');
      stage.focus();
    }, 180);
  }));
}
