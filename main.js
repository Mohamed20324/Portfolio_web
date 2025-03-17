const menuIcon = document.getElementById('menu-icon');
const navlist = document.querySelector('.navlist');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navlist.classList.toggle('active');
};
document.querySelectorAll('.navlist a').forEach(link => {
  link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navlist.classList.remove('active');
  });
});

///parallax----
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add("show-items");
      } else {
          entry.target.classList.remove("show-items");
      }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom"); 
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top"); 
scrollTop.forEach((el) => observer.observe(el));