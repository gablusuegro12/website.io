const incrementBtn = document.getElementById("increment-btn");
const saveBtn = document.getElementById("save-btn");
const passengerCount = document.getElementById("counter");
const savedCounts = document.getElementById("saves");
const decrementBtn = document.getElementById("decrement-btn");

decrementBtn.ariaDisabled = true;

let count = 0;

//  add function //

const add = () => {
  count += 1;
  passengerCount.textContent = count;
};

const remove = () => {
  count -= 1;
  passengerCount.textContent = count;
};

const save = () => {
  let displaySavedCounts = `${count} - `;

  savedCounts.textContent += displaySavedCounts;
  passengerCount.textContent = 0;
  count = 0;
};

incrementBtn.addEventListener("click", add);
decrementBtn.addEventListener("click", remove);
saveBtn.addEventListener("click", save);