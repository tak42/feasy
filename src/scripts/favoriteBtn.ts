type PostActions = 'hide' | 'share';

type PostContent = {
  name: string;
  email: string;
  old: string;
};

type PostData = {
  action: PostActions;
  content: PostContent;
};

type PostFunc = {
  [key in PostActions]: (content: PostContent) => void;
};

type Styles = { property: keyof CSSStyleDeclaration; value: string }[];

const LOCALHOST_URL = 'http://localhost:3000';

const btnStyle: Styles = [
  { property: 'width', value: '150px' },
  { property: 'height', value: '50px' },
  { property: 'color', value: 'red' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '20%' },
  { property: 'left', value: '100px' },
];

const containerStyle: Styles = [
  { property: 'height', value: '50%' },
  { property: 'width', value: '50%' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '50%' },
  { property: 'left', value: '50%' },
  { property: 'transform', value: 'translate(-50%, -50%)' },
];

const iframeStyle: Styles = [
  { property: 'height', value: '100%' },
  { property: 'width', value: '100%' },
  { property: 'background', value: 'white' },
];

const setStyle = (htmlElm: HTMLElement, styles: Styles) => {
  styles.forEach((val) => {
    htmlElm.style.setProperty(String(val.property), val.value);
  });
};

const showIframe = () => {
  setStyle(container, containerStyle);

  if (container.querySelector('iframe')) return;

  const iframe = document.createElement('iframe');

  iframe.src = LOCALHOST_URL;
  iframe.sandbox.value = 'allow-scripts allow-same-origin';
  setStyle(iframe, iframeStyle);

  container.appendChild(iframe);
};

const hideIframe = () => {
  document.body.removeChild(container);
};

const combineIdentifiers: { id: string; kind: keyof PostContent }[] = [
  {
    id: 'q1',
    kind: 'name',
  },
  {
    id: 'q2',
    kind: 'email',
  },
  {
    id: 'q5',
    kind: 'old',
  },
];

const shareForm = (content: PostContent) => {
  const inputElms = Array.from(document.getElementsByTagName('input'));

  combineIdentifiers.forEach((val) => {
    const elm = inputElms.find(({ id }) => id === val.id);

    if (!elm) return;

    elm.value = content[val.kind];
  });

  hideIframe();
};

const iframePostActions: PostFunc = {
  hide: hideIframe,
  share: shareForm,
};

window.addEventListener('message', (event) => {
  if (event.origin !== LOCALHOST_URL) return;

  const postData: PostData = event.data;

  iframePostActions[postData.action](postData.content);
});

const btn = document.createElement('button');
const container = document.createElement('div');

btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
btn.addEventListener('click', showIframe);

document.body.appendChild(btn);
document.body.appendChild(container);
