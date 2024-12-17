import { LOCALHOST_URL } from '../common';
import { hideIframe, showIframe } from '../hooks/iframe';
import { btnStyle, setStyle } from '../hooks/styles';
import type { PostContent, PostData, PostFunc } from '../types/Post.type';

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

  hideIframe(container);
};

const hideForm = () => {
  hideIframe(container);
};

const iframePostActions: PostFunc = {
  hide: hideForm,
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
btn.addEventListener('click', () => showIframe(container));

document.body.appendChild(btn);
document.body.appendChild(container);
