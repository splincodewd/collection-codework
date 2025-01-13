// @ts-check

// BEGIN (write your solution here) (write your solution here)
import onChange from 'https://cdn.jsdelivr.net/npm/on-change@5.0.1/+esm';
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.7.9/+esm';

import * as yup from 'yup';
import keyBy from 'lodash/keyBy.js';

export default function () {


  const form = {
    name: document.querySelector('[name="name"]'),
    email: document.querySelector('[name="email"]'),
    password: document.querySelector('[name="password"]'),
    passwordConfirmation: document.querySelector('[name="passwordConfirmation"]'),
    submit: document.querySelector('[type="submit"]'),
  }


  // urls нельзя хардкодить: https://ru.hexlet.io/blog/posts/izbavlyaytes-ot-strok
  const routes = {
    usersPath: () => '/users',
  };

  const state = {
    loginForm: {
      state: 'invalid',
      data: {
        name: null,
        email: null,
        password: null,
        passwordConfirmation: null,
      },
    },
  };


// Этот объект можно использовать для того, чтобы обрабатывать ошибки сети.
// Это необязательное задание, но крайне рекомендуем попрактиковаться.
  const errorMessages = {
    network: {
      error: 'Network Problems. Try again.',
    },
  };

// Используйте эту функцию для выполнения валидации
// Выведите в консоль её результат, чтобы увидеть, как получить сообщения об ошибках
  const validate = (fields) => {
    try {
      schema.validateSync(fields, { abortEarly: false });
      return {};
    } catch (e) {
      return keyBy(e.inner, 'path');
    }
  };

  const watchedState = onChange(state, async (path) => {
    if (watchedState.loginForm.state === 'valid') {
      try {
        await axios({
          method: "post",
          url: routes.usersPath(),
          data: watchedState.loginForm.data,
          headers: {"Content-Type": "multipart/form-data"},
        });
      } catch {
        document.querySelector('.network-error')?.remove();
        document.querySelector('[data-container="sign-up"]').insertAdjacentHTML('beforeend', `<small class="network-error text-danger">${errorMessages.network.error}</small>`);
      }

      document.querySelector('[data-container="sign-up"]').innerHTML = 'User Created';

      return;
    }


    const result = validate(watchedState.loginForm.data);
    const field = path.split('.').at(-1);
    const error = result[field];

    form[field]?.parentNode?.querySelector('.text-danger')?.remove();
    form[field].classList.remove('is-invalid');

    if (error) {
      form[field].classList.add('is-invalid');
      form[field]?.parentNode?.insertAdjacentHTML('beforeend', `<small class="text-danger">${error.message}</small>`);
    }

    if (Object.keys(result).length === 0) {
      form.submit.removeAttribute('disabled');
    } else {
      form.submit.setAttribute('disabled', 'disabled');
    }
  });


  const schema = yup.object().shape({
    name: yup.string().trim().required(),
    email: yup.string().required('email must be a valid email').email(),
    password: yup.string().required().min(6),
    passwordConfirmation: yup.string()
      .required('password confirmation is a required field')
      .oneOf(
        [yup.ref('password'), null],
        'password confirmation does not match to password',
      ),
  });

  form.name
    .addEventListener('input', (e) => {
    watchedState.loginForm.data.name = e.target.value;
  });

  form.email
    .addEventListener('input', (e) => {
    watchedState.loginForm.data.email = e.target.value;
  });

  form.password
    .addEventListener('input', (e) => {
    watchedState.loginForm.data.password = e.target.value;
  });

  form.passwordConfirmation.addEventListener('input', (e) => {
    watchedState.loginForm.data.passwordConfirmation = e.target.value;
  });

  form.submit.addEventListener('click', (e) => {
    e.preventDefault();
    watchedState.loginForm.state = 'valid';
  });
}
