import { StyleSheet, Text, View } from "react-native";

export default class HomeScreen extends React.Component {
	constructor() {
		this.state = {
			text: "",
			word: "loading...",
			isSearching: false,
			lexicalCategory: "",
			examples: [],
			definition: "",
		};
	}

	render() {
		return <TextInput style={styles.textInput} />;
	}
}

styles = StyleSheet.create({
	textInput: {
		leftMargin: 300,
	},
});
