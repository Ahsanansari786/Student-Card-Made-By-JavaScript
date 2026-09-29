var container = document.getElementById("container");


var card = document.createElement("div");
card.classList.add("card", "shadow-sm", "rounded-4", "p-3", "border-0");
card.style.width = "300px";


var image = document.createElement("img");
image.src = "https://static.vecteezy.com/system/resources/previews/024/724/633/non_2x/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.png";
image.classList.add("card-img-top", "rounded-3", "mb-3");
image.style.height = "240px";
image.style.objectFit = "cover";


var headerRow = document.createElement("div");
headerRow.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-2");


var StudentName = document.createElement("h5");
StudentName.innerText = "Muhammad Umar";
StudentName.classList.add("h5", "fw-bold", "mb-0", "text-dark");


var roll = document.createElement("span");
roll.innerText = "Roll: 020934";
roll.classList.add("badge", "bg-secondary", "px-2", "py-2", "rounded-2", "fw-semibold");

headerRow.appendChild(StudentName);
headerRow.appendChild(roll);


var description = document.createElement("p");
description.innerText = "Creative web developer learning frontend skills.";
description.classList.add("card-text", "text-muted", "small", "mb-4");


var button = document.createElement("button");
button.innerText = "View details";
button.classList.add("btn", "btn-success", "w-100", "rounded-3", "fw-semibold", "py-2");


card.appendChild(image);
card.appendChild(headerRow);
card.appendChild(description);
card.appendChild(button);

container.appendChild(card);