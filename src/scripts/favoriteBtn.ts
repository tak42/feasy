import type { PostData, PostFunc } from '../types/Post.type';

const LOCALHOST_URL = 'http://localhost:3000';

type Style = { property: keyof CSSStyleDeclaration; value: string };
type Attribute = { quorifiedName: string; value: string };

const btnStyle: Style[] = [
  { property: 'width', value: '160px' },
  { property: 'height', value: '56px' },
  { property: 'color', value: 'red' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '160px' },
  { property: 'left', value: '80px' },
];

const containerStyle: Style[] = [
  { property: 'height', value: '50%' },
  { property: 'width', value: '50%' },
  { property: 'position', value: 'absolute' },
  { property: 'top', value: '50%' },
  { property: 'left', value: '50%' },
  { property: 'transform', value: 'translate(-50%, -50%)' },
];

const containerHideStyle: Style[] = [
  { property: 'height', value: '0' },
  { property: 'width', value: '0' },
];

const iframeStyle: Style[] = [
  { property: 'height', value: '100%' },
  { property: 'width', value: '100%' },
  { property: 'background', value: 'white' },
];

const iframeAttr: Attribute[] = [
  { quorifiedName: 'src', value: LOCALHOST_URL },
  { quorifiedName: 'sandbox', value: 'allow-scripts allow-same-origin allow-modals' },
];

const btnAttr: Attribute[] = [{ quorifiedName: 'innerText', value: 'iframe 表示' }];

const setStyle = (htmlElm: HTMLElement, styles: Style[]) => {
  styles.forEach((val) => {
    htmlElm.style.setProperty(String(val.property), val.value);
  });
};

const setAttribute = (htmlElm: HTMLElement, attributes: Attribute[]) => {
  attributes.forEach((obj) => {
    htmlElm.setAttribute(obj.quorifiedName, obj.value);
  });
};

const showIframe = () => {
  setStyle(container, containerStyle);

  if (container.querySelector('iframe')) return;

  const iframe = document.createElement('iframe');

  setAttribute(iframe, iframeAttr);

  setStyle(iframe, iframeStyle);

  container.appendChild(iframe);
};

const hideIframe = () => {
  const iframe = container.querySelector('iframe');

  if (!iframe) return;

  container.removeChild(iframe);

  setStyle(container, containerHideStyle);
};

const shareForm = (event: MessageEvent) => {
  console.log(event);
  // const postData: PostData = event.data;
  // const inputElms = Array.from(document.getElementsByTagName('input'));

  // データ駆動設計でやるべき
  // inputElms.forEach((elm) => {
  //   const formId: CombinedFormIds = elm.id;

  //   elm.value = postData.content[formId];
  // });

  hideIframe();
};

const originCheck = (event: MessageEvent) => {
  if (!event.source) return;

  event.source.postMessage(window.location.origin, { targetOrigin: event.origin });
};

const iframePostActions: PostFunc = {
  hide: hideIframe,
  share: shareForm,
  check: originCheck,
};

window.addEventListener('message', (event) => {
  const postData: PostData = event.data;

  iframePostActions[postData.action](event);
});

// const createHtml = (tagName: keyof HTMLElementTagNameMap) => {
//   const elm = document.createElement(tagName);

//   document.body.appendChild(elm);
// };

const btn = document.createElement('button');
const container = document.createElement('div');

setAttribute(btn, btnAttr);
setStyle(btn, btnStyle);
btn.addEventListener('click', showIframe);

document.body.appendChild(btn);
document.body.appendChild(container);
