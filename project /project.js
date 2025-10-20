
const list = document.querySelector(".task-list");
const input = document.querySelector("input");
const button = document.querySelector(".create-btn");

const createListItem = (content) => {
  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <span>${content}</span>
    <button class="delete-btn">✖</button>
  `;

  item.querySelector(".delete-btn").addEventListener("click", () => {
    item.remove();
  });

  return item;
};

button.addEventListener("click", () => {
  const value = input.value.trim();
  if (value === "") return;

  const listItem = createListItem(value);
  list.appendChild(listItem);
  input.value = "";
});
