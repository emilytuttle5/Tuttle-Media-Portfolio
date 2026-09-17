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
  rivets: {
    type: 'FEATURE 01 / GAME STORY',
    title: 'Rivets Win Big on Peaches Night with 15 Strikeouts',
    summary: 'this was a game story i wrote during my internship with the Rockford Rivets.',
    main: 'assets/images/Rivets2609.jpeg', detail: 'assets/images/Rivets846.jpeg', label: 'POSTGAME<br>REPORTING', note: 'Creative yet objective reporting.', link: 'rivets.html', action: 'Enter the reporting desk'
  },
  sundays: {
    type: 'FEATURE 02 / CEDARS MAGAZINE',
    title: 'Sidelining Sundays: The impact of youth sports',
    summary: "the purpose of the story was to write about the impact of youth sports on church attendance and the difficult dichotomy of priorities and the growing draw of the youth sports world involvement.",
    main: 'assets/images/IMG_4613.jpeg', detail: 'assets/images/Rivets846.jpeg', label: 'CEDARS<br>MAGAZINE', note: 'Sources, story, and space to consider.', link: 'sidelining-sundays.html', action: 'Open the magazine spread'
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
      stage.querySelector('.read-link').firstChild.textContent = `${story.action} `;
      stage.querySelector('.stage-note p').textContent = story.note;
      stage.classList.remove('is-changing');
      stage.focus();
    }, 180);
  }));
}
