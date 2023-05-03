

        let downloadbtn = document.querySelector(".download-btn");
        let countTime = document.querySelector(".count");
                       countTime.style.display = "none";
        let timeLeft = 10;

        let wait = document.querySelector(".wait")
             wait.style.display = "none";

        let downlodlink = document.querySelector(".download-link")
            downlodlink.style.display = "none";

            downloadbtn.addEventListener("click" , ()=>{
              downloadbtn.style.cursor = "none";
              downloadbtn.classList.add("dBtn");

              countTime.innerHTML = `<div class="count"><p>Download will begin automatically in <span>${timeLeft}</span> Seconds</p></div>`
          
              let downlodTime = setInterval(function timeCount() {
                // body...
                timeLeft -= 1;
                countTime.innerHTML = `<div class="count"><p>Download will begin automatically in <span>${timeLeft}</span> Seconds</p></div>`
                  countTime.style.display = "block";

                if(timeLeft <= 0){
                  clearInterval(downlodTime)
                  countTime.style.display = "none";
                  wait.style.display = "block";
                 
                 setTimeout(()=>{
                  wait.style.display = "none";
                  wait.style.visibility = "hidden";
                  downlodlink.style.display = "block";
                 }, 2000)
                  
                }
              }, 1000)
            })
