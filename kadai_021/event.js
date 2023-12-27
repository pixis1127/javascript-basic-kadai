const button = document.getElementById('btn');

button.addEventListener('click', () => {
    setTimeout(() =>{
        const word =document.getElementById('text');
        word.textContent ='ボタンをクリックしました';
    },2000);

})