export const ShoppingItem = (props) => {
  const { done, product, amount } = props;

  let checkClass = '';
  if (done) {
    checkClass = 'item__btn-done--check';
  }

  return `
    <li class="item">
      <div class="item__name">${product}</div>
      <div class="item__amount">${amount}</div>
      <button class="item__btn-done ${checkClass}"></button>
    </li>
  `;
};

element.querySelector('button').addEventListener('click', () => {
  fetch(`https://apps.kodim.cz/daweb/shoplist/api/weeks/0/days/mon/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ done: !done }),
  })
    .then((response) => response.json())
    .then((data) => element.replaceWith(ShoppingItem(data.results)));
});