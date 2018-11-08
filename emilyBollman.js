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
  let fireside = document.getElementById("firesideEL")
  let firesideRole = document.getElementById("firesideRoleEL")
  let firesideDir = document.getElementById("firesideDirEL")
  let hp = document.getElementById("hpEL")
  let hpRole = document.getElementById("hpRoleEL")
  let hpDir = document.getElementById("hpDirEL")
  let stride = document.getElementById("strideEL")
  let strideRole = document.getElementById("strideRoleEL")
  let strideDir = document.getElementById("strideDirEL")
  let movie = document.getElementById("movieAppend")

  let emailNow = localStorage.getItem("email")

  submit.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("email", emailInput.value)
    if(emailNow === emailInput.value){
      welcome.innerHTML = "Welcome Back!"
    }
  })


  emily.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    emily.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo12.jpg")
    central.appendChild(photo)

  })
  emily.addEventListener("mouseout", (e) => {
    central.removeChild(photo)
    emily.style.textShadow = ""
  })
  stag.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    stag.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "")
    correctAppend.appendChild(photo)

  })
  stag.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    stag.style.textShadow = ""
  })
  juliet.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    juliet.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://static.playbill.com/dims4/default/066134b/2147483647/resize/250x/quality/90/?url=http%3A%2F%2Fstatic.playbill.com%2Fe1%2F34%2F9fa909724a6e86c40a279840cfad%2FRomeo-and-Juliet-Playbill-03-77.jpg")
    correctAppend.appendChild(photo)

  })
  juliet.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    juliet.style.textShadow = ""
  })
  nothing.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    nothing.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://static.playbill.com/dims4/default/d3aa87d/2147483647/resize/250x/quality/90/?url=http%3A%2F%2Fstatic.playbill.com%2F6f%2Fff%2Ffb0b483942cc8f922672fb3a246f%2FMuch-Ado-About-Nothing-Playbill-11-72.jpg")
    correctAppend.appendChild(photo)

  })
  nothing.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    nothing.style.textShadow = ""
  })
  cowboy.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    cowboy.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://i1.wp.com/better-lemons.com/wp-content/uploads/2018/04/CMJBOTProductionsPOSTER.jpg?fit=324%2C500&ssl=1")
    correctAppend.appendChild(photo)

  })
  cowboy.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    cowboy.style.textShadow = ""
  })
  child.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    child.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://roxytheatre.ca/wp-content/uploads/2017/05/Childrens-Hour-Web.jpg")
    correctAppend.appendChild(photo)

  })
  child.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    child.style.textShadow = ""
  })
  heathers.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    heathers.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://ih0.redbubble.net/image.497094568.3600/ap,550x550,12x16,1,transparent,t.u1.png")
    correctAppend.appendChild(photo)

  })
  heathers.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    heathers.style.textShadow = ""
  })
  madea.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    madea.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://thumbs.worthpoint.com/zoom/images1/1/1213/23/diana-rigg-madea-stage-actress_1_65889112ed7a434ce1e368a7dc0a929f.jpg")
    correctAppend.appendChild(photo)

  })
  madea.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    madea.style.textShadow = ""
  })
  lifetime.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    lifetime.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/41tdoU1BorL.jpg")
    correctAppend.appendChild(photo)

  })
  lifetime.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    lifetime.style.textShadow = ""
  })
  truffaldino.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    truffaldino.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/KS3.jpg")
    correctAppend.appendChild(photo)

  })
  truffaldino.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    truffaldino.style.textShadow = ""
  })
  julietChar.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    julietChar.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("class", "image4")
    photo.setAttribute("src", "Photos/photo4.jpg")
    correctAppend.appendChild(photo)

  })
  julietChar.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    julietChar.style.textShadow = ""
  })
  beatrice.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    beatrice.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://pmcvariety.files.wordpress.com/2011/06/rmuch_ado_globe.jpg?w=144")
    correctAppend.appendChild(photo)

  })
  beatrice.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    beatrice.style.textShadow = ""
  })
  cavale.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    cavale.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/30411845_2071868996159770_3975288314608484352_o.jpg?_nc_cat=109&_nc_ht=scontent-dfw5-2.xx&oh=98bad36b7340a08010182408ca77835e&oe=5C7A98AD")
    correctAppend.appendChild(photo)

  })
  cavale.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    cavale.style.textShadow = ""
  })
  catherine.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    catherine.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/something.jpg")
    correctAppend.appendChild(photo)

  })
  catherine.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    catherine.style.textShadow = ""
  })
  chandler.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    chandler.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/heathers.jpg")
    correctAppend.appendChild(photo)

  })
  chandler.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    chandler.style.textShadow = ""
  })
  chorus.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    chorus.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo7.jpg")
    correctAppend.appendChild(photo)

  })
  chorus.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    chorus.style.textShadow = ""
  })
  may.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    may.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "")
    correctAppend.appendChild(photo)

  })
  may.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    may.style.textShadow = ""
  })
  suttonTheater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    suttonTheater.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://adminmanual.syr.edu/images/buildings/regent_theatre.jpg")
    correctAppend.appendChild(photo)

  })
  suttonTheater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    suttonTheater.style.textShadow = ""
  })
  fairviewTheater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    fairviewTheater.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://photos.mycapture.com/ERIE/1943689/55997177E.jpg")
    correctAppend.appendChild(photo)

  })
  fairviewTheater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    fairviewTheater.style.textShadow = ""
  })
  globe.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    globe.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://littlebird-images-rfqejm1r.netdna-ssl.com/media/cache/resolve/web_full/images/5af2cd6882519.jpg")
    correctAppend.appendChild(photo)

  })
  globe.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    globe.style.textShadow = ""
  })
  marathon.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    marathon.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "")
    correctAppend.appendChild(photo)

  })
  marathon.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    marathon.style.textShadow = ""
  })
  loft1Theater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    loft1Theater.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://i.snag.gy/IYehyK.jpg")
    correctAppend.appendChild(photo)

  })
  loft1Theater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    loft1Theater.style.textShadow = ""
  })
  nomadTheater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    nomadTheater.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://images2.westword.com/imager/the-cozy-interior-of-the-nomad/u/745xauto/6587848/nomadinteriorpeterwallace.jpg")
    correctAppend.appendChild(photo)

  })
  nomadTheater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    nomadTheater.style.textShadow = ""
  })
  suttonPavilion.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    suttonPavilion.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "http://adminmanual.syr.edu/images/buildings/regent_theatre.jpg")
    correctAppend.appendChild(photo)

  })
  suttonPavilion.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    suttonPavilion.style.textShadow = ""
  })
  loft2Theater.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    loft2Theater.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://i.snag.gy/IYehyK.jpg")
    correctAppend.appendChild(photo)

  })
  loft2Theater.addEventListener("mouseout", (e) => {
    correctAppend.removeChild(photo)
    loft2Theater.style.textShadow = ""
  })
  fireside.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    fireside.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "Photos/photo8.jpg")
    movie.appendChild(photo)

  })
  fireside.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    fireside.style.textShadow = ""
  })
  firesideRole.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    firesideRole.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://i.snag.gy/yN1gjc.jpg")
    movie.appendChild(photo)

  })
  firesideRole.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    firesideRole.style.textShadow = ""
  })
  firesideDir.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    firesideDir.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://static1.squarespace.com/static/571d3731f8baf3a83d8c0cc3/t/58e57354bf629a0d7cf6b5c6/favicon.ico")
    movie.appendChild(photo)

  })
  firesideDir.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    firesideDir.style.textShadow = ""
  })
  hp.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    hp.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.15752-9/s2048x2048/45494884_354443221794401_5734520469671903232_n.jpg?_nc_cat=102&_nc_ht=scontent-dfw5-2.xx&oh=3d2e2a62eac4edb59fa78bb5b7704019&oe=5C80CCA8")
    movie.appendChild(photo)

  })
  hp.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    hp.style.textShadow = ""
  })
  hpRole.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    hpRole.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://i.snag.gy/KPF7m1.jpg")
    movie.appendChild(photo)

  })
  hpRole.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    hpRole.style.textShadow = ""
  })
  hpDir.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    hpDir.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://media.licdn.com/dms/image/C5616AQF6dY1RKrBUCg/profile-displaybackgroundimage-shrink_350_1400/0?e=1547078400&v=beta&t=Z5yLe2FR3YFWvwy0JYmSl_F0WG2RN9_NQsUHvRb8Vc4")
    movie.appendChild(photo)

  })
  hpDir.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    hpDir.style.textShadow = ""
  })
  stride.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    stride.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.0-9/40769125_2404966412861821_1158673780076183552_o.jpg?_nc_cat=107&_nc_ht=scontent-dfw5-2.xx&oh=83002516b30692002d523b181ee3502f&oe=5C41507B")
    movie.appendChild(photo)

  })
  stride.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    stride.style.textShadow = ""
  })
  strideRole.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    strideRole.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BMTBiNjE5YjUtMWE3MC00MzE2LWI3NDQtZTgyZmEzOWU0ZTlmXkEyXkFqcGdeQXVyNDM4ODI4ODE@._V1_SY1000_SX1600_AL_.jpg")
    movie.appendChild(photo)

  })
  strideRole.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    strideRole.style.textShadow = ""
  })
  strideDir.addEventListener("mouseover", (e) => {
    photo = document.createElement("img")
    strideDir.style.textShadow = "0 0 20px #ff00ff"
    photo.setAttribute("id", "clean")
    photo.setAttribute("src", "https://scontent-dfw5-2.xx.fbcdn.net/v/t31.0-8/23270538_1913654511993016_1912769585742582836_o.jpg?_nc_cat=110&_nc_ht=scontent-dfw5-2.xx&oh=02811e9f40153e9eb0c935469a301e8e&oe=5C6F71AA")
    movie.appendChild(photo)

  })
  strideDir.addEventListener("mouseout", (e) => {
    movie.removeChild(photo)
    strideDir.style.textShadow = ""
  })

})

//for appending and unappending events to resume items
// emily in stride -> https://m.media-amazon.com/images/M/MV5BMTBiNjE5YjUtMWE3MC00MzE2LWI3NDQtZTgyZmEzOWU0ZTlmXkEyXkFqcGdeQXVyNDM4ODI4ODE@._V1_SY1000_SX1600_AL_.jpg
