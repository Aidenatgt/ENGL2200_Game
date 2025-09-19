document.addEventListener("DOMContentLoaded", async () => {
  const states = await (await fetch("states.json")).json();

  async function set_state(state) {
    console.log("Setting state:", state);

    let root = document.getElementById("root");
    for (child of root.children) {
      root.removeChild(child);
    }

    let div = document.createElement("div");
    let state_def = states[state];
    let header = document.createElement("h2");
    header.innerHTML = state_def.prompt;
    div.appendChild(header);
    console.log(state_def);

    for (option of state_def.options) {
      let button = document.createElement("button");
      button.id = option.next;
      button.innerHTML = option.title;
      button.addEventListener("click", async () => {
        await set_state(button.id);
      })
      div.appendChild(button);
    }

    root.appendChild(div);
  }

  set_state("START");
});
