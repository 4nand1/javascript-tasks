// const list = document.querySelector(".task-list");
// const input = document.querySelector("#taskInput");
// const button = document.querySelector("#addBtn");
// const filterBtns = document.querySelectorAll(".filter-btn");

// let content = [];
// let filter = "All";

// const ListItem = (item, index) => {
//   return `
//     <div class="item ${
//       item.completed ? "completed" : ""
//     }" data-index="${index}">
//       <label class="checkbox-wrapper">
//         <input type="checkbox" class="complete-checkbox" ${
//           item.completed ? "checked" : ""
//         } />
//         <span class="task-text">${item.text}</span>
//       </label>
//       <button class="delete-btn">Delete</button>
//     </div>
//   `;
// };

// const render = () => {
//   let filteredContent = content;

//   if (filter === "Active") {
//     filteredContent = content.filter((item) => !item.completed);
//   } else if (filter === "Completed") {
//     filteredContent = content.filter((item) => item.completed);
//   }

//   if (filteredContent.length === 0) {
//     list.innerHTML = `<p class="no-task">No tasks yet. Add one above!</p>`;
//     return;
//   }

//   list.innerHTML = filteredContent
//     .map((item, i) => {
//       const index = content.indexOf(item);
//       return ListItem(item, index);
//     })
//     .join("");

//   document.querySelectorAll(".delete-btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const index = Number(e.target.parentElement.dataset.index);
//       content.splice(index, 1);
//       render();
//     });
//   });

//   document.querySelectorAll(".complete-checkbox").forEach((checkbox) => {
//     checkbox.addEventListener("change", (e) => {
//       const index = Number(e.target.closest(".item").dataset.index);
//       content[index].completed = e.target.checked;
//       render();
//     });
//   });
// };

// button.addEventListener("click", () => {
//   const value = input.value.trim();
//   if (!value) return;

//   content.push({ text: value, completed: false });
//   input.value = "";
//   render();
// });

// filterBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     filterBtns.forEach((b) => b.classList.remove("active"));
//     btn.classList.add("active");
//     filter = btn.textContent.trim();
//     render();
//   });
// });

// const list = document.querySelector(".list");
// const input = document.querySelector("input");
// const addBtn = document.querySelector(".create-btn");
// const buttons = document.querySelectorAll(".buttons button");

// let content = [];
// let type = "All";

// let id = 1;

// const ListItem = (item) => {
//   return `
//     <div class="item">
//       <input class="checkbox" type="checkbox" ${item.isDone ? "checked" : ""} />
//       <p>${item.text}</p>
//       <button class="delete-btn">Delete</button>
//     </div>
//   `;
// };

// addBtn.addEventListener("click", () => {
//   content.push({
//     id: id,
//     text: input.value,
//     isDone: false,
//   });

//   id++;

//   console.log(content);

//   render();
// });

// buttons.forEach((btn, i) => {
//   btn.addEventListener("click", () => {
//     buttons.forEach((button) => {
//       button.classList.remove("chosen");
//     });

//     btn.classList.add("chosen");

//     if (i === 0) {
//       type = "All";
//     } else if (i === 1) {
//       type = "Active";
//     } else {
//       type = "Completed";
//     }

//     render();
//   });
// });

// const render = () => {
//   const elements = content
//     .filter((item) => {
//       if (type === "All") return true;
//       if (type === "Active") return item.isDone === false;
//       return item.isDone === true;
//     })
//     .map((item) => ListItem(item))
//     .join("");

//   list.innerHTML = elements;

//   addListeners();
// };

// const addListeners = () => {
//   const deleteBtns = document.querySelectorAll(".delete-btn");

//   deleteBtns.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       content = content.filter((item, index) => index !== id);
//       render();
//     });
//   });

//   const checkboxes = document.querySelectorAll(".checkbox");

//   checkboxes.forEach((checkbox, i) => {
//     checkbox.addEventListener("click", () => {
//       content[i].isDone = !content[i].isDone;
//       render();
//     });
//   });
// };

const list = document.querySelector(".list");
const input = document.querySelector("input");
const addBtn = document.querySelector(".create-btn");
const buttons = document.querySelectorAll(".buttons button");

let content = [];
let type = "All";
let id = 1;

const ListItem = (item) => {
  return `
    <div class="item">
      <input class="checkbox" type="checkbox" ${item.isDone ? "checked" : ""} />
      <p>${item.text}</p>
      <button class="delete-btn">Delete</button>
    </div>
  `;
};

addBtn.addEventListener("click", () => {
  if (input.value.trim() === "") return;

  content.push({
    id: id,
    text: input.value,
    isDone: false,
  });

  id++;
  input.value = "";
  render();
});

buttons.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("chosen");
    });

    btn.classList.add("chosen");

    if (i === 0) type = "All";
    else if (i === 1) type = "Active";
    else type = "Completed";

    render();
  });
});

const render = () => {
  const elements = content
    .filter((item) => {
      if (type === "All") return true;
      if (type === "Active") return !item.isDone;
      return item.isDone;
    })
    .map((item) => ListItem(item))
    .join("");

  list.innerHTML = elements;

  addListeners();
};

const addListeners = () => {
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const index = Array.from(list.children).indexOf(e.target.parentElement);
      content.splice(index, 1);
      render();
    });
  });

  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((checkbox, i) => {
    checkbox.addEventListener("change", () => {
      content[i].isDone = checkbox.checked;
      render();
    });
  });
};
