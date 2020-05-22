import React from 'react';

const Card = ({name, email, id}) => {
	return (
		<div className='tc dib ma2 grow bw2 shadow-2'>
			<img alt='robots' src={`https://robohash.org/${id}?200*200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}



export default Card;
