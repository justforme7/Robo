import React from 'react';
import Card from './Card';

const CardList = ({Names}) => {
	
	return (
		<div>
			{
				Names.map((user, i) => {
					return(
						<Card 
							key={i} 
							id={Names[i].id} 
							name={Names[i].name} 
							email={Names[i].email}/>
					);
				})





			}
		</div>
	);
}



export default CardList;