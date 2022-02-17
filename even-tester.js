function isEven(a) {
	if (a == 1) {
		return "Odd";
	}
	else if (a == 0) {
		return "Even";
	}
	else {
		return isEven(a - 2);
	}
}

console.log(isEven(60));