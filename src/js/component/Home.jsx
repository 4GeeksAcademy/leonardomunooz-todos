import React from "react";
import Tarea from "./Tarea.jsx"
const Home = () => {
	return (
		<div className="container-app">
			<h1 className="text-center mt-5 mb-4 display-4">TODOS </h1>
			<div className="container">
				<input className="input-group input-group-sm border rounded-1 p-2 mb-4" type="text" placeholder="QUE TIENES QUE HACER ?" />
				<ul class="list-group ">
					<li class="list-group-item d-flex justify-content-between">
						<p>Item</p>
						<button type="button" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<p>Item</p>
						<button type="button" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<p>Item</p>
						<button type="button" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>
					</li>
					<li class="list-group-item d-flex justify-content-between">
						<p>Item</p>
						<button type="button" class="btn btn-outline-danger"><i class="fas fa-times"></i></button>
					</li>
					<p class="fs-6 fw-light ">.fs-5 text</p>
				</ul>
			</div>

		</div>
	);
};

export default Home;