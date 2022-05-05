import * as React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			text: "",
			word: "loading...",
			lexicalCategory: "Loading...",
			examples: [],
			definition: "Loading...",
		};
	}

	search() {
		var word = this.state.text;
		if (word.length > 0) {
			var url =
				"https://rupinwhitehatjr.github.io/dictionary/%22" + word + "%22.json";

			return fetch(url).then((data) => {
				if (data.state == 200) {
					var apiData = data.json();
					var wordData = apiData.definitions[0];
					var definition = wordData.description;
					var lexicalCategory = wordData.wordType;
					console.log(definition);
					console.log(lexicalCategory);

					this.setState({
						word: word,
						lexicalCategory: lexicalCategory,
						definition: definition,
					});
				} else {
					this.setState({
						word: "loading...",
						lexicalCategory: "Loading...",
						examples: [],
						definition: "Loading...",
					});
				}
			});
		}
	}

	render() {
		return (
			<View>
				<Text style={styles.title}>Dictionary</Text>
				<TextInput
					style={styles.textInput}
					onChangeText={(text) => {
						this.setState({
							text: text,
						});
						this.search();
					}}
				/>
				<Text style={styles.title}>Definition: {this.state.definition}</Text>
				<Text style={styles.title}>
					Lexical Category: {this.state.lexicalCategory}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textInput: {
		border: "1px solid",
		borderRadius: 500,
		width: 500,
		height: 100,
		textAlign: "center",
		fontSize: 30,
		fontFamily: "Confortaa-Medium.ttf",
		margin: "auto",
		display: "flex",
		justifyContent: "center",
	},
	title: {
		margin: "auto",
		fontSize: 50,
		fontFamily: "Righteous-Regular.ttf",
		display: "flex",
		justifyContent: "center",
	},
});
