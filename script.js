const contentEl = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  contentEl.innerHTML = `
   <div class="mouse_event">
        ${event.clientX}
        <h4>Mouse x Position(px)</h4>
      </div>
      <div class="mouse_event">
        ${event.clientY}
        <h4>Mouse x Position(px)</h4>
      </div>`;
});
