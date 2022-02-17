function isEven(a) {
	if (a == 1) {
		return "Odd";
	}
	else if (a == 0) {
		return "Even";
	}
	else if (a > 1) {
		return isEven(a - 2);
	}
	else if (a < 0) {
		return isEven(a + 2);
	}
	else {
		return "Error";
	}
}

console.log(isEven(-60));