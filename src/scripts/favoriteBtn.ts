type Styles = { property: keyof CSSStyleDeclaration; value: string }[];

const localhostUrl = 'http://localhost:3000';

const btnStyle: Styles = [
  { property: 'width', value: '100px' },
  { property: 'height', value: '50px' },
  { property: 'color', value: 'red' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '100px' },
  { property: 'left', value: '100px' },
];

const containerStyle: Styles = [
  { property: 'height', value: '800px' },
  { property: 'width', value: '600px' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '50%' },
  { property: 'left', value: '50%' },
  { property: 'transform', value: 'translate(-50%, -50%)' },
];

const iframeStyle: Styles = [
  { property: 'height', value: '100%' },
  { property: 'width', value: '100%' },
];

const setStyle = (htmlElm: HTMLElement, styles: Styles) => {
  styles.forEach((val) => {
    htmlElm.style.setProperty(String(val.property), val.value);
  });
};

const showIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.src = localhostUrl;
  iframe.sandbox.value = 'allow-scripts allow-same-origin';
  setStyle(iframe, iframeStyle);
  container.appendChild(iframe);
};

const hideIframe = () => {
  const iframe = container.querySelector('iframe');
  if (iframe) container.removeChild(iframe);
};

window.addEventListener('message', (event) => {
  if (event.origin === localhostUrl) hideIframe();
});

const btn = document.createElement('button');
const container = document.createElement('div');
btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
setStyle(container, containerStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
document.body.appendChild(container);
