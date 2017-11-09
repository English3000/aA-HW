document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const addLi = (event) => {
    event.preventDefault();

    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");

    const inputEl = document.querySelector(".favorite-input");
    const inputText = inputEl.value;
    inputEl.value = "";

    li.textContent = inputText;

    ul.appendChild(li);
  }

  document.querySelector(".favorite-submit").addEventListener("click", addLi);
  // --- your code here!
  const photoFormToggle = (event) => {
    event.preventDefault();

    const photoFormClass = document.querySelector('.photo-form-container').className
    if (photoFormClass.includes('hidden')) {
      document.querySelector('.photo-form-container').className = 'photo-form-container';
    } else {
      document.querySelector('.photo-form-container').className += ' hidden';
    }
  }

  document.querySelector('.photo-show-button').addEventListener('click', photoFormToggle);
  // adding new photos

  // --- your code here!
  const addPhotoLi = (event) => {
    event.preventDefault();

    const inputEl = document.querySelector(".photo-url-input");
    const inputText = inputEl.value;
    inputEl.value = "";

    const img = document.createElement("img");
    img.src = inputText;

    const li = document.createElement("li");
    li.appendChild(img);

    const ul = document.querySelector(".dog-photos");
    ul.appendChild(li);

  }

  document.querySelector(".photo-url-submit").addEventListener("click", addPhotoLi);
});
