import React from "react";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
	const websiteInfo = ["React", "TypeScript", "Tailwind CSS", "DaisyUI"];
	const thisWebsiteMD =
		"The site you're reading right now was made with React and TypeScript! " +
		"While I could have used a website maker (which I have used for resumes in the past), making one from scratch sounded more interesting and more fun. " +
		"My previous resume site used vanilla HTML, CSS, and JavaScript. " +
		"While it was easy to set up, it was hard to maintain. " +
		"Adding new information and keeping consistency " +
		"required me to modify more of the site than I'd like. " +
		"I had also gotten much better at web development, " +
		"so I figured I should make a new one. " +
		"The frontend uses React, which is the most generic choice for a project like this, " +
		"but I wanted to learn React so this seemed like a suitable way to do that. " +
		"This site also uses Tailwind CSS with DaisyUI components. " +
		"Bootstrap definitely *works* but Tailwind is easier to customize, " +
		"which makes sites feel less generic. " +
		"On top of that, I decided to go with a Nord color scheme for this site. " +
		"I feel I've gotten pretty good with color choices after making All Blue, " +
		"but having a good color scheme that I know works increases the visual polish " +
		"and adds a more professional feeling to the site.";

	const allBlueInfo = ["TypeScript", "NodeJS"];
	const allBlueMD =
		"All Blue is a VS Code theme generated through TypeScript. " +
		"While this wasn't hard to make on a coding level, it was pretty challenging from a design perspective. " +
		"The main theme uses all blue-ish colors (hence the name), " +
		"so the hard part was picking colors that had nice contrast with each other while still feeling *blue*. " +
		"There are two other variants that use more colors than blue, " +
		"so if this gimmick isn't your thing, you have options. " +
		"This was originally made by editing a JSON file, " +
		"but that's obviously not sustainable for three different variants, " +
		"so All Blue is now generated through TypeScript and ts-node. " +
		"I originally made this because I was curious how VS Code themes worked, " +
		"but I actually ended up making a coding theme that I enjoy using. " +
		"In fact, I used it to edit this page since the string color is " +
		"easier on the eyes than most coding themes I used. " +
		"While it's not doing anything fancy under the hood, " +
		"All Blue's data is pretty well organized. " +
		"If I ever feel like making another VS Code theme, " +
		"it should be pretty easy to fork it and swap around colors " +
		"which would save a ton of time. " +
		"Check out the GitHub repo for more screenshots!";

	const keysmithInfo = ["Rust"];
	const keysmithMD =
		"Keysmith is a key generation library for Rust. " +
		"It's nothing crazy, but it can create randomly generated keys, v4 uuids, and timestamps. " +
		"This is useful for file generation and database id's. " +
		"Keysmith is available on [crates.io](https://crates.io/crates/keysmith) " +
		"and I've found myself using it in other Rust projects.";

	// TODO: Align the source links better.

	return (
		<div className="panelContainer">
			<PortfolioItem
				heading="This website"
				info={websiteInfo}
				text={thisWebsiteMD}
				github="https://github.com/njshockey/njshockey-resume"
				gitlab="https://www.youtube.com/"
			/>
			<PortfolioItem
				heading="All Blue"
				info={allBlueInfo}
				text={allBlueMD}
				github="https://github.com/njshockey/all-blue-theme"
				gitlab="https://gitlab.com/njshockey/all-blue-theme"
			/>
			<PortfolioItem
				heading="Keysmith"
				info={keysmithInfo}
				text={keysmithMD}
				github="https://github.com/njshockey/keysmith-rs"
				gitlab="https://gitlab.com/njshockey/keysmith-rs"
			/>
		</div>
	);
}

export default Portfolio;
