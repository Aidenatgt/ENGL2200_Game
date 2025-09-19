document.addEventListener("DOMContentLoaded", async () => {
  console.log("JS is working!");
  const states = await (await fetch("states.json")).json();
  async function set_state(state) {
    console.log("code running");
    let div = document.createElement("div");
    let state_def = states[state];
    let header = document.createElement("h1");
    header.innerHTML = state_def.prompt;
    div.appendChild(header);
    console.log(state_def);

    for (option of state_def.options) {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = option.title;
      div.appendChild(paragraph);
    }

    document.getElementById("root").appendChild(div);
  }
  set_state("START");
});
