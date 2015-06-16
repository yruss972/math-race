exports.values={
	version: '0.0.1',
	server : {
		production : {
			real_time_server : {port: process.env.PORT, host: process.env.HOST}
		}
	}
	,
	game : {
		show_hall_of_fame: 20,
		show_history_games: 20,
		duration: 30 //seconds
	}
}
