const countriesElem = document.querySelector(".countries")


async function getCountry() {
    const url = await fetch('https://restcountries.com/v3.1/all');
    const res = await url.json();
    console.log(res)
    res.forEach(element => {
        showCountry(element)
    });
}

getCountry()

function showCountry(data) {
    const country = document.createElement("div")
    country.classList.add("country")
    // console.log(data.altSpellings)
    country.innerHTML = ` 
    <div class="country-img">
        <img src="${data.flags.svg}" alt="flags">
    </div>
    <div class="country-info">
       <h2 class="countryName">${data.name.common}</h2>
       <p><strong>Polulation :-</strong>${data.population}</p>
       <p><strong>Region:-</strong>${data.region}</p>
       <p><strong>Capital:-</strong>${data.capital}</p>
       <button id="${data.altSpellings[1]}" class="button">Click</button>
    </div>`;
    countriesElem.appendChild(country)

}

const search = document.getElementById("search")
let countryName = document.getElementsByClassName("countryName")
search.addEventListener('input', () => {
    console.log(search.value)
    Array.from(countryName).forEach(e => {
        if (e.innerText.toLowerCase().includes(search.value.toLowerCase())) {
            e.parentElement.parentElement.style.display = "grid"
        }else{
            e.parentElement.parentElement.style.display = "none" 
        }
    })
})


countriesElem.addEventListener("click", function (e){
    if(e.target.classList.contains("button")){
        const id = e.target.id
        console.log(id)
        localStorage.setItem("countryid",id)
        window.location="country.html"

    }
} )
// function countryDetails(id){
    // localStorage.setItem("countryid",id[0])
    // console.log(id[0])
    // window.location="megha.html"
// }

// let ab = document.querySelectorAll("button")
// console.log(ab)
