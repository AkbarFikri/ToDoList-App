const inputAkun = document.getElementById("input-box");
const listBox = document.getElementById("list-box");

function showInput() {
  if (inputAkun.value == "") {
    alert("Masukkan coy!");
  } else {
    const li = document.createElement("li");
    li.classList.add("list");
    li.innerHTML = inputAkun.value;
    listBox.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveData();
  }
  inputAkun.value = "";
  saveData();
}

listBox.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
  saveData();
});

function saveData() {
  localStorage.setItem("data", listBox.innerHTML);
}

function getData() {
  listBox.innerHTML = localStorage.getItem("data");
}

getData();
