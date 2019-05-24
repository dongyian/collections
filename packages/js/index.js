const array = [
  { name: 'Homebrew', url: '' },
  { name: 'Homebrew Cask', url: '' },
  { name: 'Scoop', url: '' },
  { name: 'Chocolatey', url: '' },
  { name: 'npm', url: 'npm.html' }
];

const list = array.map(
  ({ name, url }) =>
    `
    <li class="link-container">
      ${url.trim() ? `<a href="${url}">${name}</a>` : `<span>${name}</span>`}
    </li>
    `
);
const html = `<ul>${list.join('').trim()}</ul>`;
document.getElementById('wrapper').innerHTML = html;