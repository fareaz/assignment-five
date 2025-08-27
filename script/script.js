function id(a) {
  const id = document.getElementById(a);
  return id;
}

//   call-button   //
id("card-container").addEventListener("click", function (e) {
  if (e.target.className.includes("call-btn")) {
    const main = e.target;
    const title = main.parentNode.parentNode.childNodes[3].innerText;
    const number = main.parentNode.parentNode.childNodes[7].innerText;
    const subTitle = main.parentNode.parentNode.childNodes[5].innerText;
    
    const time = new Date()
    let hour = time.getHours()
    hour = hour % 12;
    hour = hour ? hour : 12;
    const min =time.getMinutes()
    const ap = hour >= 12 ? "AM" : "PM"
     

    const coin = Number(id("coin-btn").innerText);

    if (coin === 0) {
      alert("❌Sorry, you don't have sufficient coin.");
      return;
    }
    alert("Calling " + subTitle + " " + "number " + number + "...");
    const minus = coin - 20;
    if (minus < 0) minus = 0;

    id("coin-btn").innerText = minus;

    const container = id("history-container");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="lg:flex justify-between items-center p-5  rounded-xl bg-[#5C5C5C0a]">
                    <div >
                        <h3 class="font-semibold">${title}</h3>
                        <p>${number}</p>
                    </div>
                    <div>
                        <p class="font-semibold">${hour}:${min} ${ap}</p>
                    </div>
                </div>`;
    container.append(newDiv);
  }
});
//  clear button //
id("clear-btn").addEventListener("click",function(
){
    const container =id("history-container")
    container.innerHTML =" "
})
// life-button-❤//
id("card-container").addEventListener("click",function(e){
    if(e.target.className.includes("life-btn")){
       let lifeCount = id("life-count").innerText;
       const add = Number(lifeCount)+1
       id("life-count").innerText=add
    }
   
})

