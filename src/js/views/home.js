import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Card from "../component/card.jsx"

export const Home = () => {
	const { store } = useContext(Context)
	return (
		<div>
			<div className="container">
				<h2 className="row ">Charecters</h2>
				<div className="row cardsRow" >
					{store.people.map((person, index) =>
						<Card key={index} person={person}
							index={index}
							type="person" />)}
				</div>
				<h2 className="row ">Planet</h2>
				<div className="row cardsRow">
					{store.planets.map((planet, index) =>
						<Card key={index} planet={planet}
							index={index}
							type="planet" />)}
				</div>
				<h2 className="row ">Vehicle</h2>
				<div className="row cardsRow">
					{store.vehicles.map((vehicle, index) =>
						<Card key={index} vehicle={vehicle}
							index={index}
							type="vehicle" />)}
				</div>
				<h2 className="row ">Starship</h2>
				<div className="row cardsRow">
					{store.starships.map((starship, index) =>
						<Card key={index} starship={starship}
							index={index}
							type="starship" />)}
				</div>
			</div>
		</div>
	)

};