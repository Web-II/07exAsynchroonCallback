import {
	countriesOfEurope
} from './countries.js';


class Country {
	constructor(countryName, capital, flag) {
		this.countryName = countryName;
		this.capital = capital;
		this.flag = flag;
	}
	get countryName() {
		return this._countryName;
	}
	set countryName(countryName) {
		this._countryName = countryName;
	}
	get capital() {
		return this._capital;
	}
	set capital(capital) {
		this._capital = capital
	}
	get flag() {
		return this._flag;
	}
	set flag(flag) {
		this._flag = flag;
	}
}

class QuizApp {
	constructor() {
		
	}
	get countriesArray() {
		return this._countriesArray;
	}
	set countriesArray(value) {
		this._countriesArray = value;
	}
	get questionsQuiz() {
		return this._questionsQuiz;
	}
	set questionsQuiz(value) {
		this._questionsQuiz = value;
	}
	get answers() {
		return this._answers
	}
	set answers(value) {
		this._answers = value
	}
	askQuestion(q) {
		if (q <= 10) {
			console.log(q);
		} else {
			document.getElementById("country").innerHTML = '';
			document.getElementById("capital").innerHTML = '';
		}

	}
	createQuestions(){
		
	}
	showResult() {
		document.getElementById("answers").innerHTML = '';
	}
	createSelectList(c) {
		document.getElementById("capital").innerHTML = '';
		const capitalSet = new Set();
		capitalSet.add("-- Make your choice --");
		
	}
}

window.onload = () => {
	const app = new QuizApp();
	app.createQuestions();
};