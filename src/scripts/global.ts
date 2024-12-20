

let overlay = document.getElementById("overLay") as HTMLDivElement
function calcMaxHeight(items: NodeListOf<HTMLLIElement> | HTMLLIElement[]): number {
    let maxHeight: number = 0;
    // mobileResponsive.classList.add("open")
    items.forEach((link: any) => {
        maxHeight += link.clientHeight
    })

    return maxHeight;
}

const animationSlide = (dir: 'up' | 'down', totalHeight: NodeListOf<HTMLLIElement> | any, targetEL: HTMLUListElement | any) => {
    let height = dir === "down" ? 0 : calcMaxHeight(totalHeight);
    let targetHeight = dir === 'down' ? calcMaxHeight(totalHeight) : 0;
    let speed = dir === 'down' ? (targetHeight / (targetHeight * 0.05)) : (height / (height * 0.05));
    function animate() {
        if ((height <= 0 && dir === 'up') || (height >= targetHeight && dir === 'down')) {
            if (dir === 'up') {
                targetEL.style.height = "0";
            }
            return; // Exit animation loop
        }
        height += dir === "down" ? speed : -speed;
        if (height > targetHeight && dir === 'down') {
            height = targetHeight;
        }
        targetEL.style.height = `${height}px`;
        // Request next animation frame
        requestAnimationFrame(animate);
    }

    // Start the animation loop
    requestAnimationFrame(animate);
}
// ===============debounce=================
function debounce<F extends (...args: any[]) => any>(func: F, delay: number) {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    return (...args: Parameters<F>) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}
// =====aria expanded=============
const setAriaExpanded = (btn: HTMLButtonElement | null, EX: boolean) => {
    btn?.setAttribute('aria-expanded', EX.toString())
};
// =====toggle classes ========
const toggleClass = (Element: HTMLElement | null, Classes: string[], action: 'add' | 'remove' | 'toggle') => {
    if (!Element) return console.log("no element");
    Classes.forEach(cls => {
        if (action === 'add') {
            if (cls) Element.classList.add(cls);
        } else if (action === 'remove') {
            if (cls) Element.classList.remove(cls);
        } else if (action === 'toggle') {
            if (cls) Element.classList.toggle(cls);
        }
    });
}
// =======toggleAsideMenu with two button=========
const toggleAsideMenu = (action: 'open' | 'close', asideEl: HTMLUListElement | HTMLDivElement | HTMLFormElement, ClassName: string | null, RemoveClass: string, openBtn: HTMLButtonElement | null, closeBtn: HTMLButtonElement | null, isOverlay: boolean, isEffectLink: boolean) => {
    if (!asideEl || !openBtn ) return;
    if (action === 'open') {
        toggleClass(asideEl, [RemoveClass], 'remove');
        if (ClassName) toggleClass(asideEl, [ClassName], 'add');
        setAriaExpanded(openBtn, true);
        setAriaExpanded(closeBtn, true);
        isOverlay && toggleClass(overlay, ['active'], 'add');
        if (isEffectLink) {
            let allLinkEffect = asideEl.querySelectorAll('li .navLink') as NodeListOf<HTMLLinkElement>;
            allLinkEffect.forEach((link: HTMLLinkElement, index: number) => {
                link.style.setProperty('--i', `${index + 1}`)
            })
        }
        requestAnimationFrame(() => {
            toggleClass(asideEl, ['open'], 'add');
        })

    } else {
        toggleClass(asideEl, ['open'], 'remove');
        setAriaExpanded(openBtn, false);
        setAriaExpanded(closeBtn, false);
        isOverlay && toggleClass(overlay, ['active'], 'remove');
        setTimeout(() => {
            toggleClass(asideEl, [RemoveClass], 'add');
            if (ClassName) toggleClass(asideEl, [ClassName], 'remove');
        }, 500)
    }
}

// ========toggle aside menu with same button==========

