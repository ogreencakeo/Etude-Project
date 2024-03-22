window.onload = function () {
    window.scrollTo(0, 0);
};
// 네비 리스트
const navList = document.querySelector(".nav-wrap ul");
console.log(navList);

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


// 틴트 모달창
const tintBx = document.querySelector(".sub-option-bx-wrap");

temp = [];

for (let i = 0; i < tintData.length; i++) {
    temp[i] = `
        <div class='tint-bx' onclick="showTintFn('${tintData2[i].img}', '${tintData2[i].txt}', '${tintData2[2].price}' )">
            <img src=${tintData[i]} alt='틴트이미지' />
        </div>
    `;
}

tintBx.innerHTML += temp.join("");

const showTintFn = (modalImg, modalTxt, modalPrice) => {
    const TintTxt = document.querySelector(".modal-content h1");
    const TintPrice = document.querySelector(".modal-content h2");
    const TintImg = document.querySelector(".modal-content img");

    TintTxt.textContent = modalTxt;
    TintPrice.textContent = modalPrice;
    TintImg.src = modalImg;
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".sub-btn-bx").style.display = "none";
};

document.querySelector(".close-btn").onclick = function () {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".sub-btn-bx").style.display = "block";
};

// 서브 - 왼쪽 하단 서브 사진 클릭시 해당 사진 보이기
const subImg = document.querySelector('.sub-l-img');

const subSubImg = document.querySelectorAll('.sub-l-sub-img img');

const changeSubImg = (event) => {
    const clickedSubImg = event.target;
    subImg.querySelector('img').src = clickedSubImg.src;
    subSubImg.forEach(ele => ele.classList.remove('click'));
    clickedSubImg.classList.add('click');
    
};

subSubImg.forEach((ele)=>{
    ele.addEventListener('click', changeSubImg);
});

// 맨 처음 사진이 로딩될때 클릭되게 하는 부분
subSubImg[0].click();

// 서브 - 상세페이지
const detailPage = document.querySelector(".sub-explanation-bx1");

temp = [];
for (let i = 0; i < explanData.length; i++) {
    temp[i] = `
        <img src=${explanData[i]} alt='상세페이지 이미지' />
    `;
}
detailPage.innerHTML += temp.join("");

// 서브 페이지 더보기 / 닫기 버튼 클릭시
const subBx1Btn = document.querySelector(".sub-bx1-btn button");
const subBx1Wrap = document.querySelector(".sub-explanation-bx1");

subBx1Btn.onclick = function () {
    subBx1Wrap.classList.toggle("on");

    const icon = subBx1Btn.querySelector(".fa-solid");
    icon.classList.toggle("fa-caret-down");
    icon.classList.toggle("fa-caret-up");

    const spanEle = subBx1Btn.querySelector("span:first-child");
    spanEle.textContent = subBx1Wrap.classList.contains("on") ? "닫기" : "더보기";
};

// 서브 - 진성품, 상품정보
const subBx2Wrap = document.querySelector(".sub-explanation-bx2-wrap");

temp = [];

const makeCode = (data) => {
    const split_data = [];
    const make_split = data.split("^");
    console.log(make_split);
    for (let i = 0; i < make_split.length; i++) {
        split_data[i] = `
            <p>${make_split[i]}</p>
        `;
    }
    return split_data;
};

productInfo.map((v, i) => {
    temp[i] = `
        <div class='sub-product-info-bx'>
            <div class='product-info1'>
                <p>${v.txt}</p>
            </div>
            <div class='product-info2 info2-${i + 1}'>
                ${v.cont.indexOf("^") !== -1 ? makeCode(v.cont).join("") : `<p>${v.cont}</p>`}
            </div>
        </div>
    `;
});

subBx2Wrap.innerHTML += temp.join("");



// 현재 클릭 상태 (0-사용안함, 1- 사용함)
let stsClick = 0; 
let btnScrollY;

const subBtn = document.querySelectorAll(".subBtn");
console.log("subBtn : ", subBtn);

const subBtn1 = document.querySelector('#sub-bx1').getBoundingClientRect().top; // 진성품
const subBtn2 = document.querySelector('#sub-bx2').getBoundingClientRect().top; // 상품정보
const subBtn3 = document.querySelector('#recommended-product').getBoundingClientRect().top; // 추천제품

// 서브 - 진성품, 상품정보, 추천제품 스크롤시 색상 변경
const goExplanationArea = () => {
    if(stsClick) return;
    btnScrollY = window.pageYOffset 
    if(btnScrollY > 0 && btnScrollY < subBtn2){
        subBtn.forEach((ele) => ele.classList.remove('redBtn'));
        subBtn[0].classList.add('redBtn');
    }else if(btnScrollY >= subBtn2 && btnScrollY < subBtn3){
        subBtn.forEach((ele) => ele.classList.remove('redBtn'));
        subBtn[1].classList.add('redBtn');
    }else if(btnScrollY >= subBtn3){
        subBtn.forEach((ele) => ele.classList.remove('redBtn'));
        subBtn[2].classList.add('redBtn');
    }
};

window.addEventListener('scroll', goExplanationArea);
window.addEventListener('wheel', ()=>{stsClick=0});

// 서브 - 진성품, 상품정보, 추천제품 - 클릭시 색상 변경
const colorChange = (event) => {
    stsClick = 1;
    const clickedElement = event.target;
    // event.preventDeafault();

    // 클릭된 요소가 subBtn에 포함된 것인지 확인
    if (Array.from(subBtn).includes(clickedElement)) {
        console.log('hi click')
        // 클릭된 요소에 "redBtn" 클래스를 추가하고 나머지 요소들에서는 제거
        subBtn.forEach((x) => {x.classList.remove("redBtn")});
        clickedElement.classList.add("redBtn");
    }
}



// 추천제품
const recommended_bx = document.querySelector(".recommended-bx-wrap");

temp = [];
recommendedData.map((v, i) => {
    temp[i] = `
        <div class='recommended-bx'>
            <div class='recommended-bx-img' onmouseover='productImgFn(${i})' onmouseout='restoreProductFn(${i})'>
                <img src=${v.img} alt=${v.txt} id='product-img-${i}' />
            </div>
            <h2>${v.txt}</h2>
            <h3>${v.price}</h3>
        </div>
    `;
});

recommended_bx.innerHTML += temp.join("");

const productImgFn = (idx) => {
    const imgEle = document.getElementById(`product-img-${idx}`);
    imgEle.src = `../image/sub/recommended/${idx + 1}-2.jpg`;
};

const restoreProductFn = (idx) => {
    const imgEle = document.getElementById(`product-img-${idx}`);
    imgEle.src = recommendedData[idx].img;
};



// 햄버거 nav

const hambtnNav = document.querySelector(".hambtn-wrap");
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
const hamBnt = document.querySelector('.sub-wrap .hambtn button');

console.log(hamBnt);
const showNav = () => {
    if(hamBnt){
        hambtnNav.classList.toggle('on');
        hamBnt.classList.toggle('click');
    }
};

hamBnt.addEventListener('click', showNav);