document.addEventListener("DOMContentLoaded", () => {
  let emily = document.getElementById("emilyEL")
  let stag = document.getElementById("stagEL")
  let juliet = document.getElementById("romandjulEL")
  let nothing = document.getElementById("nothingEL")
  let cowboy = document.getElementById("cowboyEL")
  let child = document.getElementById("childrenEL")
  let heathers = document.getElementById("heathersEL")
  let madea = document.getElementById("madeaEL")
  let lifetime = document.getElementById("lifeEL")
  let truffaldino = document.getElementById("truffaldinoEL")
  let julietChar = document.getElementById("julietEL")
  let beatrice = document.getElementById("beatriceEL")
  let cavale = document.getElementById("cavaleEL")
  let catherine = document.getElementById("catherinEL")
  let chandler = document.getElementById("heatherEL")
  let chorus = document.getElementById("childEL")
  let may = document.getElementById("mayEL")
  let suttonTheater = document.getElementById("sutton1EL")
  let fairviewTheater = document.getElementById("fairviewEL")
  let globe = document.getElementById("globeEL")
  let marathon = document.getElementById("marathonEL")
  let loft1Theater = document.getElementById("loft1EL")
  let nomadTheater = document.getElementById("nomadEL")
  let suttonPavilion = document.getElementById("sutton2EL")
  let loft2Theater = document.getElementById("loft2EL")
  let central = document.getElementById("center")
  let correctAppend = document.getElementById("thisOne")
  let emailFormHome = document.getElementById("locstor1")
  let emailFormResume = document.getElementById("locstor2")
  let emailFormBlog = document.getElementById("locstor3")
  let emailInput = document.getElementById("email1")
  let submit = document.getElementById("submitOne")
  let welcome = document.getElementById("welcomeBack")

  let emailNow = localStorage.getItem("email")

  submit.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("email", emailInput.value)
    if(emailNow === emailInput.value){
      let message = document.createElement("h4")
      message.innerHTML = "Welcome Back!"
      welcome.appendChild(message)
    }
  })


  emily.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    central.appendChild(photo)

  })
  emily.addEventListener("mouseout", (e) => {
    central.removeChild(photo)
  })
  stag.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    correctAppend.appendChild(photo)

  })
  stag.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  juliet.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://static.playbill.com/dims4/default/066134b/2147483647/resize/250x/quality/90/?url=http%3A%2F%2Fstatic.playbill.com%2Fe1%2F34%2F9fa909724a6e86c40a279840cfad%2FRomeo-and-Juliet-Playbill-03-77.jpg")
    correctAppend.appendChild(photo)

  })
  juliet.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  nothing.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://static.playbill.com/dims4/default/d3aa87d/2147483647/resize/250x/quality/90/?url=http%3A%2F%2Fstatic.playbill.com%2F6f%2Fff%2Ffb0b483942cc8f922672fb3a246f%2FMuch-Ado-About-Nothing-Playbill-11-72.jpg")
    correctAppend.appendChild(photo)

  })
  nothing.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  cowboy.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://i1.wp.com/better-lemons.com/wp-content/uploads/2018/04/CMJBOTProductionsPOSTER.jpg?fit=324%2C500&ssl=1")
    correctAppend.appendChild(photo)

  })
  cowboy.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  child.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://roxytheatre.ca/wp-content/uploads/2017/05/Childrens-Hour-Web.jpg")
    correctAppend.appendChild(photo)

  })
  child.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  heathers.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://ih0.redbubble.net/image.497094568.3600/ap,550x550,12x16,1,transparent,t.u1.png")
    correctAppend.appendChild(photo)

  })
  heathers.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  madea.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://thumbs.worthpoint.com/zoom/images1/1/1213/23/diana-rigg-madea-stage-actress_1_65889112ed7a434ce1e368a7dc0a929f.jpg")
    correctAppend.appendChild(photo)

  })
  madea.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  lifetime.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/41tdoU1BorL.jpg")
    correctAppend.appendChild(photo)

  })
  lifetime.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  truffaldino.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/KS3.jpg")
    correctAppend.appendChild(photo)

  })
  truffaldino.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  julietChar.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("class", "image4")
    photo.setAttribute("src", "Photos/photo4.jpg")
    correctAppend.appendChild(photo)

  })
  julietChar.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  beatrice.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://pmcvariety.files.wordpress.com/2011/06/rmuch_ado_globe.jpg?w=144")
    correctAppend.appendChild(photo)

  })
  beatrice.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  cavale.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    correctAppend.appendChild(photo)

  })
  cavale.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  catherine.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    correctAppend.appendChild(photo)

  })
  catherine.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  chandler.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    correctAppend.appendChild(photo)

  })
  chandler.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  chorus.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo13.png")
    correctAppend.appendChild(photo)

  })
  chorus.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  may.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    correctAppend.appendChild(photo)

  })
  may.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  suttonTheater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://adminmanual.syr.edu/images/buildings/regent_theatre.jpg")
    correctAppend.appendChild(photo)

  })
  suttonTheater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  fairviewTheater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://photos.mycapture.com/ERIE/1943689/55997177E.jpg")
    correctAppend.appendChild(photo)

  })
  fairviewTheater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  globe.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://littlebird-images-rfqejm1r.netdna-ssl.com/media/cache/resolve/web_full/images/5af2cd6882519.jpg")
    correctAppend.appendChild(photo)

  })
  globe.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  marathon.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    correctAppend.appendChild(photo)

  })
  marathon.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  loft1Theater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://bridge.cupresents.org/images/venues/cupresents/244237-image.jpeg")
    correctAppend.appendChild(photo)

  })
  loft1Theater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  nomadTheater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://images2.westword.com/imager/the-cozy-interior-of-the-nomad/u/745xauto/6587848/nomadinteriorpeterwallace.jpg")
    correctAppend.appendChild(photo)

  })
  nomadTheater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  suttonPavilion.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://adminmanual.syr.edu/images/buildings/regent_theatre.jpg")
    correctAppend.appendChild(photo)

  })
  suttonPavilion.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })
  loft2Theater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")

    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://bridge.cupresents.org/images/venues/cupresents/244237-image.jpeg")
    correctAppend.appendChild(photo)

  })
  loft2Theater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
  })


})

//for appending and unappending events to resume items
// emily in stride -> https://m.media-amazon.com/images/M/MV5BMTBiNjE5YjUtMWE3MC00MzE2LWI3NDQtZTgyZmEzOWU0ZTlmXkEyXkFqcGdeQXVyNDM4ODI4ODE@._V1_SY1000_SX1600_AL_.jpg
