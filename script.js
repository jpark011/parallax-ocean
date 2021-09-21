const dayNight = document.querySelector('.dayNight');
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

dayNight.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  dayNight.classList.toggle('active');
});

menuToggle.addEventListener('click', () => {
  navigation.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
