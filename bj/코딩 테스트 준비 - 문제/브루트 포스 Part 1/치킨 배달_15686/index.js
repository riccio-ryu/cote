// 2025


const input = require("fs").readFileSync("example.txt").toString().trim().split("\n").map(line => line.split(" ").map(Number));

const [N, M] = input[0];
const map = input.slice(1);

const houses = [];
const chickens = [];

for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		if (map[i][j] === 1) houses.push([i, j]);
		if (map[i][j] === 2) chickens.push([i, j]);
	}
}

function getDistance([x1, y1], [x2, y2]) {
	return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

function getCombinations(arr, selectNumber) {
	const results = [];
	if (selectNumber === 1) return arr.map((v) => [v]);
	arr.forEach((fixed, idx, origin) => {
		const rest = origin.slice(idx + 1);
		const combinations = getCombinations(rest, selectNumber - 1);
		const attached = combinations.map((comb) => [fixed, ...comb]);
		results.push(...attached);
	});
	return results;
}

let answer = Infinity;
const chickenCombis = getCombinations(chickens, M);

for (const combi of chickenCombis) {
	let sum = 0;
	for (const [hx, hy] of houses) {
		let minDist = Infinity;
		for (const [cx, cy] of combi) {
			minDist = Math.min(minDist, getDistance([hx, hy], [cx, cy]));
		}
		sum += minDist;
	}
	answer = Math.min(answer, sum);
}

console.log(answer);
