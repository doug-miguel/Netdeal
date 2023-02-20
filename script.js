let valueId = [];
let valueAll = [
  "rp",
  "lfd",
  "mrl",
  "jeja",
  "agw",
  "gha",
  "wsi",
  "em",
  "aeet",
  "hne",
  "kdw",
  "fem",
  "jas",
];
const checkbox = document.querySelectorAll(".chechbox");
verification(checkbox);

checkbox.forEach((checkboxInput) => {
  checkboxInput.addEventListener("click", (item) => {
    addStorage(item.target.value);
  });
});

function addStorage(storageId) {
  if (valueId && !valueId.includes(storageId)) {
    if (storageId !== "rp") valueId.push(storageId);
    if (storageId === "rp") selectAll(storageId);
  } else {
    if (storageId !== "rp") {
      const removeId = valueId.filter((id) => {
        return id !== storageId;
      });
      valueId = removeId;
    }
    if (storageId === "rp") removeAll(storageId);
  }
  setStorage(valueId);
  verification(checkbox);
}

function selectAll(id) {
  if (id == "rp") valueId = valueAll;
}

function removeAll(id) {
  if (id == "rp") {
    valueId = [];
    checkbox.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
}

function setStorage(storage) {
  const valueJson = JSON.stringify(storage);
  localStorage.setItem("valueId", valueJson);
}

function verification(checked) {
  const valueArray = JSON.parse(localStorage.getItem("valueId"));
  if (valueArray) valueId = valueArray;
  checked.forEach((checkedId) => {
    if (valueArray && valueArray.includes(checkedId.id)) {
      checkedId.checked = true;
    }
  });
}
