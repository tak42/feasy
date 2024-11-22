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

const iframeStyle: Styles = [
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '50%' },
  { property: 'left', value: '50%' },
  { property: 'transform', value: 'translate(-50%, -50%)' },
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
  document.body.appendChild(iframe);
};

const btn = document.createElement('button');
btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
