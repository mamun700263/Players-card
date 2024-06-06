fetch("https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=A")
.then(res => res.json())
.then(data=>{
    displaydata(data.player);
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});

const imgUrl = (player) =>
    {
        if(player.strCutout!=null)return player.strCutout;
        else if(player.strThumb!=null) return player.strThumb;
        else if(player.strRender!=null) return player.strRender;
        else return "https://qph.cf2.quoracdn.net/main-qimg-6d72b77c81c9841bd98fc806d702e859-lq";
        // else return "https://th.bing.com/th/id/OIP.LfUcKCHKBamgN20k7KQWeAHaHT?w=179&h=180&c=7&r=0&o=5&pid=1.7";


    }

const displaydata = (userdata) => {
    
    const container = document.getElementById("userdata");
    userdata.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("players");
        div.innerHTML = `
        <div><img src=${imgUrl(element)} alt=${"player photo"} ></div>
        <div class="playerInfo">
        <div class="playerInfo1">
        <h1>${element.strPlayer}</h1>
        <h6>${element.strNationality} <br> ${element.strPosition} <br> ${element.strSport} <br> ${element.strGender} <br> ${element.strTeam}</h6>
        </div>
        <div class="playerInfo2">
        
        <a href="${element.strInstagram}" ><i class="fa-brands fa-square-instagram fa-2xl" style="color: #fc98eb;"></i></a>
        <button class="bg-primary   m-2"><a href="" class="link-none">Details</a></button>
        <a href="${element.strTwitter}" ><i class="fa-brands fa-twitter fa-2xl" style="color: #74C0FC;"></i></a>
        <p></p>
        </div>
        </div>

        
        
        `
        container.appendChild(div);
    });
}