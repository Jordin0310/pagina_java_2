
document.body.style.margin = "0";
document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.lineHeight = "1.6";
document.body.style.backgroundColor = "#f4f4f4";
document.body.style.color = "#333";

function createElement(tag, options = {}) {
    const el = document.createElement(tag);
    if (options.text) el.textContent = options.text;
    if (options.html) el.innerHTML = options.html;
    if (options.style) Object.assign(el.style, options.style);
    if (options.attrs) for (const [key, val] of Object.entries(options.attrs)) el.setAttribute(key, val);
    return el;
}

// Header
const header = createElement("div", {
    text: "Página de la Profesora",
    style: {
        backgroundColor: "#333",
        color: "white",
        padding: "20px",
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "bold"
    }
});
document.body.appendChild(header);

// Main
const main = createElement("div", {
    style: {
        maxWidth: "1000px",
        margin: "auto",
        padding: "20px",
        backgroundColor: "white"
    }
});
document.body.appendChild(main);

// Títulos
main.appendChild(createElement("h1", { text: "Doctora Erika Yunuen Morales Mateos", style: { textAlign: "center" } }));
main.appendChild(createElement("h2", { text: "Docente en la Universidad UJAT, División de Tecnologías de la Información", style: { textAlign: "center" } }));
main.appendChild(document.createElement("hr"));

// Párrafo central
main.appendChild(createElement("p", {
    text: "Durante su trayectoria como docente ha impartido diversas asignaturas en esta división, siendo la programación una de sus asignaturas más fuertes.",
    style: { textAlign: "center", fontSize: "18px" }
}));

// Imagen avatar
const img1 = createElement("img", {
    attrs: { src: "avatar1.jpg", width: "340", alt: "Doctora Erika Yunuen" },
    style: { display: "block", margin: "15px auto" }
});
main.appendChild(img1);

// Datos académicos
main.appendChild(createElement("p", { html: "<strong>Puesto actual:</strong> Profesora - Investigadora" }));
main.appendChild(createElement("p", { html: "<strong>Máximo grado de estudio:</strong> Doctorado" }));
main.appendChild(createElement("p", {
    text: "Estudió la Licenciatura en Sistemas Computacionales en la Universidad Juárez Autónoma de Tabasco (UJAT), en la División Académica de Informática y Sistemas (DAIS), actualmente conocida como División Académica de Ciencias y Tecnologías de la Información (DACYTI), Cunduacán, Tabasco."
}));

// Info contenedor
const infoContainer = createElement("div", {
    style: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: "30px",
        margin: "40px 0"
    }
});

const infoTexto = createElement("div", { style: { flex: 1, minWidth: "300px", fontSize: "18px", color: "#444" } });
infoTexto.appendChild(createElement("h3", { text: "Sobre su Trayectoria Profesional", style: { color: "#222", fontSize: "22px" } }));
infoTexto.appendChild(createElement("p", { text: "La doctora Erika Yunuen ha participado en múltiples proyectos de investigación relacionados con el desarrollo de software educativo, inteligencia artificial y análisis de datos." }));
infoTexto.appendChild(createElement("p", { text: "También ha colaborado con organismos académicos y tecnológicos en la creación de contenidos formativos, así como en la actualización curricular de programas universitarios." }));
infoTexto.appendChild(createElement("p", { text: "Su pasión por la enseñanza y la tecnología la ha llevado a impartir conferencias y talleres a nivel nacional e internacional." }));
infoContainer.appendChild(infoTexto);

const infoImagen = createElement("img", {
    attrs: { src: "ericka.jpg", width: "340", alt: "Doctora Erika Yunuen" },
    style: { flexShrink: "0" }
});
infoContainer.appendChild(infoImagen);
main.appendChild(infoContainer);

// Reconocimientos
main.appendChild(createElement("div", {
    text: "Reconocimientos a Nivel Internacional y Nacional",
    style: {
        backgroundColor: "#333",
        color: "yellow",
        fontSize: "22px",
        padding: "10px",
        marginTop: "30px"
    }
}));

// Listas
main.appendChild(createElement("p", { text: "Nivel Internacional:", style: { color: "black", fontSize: "20px", fontWeight: "bold", marginTop: "15px" } }));
const ulInt = createElement("ul");
["Sun Certified Associate for The Java Platform, Standard Edition – Sun Microsystems", "Adobe Certified Associate in Rich Media Communication Using Adobe Flash CS4 – Adobe Systems Incorporated"].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulInt.appendChild(li);
});
main.appendChild(ulInt);

main.appendChild(createElement("p", { text: "Nivel Nacional:", style: { color: "black", fontSize: "20px", fontWeight: "bold", marginTop: "15px" } }));
const ulNac = createElement("ul");
["Certificación Académica en Informática Administrativa – ANFECA", "Certificación en el Estándar Técnico de Competencias Paracurriculares de Ingeniero de Software – NYCE"].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ulNac.appendChild(li);
});
main.appendChild(ulNac);

// Footer
const footer = createElement("footer", {
    style: { textAlign: "right", padding: "20px", backgroundColor: "#eee" }
});
footer.innerHTML = `
<a href="https://www.facebook.com/share/1Hdbt9GKHX/" target="_blank">
    <img src="facebook_icono.png" alt="Facebook" width="20" style="vertical-align: middle; margin-right: 8px;"> Ir a Facebook
</a><br>
<a href="mailto:erika.yunuen.m.m@hotmail.com">
    <img src="hotmail_icono.png" alt="Correo" width="20" style="vertical-align: middle; margin-right: 8px;"> Ir a Correo
</a>
`;
document.body.appendChild(footer);
