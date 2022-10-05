import React, {useState} from "react";
// import React ,  {useState} from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Semaforo = () => {
	
	const [shadow, useShadow] = useState("");
	console.log(shadow);
	
const encenderLuz= (event) => {
	if ( shadow == "") {
		useShadow("shadow-lg")		
	} 

}

	return (
		<div className="position-absolute top-50 start-50 translate-middle">
		<div className="container text-center display-flex">
  <div className="row row-cols-2 bg-black">
    <div className={"col-12 rounded-circle bg-danger" + shadow}  onClick= {()=> encenderLuz()}  ></div>
    <div className={"col-12 rounded-circle bg-warning " + shadow} >Column</div>
    <div className={"col-12 rounded-circle bg-success " + shadow}>Column</div>
  </div>
</div>
</div>
	);
};

export default Semaforo;
