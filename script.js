//callback using setTimeout
// console.log("app is started");
// setTimeout(()=> console.log("loading...."),2000);
// setTimeout(()=> console.log("app completed"),5000);
// console.log("under process")

//callback using function

// var complete=()=>{
//     console.log("finish")
// }
// var add = (abc)=>{ //=>this is function destructuring 
//     var x = 2;
//     var y = 3;
//     console.log("sum", x+y);
//    abc()
// }
// add(complete)

// callback hell

setTimeout(()=>{
    console.log("10")

   
    document.getElementById("display").innerText="10";
    document.getElementById("display").style.backgroundColor="blue"
    setTimeout(()=>{
        console.log("9");
        document.getElementById("display").style.backgroundColor="orange"
        document.getElementById("display").innerText="9";
        setTimeout(()=>{
            console.log("8");
            document.getElementById("display").style.backgroundColor="coral"
            document.getElementById("display").innerText="8"
            setTimeout(()=>{
                console.log("7");
                document.getElementById("display").style.backgroundColor="gold"
                document.getElementById("display").innerText="7"
                setTimeout(()=>{
                    console.log("6");
                    document.getElementById("display").style.backgroundColor="pink"
                    document.getElementById("display").innerText="6"
                    setTimeout(()=>{
                        console.log("5");
                        document.getElementById("display").style.backgroundColor="grey"
                        document.getElementById("display").innerText="5"
                        setTimeout(()=>{
                            console.log("4");
                            document.getElementById("display").style.backgroundColor="purple"
                            document.getElementById("display").innerText="4"
                            setTimeout(()=>{
                                console.log("3");
                                document.getElementById("display").style.backgroundColor="aqua"
                                document.getElementById("display").innerText="3"
                                setTimeout(()=>{
                                    console.log("2");
                                    document.getElementById("display").style.backgroundColor="black"
                                    document.getElementById("display").innerText="2"
                                    setTimeout(()=>{
                                        console.log("1");
                                        document.getElementById("display").style.backgroundColor="red"
                                        document.getElementById("display").innerText="1"
                                        setTimeout(()=>{
                                            document.getElementById("display").style.backgroundColor="yellow"
                                            document.getElementById("display").style.color="maroon"
                                            document.getElementById("display").innerText="happy Raksha Bandhan :)"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)

    },1000)
},1000)

