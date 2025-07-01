const emojiElement = document.getElementById('emoji')
const countElement = document.getElementById('count')
const decrementBtnElement =document.getElementById('decrement')
const incrementBtnElement =document.getElementById('increment')
const resetBtnElement = document.getElementById('reset')

let count =0 
function updateBackgroundAndEmoji(receivedCount){
countElement.textContent = count
if(receivedCount > 0){
  emojiElement.textContent = '😄'
  document.body.style.backgroundColor = `hsl(120, ${Math.min(100,receivedCount * 10,)}%,80%)`
}else if(receivedCount < 0){
  emojiElement.textContent = '😒'
  document.body.style.backgroundColor = `hsl(0, ${Math.min(100,Math.abs(receivedCount * 10))}%,80%)`
}else {
  emojiElement.textContent = '😊'
  document.body.style.backgroundColor = `hsl(0, 0%,90%)`
}
}

incrementBtnElement.addEventListener('click',()=>{
  count ++
  updateBackgroundAndEmoji(count)
})
decrementBtnElement.addEventListener('click',()=>{
  count --
  updateBackgroundAndEmoji(count)
})
resetBtnElement.addEventListener('click',()=>{
  count = 0
  updateBackgroundAndEmoji(count)
})