import throttle from 'lodash.throttle'
const STORAGE_KEY = "feedback-form-state";

let formData = {
  email: '',
  message: '',
};
const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input'),
    textArea: document.querySelector('textarea'),
  };
  refs.form.addEventListener('input', throttle(onFormData, 500));
  refs.form.addEventListener('submit', onFormSubmit);
  savedFormData();

// cобытие для отправки формы
function onFormSubmit(e) {
    e.preventDefault();
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    console.log(savedMessage);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
  }


  function onFormData(e) {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
  function savedFormData() {
    const savedValue = localStorage.getItem(STORAGE_KEY);
    if (!savedValue) {
      return;
    }
    const { email, message } = JSON.parse(savedValue);
    formData = { email, message };
    console.log('formData', formData);
    refs.input.value = email;
    refs.textArea.value = message;
  }



