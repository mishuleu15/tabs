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
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis necessitatibus alias itaque provident laboriosam quam excorrupti dolore doloribus assumenda a distinctio vitae, temporibusipsum repellendus tempore cumque omnis?',
  },
];

const cardContainer = document.querySelector('.card-container');
const btns = document.querySelectorAll('button');

function template(title, descr) {
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  h3.textContent = title;
  p.textContent = descr;
  cardContainer.append(h3, p);
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
