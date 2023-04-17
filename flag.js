function orange()
{
    document.getElementById('top').style.backgroundColor="orange";
    document.getElementById('btn1').style.display="none";
}
function white()
{
    document.getElementById('middle').style.backgroundColor="white";
    document.getElementById('btn2').style.display="none";
    const photo=document.getElementById('middle');
    const myphoto=document.getElementById('img');
    photo.addEventListener("click",()=>{myphoto.style.display="block"});
}
function photo()
{
    let image=document.getElementById('image');
    image.src="chakra.jpg";
    document.getElementById('btn').style.display="none";
}
function green()
{
    document.getElementById('down').style.backgroundColor='green';
    document.getElementById('btn3').style.display="none";
}
function blue()
{
    const sky=document.getElementById('total');
    const mysky=document.getElementById('skyimg');
    sky.addEventListener("click",()=>{mysky.style.display="block"});
}
function stick()
{
    document.getElementById('stick').style.backgroundColor='black';
    document.getElementById('btn4').style.display="none";
}