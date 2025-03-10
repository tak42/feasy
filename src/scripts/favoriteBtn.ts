import type { PostData } from '../types/Post.type';

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

window.addEventListener('message', (event) => {
  if ('action' in event.data === false) return;

  const postData: PostData = event.data;

  if (event.data['action'] === 'hide') removeHtml(containerData.attr[0].value);

  if (event.data['action'] === 'check' && event.source)
    event.source.postMessage(window.location.origin, { targetOrigin: event.origin });

  if (event.data['action'] === 'share') {
    console.log(postData.content);

    postData.content.forEach((dataSet) => {
      updateInputValue(dataSet.id, dataSet.val);
    });

    removeHtml(containerData.attr[0].value);
  }
});

type HtmlTag = keyof HTMLElementTagNameMap;

type ComponentData<T extends HtmlTag> = {
  tag: T;
  attr: Attribute[];
  init: (elm: HTMLElementTagNameMap[T]) => void;
};

const showIframeBtnData: ComponentData<'button'> = {
  tag: 'button',
  attr: [],
  init: (btn: HTMLButtonElement) => {
    setStyle(btn, btnStyle);

    btn.innerText = 'フォーム表示';

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
      value: crypto.randomUUID(),
    },
  ],
  init: (container: HTMLDivElement) => {
    setAttribute(container, containerData.attr);

    setStyle(container, containerStyle);
  },
};

const getElementById = <T extends HTMLElement>(id: string): T | null => {
  return document.getElementById(id) as T | null;
};

const updateInputValue = (elementId: string, newValue: string) => {
  const input = getElementById<HTMLInputElement>(elementId);

  if (!input) return console.error(`id:${elementId} Input element not found`);

  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    'value'
  )?.set;

  if (!nativeInputValueSetter) return console.error(`id:${elementId} Failed to get value setter`);

  nativeInputValueSetter.call(input, newValue);

  input.dispatchEvent(new Event('input', { bubbles: true }));
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

const removeHtml = (id: string) => {
  const elm = document.getElementById(id);

  if (elm) document.body.removeChild(elm);
};

const init = () => {
  renderHtml(showIframeBtnData.tag, showIframeBtnData.init);
};

init();
