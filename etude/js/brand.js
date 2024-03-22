window.onload = function () {
    window.scrollTo(0, 0);
};

// 네비 리스트
const navList = document.querySelector(".nav-wrap ul");

let temp = [];
navData.map((v, i) => {
    temp[i] = `
        <li>
            <a href=${v.link}>
                ${v.txt}
            </a>
        </li>
    `
});


navList.innerHTML += temp.join("");

// 네비 스크롤 내리시 hide 처리하기
let lastPosiont = 0;
const nav = document.querySelector(".nav-wrap");

const handleSroll = () => {
    let scrollPostion = window.scrollY || window.pageYOffset;
    console.log(scrollPostion);
    if (scrollPostion > lastPosiont) {
        nav.classList.add("hide");
        console.log("hi");
    } else {
        nav.classList.remove("hide");
    }
    lastPosiont = scrollPostion;
};

window.addEventListener("scroll", handleSroll);

// 스크롤시 Top 버튼 생기게 하기 
const scrollBtn = document.querySelector('.scroll-btn');
console.log('scrollBtn :', scrollBtn);


const topBtnShow = () => {
    const scrollPostion = window.scrollY || window.pageYOffset;
    if(scrollBtn){
        if(scrollPostion > 2000){
            scrollBtn.style.display = 'block';
        }else{
            scrollBtn.style.display = 'none';
        }
    }
};

window.addEventListener('scroll', topBtnShow);

// Top 버튼 클릭시 위로 올라가게 하기
const topBtnScroll = () => {
    window.scrollTo(0, 0);
};

scrollBtn.addEventListener('click', topBtnScroll);


// 텍스트 0.5초 후 보이게하기

const logo = document.querySelector('.brand-div1-img2>img');
setTimeout(() => {
    logo.classList.add('on');
}, 500);



// 스크롤 이벤트
const upBrandDiv = document.querySelector('.brand-div-wrap2');
const upBrandBx = document.querySelectorAll('.brand-div-wrap2>div');

const showUpToBrandCont = () => {
    const upBrandDivPosition = upBrandDiv.getBoundingClientRect().top;
    upBrandBx.forEach((v) => {
        if (upBrandDivPosition < window.innerHeight) {
            v.classList.add('on');
        } else {
            v.classList.remove('on');
        }
    });
};

window.addEventListener('scroll', showUpToBrandCont);

const div3Left = document.querySelector('.brand-div3-left');
const div3Right = document.querySelector('.brand-div3-right');
const div4Wrap = document.querySelector('.brand-div-wrap4>div>img');
const div5Bottom = document.querySelector('.brand-di5-bottom>div>img');
const div6Img = document.querySelector('.brand-div6-img>img');

const showDiv3Img = (txt) => {
    const div3WrapPosition = txt.getBoundingClientRect().top;
    if (div3WrapPosition < window.innerHeight) {
        txt.classList.add('on');
    } else {
        txt.classList.remove('on');
    }
};

window.addEventListener('scroll', () => showDiv3Img(div3Left));
window.addEventListener('scroll', () => showDiv3Img(div3Right));
window.addEventListener('scroll', () => showDiv3Img(div4Wrap));
window.addEventListener('scroll', () => showDiv3Img(div5Bottom));
window.addEventListener('scroll', () => showDiv3Img(div6Img));

const div5TopWrap = document.querySelector('.brand-di5-top');
temp = [];
let sTemp = [];

const makeCode = (data) => {
    for(let i=0; i<data.length; i++){
        sTemp[i] = `
            <p><span class="fa-regular fa-face-smile"></span> ${data[i]}</p>
        `
    }
    return sTemp;
};


mainBlock5.map((v, i) =>
    temp[i] = `
    <div class = 'box-icon-wrap'>
        <div class='box-icon-img'>
            <img src="${v.img}" />
        </div>
        <div class = 'box-icon-content'>
            <div>
                <span class='box-icon-txtTitle'>${v.txtTitle}</span>
                <span  class='box-icon-txtSubTitle'>${v.txtSubTitle}</span>
            </div>
            <div class='box-icon-cont-bx'>
                ${makeCode(v.txt).join('')}
            </div>
        </div>
    </div>
`).join('');

div5TopWrap.innerHTML += temp.join('');


const boxIcon = document.querySelectorAll('.box-icon-wrap');
const middleImg = document.querySelectorAll('.brand-di5-middle>div>img');
const showBoxIcon = (txt) => {
    // boxIcon.forEach((v, i) => {
    txt.forEach((v) => {
        const boxIconPosition = v.getBoundingClientRect().top;
        if(boxIconPosition < window.innerHeight){
            v.classList.add('on');
        }else{
            v.classList.remove('on');
        }
    });
};

window.addEventListener('scroll', ()=>showBoxIcon(boxIcon));
window.addEventListener('scroll', ()=> showBoxIcon(middleImg));


// 햄버거 nav
const hambtnNav = document.querySelector('.hambtn-wrap');
temp = [];
navData.map((v, i) => {
    temp[i] = `
        <li>
            <a href=${v.link}>
                ${v.txt}
            </a>
        </li>
    `
}).join('');
hambtnNav.innerHTML += temp.join('');
hambtnNav.innerHTML += "<img src='../image/logo.png' alt = '로고이미지' onClick='location.href=\"./index.html\"' />";

// 햄버거 토글
const hamBnt = document.querySelector('.brand-page-wrap .hambtn button');
const showNav = () => {
    if (hamBnt) {
        hambtnNav.classList.toggle('on');
        hamBnt.classList.toggle('click');
    }
};

hamBnt.addEventListener('click', showNav);


