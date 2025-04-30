const headerClass = "header";
const headerMenuClass = "header__menu";
const openMenuModificator = "header--menu-open";

const listButtonClass = "layout-button--list";
const gridButtonClass = "layout-button--grid";
const activeButtonClass = "layout-button--active";

const cardClass = "news-card";
const cardGridModificator = "news-card--grid";

const listClass = "news__list";
const listGridModificator = "news__list--grid";

const header = document.querySelector(`.${headerClass}`);
const headerMenuButton = document.querySelector(`.${headerMenuClass}`);
const listButton = document.querySelector(`.${listButtonClass}`);
const gridButton = document.querySelector(`.${gridButtonClass}`);
const cards = document.querySelectorAll(`.${cardClass}`);
const cardsList = document.querySelector(`.${listClass}`);
const layoutButtons = [listButton, gridButton];

layoutButtons.forEach((button) => {
  button.addEventListener("click", switchLayout);
});

headerMenuButton.addEventListener("click", () => {
  header.classList.toggle(openMenuModificator);
});

function switchLayout() {
  layoutButtons.forEach((button) => button.classList.remove(activeButtonClass));

  this.classList.add(activeButtonClass);

  if (this.classList.contains(listButtonClass)) {
    cardsList.classList.remove(listGridModificator);
    cards.forEach((card) => card.classList.remove(cardGridModificator));
  }

  if (this.classList.contains(gridButtonClass)) {
    cardsList.classList.add(listGridModificator);
    cards.forEach((card) => card.classList.add(cardGridModificator));
  }
}
