const year = document.getElementById("year")
const thisyear = new Date().getFullYear()
year.setAttribute("datetime",thisyear)
year.textContent = thisyear