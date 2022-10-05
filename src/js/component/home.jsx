import React, {useState} from "react";
// import React ,  {useState} from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Semaforo = () => {
	
	const [shadow, useShadow] = useState("");
	console.log(shadow);
	
	return (
		<div className="position-absolute top-50 start-50 translate-middle">
		<div class="container text-center display-flex">
  <div class="row row-cols-2 bg-black">
    <div class="col-12 rounded-circle bg-danger">Column</div>
    <div class="col-12 rounded-circle bg-warning">Column</div>
    <div class="col-12 rounded-circle bg-success" >Column</div>
  </div>
</div>
</div>
	);
};

export default Semaforo;
