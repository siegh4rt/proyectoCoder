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
                <li class="nav-item">
                    <a class="nav-link" href="contacto.html" tabindex="-1" aria-disabled="true">Contacto</a>
                </li>
                </ul>
            </div>
        </div>
    </nav>
`;

const form = `
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

document.addEventListener("DOMContentLoaded", function(event) {
  let fragment = document.getElementById("nav-partial");
  let fieldForm = document.getElementById("fields-form");
  fragment.innerHTML = navigation;
  fieldForm.innerHTML = form;
});
