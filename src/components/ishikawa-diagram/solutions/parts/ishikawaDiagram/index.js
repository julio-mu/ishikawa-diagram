import React from 'react';
import BottomSpines from './parts/bottomSpines';
import MainSpine from './parts/mainSpine';
import TopSpines from './parts/topSpines';
import './styles.scss';

const IshikawaDiagram = () => {
	return (
		<div className="Ishikawa-diagram">
			<TopSpines />
			<MainSpine />
			<BottomSpines />
		</div>
	);
};

export default IshikawaDiagram;
