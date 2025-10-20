// const list = document.querySelector(".task-list");
// const input = document.querySelector("#taskInput");
// const button = document.querySelector("#addBtn");

// let content = [];

// const ListItem = (text, index) => {
//   return `
//     <div class="item" data-index="${index}">
//       ${text}
//       <button class="delete-btn">Delete</button>
//     </div>
//   `;
// };

// const render = () => {
//   if (content.length === 0) {
//     list.innerHTML = `<p class="no-task">No tasks yet. Add one above!</p>`;
//     return;
//   }

//   list.innerHTML = content.map((item, i) => ListItem(item, i)).join("");

//   document.querySelectorAll(".delete-btn").forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//       const index = Number(e.target.parentElement.dataset.index);
//       content.splice(index, 1);
//       render();
//     });
//   });
// };

// button.addEventListener("click", () => {
//   const value = input.value.trim();
//   if (!value) return;

//   content.push(value);
//   input.value = "";
//   render();
// });

const list = document.querySelector(".task-list");
const input = document.querySelector("#taskInput");
const button = document.querySelector("#addBtn");
const filterBtns = document.querySelectorAll(".filter-btn");

let content = [];
let filter = "All"; // default filter

const ListItem = (item, index) => {
  return `
  
    <div class="item ${
      item.completed ? "completed" : ""
    }" data-index="${index}">
      <span class="task-text">${item.text}</span>
      <button class="complete-btn">${
        item.completed ? "Undo" : "Complete"
      }</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
};

const render = () => {
  let filteredContent = content;

  if (filter === "Active") {
    filteredContent = content.filter((item) => !item.completed);
  } else if (filter === "Completed") {
    filteredContent = content.filter((item) => item.completed);
  }

  if (filteredContent.length === 0) {
    list.innerHTML = `<p class="no-task">No tasks yet. Add one above!</p>`;
    return;
  }

  list.innerHTML = filteredContent
    .map((item, i) => {
      // original index for delete/complete buttons
      const index = content.indexOf(item);
      return ListItem(item, index);
    })
    .join("");

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = Number(e.target.parentElement.dataset.index);
      content.splice(index, 1);
      render();
    });
  });

  document.querySelectorAll(".complete-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = Number(e.target.parentElement.dataset.index);
      content[index].completed = !content[index].completed;
      render();
    });
  });
};

// Add new task
button.addEventListener("click", () => {
  const value = input.value.trim();
  if (!value) return;

  content.push({ text: value, completed: false });
  input.value = "";
  render();
});

// Filter buttons
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    filter = btn.textContent;
    render();
  });
});

console.log(filterBtns);
