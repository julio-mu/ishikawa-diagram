import { Visibility } from '@material-ui/icons';
import React from 'react';
import '../../styles.scss';

const MainSpine = () => {
	return (
		<div className="main-spine">
			<div className="spine"></div>
			<div className="effect-container">
				<div className="effect">
					<Visibility />
				</div>
			</div>
		</div>
	);
};

export default MainSpine;
