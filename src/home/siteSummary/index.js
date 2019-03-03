import React from 'react';
import glenn from './GlennPacker.jpg';
import { Style } from 'radium'
import styles from './siteSummary'

const SiteSummary = (props) => (
	<div className="row">
		<Style rules={styles} />
		<div className="col-md-4">
			<img
				src={glenn}
				height="250px"
				className="circleImage"
				alt="logo"
			/>
		</div>
		<div className="col-md-8">
			<p>Glenn Packer is a freelance contractor, working as a full-stack developer with experience in many different sectors.</p>
			<p>Based in Sussex, Glenn is available for any length of contract, anywhere in the UK or Europe.</p>
			<p>Glenn Packer can bring a wealth of knowledge and expertise to a project, either to kickstart a new one or bring new ideas to the environment.</p>
			<p>Happy to work either in an Agile or Waterfall environment, Glenn is equally equally at home running the project or contributing to the team.</p>
		</div>
	</div>
)

export default SiteSummary;