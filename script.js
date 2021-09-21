const about = [
  {
    id: 1,
    title: 'History',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis necessitatibus alias itaque provident laboriosam quam excorrupti dolore doloribus assumenda a distinctio vitae, temporibusipsum repellendus tempore cumque omnis?',
  },
  {
    id: 2,
    title: 'Vision',
    description:
      'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get.',
  },
  {
    id: 3,
    title: 'Goals',
    description:
      'Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. ',
  },
];

const cardContainer = document.querySelector('.card-container');
const btns = document.querySelectorAll('button');
const h3 = document.querySelector('h3');
const p = document.querySelector('.card-container_paragraph');

function template(title, descr) {
  h3.textContent = title;
  p.textContent = descr;
  cardContainer.children[0].textContent = h3.innerHTML;
  cardContainer.children[1].textContent = p.innerHTML;
}

about.forEach((el) => {
  const { id, title, description } = el;
  btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      if (index + 1 === id) {
        template(title, description);
      }
    });
  });
});

// On Load
template(about[1].title, about[1].description);
