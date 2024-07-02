import React from "react";
import Tarea from  "./Tarea.jsx"
const Home = () => {
	return (
		<div className="container-app">
			<h1 className="text-center mt-5 display-4">TODOS </h1>
			<div className="todoList">
				<ul>
					<li><input type="text" placeholder="Enter To do" /></li>
					<li>TAREA NUMERO 1</li>
					<li>TAREA NUMERO 2</li>
					<li>TAREA NUMERO 3</li>
					<li>TAREA NUMERO 4</li>
					<li>TAREA NUMERO 5</li>
				</ul>

			</div>
		</div>
	);
};

export default Home;
