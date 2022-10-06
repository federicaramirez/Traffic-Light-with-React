import React, {useState} from "react";
// import React ,  {useState} from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Semaforo = () => {
	
	const [shadowred, useShadowred] = useState("apagado");
	const [shadowamarillo, useShadowamarillo] = useState("apagado");
	const [shadowverde, useShadowverde] = useState("apagado");

const encenderLuz= () => {
	if ( shadowred == "apagado") {
		useShadowred("encendido")
		useShadowamarillo("apagado")
		useShadowverde("apagado")		
	} 
}

const encenderDos= () => {
	if ( shadowamarillo == "apagado") {
		useShadowamarillo("encendido")
		useShadowred("apagado")	
		useShadowverde("apagado")
	} 
}

const encenderTres= () => {
	if ( shadowverde == "apagado") {
		useShadowverde("encendido")
		useShadowamarillo("apagado")
		useShadowred("apagado")		
	} 
}




	return (
		<div className="position-absolute top-50 start-50 translate-middle">
		<div className="container text-center display-flex">
  <div className="row row-cols-2 bg-black">
    <div className="col-12 rounded-circle bg-danger" onClick= {()=> encenderLuz()}>{shadowred}</div>
    <div className="col-12 rounded-circle bg-warning" onClick= {()=> encenderDos()}>{shadowamarillo}</div>
    <div className="col-12 rounded-circle bg-success" onClick= {()=> encenderTres()}>{shadowverde}</div>
  </div>
</div> 
</div>
	);
};

export default Semaforo;

// onClick= {()=> encenderLuz()}