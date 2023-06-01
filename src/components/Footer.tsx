import React from "react";

import GitLabIcon from "./icons/GitLabIcon";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import EmailIcon from "./icons/EmailIcon";

function Footer() {
	return (
		<div className="flex flex-row gap-2 justify-center">
			<GitHubIcon
				link="https://github.com/njshockey"
				footer={true}
			/>
			<GitLabIcon
				link="https://gitlab.com/njshockey"
				footer={true}
			/>
			<LinkedInIcon />
			<EmailIcon />
		</div>
	);
}

export default Footer;