const toggleAsideMenuSameBtn = (action: 'toggle' | 'remove',asideEl: HTMLUListElement | HTMLDivElement | HTMLFormElement, ClassName: string | null, RemoveClass: string, Btn: HTMLButtonElement | null,  isOverlay: boolean, isEffectLink: boolean)=>{
    if (!asideEl || !Btn) return;
    toggleClass(Btn , ['active'], action);
    if(Btn.classList.contains('active')){
        toggleClass(asideEl ,[RemoveClass] ,'remove');
        if (ClassName) toggleClass(asideEl, [ClassName], 'add');
        isOverlay && toggleClass(overlay, ['active'], 'add');
        setAriaExpanded(Btn, true);
        if (isEffectLink) {
            let allLinkEffect = asideEl.querySelectorAll('li .navLink') as NodeListOf<HTMLLinkElement>;
            allLinkEffect.forEach((link: HTMLLinkElement, index: number) => {
                link.style.setProperty('--i', `${index + 1}`)
            })
        }
        requestAnimationFrame(() => {
            toggleClass(asideEl, ['open'], 'add');
        })
        const handleClickOutside = (e: Event) => {
            const target = e.target as HTMLElement;
            if (!Btn.contains(target) && !asideEl.contains(target)) {
                toggleAsideMenuSameBtn('remove',asideEl ,'responsiveLink' , 'lg-max:d-none', Btn, true, true)
                console.log('x')
            }
        };
        document.addEventListener('click', handleClickOutside, { capture: true });
        (Btn as any).__outsideClickHandler = handleClickOutside;
    }else{
        toggleClass(asideEl, ['open'], 'remove');
        setAriaExpanded(Btn, false);
        isOverlay && toggleClass(overlay, ['active'], 'remove');
        setTimeout(() => {
            toggleClass(asideEl, [RemoveClass], 'add');
            if (ClassName) toggleClass(asideEl, [ClassName], 'remove');
        }, 500)
        const handleClickOutside = (Btn as any).__outsideClickHandler;
        if (handleClickOutside) {
            document.removeEventListener('click', handleClickOutside, { capture: true });
            delete (Btn as any).__outsideClickHandler;
        }
    }
}
    
// ========toggle dropDown menu==========

const toggleDropDownMenu = (action: 'toggle' | 'remove', dropList: HTMLUListElement, Btn: HTMLButtonElement | null) => {
    if (!dropList || !Btn) return;

    toggleClass(Btn, ['active'], action);

    if (Btn.classList.contains('active')) {
        toggleClass(dropList, ['d-none'], 'remove');
        setAriaExpanded(Btn, true);
        requestAnimationFrame(() => {
            toggleClass(dropList, ['open'], 'add');
        });
        const handleClickOutside = (e: Event) => {
            const target = e.target as HTMLElement;
            if (!Btn.contains(target) && !dropList.contains(target)) {
                toggleDropDownMenu('remove', dropList, Btn);
                console.log('y')
            }
        };
        document.addEventListener('click', handleClickOutside, { capture: true });
        (Btn as any).__outsideClickHandler = handleClickOutside;
    } else {
        toggleClass(dropList, ['open'], 'remove');
        setAriaExpanded(Btn, false);

        setTimeout(() => {
            toggleClass(dropList, ['d-none'], 'add');
        }, 300);
        const handleClickOutside = (Btn as any).__outsideClickHandler;
        if (handleClickOutside) {
            document.removeEventListener('click', handleClickOutside, { capture: true });
            delete (Btn as any).__outsideClickHandler;
        }
    }
};


const changeDateValue = (input:HTMLInputElement)=>{
    input.setAttribute('data-value' , 'true')
    
}
let inputDate = document.querySelectorAll("input[type='date']") as NodeListOf<HTMLInputElement>;
function ChangeDate() {
    inputDate.forEach((input)=>{
        input.addEventListener('change' , ()=>{
            changeDateValue(input)
        })
    })
}
document.addEventListener('DOMContentLoaded', ChangeDate);

let mobileMenu = document.getElementById("mobileMenu") as HTMLButtonElement;
let responsiveMenu = document.getElementById("responsiveMenu") as HTMLDivElement;
if(mobileMenu)mobileMenu.addEventListener('click', () => toggleAsideMenuSameBtn('toggle',responsiveMenu ,'responsiveLink' , 'lg-max:d-none', mobileMenu, true, true));
//
let dropDownMenu = document.querySelector("#langDropMenu .dropDownMenuList") as HTMLUListElement;
let btnDropDown = document.querySelector("#langDropMenu .btn-dropDown") as HTMLButtonElement;

