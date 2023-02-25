let detail = document.getElementById("countryInfo")

async function showCountryInfo() {
    let id = localStorage.getItem("countryid")
    console.log(id)
    let url = await fetch(`https://restcountries.com/v3.1/name/${id}`);
    let res = await url.json();
    console.log(res)
    detail.innerHTML = `
    <div id="info">
        <div class="country-img">
            <img src="${res[0].flags.svg}" alt="flags">
        </div>
        <div class="country-info">
           <h2 class="countryName">${res[0].name.common}</h2>
           <p><strong>Capital :-</strong>${res[0].capital}</p>
           <p><strong>Region :-</strong>${res[0].region}</p>
           <p><strong>Subregion :-</strong>${res[0].subregion}</p>  
            <p><strong>Polulation :-</strong>${res[0].population}</p>    
            <p><strong>Start of Week :-</strong>${res[0].startOfWeek}</p>
            <p><strong>Continents :-</strong>${res[0].continents}</p>
            <p><strong>Currencies :-</strong>${res[0].currencies[Object.keys(res[0].currencies)].name
             } - ${Object.keys(res[0].currencies)[0]}</p>
            <p><strong>Languages :-</strong>${Object.values(res[0].languages)
            .toString()
            .split(",")
            .join(", ")}</p>
        </div>
    </div>`


}
showCountryInfo()