// SELECT TOTAL PRICE

const totalPrice = document.querySelector(".total");

// FUNCTION: UPDATE TOTAL PRICE

function updateTotalPrice() {
  let total = 0;

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const unitPrice = parseInt(card.querySelector(".unit-price").textContent);
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    total += unitPrice * quantity;
  });

  totalPrice.textContent = total + " $";
}

// PLUS BUTTON

const plusButtons = document.querySelectorAll(".fa-plus-circle");

plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantitySpan = button.nextElementSibling;
    quantitySpan.textContent = Number(quantitySpan.textContent) + 1;
    updateTotalPrice();
  });
});

// MINUS BUTTON

const minusButtons = document.querySelectorAll(".fa-minus-circle");

minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const quantitySpan = button.previousElementSibling;
    let quantity = Number(quantitySpan.textContent);

    if (quantity > 0) {
      quantitySpan.textContent = quantity - 1;
      updateTotalPrice();
    }
  });
});

// DELETE ITEM

const trashButtons = document.querySelectorAll(".fa-trash-alt");

trashButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".card-body").remove();
    updateTotalPrice();
  });
});

// LIKE ITEM

const heartButtons = document.querySelectorAll(".fa-heart");

heartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("text-danger");
  });
});
