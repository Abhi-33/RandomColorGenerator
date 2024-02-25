const getColor = () =>{
    // # HEX Code 
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = '#' + randomNumber.toString(16);
    console.log(randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById('color-code').textContent = randomCode;
    // console.log(randomNumber);
}
// event call 
document.getElementById('btn').addEventListener(
    'click' , getColor
    )
    // init call 
    getColor();