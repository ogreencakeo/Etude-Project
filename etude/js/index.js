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

// head Swpier
const swiperContainer = new Swiper(".header-swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

for (let i = 0; i < mainBanImg.length; i++) {
    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    const imgElement = document.createElement("img");
    imgElement.src = mainBanImg[i];

    swiperSlide.appendChild(imgElement);
    swiperContainer.appendSlide(swiperSlide);
}

swiperContainer.update(); // Swiper 업데이트

const etudeTit = document.querySelector('.header-swiper-container>h1');

setInterval(() => {
    titInterval();
}, 800);
function titInterval() {
    etudeTit.classList.toggle('on');
}


// main1

const shuffledData = main1Data.sort(() => Math.random() - 0.5);
const unipueImg = new Set();
const selectedData = shuffledData
    .filter((v) => {
        if (!unipueImg.has(v.img)) {
            unipueImg.add(v.img);
            return true;
        }
        return false;
    })
    .slice(0, 5);

const main1Bx = document.querySelector(".main1-wrap");

const main1RandomResult = selectedData.map(
    (v) =>
        `
        <div class='main1Bx'>
            <div class='main1Img' onClick="location.href='./sub.html'">
                <img src=${v.img} alt='메인이미지' />
            </div>
            <section>
                <p style='background: linear-gradient(to right, ${v.color}, #f74d52, yellow);' class='fas ${v.font}'>&nbsp;${v.cat}</p>
                <p>${v.txt}</p>
                <h2>${v.cont}</h2>
            </section>
        </div>
    `
);

main1Bx.innerHTML += main1RandomResult.join("");

// main2
const main2Img = [
    "../image/main/main2/img1.jpg",
    "../image/main/main2/img2.jpg",
    "../image/main/main2/img3.jpg"
];

const main_img_bx = document.querySelector(".main-img-bx");
const main_img = document.createElement("img");
main_img.classList.add("main-img");

const randomImg = Math.floor(Math.random() * 3);
main_img.setAttribute("src", main2Img[randomImg]);

main_img_bx.appendChild(main_img);

// main2 글자 등장
const main2Tit = document.querySelector('.main-title-bx>img');

const showTit = () => {
    const main2TitPosition = main2Tit.getBoundingClientRect().top;
    if (main2TitPosition < window.innerHeight) {
        main2Tit.classList.add('on')
    } else {
        main2Tit.classList.remove('on')
    }
};

window.addEventListener('scroll', showTit);

// main3
const main3Bx = document.querySelector(".main3-wrap");
temp = [];

main3Data.map((v, i) => {
    temp[i] = `
        <div class='main3-bx'>
            <div class='main3-img'>
                <img src=${v.img} alt=${v.cont}>
                <section>
                    <h2>${v.txt}</h2>
                    <h3>${v.cont}</h3>
                </section>
            </div>
        </div>
    `;
});

main3Bx.innerHTML += temp.join("");

const main3Img = document.querySelectorAll('.main3-bx');

const showMain3Img = () => {
    main3Img.forEach((v, i) => {
        const main3ImgPosition = v.getBoundingClientRect().top;
        if (main3ImgPosition < window.innerHeight) {
            // 0.15초 간격으로 나타나도록 setTimeout 사용
            setTimeout(() => {
                v.classList.add('on');
            }, i * 150);
        } else {
            v.classList.remove('on');
        }
    });
};

window.addEventListener('scroll', showMain3Img);

// main4
const main4Bx = document.querySelector(".main4-img-l");

temp = [];
main4Data.map((v, i) => {
    temp[i] = `
        <div class='main4Bx'>
            <div class='main4Bx-img' onmouseover="changeImgFn(${i})" onmouseout="restoreImgFn(${i})" onClick="location.href='./sub.html'">
                <img src=${v.img} alt='main4 이미지' id='image${i}' />
            </div>
            <section>
                <h2>${v.cont}</h2>
                <h1>${v.txt}</h1>
                <h2>${v.price}</h3>
            </section>
        </div>
    `;
});

main4Bx.innerHTML += temp.join("");

const changeImgFn = (index) => {
    const img = document.getElementById(`image${index}`);
    img.src = `../image/main/main4/${index + 1}-2.jpg`;
};

const restoreImgFn = (index) => {
    const img = document.getElementById(`image${index}`);
    img.src = main4Data[index].img;
};

// giftBx

const giftBx = document.querySelector(".gift-bx-wrap");
temp = [];
for (let i = 0; i < giftBxData.length; i++) {
    temp[i] = `
        <div class='gift-bx'>
            <img src=${giftBxData[i]} alt='선물이미지' />
        </div>
    `;
}

giftBx.innerHTML += temp.join("");

const giftBxShow = () => {
    const giftBxPosition = giftBx.getBoundingClientRect().top;
    if (giftBxPosition < window.innerHeight) {
        giftBx.classList.add('on');
    } else {
        giftBx.classList.remove('on');
    }
};

window.addEventListener('scroll', giftBxShow);

// whats new Swiper
const swiperContainer2 = new Swiper(".whats-new-swipe-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
});

// Swiper의 wrapper 요소 가져오기
const swiperWrapper = document.querySelector(".whats-new-swipe-container .swiper-wrapper");

