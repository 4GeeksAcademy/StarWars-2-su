const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people:[],
			planets:[],
			vehicles:[],
			favorites:[], 
			starships:[]
		},
		actions: {
			fechGetAllPeople:()=>{
				fetch("https://swapi.dev/api/people")
				.then(response => response.json())
				.then (data=>{
					setStore({people:data.results})
				})
				.catch(error=>console.log("having trouble fetching people",error))
			},
			fetchGetAllPlanets: async()=>{
				const response = await fetch("https://swapi.dev/api/planets")
				let data = await response.json()
				setStore({planets:data.results})
			},
			fetchGetAllVehicles: async()=>{
				const response = await fetch("https://swapi.dev/api/vehicles")
				let data = await response.json()
				setStore({vehicles:data.results})
			}, 
			fetchGetAllStarships: async()=>{
				const response = await fetch("https://swapi.dev/api/starships")
				let data = await response.json()
				setStore({starships:data.results})
			}, 
			//button functionality
			selectFavorite: (name)=>{
				const favorites = getStore().favorites
				favorites.push(name)
				setStore({favorites:favorites})
			}, 
           removeFavorite:(idx)=>{
			const favorites = getStore().favorites
			let removeOneItem = favorites.filter((item,index)=>{
				return(
					index!==idx
				)
			})
			setStore({favorites:removeOneItem})
		   }
		}
	};
};

export default getState;