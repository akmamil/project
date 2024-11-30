const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const closeIcon = navLinks.querySelector("i.ri-close-line");
//переключение видимости мобильного меню
menuBtn.addEventListener("click", () => {
  navLinks.classList.add("open");
  menuBtn.setAttribute("aria-expanded", "true"); // доступность
});
//меню закрывается когда нажимаем на иконку закрытия
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
}
/*навигация и плавный скроллинг*/
function handleNavigationClick(event) {
  // предотвратить поведение привязочного тега по умолчанию
  event.preventDefault();
  // удалите класс "active" из всех навигационных ссылок
  const links = document.querySelectorAll("nav ul li");
  links.forEach((link) => link.classList.remove("active"));
  // добавьте класс "active" к родительскому элементу li ссылки, на который был сделан щелчок
  event.target.parentNode.classList.add("active");
  // плавная прокрутка к целевому разделу
  const targetId = event.target.getAttribute("href").substring(1);
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }
  //закрывает меню после нажатия на ссылку в телефонах
  navLinks.classList.remove("open");
  menuBtn.setAttribute("aria-expanded", "false");
}
const navLinksItems = document.querySelectorAll("nav ul li a");
navLinksItems.forEach((link) => {
  link.addEventListener("click", handleNavigationClick);
});
// логика электронных почт
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "pallavi867709@gmail.com",
    Password: "Pallavi@2005??",
    To: "pallavi867709@gmail.com",
    From: document.getElementById("email").value,
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
