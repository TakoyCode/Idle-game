function statsView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="centerHorizontally">
            ${createNavBar()}
            ${createManaCounterHtml()}
    </div>
    `;
    app.innerHTML = html;
}