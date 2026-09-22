const CALCS = [
{id:"porcentajes",name:"Porcentajes",cat:"Matemáticas",icon:"%",desc:"Calcula porcentajes, aumentos y reducciones.",url:"calculadora-porcentajes.html"},
{id:"iva",name:"IVA",cat:"Dinero",icon:"€",desc:"Añade o quita IVA de un precio.",url:"calculadora-iva.html"},
{id:"descuentos",name:"Descuentos",cat:"Dinero",icon:"↓",desc:"Calcula el precio final de una oferta.",url:"calculadora-descuentos.html"},
{id:"regla-tres",name:"Regla de tres",cat:"Matemáticas",icon:"⅓",desc:"Resuelve reglas de tres simples.",url:"calculadora-regla-de-tres.html"},
{id:"promedio",name:"Promedio",cat:"Matemáticas",icon:"x̄",desc:"Obtén la media de varios números.",url:"calculadora-promedio.html"},
{id:"edad",name:"Edad",cat:"Tiempo",icon:"🎂",desc:"Calcula tu edad exacta y próximos cumpleaños.",url:"calculadora-edad.html"},
{id:"fechas",name:"Días entre fechas",cat:"Tiempo",icon:"▣",desc:"Calcula cuántos días hay entre dos fechas.",url:"calculadora-fechas.html"},
{id:"horas",name:"Horas y minutos",cat:"Tiempo",icon:"◷",desc:"Suma o resta horas y minutos.",url:"calculadora-horas.html"},
{id:"sueldo",name:"Sueldo",cat:"Dinero",icon:"€",desc:"Calcula equivalencias de sueldo bruto y neto.",url:"calculadora-sueldo.html"},
{id:"propina",name:"Propina",cat:"Dinero",icon:"＋",desc:"Calcula propina y reparto de una cuenta.",url:"calculadora-propina.html"},
{id:"gasolina",name:"Gasolina",cat:"Vida diaria",icon:"⌁",desc:"Calcula el coste de un viaje en coche.",url:"calculadora-gasolina.html"},
{id:"imc",name:"IMC",cat:"Vida diaria",icon:"⚖",desc:"Calcula el índice de masa corporal.",url:"calculadora-imc.html"},
{id:"calorias",name:"Calorías",cat:"Vida diaria",icon:"🔥",desc:"Estima calorías diarias con una fórmula orientativa.",url:"calculadora-calorias.html"},
{id:"interes",name:"Interés simple",cat:"Dinero",icon:"%",desc:"Calcula intereses simples.",url:"calculadora-interes.html"},
{id:"salario-hora",name:"Salario por hora",cat:"Dinero",icon:"⏱",desc:"Convierte salario mensual en valor por hora.",url:"calculadora-salario-hora.html"},
{id:"combinaciones",name:"Porcentaje de cambio",cat:"Matemáticas",icon:"↗",desc:"Calcula cuánto ha subido o bajado un valor.",url:"calculadora-cambio.html"}
];

const grid=document.getElementById("calculatorGrid"), search=document.getElementById("search"), count=document.getElementById("resultCount"), empty=document.getElementById("noResults");
function render(list){grid.innerHTML=list.map(c=>`<a class="calc-card" href="${c.url}" data-search="${c.name} ${c.cat} ${c.desc}"><div class="calc-icon">${c.icon}</div><h3>${c.name}</h3><p>${c.desc}</p><small>Calcular →</small></a>`).join("");count.textContent=`${list.length} herramientas`;empty.classList.toggle("hidden",list.length!==0);grid.classList.toggle("hidden",list.length===0)}
function filter(q){q=q.trim().toLowerCase();render(CALCS.filter(c=>(c.name+" "+c.cat+" "+c.desc).toLowerCase().includes(q)))}
search.addEventListener("input",e=>filter(e.target.value));
document.querySelectorAll("[data-jump]").forEach(b=>b.addEventListener("click",()=>{search.value=b.dataset.jump;filter(b.dataset.jump);document.getElementById("calculadoras").scrollIntoView()}));
document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>{search.value="";render(CALCS.filter(c=>c.cat===b.dataset.filter));setTimeout(()=>document.getElementById("calculadoras").scrollIntoView(),0)}));
render(CALCS); document.getElementById("year").textContent=new Date().getFullYear();