if(btnDropDown) btnDropDown.addEventListener("click" , ()=> toggleDropDownMenu('toggle' , dropDownMenu , btnDropDown));
let header = document.querySelector("header") as HTMLDivElement
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 150){
        header.classList.add('scroll')
    }else{
        header.classList.remove('scroll')
    }
})

// auth 
// ====show password=====
const togglePassword = (action: 'show' | 'hide',input:HTMLInputElement, openEye:HTMLElement , closeEye:HTMLElement)=>{
    if(action === 'show'){
        input.type = 'text';
        openEye.classList.remove('d-none')
        closeEye.classList.add('d-none')
    }else{
        input.type = 'password';
        openEye.classList.add('d-none')
        closeEye.classList.remove('d-none')
    }
    
}

let openEye = document.getElementById('openEye') as HTMLElement
let closeEye = document.getElementById('closeEye') as HTMLElement
let inputPassword = document.getElementById('password') as HTMLInputElement;

if(openEye)openEye.addEventListener('click',()=>togglePassword('hide',inputPassword,openEye,closeEye))
if(closeEye)closeEye.addEventListener('click',()=>togglePassword('show',inputPassword,openEye,closeEye))
// ====accordion=======

const accordion = document.querySelectorAll(".accordion button") as NodeListOf<HTMLButtonElement>;

const toggleAccordion = ( Btn:HTMLButtonElement)=>{
    let acc = Btn.nextElementSibling as HTMLDivElement;
    if(Btn.getAttribute('aria-controls') === acc.id){
        acc.classList.toggle('show');
        if(acc.classList.contains('show')){
            Btn.setAttribute('aria-expanded' , 'true');
            toggleClass(Btn , ['open'] , 'add')
        }else{
            Btn.setAttribute('aria-expanded' , 'false');
            toggleClass(Btn , ['open'] , 'remove')
        }
    }
}
const accordionWork = ()=>{
    accordion.forEach((btn:HTMLButtonElement)=>{
        btn.addEventListener('click' , ()=>toggleAccordion(btn))
    })
}
document.addEventListener('DOMContentLoaded', accordionWork);

// Price Range Slider

let minVal = document.getElementById('minRange') as HTMLInputElement;
let maxVal = document.getElementById('maxRange') as HTMLInputElement;
let sliderTrack = document.querySelector('.track') as HTMLDivElement;
let tooltipMin = document.querySelector('.tooltipMin') as HTMLDivElement;
let tooltipMax = document.querySelector('.tooltipMax') as HTMLDivElement;
let minGap = 0;
let minRange = minVal && parseInt(minVal.min);
let maxRange = maxVal && parseInt(maxVal.max);

const slideMove = (action:'less' | 'more')=>{
    if(!minVal || !maxVal) return;
    let gap = parseInt(maxVal.value) - parseInt(minVal.value);
    if(gap <= minGap){
        action === 'less' &&( minVal.value = (parseInt(maxVal.value) - minGap).toString());
        action === 'more' &&( maxVal.value = (parseInt(minVal.value) + minGap).toString());
    }
    
    
    action === 'less' && (tooltipMin.innerText = minVal.value);
    action === 'more' && (tooltipMax.innerText = maxVal.value);
    setRange();
}
const setRange =()=>{
    if(!sliderTrack || !tooltipMin || !tooltipMax || !maxRange || !minRange) return;
    const minPercent = ((Number(minVal.value) - minRange) / (maxRange - minRange)) * 100;
    const maxPercent = ((Number(maxVal.value) - minRange) / (maxRange - minRange)) * 100;
    
    sliderTrack.style.right = minPercent + '%';
    sliderTrack.style.left = (100 - maxPercent) + '%';
    
    tooltipMin.style.right = `calc(${minPercent}% + 15px)`;
    tooltipMax.style.left = `calc(${100 - maxPercent}% - 18px)`;
}
window.addEventListener('load' , ()=>{
    slideMove('less');
    slideMove('more');
})
if(minVal)minVal.addEventListener('input' , ()=>slideMove('less'));
if(maxVal)maxVal.addEventListener('input' , ()=>slideMove('more'));
