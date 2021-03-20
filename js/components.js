const navigation = `
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.html"><img src="assets/logo.png"></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse navbar-collapse--direction" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="perfil.html">Perfil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="reservas.html">Reservas</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
`;

const formTrip = `
    <div class="group">
        <label>fecha de viaje</label>
        <input type="text" value="03/07-2021" />
    </div>
    <div class="group">
        <label>fecha de regreso</label>
        <input type="text" value="10/08-2021" />
    </div>
    <div class="group">
        <label>Asientos</label>
        <input type="text" value="2b" />
    </div>
    <div class="group">
        <label>Nombre de quien hizo la reserva</label>
        <input type="text" value="jhon doe" />
    </div>
    <button>Editar</button>

`;

const contactForm = `
    <div class="form form__contact">
        <div class="group">
            <h2>Necesitas ayuda o hacer una consulta, escribenos</h2>
        </div>
        <div class="group">
            <label>tipo de mensaje</label>
            <select>
                <option value="value1">Reclamacion</option>
                <option value="value2" selected>Consulta</option>
                <option value="value3">Sugerencias</option>
            </select>
        </div>
        <div class="group">
            <label>asunto</label>
            <input type="text" placeholder="asunto" />
        </div>
        <div class="group">
            <label>mensaje</label>
            <textarea>escribe el mensaje</textarea>
        </div>
        <h3>desea recibir una copia de este mensaje en su email?</h3>
        <div class="group group__flex-direction">
            <input type="checkbox" id="check" name="si" value="si" />
            <label for="check">si</label>
        </div>
        <div class="group group__area-buttons">
            <button>limpiar formulario</button>
            <button>Enviar</button>
        </div>
    </div>
    <hr>
    <div class="sitemap">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="reservas.html">Reservas</a></li>
            <li><a href="perfil.html">Perfil</a></li>
        </ul>
    </div>
`;

document.addEventListener("DOMContentLoaded", function(event) {
  let fragment = document.getElementById("nav-partial");
  let fieldForm = document.getElementById("fields-form");
  let contactSection = document.getElementById("contact-section");

    if (fragment) fragment.innerHTML = navigation;
    if (fieldForm) fieldForm.innerHTML = formTrip;
    if (contactSection) contactSection.innerHTML = contactForm;


    let waterfall = new Waterfall({ 
        minBoxWidth: 400
    });

    window.onscroll = function() {
        var i = waterfall.getHighestIndex();
        if(i > -1) {
            // get last box of the column
            var lastBox = Array.prototype.slice.call(waterfall.columns[i].children, -1)[0];
            if(checkSlide(lastBox)) {
                var count = 5;
                while(count--) waterfall.addBox(boxHandle());
            }
        }
    };

    function checkSlide(elem) {
        if(elem) {
            var screenHeight = (document.documentElement.scrollTop || document.body.scrollTop) +
                               (document.documentElement.clientHeight || document.body.clientHeight);
            var elemHeight = elem.offsetTop + elem.offsetHeight / 2;

            return elemHeight < screenHeight;
        }
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
    
            reader.onload = function (e) {
                $('#imageResult')
                    .attr('src', e.target.result);
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
});


