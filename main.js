const info = {
  neck: ["Neck and shoulder pain", "Often linked to desk posture, sleep position or a past injury. We check joint movement and muscle control, then treat and give you a short home routine.", "Typical plan: 4 to 6 visits"],
  back: ["Lower back pain", "Most back pain improves with the right movement and loading. We find the trigger and build you back up gradually.", "Typical plan: 3 to 6 visits"],
  knee: ["Knee pain", "From runner's knee to ligament repair, we test strength and landing control and set clear goals for return to sport.", "Typical plan: 6 to 10 visits"],
  foot: ["Foot and ankle", "Sprains, plantar fasciitis and Achilles trouble. We treat the area and review your footwear and training load.", "Typical plan: 3 to 8 visits"]
};
const chips = document.querySelectorAll(".chip");
const answer = document.getElementById("answer");
function show(key) {
  const [title, text, plan] = info[key];
  answer.innerHTML = "";
  [["h3", title], ["p", text], ["p", plan]].forEach(([tag, t]) => {
    const el = document.createElement(tag);
    el.textContent = t;
    if (t === plan) el.style.fontWeight = "600";
    answer.appendChild(el);
  });
}
chips.forEach(c => c.addEventListener("click", () => {
  chips.forEach(x => x.setAttribute("aria-pressed", x === c));
  show(c.dataset.area);
}));
show("neck");

document.getElementById("form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, msg = document.getElementById("msg");
  if (!f.name.value.trim() || !f.email.validity.valid) {
    msg.textContent = "Enter your name and a valid email address.";
    return;
  }
  msg.textContent = "Request sent. We will reply within one working day.";
  f.reset();
});
