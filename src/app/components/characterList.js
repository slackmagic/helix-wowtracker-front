import React from "react";
import { DataGrid } from "@material-ui/data-grid";
import IconButton from "@material-ui/core/IconButton";
import LinkIcon from "@material-ui/icons/Link";
import { FlashOnRounded } from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";

function CharacterList(props) {
	const characters = props.list;

	const columns = [
		{
			field: "level",
			headerName: "Level (ilvl)",
			sortable: true,
			width: 80,
			headerClassName: "dataGridHeader",
			renderCell: (params) => renderLevel(params),
		},
		{
			field: "evol",
			headerName: "Evol.",
			sortable: true,
			width: 60,
			headerClassName: "dataGridHeader",
			renderCell: (params) => renderEvolLevel(params),
		},
		{
			field: "level_progression",
			headerName: "Progression niveau actuel",
			sortable: true,
			width: 60,
			headerClassName: "dataGridHeader",
			renderCell: (params) => renderLevelProgression(params),
		},
		{
			field: "name",
			headerName: "Nom",
			width: 120,
			sortable: true,
			headerClassName: "dataGridHeader",
			renderCell: (params) => renderName(params),
		},

		{
			field: "character_class",
			headerName: "Classe",
			headerClassName: "dataGridHeader",
			width: 170,
			sortable: true,
		},
		{
			field: "active_spec",
			headerName: "Spec.",
			width: 150,
			headerClassName: "dataGridHeader",
			sortable: true,
		},
		{
			field: "faction",
			headerName: "Faction",
			headerClassName: "dataGridHeader",
			sortable: true,
		},
		{
			field: "realm",
			headerName: "Royaume",
			width: 190,
			headerClassName: "dataGridHeader",
			sortable: true,
		},
		{
			field: "last_login_timestamp",
			headerName: "Dernière conn.",
			sortable: true,
			type: "dateTime",
			width: 140,
			headerClassName: "dataGridHeader",
			renderCell: (params) => renderDate(params),
		},
		{
			field: "link",
			headerName: "Armurerie",
			sortable: true,
			width: 100,
			headerClassName: "dataGridHeader",
			renderCell: (params) => renderLink(params),
		},
	];

	const minimizeList = () => {
		return characters.map((char) => {
			var min_char = {
				id: char.data.profile.id,
				level:
					char.data.profile.level * 1000 + char.data.profile.average_item_level,
				level_progression: char.statistics.level_current_progression,
				realm: char.data.profile.realm.name,
				link: char.data.profile.name + ";" + char.data.profile.realm.slug,
				name: char.data.profile.name,
				active_title: char.data.profile.active_title.display_string,
				faction: char.data.profile.faction.type_faction,
				character_class: char.data.profile.character_class.name,
				active_spec: char.data.profile.active_spec.name,
				average_item_level: char.data.profile.average_item_level,
				last_login_timestamp: char.data.profile.last_login_timestamp,
				media: char.data.media,
			};
			return min_char;
		});
	};

	const renderLevel = (params) => {
		var level = (params.value + "").substring(0, 2);
		var ilevel = parseInt((params.value + "").substring(2, 6));

		return (
			<>
				<strong>{level}</strong>&nbsp;({ilevel})
			</>
		);
	};

	const renderEvolLevel = (params) => {
		return (
			<>
				<strong>+30%</strong>
			</>
		);
	};

	const renderEvolILevel = (params) => {
		return (
			<>
				<strong>+1.5%</strong>
			</>
		);
	};

	const renderLevelProgression = (params) => {
		var percentage = (params.value * 100).toPrecision(3);

		return (
			<>
				<LinearProgress variant="determinate" value="{percentage}" />
				<strong>{percentage}%</strong>
				
			</>
		);
	};

	const renderDate = (params) => {
		var lastLoginDate = new Date(params.value).toLocaleString();
		return <>{lastLoginDate}</>;
	};

	const renderName = (params) => {
		var name = params.value;

		return (
			<>
				<Typography>
					<strong>{name}</strong>
				</Typography>
			</>
		);
	};

	const renderLink = (params) => {
		var splitted = params.value.split(";");
		var name = splitted[0];
		var realm_slug = splitted[1];
		var url = `https://worldofwarcraft.com/fr-fr/character/eu/${realm_slug}/${name}`;
		return (
			<>
				<IconButton
					variant="contained"
					color="primary"
					size="small"
					style={{ marginLeft: 16 }}
					href={url}
					target="_blank"
				>
					<LinkIcon />
				</IconButton>
			</>
		);
	};

	var data = {
		series: [50],
	};

	var options = {
		donut: true,
		donutWidth: 60,
		startAngle: 270,
		total: 100,
		showLabel: false,
	};

	var type = "Pie";

	return (
		<div style={{ width: "100%" }}>
			<DataGrid
				rows={minimizeList()}
				columns={columns}
				rowHeight={50}
				autoHeight
				hideFooter
				className="dataGrid"
			/>
		</div>
	);
}

export default CharacterList;
