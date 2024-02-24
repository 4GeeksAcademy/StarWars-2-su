import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/home.css";

const Profile = (props) => {
  const { store, actions } = useContext(Context);
  let params = useParams();
  console.log(params);
  let field
  let item = store[params.type] && store[params.type][params.index];
  console.log(item)
  params.type === "people" ? (
    field =
    <div className="card" >
      <img src={`https://starwars-visualguide.com/assets/img/characters/${parseInt(params.index) +1}.jpg`}
        onError={(e) => {
          e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
        }}
        className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">eye color: {item.model}</p>
        <p className="card-text">gender: {item.manufacturer}</p>
        <p className="card-text">skin color: {item.cargo_capacity}</p>
      </div>
      <div className="card-buttons">
        <Link to={'profile/people/' + props.index} className="btn btn-secondary">🥷</Link>
        <button className="btn btn-secondary" onClick={() => actions.selectFavorite(item.name)}>&#10084;</button>
      </div>
    </div>
  ) : null
  params.type === "vehicles" ? (
    field =
    <div className="card">
      <img src={`https://starwars-visualguide.com/assets/img/vehicles/${parseInt(params.index) + 1}.jpg`}
        onError={(e) => {
          e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
        }}
        className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">eye color: {item.model}</p>
        <p className="card-text">gender: {item.manufacturer}</p>
        <p className="card-text">skin color: {item.cargo_capacity}</p>
      </div>
      <div className="card-buttons">
        <Link to={'profile/vehicle/' + props.index} className="btn btn-secondary">🥷</Link>
        <button className="btn btn-secondary" onClick={() => actions.selectFavorite(item.name)}>&#10084;</button>
      </div>
    </div>
  ) : null
  params.type === "planets" ? (
    field =
    <div className="card">
      <img src={`https://starwars-visualguide.com/assets/img/planets/${parseInt(params.index) + 1 }.jpg`}
        onError={(e) => {
          e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
        }}
        className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">eye color: {item.rotation_period}</p>
        <p className="card-text">gender: {item.climate}</p>
        <p className="card-text">skin color: {item.orbital_period}</p>
      </div>
      <div className="card-buttons">
        <Link to={'profile/planet/' + props.index} className="btn btn-secondary">🥷</Link>
        <button className="btn btn-secondary" onClick={() => actions.selectFavorite(item.name)}>&#10084;</button>
      </div>
    </div>
  ) : null
//   params.type === "starships" ? (
//     field =
//     <div className="card" style={{ "width": "18rem" }}>
//       <img src={`https://starwars-visualguide.com/assets/img/starships/${parseInt(params.index) +1}.jpg`}
//         onError={(e) => {
//           e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
//         }}
//         className="card-img-top" />
//       <div className="card-body">
//         <h5 className="card-title">{item.name}</h5>
//         <p className="card-text">eye color: {item.manufacturer}</p>
//         <p className="card-text">gender: {item.passengers}</p>
//         <p className="card-text">skin color: {item.orbital_period}</p>
//       </div>
//       <div className="card-buttons">
//         <Link to={'profile/starships/' + props.index} className="btn btn-secondary">🥷</Link>
//         <button className="btn btn-secondary" onClick={() => actions.selectFavorite(item.name)}>&#10084;</button>
//       </div>
//     </div>
//   ) : null

  return (
    <>
      {field}
    </>
  )

}
export default Profile
