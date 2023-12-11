const button = document.getElementById("button1");
const latitude = document.getElementById("latitude");
const longitude = document.getElementById("longitude");

function gotLocation(position){
   console.log(position);
    latitude.innerText = `latitude: ${position.coords.latitude}`
    longitude.innerText = `latitude: ${position.coords.longitude}`
}

function failedtoget(){
    console.log("there is some issue....")
}

button.addEventListener("click",async ()=>{

    navigator.geolocation.getCurrentPosition(gotLocation,failedtoget)
});