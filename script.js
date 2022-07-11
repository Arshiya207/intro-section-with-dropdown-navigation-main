// make connection between elements
document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-dropDown-button]");
  const dropDown = e.target.closest("[data-dropDown]");
  const isHamburger=e.target.matches("[data-hamburger]")
  if (!isDropDownButton && dropDown) return;

  let currentDropDown;
  if (isDropDownButton) {
    dropDown.classList.toggle("active");
    currentDropDown = dropDown;

   
    
  }

  document.querySelectorAll("[data-dropDown].active").forEach((dropDown) => {
    if (currentDropDown === dropDown) return;

    dropDown.classList.remove("active");
  });
  if(isHamburger){
    const hamburgerSibling=e.target.nextElementSibling
    e.target.classList.toggle("animate")
    hamburgerSibling.classList.toggle("slide")

  }
});
