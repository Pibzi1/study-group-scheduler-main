function createSession() {

    let course =
        document.getElementById("courseName").value;

    let date =
        document.getElementById("sessionDate").value;

    if(course === "" || date === ""){
        alert("Enter all fields");
        return;
    }

    let item =
        document.createElement("li");

    item.textContent =
        `${course} - ${date}`;

    document
        .getElementById("sessionList")
        .appendChild(item);

    alert("Study session created successfully!");
}