let menu = JSON.parse(localStorage.getItem("menu")) || [];

// نمایش محصولات
function render() {
    let box = document.getElementById("menu");
    box.innerHTML = "";

    menu.forEach((item) => {
        box.innerHTML += `
        <div class="card">
            <img src="${item.img}">
            <div class="info">
                <p>${item.name}</p>
                <span>${item.price} تومان</span>
            </div>
        </div>`;
    });
}

render();

// باز کردن پنل
function openPanel() {
    document.getElementById("panel").style.display = "block";
}

// بستن پنل
function closePanel() {
    document.getElementById("panel").style.display = "none";
}

// ورود به پنل
function login() {
    if (document.getElementById("pass").value === "4030") {
        document.getElementById("adminArea").style.display = "block";
    } else {
        alert("رمز اشتباه است");
    }
}

// افزودن محصول
function addItem() {

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let file = document.getElementById("img").files[0];

    if (!name || !price || !file) {
        alert("نام، قیمت و عکس را وارد کنید");
        return;
    }

    let reader = new FileReader();

    reader.onload = function () {

        menu.push({
            name: name,
            price: price,
            img: reader.result
        });

        localStorage.setItem("menu", JSON.stringify(menu));

        render();

        document.getElementById("name").value = "";
        document.getElementById("price").value = "";
        document.getElementById("img").value = "";
    };

    reader.readAsDataURL(file);
}
