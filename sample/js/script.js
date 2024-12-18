// // console.log("test");
// document.getElementById("test").addEventListener("click", function(){ 
//     // console.log("testがクリックされました");
//     this.textContent = "テストがクリックされました";
//     alert("testがクリックされました。")
// });

// const button = document.getElementById("myButton")
// button.addEventListener("click", function(){
//     console.log("click");
//     alert("ボタンがクリックされました。");
// });

function clickTest() {
  target = document.getElementById("anime_test");
  if (target.className == null || target.className == "") {
    target.className = "active";
  } else {
    target.className = "";
  }
}

document.addEventListener("click", function(){
    this.textContent = "ボタンが押されました";
    console.log("ボタンが押されました");
    alert("ボタンが押されました")
});
