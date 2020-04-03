const coal=document.getElementById('coal');
const iron=document.getElementById('iron'); 
const gold=document.getElementById('gold');
var background=document.getElementById('background');
var container=document.getElementById('element-container');
function add(element){
    background.classList.add('isVisible');
    container.classList.add('container');
    container.innerHTML='';
    elementIcon=new Image(); 
    elementLegend=document.createElement('h1'); 
    elementInfo=document.createElement('div');
    switch(element){
        case 'coal':
            elementIcon.src='https://pm1.narvii.com/6478/bb5b83b312b32325c562e0d4711a47052d345328_00.jpg';
            elementLegend.innerHTML='Carbón';
            elementInfo.innerHTML=`<p>El carbono (del latín, carbo, 'carbón') es un elemento químico con símbolo C, número atómico 6 y masa atómica 12,01. Es un no metal y tetravalente, disponiendo de cuatro electrones para formar enlaces químicos covalentes. Tres isótopos del carbono se producen de forma natural, los estables 12C y 13C y el isótopo radiactivo 14C, que decae con una vida media de unos 5730 años.1​ El carbono es uno de los pocos elementos conocidos desde la antigüedad,2​ y es el pilar básico de la química orgánica. Está presente en la Tierra en estado de cuerpo simple (carbón y diamantes), de compuestos inorgánicos (CO2 y CaCO3) y de compuestos orgánicos (biomasa, petróleo y gas natural). También se han sintetizado muchas nuevas estructuras basadas en el carbono: carbón activado, negro de humo, fibras, nanotubos, fullerenos y grafeno.</p> 
                <p>El carbono es el 15.º elemento más abundante en la corteza terrestre,3​ y el cuarto elemento más abundante en el universo en masa después del hidrógeno, el helio y el oxígeno. La abundancia del carbono, su diversidad única de compuestos orgánicos y su inusual capacidad para formar polímeros a las temperaturas comúnmente encontradas en la Tierra, permite que este elemento sirva como componente común de toda la vida conocida. Es el segundo elemento más abundante en el cuerpo humano en masa (aproximadamente el 18,5%) después del oxígeno.</p>`;
            break;
        case 'iron':
            elementIcon.src='https://pm1.narvii.com/6478/21c972a6e76210d1221befcdf82683e7f991a40b_hq.jpg';
            elementLegend.innerHTML='Hierro'; 
            elementInfo.innerHTML=`<p>El hierro o fierro1​2​ es un elemento químico de número atómico 26 situado en el grupo 8, periodo 4 de la tabla periódica de los elementos. Su símbolo es Fe (del latín fĕrrum)1​ y tiene una masa atómica de 55,847 u.</p>
                <p>Este metal de transición es el cuarto elemento más abundante en la corteza terrestre, representando un 5 % y, entre los metales, solo el aluminio es más abundante, y es el primero más abundante en masa planetaria, debido a que el planeta, en su núcleo, concentra la mayor masa de hierro nativo, equivalente a un 70 %. El núcleo de la Tierra está formado principalmente por hierro y níquel en forma metálica, generando al moverse un campo magnético. Ha sido históricamente muy importante, y un período de la historia recibe el nombre de Edad de Hierro. En cosmología, es un metal muy especial, pues es el metal más pesado que puede ser producido por la fusión en el núcleo de estrellas masivas; los elementos más pesados que el hierro solo pueden crearse en supernovas.</p>`;
            break;
        case 'gold':
            elementIcon.src='https://i.pinimg.com/originals/0d/ed/a1/0deda1d34d6f865130c05d7158271299.png';
            elementLegend.innerHTML='Oro';
            elementInfo.innerHTML=`<p>El oro es un elemento químico cuyo número atómico es 79. Está ubicado en el grupo 11 de la tabla periódica. 
                Es un metal precioso blando de color dorado. Su símbolo es Au (del latín aurum, ‘brillante amanecer’). Además, es uno de los metales 
                más apreciados en joyería por sus propiedades físicas, al tener baja alterabilidad, ser muy maleable, dúctil y brillante, y valorado por su rareza, al ser un metal difícil de encontrar en la naturaleza.</p>
                <p>Es un metal de transición blando, brillante, amarillo, pesado, maleable y dúctil. El oro no reacciona con la mayoría de los productos químicos, pero es sensible y soluble al cianuro, al mercurio, al agua regia, al cloro y a la lejía. Este metal se encuentra normalmente en estado puro, en forma de pepitas y depósitos aluviales. Es un elemento que se crea gracias a las condiciones extremas en el núcleo colapsante de las supernovas. Cuando la reacción de una fusión nuclear cesa, las capas superiores de la estrella se desploman sobre el núcleo estelar, comprimiendo y calentando la materia hasta el punto de que los núcleos más ligeros, como por ejemplo el hierro, se fusionan para dar lugar a los metales más pesados (uranio, oro, etc.). Un estudio sugiere que el oro del planeta provino de la colisión de estrellas de neutrones.</p>
                `;
            break;
    }
    exit=document.createElement('button');
    exit.innerHTML='REGRESAR';
    exit.addEventListener('click',(e)=>{
        background.classList.remove('isVisible'); 
        container.innerHTML='';
    });
    container.appendChild(exit);
    container.appendChild(elementIcon);
    container.appendChild(elementLegend);
    container.appendChild(elementInfo);
}
coal.addEventListener('click',(e)=>{
    add('coal');
});
iron.addEventListener('click',(e)=>{
    add('iron');
});
gold.addEventListener('click',(e)=>{
    add('gold');
}); 
alert('Disponibles oro, carbón y hierro');