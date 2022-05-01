const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

Object.values($$('.close')).forEach((entity, index)=>{
    entity.onclick = (e)=>{
        e.target.parentElement.remove()
    }
})