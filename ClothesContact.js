const toggleBtns = document.querySelectorAll('.darkModeToggle');

function setMode(isLight){

  document.documentElement.classList.toggle(
    'light',
    isLight
  );

  localStorage.setItem(
    'dark-mode',
    isLight ? 'disabled' : 'enabled'
  );

  toggleBtns.forEach(btn => {

    btn.textContent =
    isLight
    ? '🌙 Dark Mode'
    : '☀️ Light Mode';

  });

}

toggleBtns.forEach(btn => {

  btn.addEventListener('click', () => {

    setMode(
      document.documentElement.classList.contains('light') === false
    );

  });

});

setMode(
  localStorage.getItem('dark-mode') === 'disabled'
);