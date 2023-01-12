function Validation(event) {
    event.preventDefault();
    var mobile = {};
    var a = document.getElementById("name").value;
    var b = document.getElementById("model").value;
    var c = document.getElementById("ram").value;
    var d = document.getElementById("memory").value;
    var e = document.getElementById("price").value;

    if (a === "" | b === "" | c === "" | d === "" | e === "") {
        window.alert("This Field should Be Filled");
    }

    else {
        window.alert("Successfully Mobile is Added");
    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    mobile.name = a;
    mobile.model = b;
    mobile.ram = c;
    mobile.memory = d;
    mobile.price = e;
    console.log(mobile);


}