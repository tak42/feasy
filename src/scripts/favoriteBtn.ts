type PostActions = 'hide' | 'share';

type PostContents = {
  kind: string;
  value: string;
}[];

type PostData = {
  action: PostActions;
  contents: PostContents;
};

type PostFunc = {
  action: PostActions;
  func: (contents: PostContents) => void;
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
  { property: 'height', value: '800px' },
  { property: 'width', value: '600px' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '50%' },
  { property: 'left', value: '50%' },
  { property: 'transform', value: 'translate(-50%, -50%)' },
  { property: 'backgroundColor', value: 'white' },
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
  iframe.src = LOCALHOST_URL;
  iframe.sandbox.value = 'allow-scripts allow-same-origin';
  setStyle(iframe, iframeStyle);
  container.appendChild(iframe);
};

const hideIframe = () => {
  const iframe = container.querySelector('iframe');
  if (iframe) container.removeChild(iframe);
};

const combineIdentifiers = [
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

const searchTargetInputs = () => {
  return Array.from(document.getElementsByTagName('input')).filter((elm) =>
    combineIdentifiers.some((val) => val.id === elm.id)
  );
};

const shareForm = (contents: PostContents) => {
  const inputElms: HTMLInputElement[] = searchTargetInputs();
  if (!inputElms.length) return false;
  combineIdentifiers.forEach((val) => {
    const content = contents.find(({ kind }) => kind === val.kind);
    inputElms.filter(({ id }) => id === val.id)[0].value = content ? content.value : '';
  });
  hideIframe();
};

const iframePostActions: PostFunc[] = [
  { action: 'hide', func: hideIframe },
  { action: 'share', func: shareForm },
];

window.addEventListener('message', (event) => {
  if (event.origin !== LOCALHOST_URL) return false;
  const postData: PostData = event.data;
  const actionFunc = iframePostActions.filter((val) => val.action === postData.action);
  actionFunc[0].func(postData.contents);
});

const btn = document.createElement('button');
const container = document.createElement('div');
btn.innerText = 'iframe 表示';
setStyle(btn, btnStyle);
setStyle(container, containerStyle);
btn.addEventListener('click', showIframe);
document.body.appendChild(btn);
document.body.appendChild(container);
