// make connection between elements
document.addEventListener("click", (e) => {
  const isDropDownButton = e.target.matches("[data-dropDown-button]");
  const dropDown = e.target.closest("[data-dropDown]");
  if (!isDropDownButton && dropDown) return;
  console.log(dropDown);
  console.log(isDropDownButton);
  let currentDropDown
  if (isDropDownButton) {
    dropDown.classList.toggle("active");
    currentDropDown=dropDown
  }

  document.querySelectorAll("[data-dropDown].active").forEach(dropDown=>{
    if(currentDropDown===dropDown)return

    dropDown.classList.remove("active")
    



  })



});