// 각 상품에 대해 반복
whatsData.forEach((v, i) => {
    // Swiper 슬라이드 요소 생성
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");

    // 각 상품에 대한 HTML 내용 생성
    const content = `
            <div class='whats-swpie-bx'>
                <div  class="whats-img" onmouseover='changeImgFn2(${i})' onmouseout='restoreImgFn2(${i})' onClick="location.href='./sub.html'">
                    <img src="${v.img}" alt="${v.txt}" id='whatsImg${i}'>
                </div>
                <div class="whats-content">
                    <p>${v.cont}</p>
                    <h2>${v.txt}</h2>
                    <p><strong>${v.price}</strong>원</p>
                </div>
            </div>
    `;

    // Swiper 슬라이드에 HTML 내용 설정
    slide.innerHTML = content;

    // Swiper wrapper에 슬라이드 추가
    swiperWrapper.appendChild(slide);
});

const changeImgFn2 = (idx) => {
    const img = document.getElementById(`whatsImg${idx}`);
    img.src = `../image/main/whatsNew/${idx + 1}-2.jpg`;
};

const restoreImgFn2 = (idx) => {
    const img = document.getElementById(`whatsImg${idx}`);
    img.src = whatsData[idx].img;
};

// 슬라이드 추가 후 Swiper 업데이트
swiperContainer2.update();

// 미디어 쿼리
const mediaQuery = window.matchMedia("(max-width: 767px)");

// 미디어 쿼리 변경 사항 감지
function handleMediaQueryChange(event) {
    if (event.matches) {
        // 작은 화면에 대한 옵션
        swiperContainer2.params.slidesPerView = 2;
        swiperContainer2.params.spaceBetween = 5;
    } else {
        // 큰 화면에 대한 옵션
        swiperContainer2.params.slidesPerView = 4;
        swiperContainer2.params.spaceBetween = 10;
    }

    // 스와이퍼 업데이트
    swiperContainer2.update();
}

// 초기 호출
handleMediaQueryChange(mediaQuery);

// 미디어 쿼리 변경 시 이벤트 리스너 등록
mediaQuery.addListener(handleMediaQueryChange);

// sns 스와이퍼
const swiperContainer3 = new Swiper(".sns-bx2-swipe-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: "true",
});

for (let i = 0; i < snsData.length; i++) {
    const swiperSlide3 = document.createElement("div");
    swiperSlide3.classList.add("swiper-slide");

    const imgElement3 = document.createElement("img");
    imgElement3.src = snsData[i];

    swiperSlide3.appendChild(imgElement3);
    swiperContainer3.appendSlide(swiperSlide3);
}

swiperContainer3.update(); // Swiper 업데이트

const snsBar = document.querySelector('.pink-bg');

const snsBarShow = () => {
    const snsBarPosition = snsBar.getBoundingClientRect().top;
    if (snsBarPosition < window.innerHeight) {
        snsBar.classList.add('on');
    } else {
        snsBar.classList.remove('on');
    }
};

window.addEventListener('scroll', snsBarShow);

const snsBxWrap = document.querySelector('.sns-bx-wrap');

const snsBxWrapShow = () => {
    const snsBxWrapPosition = snsBxWrap.getBoundingClientRect().top;
    if (snsBxWrapPosition < window.innerHeight) {
        snsBxWrap.classList.add('on');
    } else {
        snsBxWrap.classList.remove('on');
    }
};

window.addEventListener('scroll', snsBxWrapShow);

// news-event Swiper
const swiperContainer4 = new Swiper(".news-event-swipe-container", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
        el: "swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Swiper의 wrapper 요소 가져오기
const swiperWrapper4 = document.querySelector(".news-event-swipe-container .swiper-wrapper");

// 각 상품에 대해 반복
newsEventData.forEach((item, index) => {
    // Swiper 슬라이드 요소 생성
    const slide4 = document.createElement("div");
    slide4.classList.add("swiper-slide");

    // 각 상품에 대한 HTML 내용 생성
    const content4 = `
            <div class='evnet-swipe-bx'>
                <img src=${item.img} alt=${item.txt}>
            </div>
    `;

    // Swiper 슬라이드에 HTML 내용 설정
    slide4.innerHTML = content4;

    // Swiper wrapper에 슬라이드 추가
    swiperWrapper4.appendChild(slide4);
});

// 슬라이드 추가 후 Swiper 업데이트
swiperContainer4.update();

// // 미디어 쿼리
const mediaQuery2 = window.matchMedia("(max-width: 767px)");
function handleMediaQueryChange2(event) {
    if (event.matches) {
        // 작은 화면에 대한 옵션
        swiperContainer4.params.slidesPerView = 2;
        swiperContainer4.params.spaceBetween = 5;
    } else {
        // 큰 화면에 대한 옵션
        swiperContainer4.params.slidesPerView = 4;
        swiperContainer4.params.spaceBetween = 10;
    }

    // 스와이퍼 업데이트
    swiperContainer4.update();
}

// 초기 호출
handleMediaQueryChange2(mediaQuery2);

// 미디어 쿼리 변경 시 이벤트 리스너 등록
mediaQuery2.addListener(handleMediaQueryChange2);

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
const hamBnt = document.querySelector('.main-wrap .hambtn button');
const showNav = () => {
    if (hamBnt) {
        hambtnNav.classList.toggle('on');
        hamBnt.classList.toggle('click');
    }
};

hamBnt.addEventListener('click', showNav);