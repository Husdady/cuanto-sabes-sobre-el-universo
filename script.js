window.onload = ()=>{

  let box = document.getElementsByClassName("questionnaire"),
    information = document.getElementsByClassName("information"),
    countReplys = document.createElement("span"),
    h1 = information[0].getElementsByTagName("h1"),
    div = information[0].getElementsByTagName("div"),
    nombreDeUsuario,
    aleatoryQuestions = [],
    buttonNext = document.createElement("button"),
    loading = document.createElement("span"),
    playMusic = $("main > div:first-child"),
    soundFound = $("#sound-background"),
    soundCheck = new Audio(),
    soundWrongError = new Audio(),
    soundNext = new Audio();
    
  soundNext.src="https://www.dropbox.com/s/crw7azchg5esrju/1606494046260.mp3?dl=1";
    
  soundCheck.src = "https://www.dropbox.com/s/x53ogvikk0iqkdk/sound-effect-check.mp3?dl=1";
    
  soundWrongError.src = "https://www.dropbox.com/s/tsj4v0q26oazakf/sound-effect-wrong-answer.mp3?dl=1";
  
  loading.id = "loading";
  countReplys.id = "count-reply";
    
    var i, puntaje, selectAnAnswer, status, j = true, point = 1;
  
    const backupTest = information[0].innerHTML;
  
  class questionnaire{
    constructor(){
  
      this.preguntas = [
        "¿Cuánto es el diámetro del Universo?",
        "¿Qué es una protogalaxia?",
        "¿Cuántas y cuáles son los tipos de galaxia?",
        "¿Cuántos son los satélites de Marte y cuáles son?",
        "¿Cuál es la estrella más grande del universo?",
        "¿Cuál es el planeta más pequeño del Universo conocido hasta la actualidad?",
        "¿Cuánta es la distancia entre la Tierra y la Luna?",
        "¿A qué fenómeno alude el término 'nova'?",
        "¿Cuál es el nombre del planeta conocido como el 'Nuevo planeta infernal?'",
        "¿Qué es un agujero negro?",
        "¿Cuál es la edad aproximada del Universo?",
        "¿Cuánto tiempo de vida aproximadamente le queda al Sol?",
        "¿Cuántos planetas enanos hay en el Sistema Solares y cuáles son?",
        "¿Qué sistema estelar recibe su nombre de un conocido literato universal?",
        "¿Qué temperaturas se pueden llegar a alcanzar en el Sol?",
        "¿Cómo se llama y dónde se encuentra la montaña más alta del sistema solar?",
        "¿Qué ciencia estudia el comportamiento del universo y sus cuerpos celestes?",
        "¿Cuál es la galaxia más cercana a la nuestra?",
        "¿Cuánto tiempo dura un día en Mercurio?",
        "¿Qué es un Encélado?",
        "¿Cuáles son las fuerzas conocidas del universo?",
        "¿Qué es un cuásar?",
        "¿Todos los planetas del Sistema Solar tienen satélites?",
        "¿Cómo se genera la energía que emiten las estrellas?",
        "¿Cuál es el tamaño de nuestra galaxia?",
        "¿Cómo se originan los asteroides?",
        "¿De qué se compone un asteroide?",
        "¿Quién hizo el primer mapa del Universo?",
        "¿Qué es la ESA?",
        "¿Qué es la microgravedad?",
        "¿Qué es un exoplaneta?",
        "¿Qué edad tiene la Tierra?",
        "¿Cuándo se vio por primera vez la cara oculta de la Luna?",
        "¿Qué es una explosión de rayos gamma?",
        "¿Qué es el Proyecto 'Hubble'?",
        "¿Qué es un púlsar?",
        "¿De dónde proviene el nombre de Vía Láctea?",
        "¿Cuál es la temperatura en el espacio?",
        "¿Por qué algunos planetas tienen anillos?",
        "¿Cuál es el asteroide más grande conocido?"
      ]
  
      this.respuestas = {
      0: [
      "a) Al menos 93 000 millones de años luz.",
      "b) Al menos 231 050 millones de años luz.",
      "c) Al menos 129 500 millones de años luz.",
      "d) Al menos 54 000 millones de años luz."
      ],
      1: [
      "a) Es una mínima porción de una galaxia.",
      "b) Es un tipo de galaxia de la secuencia de Hubble.",
      "c) Es una nube de gas que se forma en una galaxia.",
      "d) Ninguna de las anteriores es correcta."
      ],
      2: [
      "a) Existen 4 y son elípticas, espirales, regulares e irregulares.",
      "b) Existen 3 y son elípticas, espirales e irregulares.",
      "c) Existen 9 y son elípticas, espirales, lenticulares, irregulares, activas, seyfert, starburst, cuásares y radiogalaxias.",
      "d) Todas las anteriores son correctas."
      ],
      3: [
      "a) Marte posee 3 satélites y son Fobos, Caronte y Metis.",
      "b) Marte posee 1 satélite y es la Luna.",
      "c) Marte no posee satélites.",
      "d) Marte posee 2 satélites y son Fobos y Deimos."
      ], 
      4: [
      "a) V766 Centauri.",
      "b) VV Cephei A - B.",
      "c) UY Scuti.",
      "d) VY Canis Majoris."
      ],
      5: [
      "a) Plutón.",
      "b) Kepler-37b.",
      "c) J1407b.",
      "d) PSR 1620-26 b."
      ],
      6: [
      "a) 231.990 km.",
      "b) 384.400 km.",
      "c) 407.600 km.",
      "d) 502.870 km."
      ], 
      7: [
      "a) A la muerte de una estrella",
      "b) Al nacimiento de una estrella.",
      "c) A la formación de nuevas galaxias.",
      "d) Ninguna de las anteriores son correctas."
      ],
      8: [
      "a) HD 213885b.",
      "b) Kepler-438b.",
      "c) Gj 422 b.",
      "d) Mercurio."
      ],
      9: [
      "a) Un agujero negro es un fenómeno inusual del espacio que provoca que toda materia quede atrapada en un espacio sin salida.",
      "b) Un agujero negro es una anomalía del Universo que atrae todo lo que este a su paso para quedarse atrapado en su interior.",
      "c) Un agujero negro es una región finita del espacio en cuyo interior existe una concentración de masa lo suficientemente elevada como para generar un campo gravitatorio tal que ninguna partícula material, ni siquiera la luz, puede escapar de ella.",
      "d) Un agujero negro es una irregularidad del Universo que provoca destrucción a todo lo que este a su paso, pudiendo 'consumir' hasta Gigantes Rojas."
      ],
      10: [
      "a) 4088 millones de años.",
      "b) 13700 millones de años.",
      "c) 7205 millones de años.",
      "d) 133 mil millones de años."
      ],
      11: [
      "a) Aprox. 375 millones de años",
      "b) Aprox. 94 millones de años",
      "c) Aprox. 2 mil millones de años",
      "d) Aprox. 5 mil millones de años."
      ],
      12: [
      "a) Hay 4 y son Charon, Namaka, Dysnomia y 2007 OR.",
      "b) Hay 5 y son Plutón, Ceres, Eris, Makemake y Haumea.",
      "c) Hay 3 y son Makemake, Ceres y Plutón.",
      "d) Hay 2 y son Plutón y Nix."
      ], 
      13: [
      "a) Sistema de Ludwig van Beethoven.",
      "b) Sistema de Ernest Hemingway.",
      "c) Sistema de William Shakespeare.",
      "d) Sistema Cervantes."
      ],
      14: [
      "a) 2.000.000 ºC.",
      "b) 10.000.000 ºC.",
      "c) 15.000.000 ºC.",
      "d) 20.000.000 ºC."
      ],
      15: [
      "a) El Monte Olimpo, en Marte.",
      "b) El Altar de Zeus, en Júpiter.",
      "c) La Morada de los Titanes, en Júpiter.",
      "d) El Monte Eliseo, en Saturno."
      ], 
      16: [
      "a) La mecánica cuántica.",
      "b) La astrología.",
      "c) La astronomía.",
      "d) La física."
      ],
      17: [
      "a) Galaxia de Barnard.",
      "b) GR 8.",
      "c) M 32.",
      "d) Galaxia de Andrómeda."
      ],
      18: [
      "a) Lo que equivale a 27 días en la Tierra.",
      "b) Lo que equivale a 1 año y 13 horas en la Tierra.",
      "c) Lo que equivale a 1 mes y 2 semanas en la Tierra.",
      "d) Lo que equivale a 58 días y 15 horas en la Tierra."
      ],
      19: [
      "a) Una Luna.",
      "b) Un cometa.",
      "c) Una estrella.",
      "d) Un asteroide."
      ],
      20: [
      "a) La gravedad, La termonuclear, La interacción de Higgs y La electrisidad.",
      "b) La interacción nuclear fuerte, La interacción electromagnética, La interacción nuclear débil y La interacción gravitatoria.",
      "c) La velocidad, La interacción fuerte, La interacción fuerte y La fuerza subatómica.",
      "d) Ninguna de las anteriores son correctas."
      ],
      21: [
      "a) Un cuásar​​ o quasar​​ es una anomalía provocada por una explosión en un agujero negro.",
      "b) Un cuásar​​ o quasar​​ es una explosión generada por el choque de dos Sistemas Solares.",
      "c) Un cuásar​​ o quasar​​ es una fuente astronómica de energía electromagnética.",
      "d) Un cuásar​​ o quasar​​ es una explosión astronómica de energía electromagnética."
      ], 
      22: [
      "a) Todos menos Mercurio y Venus.",
      "b) Todos menos Neptuno.",
      "c) Si todos poseen al menos un satélite.",
      "d) La a y b son correctas."
      ],
      23: [
      "a) Se genera debido a la fusión de los núcleos de los átomos.",
      "b) Se genera debido a la fusión de sus electrones.",
      "c) Se genera debido a la fusión de sus neutrones.",
      "d) Se genera debido a la fusión de protones de carga positiva y negativa."
      ],
      24: [
      "a) 109.730 años luz.",
      "b) 52.850 años luz",
      "c) 33.662 años luz",
      "d) 75.450 años luz."
      ], 
      25: [
      "a) Se originaron tras la creación del Universo.",
      "b) Se originaron por el choque de las dos grandes galaxias del Universo.",
      "c) Se originaron por el impacto de un cometa con un cuerpo celeste.",
      "d) Se originaron a partir de la colisión de cuerpos mayores que no llegaron a conformar un planeta por la influencia gravitatoria de Júpiter."
      ],
      26: [
      "a) Se componen mayormente por granito.",
      "b) Se componen mayormente por roca compuesta de silicatos y metal.",
      "c) Se componen mayormente por cúmulos de escombros.",
      "d) Se componen mayormente por rocas metamórficas."
      ],
      27: [
      "a) Un equipo del Instituto Max Planck de Astronomía.",
      "b) Nicolás Copérnico.",
      "c) Johannes Kepler.",
      "d) Edwin Hubble."
      ],
      28: [
      "a) Es una organización internacional dedicada a la exploración espacial.",
      "b) Es una nueva unidad atómica descubierta hace poco.",
      "c) Es la Agencia Espacial Europea.",
      "d) La a y c son correctas.."
      ],
      29: [
      "a) Es más o menos un sinónimo de ingravidez y cero-G, pero indica que las fuerzas G no son absolutamente cero, solo muy pequeñas.",
      "b) Es la poca gravedad en un Éncelado, por ejemplo en la Luna hay microgravedad.",
      "c) Es falta de gravedad en el Espacio.",
      "d) Ninguna de las anteriores es correcta."
      ],
      30: [
      "a) Es un planeta que vaga por el espacio sin rumbo alguno.",
      "b) Es un planeta que no posee Sistema Solar.",
      "c) Es un planeta fuera de nuestro Sistema Solar.",
      "d) Es un planeta que posee anillos."
      ],
      31: [
      "a) 4,543 miles de millones años.",
      "b) 7,802 miles de millones años.",
      "c) 1,379 miles de millones años.",
      "d) 2,066 miles de millones años."
      ], 
      32: [
      "a) El 29 de junio de 1892.",
      "b) El 15 de febrero de 1878.",
      "c) El 9 de noviembre de 1967.",
      "d) El 7 de octubre de 1959."
      ],
      33: [
      "a) Son explosiones nucleares generadas en el vacío del Universo",
      "b) Son explosiones extremadamente energéticas en galaxias distantes.",
      "c) Son explosiones ocasionadas por una gran fuerza gravitacional.",
      "d) Son explosiones ocasionadas por el choque de dos átomos."
      ], 
      34: [
      "a) Es un Telescopio espacial realizado por la NASA y la Agencia Espacial Europea para obtener imagenes en alta resolución del Universo.",
      "b) Todas son correctas menos la b.",
      "c) Es un Telescopio espacial que puede obtener imágenes con una resolución óptica mayor de 0,04 segundos de arco.",
      "d) Es un Telescopio espacial que fue puesto en órbita el 24 de abril de 1990."
      ],
      35: [
      "a) Un púlsar ​es una anomalía que emite grandes ondas de fuerzas electromagneticas.",
      "b) Un púlsar ​es un campo gravitario de neutrones que emite radiación.",
      "c) Un púlsar ​es una estrella de neutrones que emite radiación periódica.",
      "d) Un púlsar ​es una supernova que emite radiación periódica."
      ],
      36: [
      "a) El nombre Vía Láctea proviene de la mitología judía, que significa muro de leche.",
      "b) El nombre Vía Láctea proviene de la mitología nórdica, que significa vaso de leche.",
      "c) El nombre Vía Láctea proviene de la mitología griega, que significa en medio de la leche.",
      "d) El nombre Vía Láctea proviene de la mitología latina, y esta de la griega que significa en latín camino de leche."
      ],
      37: [
      "a) -270 °C.",
      "b) -432 °C.",
      "c) -138 °C.",
      "d) -97 °C."
      ],
      38: [
      "a) Algunos planetas poseen anillos por el resultado de la desintegración de un cometa.",
      "b) Algunos planetas poseen anillos por el resultado de la desintegración de un satélite.",
      "c) Algunos planetas poseen anillos por el resultado de la desintegración de un asteroide.",
      "d) Ninguna de las anteriores son correctas."
      ],
      39: [
      "a) Didymos.",
      "b) Itokawa.",
      "c) Ceres.",
      "d) Ryugu."
      ], 
    }
      this.respuestasCorrectas = [
        "a)",
        "c)",
        "c)", 
        "d)",
        "c)",
        "b)",
        "b)",
        "a)",
        "a)",
        "c)",
        "b)", 
        "d)",
        "b)",
        "d)",
        "c)",
        "a)",
        "c)",
        "d)",
        "d)",
        "a)",
        "b)",
        "c)", 
        "c)",
        "a)",
        "b)",
        "d)",
        "b)",
        "a)",
        "d)",
        "a)",
        "c)",
        "a)",
        "d)",
        "b)",
        "b)",
        "c)",
        "d)",
        "a)",
        "b)",
        "c)"
      ]
  
      this.mostrarResultados = 
      `
      <div class="results">¡Has acabado de resolver este test de ${this.preguntas.length} preguntas! Para ver los resultados por favor haga click en el boton de abajo:<br>
      <button style="float: none;">Mostrar resultados</button></div>
      `
      
    }
  
    addNewText(title, answers){ 
    
  
    if (i === 0){
    information[0].prepend(countReplys);
  }
    
    title.textContent = `${this.preguntas[aleatoryQuestions[i]]}`;
    
    answers.innerHTML = `
    <div class="reply r${i}">${this.respuestas[aleatoryQuestions[i]][0]}</div>
    <div class="reply r${i}">${this.respuestas[aleatoryQuestions[i]][1]}</div>
    <div class="reply r${i}">${this.respuestas[aleatoryQuestions[i]][2]}</div>
    <div class="reply r${i}">${this.respuestas[aleatoryQuestions[i]][3]}</div>
    `;
  
    let replysQuestionnary = document.querySelectorAll(`.r${i}`);
  
    replysQuestionnary.forEach(element => {
    element.addEventListener("click", e=> {
  
      let targetReplys = e.target;
      selectAnAnswer = true;
  
    if (status === true){
      if (targetReplys.textContent.includes(this.respuestasCorrectas[aleatoryQuestions[i]])){
        targetReplys.classList.add("check");
        puntaje += point;
        soundCheck.play();
      } else {
        targetReplys.classList.add("danger");
        soundWrongError.play();
        puntaje += 0;
        for (let replyCorrect of replysQuestionnary){
          if (replyCorrect.textContent.includes(this.respuestasCorrectas[aleatoryQuestions[i]])){
          replyCorrect.classList.add("check");
          }
        }
      }
    } else {
      return;
    }
  
    status = false;
  
    });
  });
  
    }
  
    mostrarResultado(){
  
    this.mensajeResultado = document.createElement("div");
    let questionAgainTest = document.createElement("span"),
    allQuestions = this.preguntas.length,
  
    // Mensajes al usuario
    messageForAllReplyCorrect = document.createTextNode("¡Felicidades has acertado todas las respuestas! ,sabes mucho acerca del Universo, deberías ser Astrónomo/a."),
  
    messageFor75ReplyCorrect = document.createTextNode("¡Casii! Te ha faltado un poco para acertar todas las respuesta. Realmente eres muy bueno/a en esto, Te felicito!."),
  
    messageFor50ReplyCorrect = document.createTextNode("¡WoW! Has superado el 50% de respuestas correctas, eres muy inteligente no lo olvides, puedes volver a intentarlo hasta lograr responder correctamente todas las preguntas."),
  
    messageForMoreThan25ReplyCorrect = document.createTextNode("¡Nada mal! , te ha faltado un poco para acertar el 50% de respuestas correctas, ¡Bien hecho! sigue así, ahora te propongo que aciertes todas las preguntas."),
  
    messageForLessThan25ReplyCorrect = document.createTextNode("¡Tu puntaje es realmente bajo! ,tal vez las preguntas han estado un poco dificiles, ¿Te animas a volver a responder el test?"),
  
    messageForNoneReplyCorrect = document.createTextNode("¡Qué mal! ,no acertaste ninguna respuesta, pero no te preocupes lo puedes volver a intentar.");
  
    this.mensajeResultado.id = "result";
    
    this.mensajeResultado.innerHTML = `<br><br>${nombreDeUsuario}, obtuviste ${puntaje} pts de un total de ${this.preguntas.length} preguntas, lamentablemente fallaste en ${this.preguntas.length - puntaje} preguntas. Por cada respuesta correcta obtuviste ${point} pts, muchas gracias por responder este test.<br><br>`
  
    if (puntaje === allQuestions){
    this.mensajeResultado.prepend(messageForAllReplyCorrect);
    }
    else if (preguntasAll > puntaje && puntaje >= preguntasAll*75/100){
    this.mensajeResultado.prepend(messageFor75ReplyCorrect);
    }
    else if (preguntasAll*75/100 > puntaje && puntaje >= preguntasAll*50/100){
    this.mensajeResultado.prepend(messageFor50ReplyCorrect);
    }
    else if (preguntasAll*50/100 > puntaje && puntaje >= preguntasAll*25/100){
    this.mensajeResultado.prepend(messageForMoreThan25ReplyCorrect);
    }
    else if (allQuestions*25/100 > puntaje > 0){
    this.mensajeResultado.prepend(messageForLessThan25ReplyCorrect);
    }
    else if (puntaje === 0) { 
    this.mensajeResultado.prepend(messageForNoneReplyCorrect);
    }
  
    questionAgainTest.innerHTML = ` <span id="questionInResult">¿Desea volver a realizar este test? <span id="yes">Si</span> o <span id="no">No</span></span>`
  
    this.mensajeResultado.appendChild(questionAgainTest);
     
    return this.mensajeResultado;
  
    }
    
    againTest(){
    setTimeout(()=>{
    information[0].innerHTML = "";
    information[0].appendChild(loading);
    information[0].classList.add("padding");
      setTimeout(()=>{
      loading.remove();
      information[0].classList.remove("padding");
      information[0].innerHTML = backupTest; 
      }, 5000);
    }, 3000);
    }
  
    finishTest(){
    let result = document.getElementById("questionInResult");
    result.firstElementChild.remove();
    result.textContent = "Muchas gracias, que tenga un buen día o buenas noches, le deseo una Feliz Navidad y prospero Año Nuevo."
    }
  
  }
  
    /* <------------ Objeto ------------> */
    const testUniverse = new questionnaire(),
          preguntasAll = testUniverse.preguntas.length;
          
  
    /* <------------ Botones ------------> */
    buttonNext.textContent = "Siguiente";
    buttonNext.className = "next";
  
    box[0].addEventListener('click', e=>{
      let target = e.target;
      
      if (target.tagName === "BUTTON"){
      
      soundNext.play();
  
        if (target.textContent === "Mostrar resultados"){ 
        if (j === true) information[0].appendChild(testUniverse.mostrarResultado());
        return j = false;
        }
  
        setTimeout(()=>{
        target.remove();
        information[0].appendChild(buttonNext);
        }, 3000);
  
        if (target.className === "start-test"){
        i = 0;
        selectAnAnswer = false;
        j = true;
        puntaje = 0;
        status = true;
        aleatoryNumber();
   }
  
        else if (target.className === "next"){
  
        if (selectAnAnswer === false){
        return Swal.fire({
          text: "Por favor seleccione una respuesta...",
          icon: "warning",
          iconColor: "#CB4040",
          confirmButtonColor: "#CB4040"
        });
        }
        else {
          ++i;
          status = true;
          target.setAttribute("disabled", "disabled");  
        }
  
        selectAnAnswer = false;
        setTimeout(()=>{
        target.removeAttribute("disabled");
        }, 3000);  
  
      }
  
        fadeOut(information[0]);
        fadeIn(information[0]); 
  
        setTimeout(()=>{
          if (i <= preguntasAll - 1){
          status = true;
          countReplys.textContent = `Pregunta ${i+1} de ${preguntasAll}:`;
          return testUniverse.addNewText(h1[0], div[0]);
          } else {
          return information[0].innerHTML = testUniverse.mostrarResultados;
          }
        }, 3000);
    }
    
    else if (target.id === "yes"){
      fadeOut(information[0]);
      fadeIn(information[0]);
      aleatoryQuestions = [];
      return testUniverse.againTest();
    }
    else if (target.id === "no"){
      testUniverse.finishTest();
    }
    
   });
  
  const fadeIn = selector =>{
    setTimeout(()=>{
    selector.classList.add("fade-in");
    selector.classList.remove("fade-out");
    }, 3000);
  }
  const fadeOut = selector =>{   
    status = false;
    selector.classList.add("fade-out");
    selector.classList.remove("fade-in"); 
  }
  
  let divPrompt = document.createElement("div"),
  anotherDiv = document.createElement("div"),
  contentPrompt = document.createElement("section");
  divPrompt.id = "prompt";
  contentPrompt.id = "content-prompt";
  
  document.body.appendChild(divPrompt);
  divPrompt.appendChild(contentPrompt);
  contentPrompt.appendChild(anotherDiv);
  anotherDiv.innerHTML = `<span>Por favor, ingrese un nombre de Usuario:</span><input id="username" type="text" placeholder="Ejm: Husdady"/>
  <button id="add-username">Agregar nombre de usuario</button>
  <button id="not-add-username">Cancelar</button>`
  document.body.style.position = "relative";
  document.body.style.overflow = "hidden";
  
  document.querySelector("#content-prompt").addEventListener("click", e=>{
    let username = document.getElementById("username").value;
    if (e.target.id === "add-username"){
    if (username != ""){
    nombreDeUsuario = username;
    document.body.removeAttribute("style");
    divPrompt.remove();
    playMusic.click();
    } else {
    Swal.fire({
      html: "<span style='color: black'>Por favor proporcione un nombre de usuario...</span>",
      icon: "warning",
      background: "rgba(255,255,255,0.6)",
      iconColor: "#CB4040",
      confirmButtonColor: "#CB4040",
      textColor: "red"  
    });
  }
    } else if (e.target.id === "not-add-username"){
      nombreDeUsuario = "Usted no ha especificado un nombre de usuario";
      divPrompt.remove();
      playMusic.click();
      document.body.removeAttribute("style");
    }
  });
  
  setTimeout(()=>{
  Swal.fire({
    icon: "info",
    iconColor: "#008D92",
    background: "rgba(0,0,0,0.5)",
    text: 'Querido usuario, en caso de que este usando un dispositivo móvil y no se ejecute la música de fondo, por favor hacer click en el boton play de arriba.',
    confirmButtonColor: "#008D92",
    confirmButtonText: "Ok, Entiendo!",
    showClass: {
        popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
    }
  })
  }, 16000)
  
  setTimeout(()=>{
    Swal.fire({
      icon: "warning",
      iconColor: "#CB4040",
      text: 'Porfavor no haga trampa, responda honestamente sin buscar información en el navegador o ayuda externa.',
      confirmButtonColor: "#CB4040",
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }, 37000);
  
  playMusic.on("click", function(){
   let icons = $(this).find("span").find("i"),
   span = $(this).find("span").find("span");
  
   if (icons.attr("class") === "fas fa-pause"){
    icons.attr("class","fas fa-play");
    soundFound.trigger("pause");
    span.text("Play background music");
   } else {
    icons.attr("class","fas fa-pause");
    soundFound.trigger("play");
    span.text("Stop background music");
   }
  
  });
  
  function aleatoryNumber() {
  for (let z = 0; z < testUniverse.preguntas.length; z++) {
    aleatoryQuestions[z] = z;
  }
  aleatoryQuestions.sort(()=> Math.random() > 0.5 ? 1 : -1);
  }
   }
