const navData = [
    {
        txt : 'PRODUCT',
        link : './product.html'
    },
    {
        txt : 'BRAND',
        link : './brand.html'
    },
    {
        txt : 'MAKEUP LOOK',
        link : './makeup_look.html'
    },
    {
        txt : 'STORE',
        link : './store.html'
    },
    {
        txt : 'FOUNDATION FACTORY',
        link : './foundation_factory.html'
    },
];

const productData = {
    'eye' : [
        {
            img : '../image/product/eye/1-1.jpg',
            img2 : '../image/product/eye/1-2.jpg',
            title : '모노 아이즈 1.2g~',
            hashtag : '#데일리 #톤온톤무드',
            price : 5000
        },
        {
            img : '../image/product/eye/2-1.jpg',
            img2 : '../image/product/eye/2-2.jpg',
            title : '플레이 컬러 아이즈 #럽트루 6.6g',
            hashtag : '#무신사단독 #에뛰드X러브이즈트루',
            price : 28000
        },
        {
            img : '../image/product/eye/3-1.jpg',
            img2 : '../image/product/eye/3-2.jpg',
            title : '플레이 컬러 아이즈 #더스티 캣 7.2g',
            hashtag : '#리얼쿨톤',
            price : 25000
        },
        {
            img : '../image/product/eye/4-1.jpg',
            img2 : '../image/product/eye/4-2.jpg',
            title : '오 마이 래쉬 쌩얼 카라 7ml',
            hashtag : '#또렷한눈매',
            price : 9000
        },
        {
            img : '../image/product/eye/5-1.jpg',
            img2 : '../image/product/eye/5-2.jpg',
            title : '슈퍼 슬림 프루프 펜슬 라이너 0.08g',
            hashtag : '#1.5mm #펜슬',
            price : 9000
        },
        {
            img : '../image/product/eye/6-1.jpg',
            img2 : '../image/product/eye/6-2.jpg',
            title : '베어 엣지 브로우 픽서 7g',
            hashtag : '#눈썹결 #자연스럽게',
            price : 10000
        },
        {
            img : '../image/product/eye/7-1.jpg',
            img2 : '../image/product/eye/7-2.jpg',
            title : '플레이 컬러 아이즈 #셀러뷰리티 6.5g~',
            hashtag : '#셀러뷰리티 #퍼스널컬러',
            price : 30000
        },
    ],
    'lip' : [
        {
            img : '../image/product/lip/1-1.jpg',
            img2 : '../image/product/lip/1-2.jpg',
            title : '디어 달링 오일 틴트 4.2g',
            hashtag : '#오일틴트',
            price : 11000,
        },
        {
            img : '../image/product/lip/2-1.jpg',
            img2 : '../image/product/lip/2-2.jpg',
            title : '시럽 글로시밤 #리플레이 2.5g',
            hashtag : '#리플레이 #시럽글로시밤',
            price : 14000,
        },
        {
            img : '../image/product/lip/3-1.jpg',
            img2 : '../image/product/lip/3-2.jpg',
            title : '베이스 앤 오버 립 펜슬 #핑크베이지 1g',
            hashtag : '##립펜슬 #오버립',
            price : 12000,
        },
        {
            img : '../image/product/lip/4-1.jpg',
            img2 : '../image/product/lip/4-2.jpg',
            title : '픽싱 틴트 벨벳 #핑카이브 3.8g',
            hashtag : '#MLBB #핑덕러버스 #핑카이브',
            price : 14000,
        },
        {
            img : '../image/product/lip/5-1.jpg',
            img2 : '../image/product/lip/5-2.jpg',
            title : '#멜팅밤 #진저슈가',
            hashtag : '진저슈가 멜팅 밤 2.3g',
            price : 13000,
        },
        {
            img : '../image/product/lip/6-1.jpg',
            img2 : '../image/product/lip/6-2.jpg',
            title : '글로우 픽싱 틴트 3.8g',
            hashtag : '#셀러뷰리티 #수분글로잉 #오일광택',
            price : 14000,
        },
        {
            img : '../image/product/lip/7-1.jpg',
            img2 : '../image/product/lip/7-2.jpg',
            title : '진저슈가 오버나이트 립 마스크 15g',
            hashtag : '#보습 #촉촉',
            price : 7000,
        },
        {
            img : '../image/product/lip/8-1.jpg',
            img2 : '../image/product/lip/8-2.jpg',
            title : '디어 달링 워터 틴트 9g',
            hashtag : '#생기발랄 #촉촉보습',
            price : 5000,
        },
        {
            img : '../image/product/lip/9-1.jpg',
            img2 : '../image/product/lip/9-2.jpg',
            title : '진저슈가 멜팅 밤 #베어꾸 콜라보 2.3g',
            hashtag : '#베어꾸 #조효진개발',
            price : 13000,
        },
    ],
    'face' : [
        {
            img : '../image/product/face/1-1.jpg',
            img2 : '../image/product/face/1-2.jpg',
            title : '더블 래스팅 비건 커버 파운데이션 SPF32 PA++ 30g',
            hashtag : '#24H착붙 #비건파데',
            price : 29000,
        },
        {
            img : '../image/product/face/2-1.jpg',
            img2 : '../image/product/face/2-2.jpg',
            title : '하트 플러터 블러셔 #핑카이브 4g',
            hashtag : '#MLBB #핑덕러버스 #핑카이브',
            price : 13000,
        },
        {
            img : '../image/product/face/3-1.jpg',
            img2 : '../image/product/face/3-2.jpg',
            title : '재창조 메이커 1g',
            hashtag : '#부위별음영 #조효진쉐딩 #한끗음영',
            price : 14000,
        },
        {
            img : '../image/product/face/4-1.jpg',
            img2 : '../image/product/face/4-2.jpg',
            title : '하트 팝 블러셔 #셀러뷰리티 4g',
            hashtag : '#셀러뷰리티 #자연광블러셔',
            price : 13000,
        },
        {
            img : '../image/product/face/5-1.jpg',
            img2 : '../image/product/face/5-2.jpg',
            title : '뽀오얀 순 프로바이오틱스 뮨 파우더',
            hashtag : '#매끈커버 #철벽파우더 #피지흡착',
            price : 18000,
        },
        {
            img : '../image/product/face/6-1.jpg',
            img2 : '../image/product/face/6-2.jpg',
            title : '더블 래스팅 세럼 스킨 파운데이션 SPF27 PA++ 30g',
            hashtag : '#24H윤기 #스킨케어효과',
            price : 29000,
        },
        {
            img : '../image/product/face/7-1.jpg',
            img2 : '../image/product/face/7-2.jpg',
            title : '헬씨 칼라민 톤업 쿠션 SPF34 PA++ 15g',
            hashtag : '#생얼쿠션 #수분톤업',
            price : 24000,
        },
    ],
    "hair" : [
        {
            img : '../image/product/hair/1-1.jpg',
            img2 : '../image/product/hair/1-2.jpg',
            title : '헤어 스타일링 스트레이트크림 3X 200ml',
            hashtag : '#손상없이 #편안한향',
            price : 12000,
        },
        {
            img : '../image/product/hair/2-1.jpg',
            img2 : '../image/product/hair/2-2.jpg',
            title : '팡팡 헤어 섀도우 3.5g',
            hashtag : '#자연스러운 #헤어라인',
            price : 16000,
        },
        {
            img : '../image/product/hair/3-1.jpg',
            img2 : '../image/product/hair/3-2.jpg',
            title : '핫 스타일 크림 헤어 블리치 탈색제',
            hashtag : '#살롱 #선명컬러',
            price : 9000,
        },
        {
            img : '../image/product/hair/4-1.jpg',
            img2 : '../image/product/hair/4-2.jpg',
            title : '핫 스타일 버블 헤어 컬러링',
            hashtag : '#간편 #버블염색',
            price : 9000,
        },
        {
            img : '../image/product/hair/5-1.jpg',
            img2 : '../image/product/hair/5-2.jpg',
            title : '핫 스타일 크림 헤어 컬러링',
            hashtag : '#발색UP #크림타입',
            price : '9000',
        },
        {
            img : '../image/product/hair/6-1.jpg',
            img2 : '../image/product/hair/6-2.jpg',
            title : '투톤 트리트먼트 헤어 컬러 150ml',
            hashtag : '#10분완성 #윤기찰랑',
            price : 12000,
        },
    ],
    "tool" : [
        {
            img : '../image/product/tool/1-1.jpg',
            img2 : '../image/product/tool/1-2.jpg',
            title : '그림자 쉐딩+브러쉬 스페셜 세트',
            hashtag : '#모두의쉐딩 #조효진쉐딩 #턱브러쉬',
            price : 32000,
        },
        {
            img : '../image/product/tool/2-1.jpg',
            img2 : '../image/product/tool/2-2.jpg',
            title : '마이뷰티툴 브러쉬 311 섀도우 블렌딩',
            hashtag : '#삼각존 #애교살 #음영',
            price : 6000,
        },
        {
            img : '../image/product/tool/3-1.jpg',
            img2 : '../image/product/tool/3-2.jpg',
            title : '마이뷰티툴 브러쉬 310 섀도우 베이스',
            hashtag : '#소프트터치 #아이홀',
            price : 6000,
        },
        {
            img : '../image/product/tool/4-1.jpg',
            img2 : '../image/product/tool/4-2.jpg',
            title : '그림자 쉐딩 브러쉬 3종세트',
            hashtag : '#브러쉬3종 #턱눈코',
            price : 20000,
        },
        {
            img : '../image/product/tool/5-1.jpg',
            img2 : '../image/product/tool/5-2.jpg',
            title : '룩 앳 마이 아이즈 DIY 팔레트 4구',
            hashtag : '#4구 #섀도우공용기',
            price : 6000,
        },
        {
            img : '../image/product/tool/6-1.jpg',
            img2 : '../image/product/tool/6-2.jpg',
            title : '그림자 쉐딩+브러쉬 3종 기획 세트',
            hashtag : '#기획세트 #조효진쉐딩',
            price : 44000,
        },
        {
            img : '../image/product/tool/7-1.jpg',
            img2 : '../image/product/tool/7-2.jpg',
            title : '마이뷰티툴 러블리에띠 헤어밴드',
            hashtag : '#세안시 #에띠헤어밴드',
            price : 8000,
        },
        {
            img : '../image/product/tool/8-1.jpg',
            img2 : '../image/product/tool/8-2.jpg',
            title : '#컬링력극대화',
            hashtag : '래쉬 펌 컬 픽스 뷰러',
            price : 8000,
        },
    ]
};