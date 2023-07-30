const main = document.querySelector('main');
const fooButton = document.querySelector('#foo');
const barButton = document.querySelector('#bar');
const foobarButton = document.querySelector('#foobar');

fooButton.addEventListener('click', function() {
  const h3 = document.createElement('h3');
  h3.textContent = 'Foo';
  main.appendChild(h3);
});

barButton.addEventListener('click', function() {
  const h3 = document.createElement('h3');
  h3.textContent = 'Bar';
  main.appendChild(h3);
});

foobarButton.addEventListener('click', function() {
  const h2 = document.createElement('h2');
  h2.textContent = 'FooBar';
  main.appendChild(h2);
});
