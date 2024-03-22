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

// 정렬
const priceOrder = document.querySelector('#priceOrder');


// 상품 결과 박스
function showProduct(category){
    
    const product = productData[category];
    const resultBx = document.querySelector('.product-option-result');

    // 결과박스 비우기
    resultBx.innerHTML = '';

    product.forEach((v)=>{
        const productBx = document.createElement('div');
        productBx.innerHTML = `
            <div class='product-result-img'>
                <img src="${v.img}"  alt = "${v.title}" onClick="location.href='./sub.html'" />
            </div>
            <div class='product-result-content'>
                <p>${v.hashtag}</p>
                <p>${v.title}</p>
                <p><b>${Number(v.price).toLocaleString()}</b> 원</p>
            </div>
        `;

        resultBx.append(productBx);
    });

    // 개수 반영
    const categoryLength = document.querySelector('.product-length h3');
    categoryLength.innerHTML = `총 ${product.length}개`;

    // 배경색 변경

    const productBg = document.querySelector('.product-main-left');

    productBg.classList.remove('eye', 'lip', 'face', 'hair', 'tool')

    if (category === 'eye') {
        productBg.classList.add('eye');
    }else if (category === 'lip'){
        productBg.classList.add('lip');
    }else if(category === 'face'){
        productBg.classList.add('face');
    }else if(category === 'hair'){
        productBg.classList.add('hair');
    }else if(category === 'tool'){
        productBg.classList.add('tool');
    }

    // 정렬 함수
    priceOrder.addEventListener('change', function(){
        let optVal = this.value;
        if(optVal == 'highToLow'){
            product.sort((a, b) => (a.price == b.price) ? 0 : a.price > b.price? -1 : 1);
        }else if(optVal == 'lowToHigh'){
            product.sort((a, b) => (a.price == b.price) ? 0 : a.price > b.price? 1 : -1);
        }

        console.log(product);
         // 정렬된 데이터를 화면에 반영
        showProduct(category);
        
    });

}

// 윈도우 로딩 시 아이 버튼 클릭
window.onload = function() {
    document.getElementById('eyeBtn').click();
    
};

// 클릭시 색상변경
const productBtn = document.querySelectorAll('.product-category-option button');

productBtn.forEach((v) => {
    v.addEventListener('click', function(){
        priceOrder.value = 'sortOrder';
        productBtn.forEach((btn) => {
            btn.classList.remove('on');
        });
        v.classList.add('on');
    });
});


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
const hamBnt = document.querySelector('.product-wrap .hambtn button');
const showNav = () => {
    if (hamBnt) {
        hambtnNav.classList.toggle('on');
        hamBnt.classList.toggle('click');
    }
};

hamBnt.addEventListener('click', showNav);