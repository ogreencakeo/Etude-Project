const hamBnt = document.querySelector('.hambtn button');
const hambtnNav = document.querySelector(".hambtn-nav-wrap");

console.log(hamBnt);
const showNav = () => {
    event.stopPropagation();
    if(hamBnt){
        console.log('hihi');
        hambtnNav.classList.toggle('on');
    }
};

hamBnt.addEventListener('click', showNav);

let temp = [];
for (let i = 0; i < navData.length; i++) {
    temp[i] = `
        <li>
            <a href="#">
                ${navData[i]}
            </a>
        </li>
    `;
}
hambtnNav.innerHTML += temp.join("");