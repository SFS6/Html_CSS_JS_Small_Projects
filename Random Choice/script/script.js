var tagsEl=document.querySelector('#tags')
var textarea=document.querySelector('#textarea')
textarea.focus()
textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value)
    if(e.key==='Enter'){
      setTimeout(()=>{
        e.target.value=''
      },10)
      randomSelect()
    }
})
function createTags(input){
  tagsEl.innerHTML=''
    var tags = input.split(',').
    filter(tag=>tag.trim()!=='').
    map(tag=>tag.trim())

    tags.forEach(tag => {
      var tagEl=document.createElement('span')
      tagEl.classList.add('tag')
      tagEl.textContent = tag
      tagsEl.appendChild(tagEl)
    })
}

function randomSelect(){
  const times=30
  const interval=setInterval(()=>{
    const randomtag=pickRandomTag()

    highlighttag(randomtag)
    setTimeout(()=>{
      rmhighlight(randomtag)
    },100);
  },100);

  setTimeout(()=>{
    clearInterval(interval)
    setTimeout(()=>{
      const randomtag=pickRandomTag()
      highlighttag(randomtag)
    },100)
  },times*100)
}
function pickRandomTag(){
  const tags=document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random()*tags.length)]
}

function highlighttag(tag){
  tag.classList.add('highlight')
}
function rmhighlight(tag){
  tag.classList.remove('highlight')
}