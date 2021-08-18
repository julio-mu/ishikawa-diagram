import { KeyboardArrowDownOutlined } from '@material-ui/icons';
import React from 'react';
import '../../styles.scss';

const TopSpines = () => {
	return (
		<div className="top-spines">
			<div className="category-causes">
				<div className="transparent-rounded-corners top-causes-button" />
				<div className="horizontal-lines-container">
					<div className="single-top-cause-container">
						<div className="reasons">2</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">3</div>
					</div>
					<div className="top-causes">Reason 3</div>
					<div className="single-top-cause-container">
						<div className="reasons">3</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">2</div>
					</div>
					<div className="top-causes">Reason 2</div>
					<div className="single-top-cause-container">
						<div className="reasons">5</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">1</div>
					</div>
					<div className="top-causes last-top-cause">Reason 1</div>
				</div>
			</div>
			<div className="category-causes">
				<div
					className="transparent-rounded-corners top-causes-button"
					icon={{ icon: <KeyboardArrowDownOutlined /> }}
				/>
				<div className="horizontal-lines-container">
					<div className="single-top-cause-container">
						<div className="reasons">2</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">3</div>
					</div>
					<div className="top-causes">Reason 3</div>{' '}
					<div className="single-top-cause-container">
						<div className="reasons">3</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">2</div>
					</div>
					<div className="top-causes">Reason 2</div>{' '}
					<div className="single-top-cause-container">
						<div className="reasons">5</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">1</div>
					</div>
					<div className="top-causes last-top-cause">Reason 1</div>
				</div>
			</div>
			<div className="category-causes">
				<div className="transparent-rounded-corners top-causes-button" />
				<div className="horizontal-lines-container">
					<div className="single-top-cause-container">
						<div className="reasons">2</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">3</div>
					</div>
					<div className="top-causes">Reason 3</div>{' '}
					<div className="single-top-cause-container">
						<div className="reasons">3</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">2</div>
					</div>
					<div className="top-causes">Reason 2</div>{' '}
					<div className="single-top-cause-container">
						<div className="reasons">5</div>
						<div className="top-horizontal-line"></div>
						<div className="causes">1</div>
					</div>
					<div className="top-causes last-top-cause">Reason 1</div>
				</div>
			</div>
		</div>
	);
};

export default TopSpines;
