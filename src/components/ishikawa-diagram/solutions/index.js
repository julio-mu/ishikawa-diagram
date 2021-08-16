import { CreateOutlined, MoreVertOutlined } from '@material-ui/icons';
import React from 'react';
import './styles.scss';
import IshikawaDiagram from './parts/ishikawaDiagram/index';

const ChallengesSolutions = (props) => {
	return (
		<div className="Challenges-solutions">
			{' '}
			<div className="form-wide">
				<div className="form-title">
					<div className="title-internal-container">
						<CreateOutlined htmlFor="name" />
					</div>
					<MoreVertOutlined />
				</div>
			</div>
			<IshikawaDiagram />
		</div>
	);
};

export default ChallengesSolutions;
