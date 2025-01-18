import onChange from 'https://cdn.jsdelivr.net/npm/on-change@5.0.1/+esm';
import i18next from 'i18next';
import resources from './locales/index.js';

export default async function () {
  const state = {
    counter: 0,
    lng: 'ru',
  };

  const watchedState = onChange(state, async () => {
    await render(watchedState);
  });

  await render(watchedState);
}

async function render(watchedState) {
  const i18n = i18next.createInstance();

  const controls = {
    primaryLang: () => document.querySelector('.btn-group > *:nth-child(1)'),
    otherLang: () => document.querySelector('.btn-group > *:nth-child(2)'),
    clicks: () => document.querySelector('.btn-info'),
    reset: () => document.querySelector('.btn-warning'),
  };

  await i18n.init({
    lng: watchedState.lng,
    resources
  });

  document.querySelector('.container').innerHTML = `
    <div class="btn-group" role="group">
      <button type="button" class="btn mb-3 ${watchedState.lng === 'en' ? 'btn-primary' : 'btn-outline-primary'}">${i18n.t('english')}</button>
      <button type="button" class="btn mb-3 ${watchedState.lng === 'ru' ? 'btn-primary' : 'btn-outline-primary'}">${i18n.t('russian')}</button>
    </div>
    <button type="button" class="btn btn-info mb-3 align-self-center">${i18n.t('clicks', {count: watchedState.counter})}</button>
    <button type="button" class="btn btn-warning">${i18n.t('reset')}</button>
  `;

  controls.primaryLang()
    .addEventListener('click', (e) => {
      watchedState.lng = 'en';
    });

  controls.otherLang()
    .addEventListener('click', (e) => {
      watchedState.lng = 'ru';
    });

  controls.clicks()
    .addEventListener('click', (e) => {
      watchedState.counter = watchedState.counter + 1;
    });

  controls.reset()
    .addEventListener('click', (e) => {
      watchedState.counter = 0;
    });
}
