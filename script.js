const about = [
  {
    id: 1,
    title: 'History',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae facilis necessitatibus alias itaque provident laboriosam quam excorrupti dolore doloribus assumenda a distinctio vitae, temporibusipsum repellendus tempore cumque omnis?',
    img: 'https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 2,
    title: 'Vision',
    description:
      'Of recommend residence education be on difficult repulsive offending. Judge views had mirth table seems great him for her. Alone all happy asked begin fully stand own get.',
    img: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 3,
    title: 'Goals',
    description:
      'Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. ',
    img: 'https://images.unsplash.com/photo-1585776245865-b92df54c6b25?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
  },
];

const cardContainer = document.querySelector('.card-container');
const btns = document.querySelectorAll('button');
const h3 = document.querySelector('h3');
const p = document.querySelector('.card-container_paragraph');
const imgEle = document.querySelector('img');

function template(title, descr, img) {
  h3.textContent = title;
  p.textContent = descr;
  imgEle.src = img;
  cardContainer.children[0].textContent = h3.innerHTML;
  cardContainer.children[1].textContent = p.innerHTML;
}

about.forEach((el) => {
  const { id, title, description, img } = el;
  btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      if (index + 1 === id) {
        template(title, description, img);
      }
    });
  });
});

// On Load
template(about[1].title, about[1].description, about[1].img);
