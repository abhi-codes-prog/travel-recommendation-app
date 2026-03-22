function searchPlace() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}

function clearSearch() {
  document.getElementById("search").value = "";
  let cards = document.querySelectorAll(".card");
  cards.forEach(card => card.style.display = "block");
}
