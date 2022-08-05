
// const searchInput = document.querySelector("[area_search]")
// function search_area() {
//     let input = document.getElementById("search_area")
//     console.log(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=bf4d2097e35ddbe4081cb5ab29c6033a`)
// }

const getData = async () => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=pittsburgh&appid=bf4d2097e35ddbe4081cb5ab29c6033a`)
    
    const searchInput = document.querySelector('input')
    console.log(searchInput)
}    


// searchInput.addEventListener("input", e => {
//     const value = e.target.value
//     console.log(value)
// })
