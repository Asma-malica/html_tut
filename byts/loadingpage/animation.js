function main() {
    console.log("hello")
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => {
            obj = document.getElementById('status-bar');
            obj.style.width = i + "%";
            console.log(i)
        }, 50 * i);
    }
}

setTimeout(main, 2000);