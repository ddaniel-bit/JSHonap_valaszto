function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

function generate() {
    const monthSelect = document.getElementById("honapok").value;
    const tableContainer = document.getElementById("table-container");

    // Hónapok számai (január = 1, február = 2, stb.)
    const months = {
        januar: 1,
        februar: 2,
        marcius: 3,
        aprilis: 4,
        majus: 5,
        junius: 6,
        julius: 7,
        augusztus: 8,
        szeptember: 9,
        oktober: 10,
        november: 11,
        december: 12
    };

    if (!monthSelect) {
        tableContainer.innerHTML = "";
        return;
    }

    // Aktuális év
    const year = new Date().getFullYear();
    const daysInMonth = getDaysInMonth(months[monthSelect], year);

    let table = "<table><tr><th>Nap</th><th>Bevitel</th></tr>";

    for (let day = 1; day <= daysInMonth; day++) {
        table += `<tr><td>${day}</td><td><input type="text" name="input${day}" /></td></tr>`;
    }

    table += "</table>";

    tableContainer.innerHTML = table;
}