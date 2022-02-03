const choices = document.querySelectorAll(".choice");
const list_items = Array.from(document.querySelectorAll("li"));

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    let chosen_value = e.target.value;
    list_items.filter((li) => {
      const li_type = li.querySelector("p").innerText;

      if (li_type !== chosen_value) {
        li.classList.add("hidden");
      } else {
        li.classList.remove("hidden");
      }

      if (chosen_value == "all_animals") {
        li.classList.remove("hidden");
      }
    });
  });
});
