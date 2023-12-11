const input = document.getElementById("input");
const button= document.getElementById("search-button")
const city= document.getElementById("city-name");
const time= document.getElementById("localtime");
const temp= document.getElementById("tmep");

async function getdata(cityname) {
    
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=69c59e25aad544ce88593929231112&q=${cityname}&aqi=yes`
    )
    return await promise.json();
}

button.addEventListener("click", async()=>{
    const value = input.value;
    const data = await getdata(value);
    city.innerText = `${data.location.name},${data.location.region}-${data.location.country}` 
    time.innerText = data.location.localtime;
    temp.innerText = `${data.current.temp_c}°C `;

});