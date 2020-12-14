import React from "react";

const classes = {
	pending: {
		color: "yellow",
	},
	approved: {
		color: "green",
	},
	rejected: {
		color: "red",
	},
};

export default ({ comments }) => (
	<ul>
		{comments?.length
			? comments.map(({ comment, id, status }) => {
					return (
						<li key={id} style={classes[status]}>
							{comment} (<small>{status}</small>)
						</li>
					);
			  })
			: []}
	</ul>
);
