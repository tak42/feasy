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

// const containerHideStyle: Style[] = [
//   { property: 'height', value: '0' },
//   { property: 'width', value: '0' },
// ];

const iframeStyle: Style[] = [
  { property: 'height', value: '100%' },
  { property: 'width', value: '100%' },
  { property: 'background', value: 'white' },
];

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

// const hideIframe = () => {
//   const iframe = container.querySelector('iframe');

//   if (!iframe) return;

//   container.removeChild(iframe);

//   setStyle(container, containerHideStyle);
// };

// const shareForm = (event: MessageEvent) => {
//   console.log(event);
//   // const postData: PostData = event.data;
//   // const inputElms = Array.from(document.getElementsByTagName('input'));

//   // データ駆動設計でやるべき
//   // inputElms.forEach((elm) => {
//   //   const formId: CombinedFormIds = elm.id;

//   //   elm.value = postData.content[formId];
//   // });

//   // hideIframe();
// };

// const originCheck = (event: MessageEvent) => {
//   if (!event.source) return;

//   event.source.postMessage(window.location.origin, { targetOrigin: event.origin });
// };

// const iframePostActions: PostFunc = {
//   // hide: hideIframe,
//   share: shareForm,
//   check: originCheck,
// };

// window.addEventListener('message', (event) => {
//   const postData: PostData = event.data;

//   iframePostActions[postData.action](event);
// });

type HtmlTag = keyof HTMLElementTagNameMap;
type ComponentData<T extends HtmlTag> = {
  tag: T;
  attr: Attribute[];
  init: (elm: HTMLElementTagNameMap[T]) => void;
};

const showIframeBtnData: ComponentData<'button'> = {
  tag: 'button',
  attr: [{ quorifiedName: 'innerText', value: 'iframe 表示' }],
  init: (btn: HTMLButtonElement) => {
    setStyle(btn, btnStyle);

    setAttribute(btn, showIframeBtnData.attr);

    btn.addEventListener('click', () => renderHtml(containerData.tag, containerData.init));
    btn.addEventListener('click', () =>
      renderChildHtml(iframeData.tag, iframeData.init, containerData.attr[0].value)
    );
  },
};

const iframeData: ComponentData<'iframe'> = {
  tag: 'iframe',
  attr: [
    { quorifiedName: 'src', value: LOCALHOST_URL },
    { quorifiedName: 'sandbox', value: 'allow-scripts allow-same-origin allow-modals' },
  ],
  init: (iframe: HTMLIFrameElement) => {
    setAttribute(iframe, iframeData.attr);

    setStyle(iframe, iframeStyle);
  },
};

const containerData: ComponentData<'div'> = {
  tag: 'div',
  attr: [
    {
      quorifiedName: 'id',
      value: 'abc12345',
    },
  ],
  init: (container: HTMLDivElement) => {
    setStyle(container, containerStyle);
  },
};

const renderHtml = <T extends HtmlTag>(
  tag: T,
  initFunc: (elm: HTMLElementTagNameMap[T]) => void
) => {
  const elm = document.createElement(tag);

  initFunc(elm);

  document.body.appendChild(elm);
};

const renderChildHtml = <T extends HtmlTag>(
  tag: T,
  initFunc: (elm: HTMLElementTagNameMap[T]) => void,
  parentId: string
) => {
  const elm = document.createElement(tag);
  const parentElm = document.getElementById(parentId);

  if (!parentElm) return;

  initFunc(elm);

  if (!parentElm.querySelector(tag)) parentElm.appendChild(elm);
};

const init = () => {
  renderHtml(showIframeBtnData.tag, showIframeBtnData.init);
};

init();
