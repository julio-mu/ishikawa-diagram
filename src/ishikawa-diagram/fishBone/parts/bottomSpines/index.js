import { KeyboardArrowDownOutlined } from '@material-ui/icons';
import React from 'react';
import '../../styles.scss';

const BottomSpines = () => {
	return (
		<div className="bottom-spines">
			<div className="category-causes">
				<div className="horizontal-lines-container">
					<div className="bottom-causes">Reason 1</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">2</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">1</div>
					</div>

					<div className="bottom-causes">Reason 2</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">3</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">2</div>
					</div>

					<div className="bottom-causes">Reason 3</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">5</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">3</div>
					</div>
				</div>
				<div className="transparent-rounded-corners bottom-causes-button" />
			</div>

			<div className="category-causes">
				<div className="horizontal-lines-container">
					<div className="bottom-causes">Reason 1</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">2</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">1</div>
					</div>

					<div className="bottom-causes">Reason 2</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">3</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">2</div>
					</div>

					<div className="bottom-causes">Reason 3</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">5</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">3</div>
					</div>
				</div>
				<div className="transparent-rounded-corners bottom-causes-button translate50" />
			</div>
			<div className="category-causes">
				<div className="horizontal-lines-container">
					<div className="bottom-causes">Reason 1</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">2</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">1</div>
					</div>
					<div className="bottom-causes">Reason 2</div>
					<div className="single-bottom-cause-container">
						<div className="reasons">1</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">2</div>
					</div>
					<div className="bottom-causes">Reason 3</div>{' '}
					<div className="single-bottom-cause-container">
						<div className="reasons">5</div>
						<div className="bottom-horizontal-line"></div>
						<div className="causes">3</div>
					</div>
				</div>
				<div className="icon-select-container"></div>
				<div className="transparent-rounded-corners bottom-causes-button" />
			</div>
		</div>
	);
};

export default BottomSpines;
