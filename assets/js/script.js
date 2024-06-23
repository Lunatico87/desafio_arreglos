import propiedades_venta from "./propiedades_venta.js";
import propiedades_alquiler from "./propiedades_alquiler.js";

const venta = document.querySelector("#propiedades-venta");
const alquiler = document.querySelector("#propiedades-alquiler");

if(venta !== null ){
    let html = ''
    for(let propiedad of propiedades_venta){
    html += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedad.nombre}</h5>
    <p class="card-text">${propiedad.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
    }
    venta.innerHTML = html
}
if(alquiler !== null){
    let html = ''
    for(let propiedad of propiedades_alquiler){
    html += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedad.nombre}</h5>
    <p class="card-text">${propiedad.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
    }
    alquiler.innerHTML = html
}
if(venta !== null && alquiler !== null){
    let htmlventa = ''
    for(let propiedad of propiedades_venta.slice(0, 3)){
    htmlventa += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedad.nombre}</h5>
    <p class="card-text">${propiedad.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
       }
    venta.innerHTML = htmlventa 
    
    let htmlAlquiler = ''
    for(let propiedad of propiedades_alquiler.slice(0, 3)){
    htmlAlquiler += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedad.nombre}</h5>
    <p class="card-text">${propiedad.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedad.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
    <p class="${propiedad.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedad.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedad.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedad.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedad.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
   }
alquiler.innerHTML = htmlAlquiler
}