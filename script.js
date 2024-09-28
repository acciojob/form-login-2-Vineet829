function result(event) {
    event.preventDefault();
    let form = document.getElementById("form");
    let arr = [];
    for (let element of form.elements) {
        if (element.type !== "submit") {
            let label = document.querySelector(`label[for="${element.id}"]`);
            if (label) {
                arr.push(`${label.innerText} ${element.value}`);
            } else {
                arr.push(`No label for ${element.id} ${element.value}`);
            }
        }
    }
    alert(arr.join(" "));
}

