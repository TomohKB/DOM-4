// console.log("test");
document.getElementById("test").addEventListener("click", function(){ 
    // console.log("testがクリックされました");
    this.textContent = "テストがクリックされました";
    alert("testがクリックされました。")
});

const button = document.getElementById("myButton")
button.addEventListener("click", function(){
    console.log("click");
    alert("ボタンがクリックされました。");
});
