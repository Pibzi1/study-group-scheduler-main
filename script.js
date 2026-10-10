function createSession() {

    let course =
        document.getElementById("courseName").value;

    let date =
        document.getElementById("sessionDate").value;

    let list =
        document.getElementById("sessionList");

    let item =
        document.createElement("li");

    item.textContent =
        course + " - " + date;

    list.appendChild(item);
}