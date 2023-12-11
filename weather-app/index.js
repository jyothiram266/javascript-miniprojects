const input = document.getElementById("input");
const button= document.getElementById("search-button")
const city= document.getElementById("city-name");
const time= document.getElementById("localtime");
const temp= document.getElementById("tmep");
const lacity= document.getElementById("la-city-name");
const latime= document.getElementById("la-localtime");
const latemp= document.getElementById("la-tmep");
const labutton= document.getElementById("la-search-button")

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

async function lagetdata(lat,long) {
    
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=69c59e25aad544ce88593929231112&q=${lat},${long}&aqi=yes`
    )
    return await promise.json();
}
async function gotLocation(position){
    console.log(position);
    const data = await lagetdata(position.coords.latitude,position.coords.longitude);
    lacity.innerText = `${data.location.name},${data.location.region}-${data.location.country}` 
    latime.innerText = data.location.localtime;
    latemp.innerText = `${data.current.temp_c}°C `;
 }
 
 function failedtoget(){
     console.log("there is some issue....")
 }
labutton.addEventListener("click", async()=>{
    navigator.geolocation.getCurrentPosition(gotLocation,failedtoget)
    
});