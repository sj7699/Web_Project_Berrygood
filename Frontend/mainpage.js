// 전체 넓이 구하기
const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;

const prevBtn = document.querySelector(".slide_prev_button"); //전으로 넘어가는 버튼
const nextBtn = document.querySelector(".slide_next_button"); //다음으로 넘어가는 버튼

let slideItems = document.querySelectorAll(".slide_item"); //슬라이드 전체

const maxSlide = slideItems.length; //최대 슬라이드 개수

let currSlide = 1; //현재 위치

const pagination = document.querySelector(".slide_pagination"); //페이지

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");

const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);

slideItems = document.querySelectorAll(".slide_item");

let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() { //다음 슬라이드로
  currSlide++;
  if (currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else { //무한 슬라이드
    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() { //전의 슬라이드로
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else { //무한 슬라이드
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

nextBtn.addEventListener("click", () => { //클릭 이벤트에 nextMove() 추가
  nextMove();
});
prevBtn.addEventListener("click", () => { //클릭 이벤트에 preMove() 추가
  prevMove();
});

window.addEventListener("resize", () => { // 브라우저 화면에 따라 resize
  slideWidth = slide.clientWidth;
});

for (let i = 0; i < maxSlide; i++) { //아래의 dot에 따라 페이지 이동 
  paginationItems[i].addEventListener("click", () => {
    currSlide = i + 1;
    const offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

let startPoint = 0;
let endPoint = 0;

// PC
slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽
    nextMove();
  }
});

// 모바일
slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX; // 터치시작되는 위치 저장
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX; // 터치끝나는 위치 저장
  if (startPoint < endPoint) {
    // 오른쪽
    prevMove();
  } else if (startPoint > endPoint) {
    // 왼쪽
    nextMove();
  }
});

// 시작
let loopInterval = setInterval(() => {
  nextMove();
}, 3000);

// 마우스 가져다대면 멈춤
slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});

// 마우스 나온 경우 재시작
slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
});




