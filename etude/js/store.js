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

// store - 컨텐츠
const storeContent = document.querySelector('.store-content');

temp = [];
storeData.map((v, i) => {
    temp[i] = `
        <div class='store-content-bx'>
            <div class='store-img'>
                <img src="${v.img}" alt="${v.title}" />
            </div>
            <div class='store-cont'>
                <p>${v.title}</p>
                <p>${v.txt}</p>
            </div>
        </div>
    `
});

storeContent.innerHTML += temp.join('');


// setTimeOut 주기
const storeNoticeCont = document.querySelectorAll('.store-content-bx');

storeNoticeCont.forEach((v, i) => {
    setTimeout(()=>{
        v.classList.add('on');
    }, i*500);
});



// store - 공지
const storeNotice = document.querySelector('.store-notice-bx');
temp = [];

for(let i=0; i<storeNoticeData.length; i++){
    temp[i] =  `
        <div class='store-notice-cont'>
            <ul>
                <li>${storeNoticeData[i]}</li>
            </ul>
        </div>
    `;
}

storeNotice.innerHTML += temp.join('');

// 스크롤 내릴시 공지 애니메이션
const storeNoticeBx = document.querySelector('.store-notice-bx');

const showNotice = () => {
    const storeNoticeBxPosition = storeNoticeBx.getBoundingClientRect().top;
    if(storeNoticeBxPosition < window.innerHeight){
        storeNoticeBx.classList.add('on');
    }else{
        storeNoticeBx.classList.remove('on');
    }
};

window.addEventListener('scroll', showNotice);

// 버튼 색상 변경
const noticeBtn = document.querySelectorAll('.mebership-select-bx button');

noticeBtn.forEach((v)=>{
    v.addEventListener('click', function(){
        noticeBtn.forEach((j) => {
            j.classList.remove('on');
        })
        v.classList.add('on');
    })
});

noticeBtn[0].click();



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
const hamBnt = document.querySelector('.store-wrap .hambtn button');
const showNav = () => {
    if (hamBnt) {
        hambtnNav.classList.toggle('on');
        hamBnt.classList.toggle('click');
    }
};

hamBnt.addEventListener('click', showNav);
