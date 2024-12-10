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

const toggleAsideMenuSameBtn = (asideEl: HTMLUListElement | HTMLDivElement | HTMLFormElement, ClassName: string | null, RemoveClass: string, Btn: HTMLButtonElement | null,  isOverlay: boolean, isEffectLink: boolean)=>{
    if (!asideEl || !Btn) return;
    toggleClass(Btn , ['active'], 'toggle');
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
    }else{
        toggleClass(asideEl, ['open'], 'remove');
        setAriaExpanded(Btn, false);
        isOverlay && toggleClass(overlay, ['active'], 'remove');
        setTimeout(() => {
            toggleClass(asideEl, [RemoveClass], 'add');
            if (ClassName) toggleClass(asideEl, [ClassName], 'remove');
        }, 500)
    }
}
    

let mobileMenu = document.getElementById("mobileMenu") as HTMLButtonElement;
let responsiveMenu = document.getElementById("responsiveMenu") as HTMLDivElement;
if(mobileMenu)mobileMenu.addEventListener('click', () => toggleAsideMenuSameBtn(responsiveMenu ,'responsiveLink' , 'lg-max:d-none', mobileMenu, false, false))