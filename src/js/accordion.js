//implementation of an accordion in price selection
document.querySelectorAll(".accordion__button").forEach((el)=>{
    el.addEventListener('click', ()=>{
        let content = el.nextElementSibling;
        if (content.style.maxHeight) {
            document.querySelectorAll('.accordion__content').forEach((el) => {
                el.style.maxHeight = null;
                el.style.marginBottom = "20px";
            });
            el.classList.remove("accordion__button_active");
        }
        else {
            document.querySelectorAll('.accordion__content').forEach((el)=> {
                el.style.maxHeight = null
            });
            document.querySelectorAll('.accordion__button').forEach((el) =>{
                if(el.classList.contains('accordion__button_active')) {
                    el.classList.remove("accordion__button_active");
                }
            })
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.marginBottom = "0";
            el.classList.add("accordion__button_active");
        }
    })
})