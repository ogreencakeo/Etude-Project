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
}).join('');

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
    if (scrollBtn) {
        if (scrollPostion > 2000) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }

    // return(()=> {window.removeEventListener('scroll', topBtnShow)});
};

window.addEventListener('scroll', topBtnShow);

// Top 버튼 클릭시 위로 올라가게 하기
const topBtnScroll = () => {
    window.scrollTo(0, 0);
};

scrollBtn.addEventListener('click', topBtnScroll);


// 맞춤서비스
const customizedService = document.querySelector('.customized-service-bx-r');
temp = [];

customized.map((v, i) => {
    temp[i] = `
        <div class='customized-service-cont'>
            <p class="${v.icon}"></p>
            <p>${v.title}</p>
            <p>${v.txt}</p>
            <p>${v.subtxt? v.subtxt : ''}</p>
        </div>
    `
}); 

customizedService.innerHTML += temp.join('');

// 모델 배너 문구 setTimeOut으로 설정함
const facotryBannerCont = document.querySelector('.factory-banner-cont p span:last-child');
const bannerTxt = [
    '21C1',
    '21.5N1',
    '13.5C2', 
    '17.5W1'
];
let index = 0;

setInterval(()=>{
    index = index + 1;
    if(index >= bannerTxt.length) index = 0;
    facotryBannerCont.innerHTML = bannerTxt[index];
},300);

// 버튼 클릭시 색상변경
const tgBtn = document.querySelectorAll('.factory-select-option button');
tgBtn.forEach((v)=>{
    v.addEventListener('click', function(){
        tgBtn.forEach((j) => {
            j.classList.remove('on');
        });
        v.classList.add('on');
    });
});

tgBtn[0].click();

// 나만의 파운데이션 만들기
const makeOwnWrap = document.querySelector('.make-own-bx-wrap');
temp = [];
makeOwnData.map((v, i) => {
    temp[i] = `
        <div class='make-own-bx'>
            <img src = "${v.img}" alt="${v.txt}" />
            <div class='make-own-cont'>
                <p>${v.txt.split('^')[0]}</p>
                <p>${v.txt.split('^')[1]}</p>
                <p>${v.txt.split('^')[2]}</p>
            </div>
        </div>
    `
});

makeOwnWrap.innerHTML += temp.join('');

// 팩토리 - 상점 위치
// 맞춤서비스
const storePosition = document.querySelector('.store-position-bx-r');
temp = [];

storePositionData.map((v, i) => {
    temp[i] = `
        <div class='store-position-cont'>
            <p class="${v.icon}"></p>
            <p>${v.title}</p>
            <p>${v.txt}</p>
            <p>${v.subtxt? v.subtxt : ''}</p>
        </div>
    `
}); 

storePosition.innerHTML += temp.join('');

// 팩토리 둘러보기
const takeTour = document.querySelector('.factory-take-tour');
temp = [];
for(let i=0; i<takeTourData.length; i++){
    temp[i] = `
        <div class='factory-take-tour-bx'>
            <img src="${takeTourData[i]}" alt="파운데이션팩토리 이미지"/>
        </div>
    `
}

takeTour.innerHTML += temp.join('');

// 팩토리 - 공지
const storeNotice = document.querySelector('.store-notice-bx');
temp = [];

for(let i=0; i<factoryNoticeData.length; i++){
    temp[i] =  `
        <div class='store-notice-cont'>
            <ul>
                <li>${factoryNoticeData[i]}</li>
            </ul>
        </div>
    `;
}

storeNotice.innerHTML += temp.join('');


// 스크롤 내릴시 애니메이션
const storeNoticeBx = document.querySelector('.store-notice-bx');
const modelImg = document.querySelector('.factory-model-img>img');
const makeOwnBx = document.querySelectorAll('.make-own-bx');
const FactorytakeTour = document.querySelectorAll('.factory-take-tour-bx');
const mapImg = document.querySelector('.factory-map-img>img');


const showModelImg = (txt) => {
    const tgPosition = txt.getBoundingClientRect().top;
    if(tgPosition <  window.innerHeight){
        txt.classList.add('on');
    }else{
        txt.classList.remove('on');
    }
};

const aniFn = (txt) => {
    setTimeout(()=>{
        txt.classList.add('on');
    },1000)
};

const showBoxes = (txt) => {
    txt.forEach((v)=>{
        const tgPosition = v.getBoundingClientRect().top;
        if(tgPosition < window.innerHeight){
            v.classList.add('on');
        }else{
            v.classList.remove('on');
        }
    });
}

window.addEventListener('scroll', ()=>showModelImg(storeNoticeBx));
window.addEventListener('scroll', ()=>showModelImg(mapImg));
window.addEventListener('scroll', ()=>aniFn(modelImg));
window.addEventListener('scroll', ()=>showBoxes(makeOwnBx));
window.addEventListener('scroll', ()=>showBoxes(FactorytakeTour));

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
const hamBnt = document.querySelector('.foundation-factory-wrap .hambtn button');
const showNav = () => {
    if (hamBnt) {
        hambtnNav.classList.toggle('on');
        hamBnt.classList.toggle('click');
    }
};

hamBnt.addEventListener('click', showNav);