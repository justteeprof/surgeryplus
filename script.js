const studyBtn = document.querySelector(".on");
const testBtn = document.querySelector(".off");

studyBtn.addEventListener("click", () => {
    studyBtn.classList.add("on");
    testBtn.classList.remove("on");
    testBtn.classList.add("off");
});

testBtn.addEventListener("click", () => {
    testBtn.classList.remove("off");
    testBtn.classList.add("on");
    studyBtn.classList.remove("on");
    studyBtn.classList.add("off");
});
