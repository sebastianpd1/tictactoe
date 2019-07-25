import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: "x",
			won: false
		};
	}
	virtualBoard = {
		a1: null,
		a2: null,
		a3: null,
		b1: null,
		b2: null,
		b3: null,
		c1: null,
		c2: null,
		c3: null
	};
	empate() {
		let some = 0;
		for (let key in this.virtualBoard) {
			if (this.virtualBoard[key] == null) {
				some++;
			}
		}
		if (some >= 1) {
			return false;
		} else {
			return true;
		}
	}

	whoWon() {
		if (
			this.virtualBoard["a1"] == "X" &&
			this.virtualBoard["a2"] == "X" &&
			this.virtualBoard["a3"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["b1"] == "X" &&
			this.virtualBoard["b2"] == "X" &&
			this.virtualBoard["b3"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["c1"] == "X" &&
			this.virtualBoard["c2"] == "X" &&
			this.virtualBoard["c3"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a1"] == "X" &&
			this.virtualBoard["b1"] == "X" &&
			this.virtualBoard["c1"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a2"] == "X" &&
			this.virtualBoard["b2"] == "X" &&
			this.virtualBoard["c2"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a3"] == "X" &&
			this.virtualBoard["b3"] == "X" &&
			this.virtualBoard["c3"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a1"] == "X" &&
			this.virtualBoard["b2"] == "X" &&
			this.virtualBoard["c3"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a3"] == "X" &&
			this.virtualBoard["b2"] == "X" &&
			this.virtualBoard["c1"] == "X"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a1"] == "O" &&
			this.virtualBoard["a2"] == "O" &&
			this.virtualBoard["a3"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["b1"] == "O" &&
			this.virtualBoard["b2"] == "O" &&
			this.virtualBoard["b3"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["c1"] == "O" &&
			this.virtualBoard["c2"] == "O" &&
			this.virtualBoard["c3"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a1"] == "O" &&
			this.virtualBoard["b1"] == "O" &&
			this.virtualBoard["c1"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a2"] == "O" &&
			this.virtualBoard["b2"] == "O" &&
			this.virtualBoard["c2"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a3"] == "O" &&
			this.virtualBoard["b3"] == "O" &&
			this.virtualBoard["c3"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a1"] == "O" &&
			this.virtualBoard["b2"] == "O" &&
			this.virtualBoard["c3"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (
			this.virtualBoard["a3"] == "O" &&
			this.virtualBoard["b2"] == "O" &&
			this.virtualBoard["c1"] == "O"
		) {
			this.setState({ won: true });
			alert("you won");
		} else if (this.empate()) {
			alert("No body won, TIE");
		}
	}
	mark(e) {
		if (
			this.virtualBoard[e.target.id] == null &&
			this.state.player == "x"
		) {
			this.virtualBoard[e.target.id] = "X";
			e.target.innerHTML = "X";
			this.whoWon();
			this.setState({
				player: "o"
			});
		} else if (
			this.virtualBoard[e.target.id] == null &&
			this.state.player == "o"
		) {
			this.virtualBoard[e.target.id] = "O";
			e.target.innerHTML = "O";
			this.whoWon();
			this.setState({
				player: "x"
			});
		}
	}
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="offset-3 col-6 mt-5">
						<div className="row">
							<div className="position-absolute bg-dark d-none">
								You Won
							</div>
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="a1"
							/>
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="a2"
							/>
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="a3"
							/>
						</div>
						<div className="row">
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="b1"
							/>
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="b2"
							/>
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="b3"
							/>
						</div>
						<div className="row">
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="c1"
							/>
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="c2"
							/>
							<div
								className="col border border-3 border-dark display-1 text-center pt-4"
								onClick={e => this.mark(e)}
								id="c3"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
