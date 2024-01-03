const form = document.getElementById("form");

const latitudeInput = document.getElementById("latitude");
const longitudeInput = document.getElementById("longitude");

const resultContainer = document.getElementById("result-cont");

const aqi = document.getElementById("aqi");
const co = document.getElementById("co");
const pm10 = document.getElementById("pm10");
const so2 = document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude = latitudeInput.value;
    const longitude = longitudeInput.value; 

    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'e348c57ecbmshb6024fda0625dc1p1d29f0jsnf394432451ce',
		    'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};


	fetch(url, options)
	    .then(response=>response.json())
        .then(data=>{
            const result = data.data[0]
            aqi.textContent = result.aqi;
            co.textContent = result.co;
            pm10.textContent = result.pm10;
            so2.textContent = result.so2

            resultContainer.style.display='flex'
        })

})