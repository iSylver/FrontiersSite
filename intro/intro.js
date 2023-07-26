function clickButton() {
    console.log(`Hello World`);
    const welcomeSite = document.getElementById("welcomeSite");
    welcomeSite.innerHTML = `It worked!`;
    welcomeSite.className = `myclass`;
    const bgcolor = document.getElementById("bgcolor")
    const body = document.body;
    body.style.backgroundColor = bgcolor.value;

    const testOne = document.getElementById("testOne");
    testOne.innerHTML = `Success`;
    testOne.className = `myclass`;
}