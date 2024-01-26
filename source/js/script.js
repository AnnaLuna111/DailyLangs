// Header navigation
const navToggle = document.querySelector(".nav__toggle");
const navList = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__item a");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("is-open");
  navList.classList.toggle("is-open");
})

links.forEach(element => {
  element.addEventListener("click", () => {
    navToggle.classList.toggle("is-open");
    navList.classList.toggle("is-open");
  });
});

// Mobile filters
const filterToggle = document.querySelector(".catalog__filter-toggle");
const form = document.querySelector(".catalog__filter");

filterToggle.addEventListener("click", () => {
  filterToggle.classList.toggle("is-open");
  form.classList.toggle("is-open");
})

//Slider
const slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [1, 6],
    connect: true,
    step: 1,
    range: {
        'min': 1,
        'max': 6
    }
});

// Select
const customSelect = document.querySelector(".select__wrapper");
const select = customSelect.querySelector("select");
const selectDropdown = document.createElement("DIV");
selectDropdown.classList.add("select__dropdown");
selectDropdown.textContent = select.options[select.selectedIndex].textContent;
customSelect.appendChild(selectDropdown);

// div for options list
const optionsList = document.createElement("UL");
optionsList.classList.add("select__list", "select__list--hide", "reset-list");

for (let i = 0; i < select.length; i++) {
  const option = document.createElement("LI");
  option.classList.add("select__item");
  option.textContent = select.options[i].textContent;


  option.addEventListener("click", () => {
    select.selectedIndex = i;
    selectDropdown.textContent = option.textContent;
    selectDropdown.classList.toggle("select__dropdown--active");
    optionsList.classList.toggle("select__list--hide");
  });

  optionsList.appendChild(option);
  customSelect.appendChild(optionsList);
};

selectDropdown.addEventListener("click", () => {
  selectDropdown.classList.toggle("select__dropdown--active");
  optionsList.classList.toggle("select__list--hide");
})
