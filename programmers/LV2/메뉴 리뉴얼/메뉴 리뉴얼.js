function solution(orders, course) {
    var answer = [];
    for (const selectNum of course) {
        let combinations = []
        for (const order of orders) {
            getCombinations(Array.from(order), selectNum)
                .map(combination => combination.sort().join(''))// 'WX'는 'XW'와 같아야한다.
                .forEach(combString => {
                combinations.push(combString)
                console.log('cc?',combString, combinations)
            })
        }
        const combCounts = combinations.reduce((counts, combination) => {
            console.log('red',counts, combination)
            counts[combination] = (counts[combination] || 0) + 1;
            return counts;
        }, {});
        let maxCount = 0, maxComb = []
        for (const comb in combCounts) if (combCounts[comb] >= maxCount) maxCount = combCounts[comb]
        for (const comb in combCounts) if (combCounts[comb] === maxCount && maxCount >= 2) maxComb.push(comb)
        answer.push(...maxComb)
        console.log('mm', maxCount, maxComb)
    }
    answer = answer.sort()
    return answer;
}

const getCombinations = (array, selectNum) => {
    const result = [];
    if (selectNum === 1) return array.map((element) => [element]);
    array.forEach((fixed, index, origin) => {
        console.log('fio: ', fixed, index, origin)
        const restCombinations = getCombinations(origin.slice(index + 1), selectNum - 1);
        const attached = restCombinations.map((restCombination) => [fixed, ...restCombination]);
        console.log('rere', restCombinations, attached)
        result.push(...attached);
    });
    return result;
}

//이건 진짜 어렵다.

/*
solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2,3,4])

fio:  A 0 [ 'A', 'B', 'C', 'F', 'G' ]
rere [ [ 'B' ], [ 'C' ], [ 'F' ], [ 'G' ] ] [ [ 'A', 'B' ], [ 'A', 'C' ], [ 'A', 'F' ], [ 'A', 'G' ] ]
fio:  B 1 [ 'A', 'B', 'C', 'F', 'G' ]
rere [ [ 'C' ], [ 'F' ], [ 'G' ] ] [ [ 'B', 'C' ], [ 'B', 'F' ], [ 'B', 'G' ] ]
fio:  C 2 [ 'A', 'B', 'C', 'F', 'G' ]
rere [ [ 'F' ], [ 'G' ] ] [ [ 'C', 'F' ], [ 'C', 'G' ] ]
fio:  F 3 [ 'A', 'B', 'C', 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 4 [ 'A', 'B', 'C', 'F', 'G' ]
rere [] []
cc? AB [ 'AB' ]
cc? AC [ 'AB', 'AC' ]
cc? AF [ 'AB', 'AC', 'AF' ]
cc? AG [ 'AB', 'AC', 'AF', 'AG' ]
cc? BC [ 'AB', 'AC', 'AF', 'AG', 'BC' ]
cc? BF [ 'AB', 'AC', 'AF', 'AG', 'BC', 'BF' ]
cc? BG [
  'AB', 'AC',
  'AF', 'AG',
  'BC', 'BF',
  'BG'
]
cc? CF [
  'AB', 'AC', 'AF',
  'AG', 'BC', 'BF',
  'BG', 'CF'
]
cc? CG [
  'AB', 'AC', 'AF',
  'AG', 'BC', 'BF',
  'BG', 'CF', 'CG'
]
cc? FG [
  'AB', 'AC', 'AF',
  'AG', 'BC', 'BF',
  'BG', 'CF', 'CG',
  'FG'
]
fio:  A 0 [ 'A', 'C' ]
rere [ [ 'C' ] ] [ [ 'A', 'C' ] ]
fio:  C 1 [ 'A', 'C' ]
rere [] []
cc? AC [
  'AB', 'AC', 'AF',
  'AG', 'BC', 'BF',
  'BG', 'CF', 'CG',
  'FG', 'AC'
]
fio:  C 0 [ 'C', 'D', 'E' ]
rere [ [ 'D' ], [ 'E' ] ] [ [ 'C', 'D' ], [ 'C', 'E' ] ]
fio:  D 1 [ 'C', 'D', 'E' ]
rere [ [ 'E' ] ] [ [ 'D', 'E' ] ]
fio:  E 2 [ 'C', 'D', 'E' ]
rere [] []
cc? CD [
  'AB', 'AC', 'AF',
  'AG', 'BC', 'BF',
  'BG', 'CF', 'CG',
  'FG', 'AC', 'CD'
]
cc? CE [
  'AB', 'AC', 'AF',
  'AG', 'BC', 'BF',
  'BG', 'CF', 'CG',
  'FG', 'AC', 'CD',
  'CE'
]
cc? DE [
  'AB', 'AC', 'AF',
  'AG', 'BC', 'BF',
  'BG', 'CF', 'CG',
  'FG', 'AC', 'CD',
  'CE', 'DE'
]
fio:  A 0 [ 'A', 'C', 'D', 'E' ]
rere [ [ 'C' ], [ 'D' ], [ 'E' ] ] [ [ 'A', 'C' ], [ 'A', 'D' ], [ 'A', 'E' ] ]
fio:  C 1 [ 'A', 'C', 'D', 'E' ]
rere [ [ 'D' ], [ 'E' ] ] [ [ 'C', 'D' ], [ 'C', 'E' ] ]
fio:  D 2 [ 'A', 'C', 'D', 'E' ]
rere [ [ 'E' ] ] [ [ 'D', 'E' ] ]
fio:  E 3 [ 'A', 'C', 'D', 'E' ]
rere [] []
cc? AC [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC'
]
cc? AD [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD'
]
cc? AE [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE'
]
cc? CD [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE', 'CD'
]
cc? CE [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE', 'CD', 'CE'
]
cc? DE [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE', 'CD', 'CE', 'DE'
]
fio:  B 0 [ 'B', 'C', 'F', 'G' ]
rere [ [ 'C' ], [ 'F' ], [ 'G' ] ] [ [ 'B', 'C' ], [ 'B', 'F' ], [ 'B', 'G' ] ]
fio:  C 1 [ 'B', 'C', 'F', 'G' ]
rere [ [ 'F' ], [ 'G' ] ] [ [ 'C', 'F' ], [ 'C', 'G' ] ]
fio:  F 2 [ 'B', 'C', 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 3 [ 'B', 'C', 'F', 'G' ]
rere [] []
cc? BC [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE', 'CD', 'CE', 'DE',
  'BC'
]
cc? BF [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE', 'CD', 'CE', 'DE',
  'BC', 'BF'
]
cc? BG [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG'
]
cc? CF [
  'AB', 'AC', 'AF', 'AG',
  'BC', 'BF', 'BG', 'CF',
  'CG', 'FG', 'AC', 'CD',
  'CE', 'DE', 'AC', 'AD',
  'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF'
]
cc? CG [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG'
]
cc? FG [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG'
]
fio:  A 0 [ 'A', 'C', 'D', 'E', 'H' ]
rere [ [ 'C' ], [ 'D' ], [ 'E' ], [ 'H' ] ] [ [ 'A', 'C' ], [ 'A', 'D' ], [ 'A', 'E' ], [ 'A', 'H' ] ]
fio:  C 1 [ 'A', 'C', 'D', 'E', 'H' ]
rere [ [ 'D' ], [ 'E' ], [ 'H' ] ] [ [ 'C', 'D' ], [ 'C', 'E' ], [ 'C', 'H' ] ]
fio:  D 2 [ 'A', 'C', 'D', 'E', 'H' ]
rere [ [ 'E' ], [ 'H' ] ] [ [ 'D', 'E' ], [ 'D', 'H' ] ]
fio:  E 3 [ 'A', 'C', 'D', 'E', 'H' ]
rere [ [ 'H' ] ] [ [ 'E', 'H' ] ]
fio:  H 4 [ 'A', 'C', 'D', 'E', 'H' ]
rere [] []
cc? AC [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC'
]
cc? AD [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD'
]
cc? AE [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE'
]
cc? AH [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE', 'AH'
]
cc? CD [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE', 'AH',
  'CD'
]
cc? CE [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE', 'AH',
  'CD', 'CE'
]
cc? CH [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE', 'AH',
  'CD', 'CE', 'CH'
]
cc? DE [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE', 'AH',
  'CD', 'CE', 'CH', 'DE'
]
cc? DH [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE', 'AH',
  'CD', 'CE', 'CH', 'DE', 'DH'
]
cc? EH [
  'AB', 'AC', 'AF', 'AG', 'BC',
  'BF', 'BG', 'CF', 'CG', 'FG',
  'AC', 'CD', 'CE', 'DE', 'AC',
  'AD', 'AE', 'CD', 'CE', 'DE',
  'BC', 'BF', 'BG', 'CF', 'CG',
  'FG', 'AC', 'AD', 'AE', 'AH',
  'CD', 'CE', 'CH', 'DE', 'DH',
  'EH'
]
red {} AB
red { AB: 1 } AC
red { AB: 1, AC: 1 } AF
red { AB: 1, AC: 1, AF: 1 } AG
red { AB: 1, AC: 1, AF: 1, AG: 1 } BC
red { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1 } BF
red { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1 } BG
red { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1, BG: 1 } CF
red { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1, BG: 1, CF: 1 } CG
red { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1, BG: 1, CF: 1, CG: 1 } FG
red {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1
} AC
red {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1
} CD
red {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 1
} CE
red {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 1,
  CE: 1
} DE
red {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 1,
  CE: 1,
  DE: 1
} AC
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 1,
  CE: 1,
  DE: 1
} AD
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 1,
  CE: 1,
  DE: 1,
  AD: 1
} AE
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 1,
  CE: 1,
  DE: 1,
  AD: 1,
  AE: 1
} CD
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 2,
  CE: 1,
  DE: 1,
  AD: 1,
  AE: 1
} CE
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 2,
  CE: 2,
  DE: 1,
  AD: 1,
  AE: 1
} DE
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} BC
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} BF
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} BG
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 1,
  CG: 1,
  FG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} CF
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 1,
  FG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} CG
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} FG
red {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} AC
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 1,
  AE: 1
} AD
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 2,
  AE: 1
} AE
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 2,
  AE: 2
} AH
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  AD: 2,
  AE: 2,
  AH: 1
} CD
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 3,
  CE: 2,
  DE: 2,
  AD: 2,
  AE: 2,
  AH: 1
} CE
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 3,
  CE: 3,
  DE: 2,
  AD: 2,
  AE: 2,
  AH: 1
} CH
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 3,
  CE: 3,
  DE: 2,
  AD: 2,
  AE: 2,
  AH: 1,
  CH: 1
} DE
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  AD: 2,
  AE: 2,
  AH: 1,
  CH: 1
} DH
red {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  AD: 2,
  AE: 2,
  AH: 1,
  CH: 1,
  DH: 1
} EH
mm 4 [ 'AC' ]
fio:  A 0 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  B 0 [ 'B', 'C', 'F', 'G' ]
rere [ [ 'C' ], [ 'F' ], [ 'G' ] ] [ [ 'B', 'C' ], [ 'B', 'F' ], [ 'B', 'G' ] ]
fio:  C 1 [ 'B', 'C', 'F', 'G' ]
rere [ [ 'F' ], [ 'G' ] ] [ [ 'C', 'F' ], [ 'C', 'G' ] ]
fio:  F 2 [ 'B', 'C', 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 3 [ 'B', 'C', 'F', 'G' ]
rere [] []
rere [
  [ 'B', 'C' ],
  [ 'B', 'F' ],
  [ 'B', 'G' ],
  [ 'C', 'F' ],
  [ 'C', 'G' ],
  [ 'F', 'G' ]
] [
  [ 'A', 'B', 'C' ],
  [ 'A', 'B', 'F' ],
  [ 'A', 'B', 'G' ],
  [ 'A', 'C', 'F' ],
  [ 'A', 'C', 'G' ],
  [ 'A', 'F', 'G' ]
]
fio:  B 1 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  C 0 [ 'C', 'F', 'G' ]
rere [ [ 'F' ], [ 'G' ] ] [ [ 'C', 'F' ], [ 'C', 'G' ] ]
fio:  F 1 [ 'C', 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 2 [ 'C', 'F', 'G' ]
rere [] []
rere [ [ 'C', 'F' ], [ 'C', 'G' ], [ 'F', 'G' ] ] [ [ 'B', 'C', 'F' ], [ 'B', 'C', 'G' ], [ 'B', 'F', 'G' ] ]
fio:  C 2 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  F 0 [ 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 1 [ 'F', 'G' ]
rere [] []
rere [ [ 'F', 'G' ] ] [ [ 'C', 'F', 'G' ] ]
fio:  F 3 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 4 [ 'A', 'B', 'C', 'F', 'G' ]
rere [] []
cc? ABC [ 'ABC' ]
cc? ABF [ 'ABC', 'ABF' ]
cc? ABG [ 'ABC', 'ABF', 'ABG' ]
cc? ACF [ 'ABC', 'ABF', 'ABG', 'ACF' ]
cc? ACG [ 'ABC', 'ABF', 'ABG', 'ACF', 'ACG' ]
cc? AFG [ 'ABC', 'ABF', 'ABG', 'ACF', 'ACG', 'AFG' ]
cc? BCF [
  'ABC', 'ABF',
  'ABG', 'ACF',
  'ACG', 'AFG',
  'BCF'
]
cc? BCG [
  'ABC', 'ABF',
  'ABG', 'ACF',
  'ACG', 'AFG',
  'BCF', 'BCG'
]
cc? BFG [
  'ABC', 'ABF',
  'ABG', 'ACF',
  'ACG', 'AFG',
  'BCF', 'BCG',
  'BFG'
]
cc? CFG [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG'
]
fio:  A 0 [ 'A', 'C' ]
fio:  C 0 [ 'C' ]
rere [] []
rere [] []
fio:  C 1 [ 'A', 'C' ]
rere [] []
fio:  C 0 [ 'C', 'D', 'E' ]
fio:  D 0 [ 'D', 'E' ]
rere [ [ 'E' ] ] [ [ 'D', 'E' ] ]
fio:  E 1 [ 'D', 'E' ]
rere [] []
rere [ [ 'D', 'E' ] ] [ [ 'C', 'D', 'E' ] ]
fio:  D 1 [ 'C', 'D', 'E' ]
fio:  E 0 [ 'E' ]
rere [] []
rere [] []
fio:  E 2 [ 'C', 'D', 'E' ]
rere [] []
cc? CDE [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE'
]
fio:  A 0 [ 'A', 'C', 'D', 'E' ]
fio:  C 0 [ 'C', 'D', 'E' ]
rere [ [ 'D' ], [ 'E' ] ] [ [ 'C', 'D' ], [ 'C', 'E' ] ]
fio:  D 1 [ 'C', 'D', 'E' ]
rere [ [ 'E' ] ] [ [ 'D', 'E' ] ]
fio:  E 2 [ 'C', 'D', 'E' ]
rere [] []
rere [ [ 'C', 'D' ], [ 'C', 'E' ], [ 'D', 'E' ] ] [ [ 'A', 'C', 'D' ], [ 'A', 'C', 'E' ], [ 'A', 'D', 'E' ] ]
fio:  C 1 [ 'A', 'C', 'D', 'E' ]
fio:  D 0 [ 'D', 'E' ]
rere [ [ 'E' ] ] [ [ 'D', 'E' ] ]
fio:  E 1 [ 'D', 'E' ]
rere [] []
rere [ [ 'D', 'E' ] ] [ [ 'C', 'D', 'E' ] ]
fio:  D 2 [ 'A', 'C', 'D', 'E' ]
fio:  E 0 [ 'E' ]
rere [] []
rere [] []
fio:  E 3 [ 'A', 'C', 'D', 'E' ]
rere [] []
cc? ACD [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD'
]
cc? ACE [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD',
  'ACE'
]
cc? ADE [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD',
  'ACE', 'ADE'
]
cc? CDE [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE'
]
fio:  B 0 [ 'B', 'C', 'F', 'G' ]
fio:  C 0 [ 'C', 'F', 'G' ]
rere [ [ 'F' ], [ 'G' ] ] [ [ 'C', 'F' ], [ 'C', 'G' ] ]
fio:  F 1 [ 'C', 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 2 [ 'C', 'F', 'G' ]
rere [] []
rere [ [ 'C', 'F' ], [ 'C', 'G' ], [ 'F', 'G' ] ] [ [ 'B', 'C', 'F' ], [ 'B', 'C', 'G' ], [ 'B', 'F', 'G' ] ]
fio:  C 1 [ 'B', 'C', 'F', 'G' ]
fio:  F 0 [ 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 1 [ 'F', 'G' ]
rere [] []
rere [ [ 'F', 'G' ] ] [ [ 'C', 'F', 'G' ] ]
fio:  F 2 [ 'B', 'C', 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 3 [ 'B', 'C', 'F', 'G' ]
rere [] []
cc? BCF [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE',
  'BCF'
]
cc? BCG [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE',
  'BCF', 'BCG'
]
cc? BFG [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE',
  'BCF', 'BCG', 'BFG'
]
cc? CFG [
  'ABC', 'ABF', 'ABG',
  'ACF', 'ACG', 'AFG',
  'BCF', 'BCG', 'BFG',
  'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE',
  'BCF', 'BCG', 'BFG',
  'CFG'
]
fio:  A 0 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  C 0 [ 'C', 'D', 'E', 'H' ]
rere [ [ 'D' ], [ 'E' ], [ 'H' ] ] [ [ 'C', 'D' ], [ 'C', 'E' ], [ 'C', 'H' ] ]
fio:  D 1 [ 'C', 'D', 'E', 'H' ]
rere [ [ 'E' ], [ 'H' ] ] [ [ 'D', 'E' ], [ 'D', 'H' ] ]
fio:  E 2 [ 'C', 'D', 'E', 'H' ]
rere [ [ 'H' ] ] [ [ 'E', 'H' ] ]
fio:  H 3 [ 'C', 'D', 'E', 'H' ]
rere [] []
rere [
  [ 'C', 'D' ],
  [ 'C', 'E' ],
  [ 'C', 'H' ],
  [ 'D', 'E' ],
  [ 'D', 'H' ],
  [ 'E', 'H' ]
] [
  [ 'A', 'C', 'D' ],
  [ 'A', 'C', 'E' ],
  [ 'A', 'C', 'H' ],
  [ 'A', 'D', 'E' ],
  [ 'A', 'D', 'H' ],
  [ 'A', 'E', 'H' ]
]
fio:  C 1 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  D 0 [ 'D', 'E', 'H' ]
rere [ [ 'E' ], [ 'H' ] ] [ [ 'D', 'E' ], [ 'D', 'H' ] ]
fio:  E 1 [ 'D', 'E', 'H' ]
rere [ [ 'H' ] ] [ [ 'E', 'H' ] ]
fio:  H 2 [ 'D', 'E', 'H' ]
rere [] []
rere [ [ 'D', 'E' ], [ 'D', 'H' ], [ 'E', 'H' ] ] [ [ 'C', 'D', 'E' ], [ 'C', 'D', 'H' ], [ 'C', 'E', 'H' ] ]
fio:  D 2 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  E 0 [ 'E', 'H' ]
rere [ [ 'H' ] ] [ [ 'E', 'H' ] ]
fio:  H 1 [ 'E', 'H' ]
rere [] []
rere [ [ 'E', 'H' ] ] [ [ 'D', 'E', 'H' ] ]
fio:  E 3 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  H 0 [ 'H' ]
rere [] []
rere [] []
fio:  H 4 [ 'A', 'C', 'D', 'E', 'H' ]
rere [] []
cc? ACD [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD'
]
cc? ACE [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE'
]
cc? ACH [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH'
]
cc? ADE [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH', 'ADE'
]
cc? ADH [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH', 'ADE', 'ADH'
]
cc? AEH [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH', 'ADE', 'ADH',
  'AEH'
]
cc? CDE [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH', 'ADE', 'ADH',
  'AEH', 'CDE'
]
cc? CDH [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH', 'ADE', 'ADH',
  'AEH', 'CDE', 'CDH'
]
cc? CEH [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH', 'ADE', 'ADH',
  'AEH', 'CDE', 'CDH', 'CEH'
]
cc? DEH [
  'ABC', 'ABF', 'ABG', 'ACF',
  'ACG', 'AFG', 'BCF', 'BCG',
  'BFG', 'CFG', 'CDE', 'ACD',
  'ACE', 'ADE', 'CDE', 'BCF',
  'BCG', 'BFG', 'CFG', 'ACD',
  'ACE', 'ACH', 'ADE', 'ADH',
  'AEH', 'CDE', 'CDH', 'CEH',
  'DEH'
]
red {} ABC
red { ABC: 1 } ABF
red { ABC: 1, ABF: 1 } ABG
red { ABC: 1, ABF: 1, ABG: 1 } ACF
red { ABC: 1, ABF: 1, ABG: 1, ACF: 1 } ACG
red { ABC: 1, ABF: 1, ABG: 1, ACF: 1, ACG: 1 } AFG
red { ABC: 1, ABF: 1, ABG: 1, ACF: 1, ACG: 1, AFG: 1 } BCF
red { ABC: 1, ABF: 1, ABG: 1, ACF: 1, ACG: 1, AFG: 1, BCF: 1 } BCG
red { ABC: 1, ABF: 1, ABG: 1, ACF: 1, ACG: 1, AFG: 1, BCF: 1, BCG: 1 } BFG
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1
} CFG
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1
} CDE
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  CDE: 1
} ACD
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  CDE: 1,
  ACD: 1
} ACE
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  CDE: 1,
  ACD: 1,
  ACE: 1
} ADE
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  CDE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1
} CDE
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  CDE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1
} BCF
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  CDE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1
} BCG
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 1,
  CFG: 1,
  CDE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1
} BFG
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 1,
  CDE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1
} CFG
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1
} ACD
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 2,
  ACD: 2,
  ACE: 1,
  ADE: 1
} ACE
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 1
} ACH
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 1,
  ACH: 1
} ADE
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACH: 1
} ADH
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACH: 1,
  ADH: 1
} AEH
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACH: 1,
  ADH: 1,
  AEH: 1
} CDE
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 3,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACH: 1,
  ADH: 1,
  AEH: 1
} CDH
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 3,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1
} CEH
red {
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  CDE: 3,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1
} DEH
mm 3 [ 'CDE' ]
fio:  A 0 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  B 0 [ 'B', 'C', 'F', 'G' ]
fio:  C 0 [ 'C', 'F', 'G' ]
rere [ [ 'F' ], [ 'G' ] ] [ [ 'C', 'F' ], [ 'C', 'G' ] ]
fio:  F 1 [ 'C', 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 2 [ 'C', 'F', 'G' ]
rere [] []
rere [ [ 'C', 'F' ], [ 'C', 'G' ], [ 'F', 'G' ] ] [ [ 'B', 'C', 'F' ], [ 'B', 'C', 'G' ], [ 'B', 'F', 'G' ] ]
fio:  C 1 [ 'B', 'C', 'F', 'G' ]
fio:  F 0 [ 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 1 [ 'F', 'G' ]
rere [] []
rere [ [ 'F', 'G' ] ] [ [ 'C', 'F', 'G' ] ]
fio:  F 2 [ 'B', 'C', 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 3 [ 'B', 'C', 'F', 'G' ]
rere [] []
rere [
  [ 'B', 'C', 'F' ],
  [ 'B', 'C', 'G' ],
  [ 'B', 'F', 'G' ],
  [ 'C', 'F', 'G' ]
] [
  [ 'A', 'B', 'C', 'F' ],
  [ 'A', 'B', 'C', 'G' ],
  [ 'A', 'B', 'F', 'G' ],
  [ 'A', 'C', 'F', 'G' ]
]
fio:  B 1 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  C 0 [ 'C', 'F', 'G' ]
fio:  F 0 [ 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 1 [ 'F', 'G' ]
rere [] []
rere [ [ 'F', 'G' ] ] [ [ 'C', 'F', 'G' ] ]
fio:  F 1 [ 'C', 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 2 [ 'C', 'F', 'G' ]
rere [] []
rere [ [ 'C', 'F', 'G' ] ] [ [ 'B', 'C', 'F', 'G' ] ]
fio:  C 2 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  F 0 [ 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 1 [ 'F', 'G' ]
rere [] []
rere [] []
fio:  F 3 [ 'A', 'B', 'C', 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 4 [ 'A', 'B', 'C', 'F', 'G' ]
rere [] []
cc? ABCF [ 'ABCF' ]
cc? ABCG [ 'ABCF', 'ABCG' ]
cc? ABFG [ 'ABCF', 'ABCG', 'ABFG' ]
cc? ACFG [ 'ABCF', 'ABCG', 'ABFG', 'ACFG' ]
cc? BCFG [ 'ABCF', 'ABCG', 'ABFG', 'ACFG', 'BCFG' ]
fio:  A 0 [ 'A', 'C' ]
fio:  C 0 [ 'C' ]
rere [] []
rere [] []
fio:  C 1 [ 'A', 'C' ]
rere [] []
fio:  C 0 [ 'C', 'D', 'E' ]
fio:  D 0 [ 'D', 'E' ]
fio:  E 0 [ 'E' ]
rere [] []
rere [] []
fio:  E 1 [ 'D', 'E' ]
rere [] []
rere [] []
fio:  D 1 [ 'C', 'D', 'E' ]
fio:  E 0 [ 'E' ]
rere [] []
rere [] []
fio:  E 2 [ 'C', 'D', 'E' ]
rere [] []
fio:  A 0 [ 'A', 'C', 'D', 'E' ]
fio:  C 0 [ 'C', 'D', 'E' ]
fio:  D 0 [ 'D', 'E' ]
rere [ [ 'E' ] ] [ [ 'D', 'E' ] ]
fio:  E 1 [ 'D', 'E' ]
rere [] []
rere [ [ 'D', 'E' ] ] [ [ 'C', 'D', 'E' ] ]
fio:  D 1 [ 'C', 'D', 'E' ]
fio:  E 0 [ 'E' ]
rere [] []
rere [] []
fio:  E 2 [ 'C', 'D', 'E' ]
rere [] []
rere [ [ 'C', 'D', 'E' ] ] [ [ 'A', 'C', 'D', 'E' ] ]
fio:  C 1 [ 'A', 'C', 'D', 'E' ]
fio:  D 0 [ 'D', 'E' ]
fio:  E 0 [ 'E' ]
rere [] []
rere [] []
fio:  E 1 [ 'D', 'E' ]
rere [] []
rere [] []
fio:  D 2 [ 'A', 'C', 'D', 'E' ]
fio:  E 0 [ 'E' ]
rere [] []
rere [] []
fio:  E 3 [ 'A', 'C', 'D', 'E' ]
rere [] []
cc? ACDE [ 'ABCF', 'ABCG', 'ABFG', 'ACFG', 'BCFG', 'ACDE' ]
fio:  B 0 [ 'B', 'C', 'F', 'G' ]
fio:  C 0 [ 'C', 'F', 'G' ]
fio:  F 0 [ 'F', 'G' ]
rere [ [ 'G' ] ] [ [ 'F', 'G' ] ]
fio:  G 1 [ 'F', 'G' ]
rere [] []
rere [ [ 'F', 'G' ] ] [ [ 'C', 'F', 'G' ] ]
fio:  F 1 [ 'C', 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 2 [ 'C', 'F', 'G' ]
rere [] []
rere [ [ 'C', 'F', 'G' ] ] [ [ 'B', 'C', 'F', 'G' ] ]
fio:  C 1 [ 'B', 'C', 'F', 'G' ]
fio:  F 0 [ 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 1 [ 'F', 'G' ]
rere [] []
rere [] []
fio:  F 2 [ 'B', 'C', 'F', 'G' ]
fio:  G 0 [ 'G' ]
rere [] []
rere [] []
fio:  G 3 [ 'B', 'C', 'F', 'G' ]
rere [] []
cc? BCFG [
  'ABCF', 'ABCG',
  'ABFG', 'ACFG',
  'BCFG', 'ACDE',
  'BCFG'
]
fio:  A 0 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  C 0 [ 'C', 'D', 'E', 'H' ]
fio:  D 0 [ 'D', 'E', 'H' ]
rere [ [ 'E' ], [ 'H' ] ] [ [ 'D', 'E' ], [ 'D', 'H' ] ]
fio:  E 1 [ 'D', 'E', 'H' ]
rere [ [ 'H' ] ] [ [ 'E', 'H' ] ]
fio:  H 2 [ 'D', 'E', 'H' ]
rere [] []
rere [ [ 'D', 'E' ], [ 'D', 'H' ], [ 'E', 'H' ] ] [ [ 'C', 'D', 'E' ], [ 'C', 'D', 'H' ], [ 'C', 'E', 'H' ] ]
fio:  D 1 [ 'C', 'D', 'E', 'H' ]
fio:  E 0 [ 'E', 'H' ]
rere [ [ 'H' ] ] [ [ 'E', 'H' ] ]
fio:  H 1 [ 'E', 'H' ]
rere [] []
rere [ [ 'E', 'H' ] ] [ [ 'D', 'E', 'H' ] ]
fio:  E 2 [ 'C', 'D', 'E', 'H' ]
fio:  H 0 [ 'H' ]
rere [] []
rere [] []
fio:  H 3 [ 'C', 'D', 'E', 'H' ]
rere [] []
rere [
  [ 'C', 'D', 'E' ],
  [ 'C', 'D', 'H' ],
  [ 'C', 'E', 'H' ],
  [ 'D', 'E', 'H' ]
] [
  [ 'A', 'C', 'D', 'E' ],
  [ 'A', 'C', 'D', 'H' ],
  [ 'A', 'C', 'E', 'H' ],
  [ 'A', 'D', 'E', 'H' ]
]
fio:  C 1 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  D 0 [ 'D', 'E', 'H' ]
fio:  E 0 [ 'E', 'H' ]
rere [ [ 'H' ] ] [ [ 'E', 'H' ] ]
fio:  H 1 [ 'E', 'H' ]
rere [] []
rere [ [ 'E', 'H' ] ] [ [ 'D', 'E', 'H' ] ]
fio:  E 1 [ 'D', 'E', 'H' ]
fio:  H 0 [ 'H' ]
rere [] []
rere [] []
fio:  H 2 [ 'D', 'E', 'H' ]
rere [] []
rere [ [ 'D', 'E', 'H' ] ] [ [ 'C', 'D', 'E', 'H' ] ]
fio:  D 2 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  E 0 [ 'E', 'H' ]
fio:  H 0 [ 'H' ]
rere [] []
rere [] []
fio:  H 1 [ 'E', 'H' ]
rere [] []
rere [] []
fio:  E 3 [ 'A', 'C', 'D', 'E', 'H' ]
fio:  H 0 [ 'H' ]
rere [] []
rere [] []
fio:  H 4 [ 'A', 'C', 'D', 'E', 'H' ]
rere [] []
cc? ACDE [
  'ABCF', 'ABCG',
  'ABFG', 'ACFG',
  'BCFG', 'ACDE',
  'BCFG', 'ACDE'
]
cc? ACDH [
  'ABCF', 'ABCG',
  'ABFG', 'ACFG',
  'BCFG', 'ACDE',
  'BCFG', 'ACDE',
  'ACDH'
]
cc? ACEH [
  'ABCF', 'ABCG',
  'ABFG', 'ACFG',
  'BCFG', 'ACDE',
  'BCFG', 'ACDE',
  'ACDH', 'ACEH'
]
cc? ADEH [
  'ABCF', 'ABCG',
  'ABFG', 'ACFG',
  'BCFG', 'ACDE',
  'BCFG', 'ACDE',
  'ACDH', 'ACEH',
  'ADEH'
]
cc? CDEH [
  'ABCF', 'ABCG',
  'ABFG', 'ACFG',
  'BCFG', 'ACDE',
  'BCFG', 'ACDE',
  'ACDH', 'ACEH',
  'ADEH', 'CDEH'
]
red {} ABCF
red { ABCF: 1 } ABCG
red { ABCF: 1, ABCG: 1 } ABFG
red { ABCF: 1, ABCG: 1, ABFG: 1 } ACFG
red { ABCF: 1, ABCG: 1, ABFG: 1, ACFG: 1 } BCFG
red { ABCF: 1, ABCG: 1, ABFG: 1, ACFG: 1, BCFG: 1 } ACDE
red { ABCF: 1, ABCG: 1, ABFG: 1, ACFG: 1, BCFG: 1, ACDE: 1 } BCFG
red { ABCF: 1, ABCG: 1, ABFG: 1, ACFG: 1, BCFG: 2, ACDE: 1 } ACDE
red { ABCF: 1, ABCG: 1, ABFG: 1, ACFG: 1, BCFG: 2, ACDE: 2 } ACDH
red { ABCF: 1, ABCG: 1, ABFG: 1, ACFG: 1, BCFG: 2, ACDE: 2, ACDH: 1 } ACEH
red {
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  ACDE: 2,
  ACDH: 1,
  ACEH: 1
} ADEH
red {
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  ACDE: 2,
  ACDH: 1,
  ACEH: 1,
  ADEH: 1
} CDEH
mm 2 [ 'BCFG', 'ACDE' ]


=> ["AC", "ACDE", "BCFG", "CDE"]
*/




/*
function solution(orders, course) {
  const ordered = {};
  const candidates = {};
  const maxNum = Array(10 + 1).fill(0);
  const createSet = (arr, start, len, foods) => {
      console.log(arr, start, len, foods)
    if (len === 0) {
      ordered[foods] = (ordered[foods] || 0) + 1;
      if (ordered[foods] > 1) candidates[foods] = ordered[foods];
      maxNum[foods.length] = Math.max(maxNum[foods.length], ordered[foods]);
        console.log('ocm ',ordered, candidates, maxNum)
      return;
    }

    for (let i = start; i < arr.length; i++) {
      createSet(arr, i + 1, len - 1, foods + arr[i]);
    }
  };

  orders.forEach((od) => {
    // arr.sort는 기본적으로 사전식 배열
    const sorted = od.split('').sort();
    // 주문한 음식을 사전순으로 배열해서 문자열을 만든다.
    // course에 있는 길이만 만들면 된다.
    course.forEach((len) => {
      createSet(sorted, 0, len, '');
    });
  });

  const launched = Object.keys(candidates).filter(
    (food) => maxNum[food.length] === candidates[food]
  );

  return launched.sort();
}
*/


/*
["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]

[ 'A', 'B', 'C', 'F', 'G' ] 0 2 
[ 'A', 'B', 'C', 'F', 'G' ] 1 1 A
[ 'A', 'B', 'C', 'F', 'G' ] 2 0 AB
ocm { AB: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 3 0 AC
ocm { AB: 1, AC: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 4 0 AF
ocm { AB: 1, AC: 1, AF: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 AG
ocm { AB: 1, AC: 1, AF: 1, AG: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 2 1 B
[ 'A', 'B', 'C', 'F', 'G' ] 3 0 BC
ocm { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 4 0 BF
ocm { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 BG
ocm { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1, BG: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 3 1 C
[ 'A', 'B', 'C', 'F', 'G' ] 4 0 CF
ocm { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1, BG: 1, CF: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 CG
ocm { AB: 1, AC: 1, AF: 1, AG: 1, BC: 1, BF: 1, BG: 1, CF: 1, CG: 1 } {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 4 1 F
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 FG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1
} {} [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 G
[ 'A', 'B', 'C', 'F', 'G' ] 0 3 
[ 'A', 'B', 'C', 'F', 'G' ] 1 2 A
[ 'A', 'B', 'C', 'F', 'G' ] 2 1 AB
[ 'A', 'B', 'C', 'F', 'G' ] 3 0 ABC
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 4 0 ABF
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 ABG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 3 1 AC
[ 'A', 'B', 'C', 'F', 'G' ] 4 0 ACF
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 ACG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 4 1 AF
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 AFG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 AG
[ 'A', 'B', 'C', 'F', 'G' ] 2 2 B
[ 'A', 'B', 'C', 'F', 'G' ] 3 1 BC
[ 'A', 'B', 'C', 'F', 'G' ] 4 0 BCF
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 BCG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 4 1 BF
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 BFG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 BG
[ 'A', 'B', 'C', 'F', 'G' ] 3 2 C
[ 'A', 'B', 'C', 'F', 'G' ] 4 1 CF
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 CFG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1
} {} [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 CG
[ 'A', 'B', 'C', 'F', 'G' ] 4 2 F
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 FG
[ 'A', 'B', 'C', 'F', 'G' ] 5 2 G
[ 'A', 'B', 'C', 'F', 'G' ] 0 4 
[ 'A', 'B', 'C', 'F', 'G' ] 1 3 A
[ 'A', 'B', 'C', 'F', 'G' ] 2 2 AB
[ 'A', 'B', 'C', 'F', 'G' ] 3 1 ABC
[ 'A', 'B', 'C', 'F', 'G' ] 4 0 ABCF
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1
} {} [
  0, 0, 1, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 ABCG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1
} {} [
  0, 0, 1, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 4 1 ABF
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 ABFG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1
} {} [
  0, 0, 1, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 ABG
[ 'A', 'B', 'C', 'F', 'G' ] 3 2 AC
[ 'A', 'B', 'C', 'F', 'G' ] 4 1 ACF
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 ACFG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1
} {} [
  0, 0, 1, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 ACG
[ 'A', 'B', 'C', 'F', 'G' ] 4 2 AF
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 AFG
[ 'A', 'B', 'C', 'F', 'G' ] 5 2 AG
[ 'A', 'B', 'C', 'F', 'G' ] 2 3 B
[ 'A', 'B', 'C', 'F', 'G' ] 3 2 BC
[ 'A', 'B', 'C', 'F', 'G' ] 4 1 BCF
[ 'A', 'B', 'C', 'F', 'G' ] 5 0 BCFG
ocm {
  AB: 1,
  AC: 1,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1
} {} [
  0, 0, 1, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 BCG
[ 'A', 'B', 'C', 'F', 'G' ] 4 2 BF
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 BFG
[ 'A', 'B', 'C', 'F', 'G' ] 5 2 BG
[ 'A', 'B', 'C', 'F', 'G' ] 3 3 C
[ 'A', 'B', 'C', 'F', 'G' ] 4 2 CF
[ 'A', 'B', 'C', 'F', 'G' ] 5 1 CFG
[ 'A', 'B', 'C', 'F', 'G' ] 5 2 CG
[ 'A', 'B', 'C', 'F', 'G' ] 4 3 F
[ 'A', 'B', 'C', 'F', 'G' ] 5 2 FG
[ 'A', 'B', 'C', 'F', 'G' ] 5 3 G
[ 'A', 'C' ] 0 2 
[ 'A', 'C' ] 1 1 A
[ 'A', 'C' ] 2 0 AC
ocm {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1
} { AC: 2 } [
  0, 0, 2, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C' ] 2 1 C
[ 'A', 'C' ] 0 3 
[ 'A', 'C' ] 1 2 A
[ 'A', 'C' ] 2 1 AC
[ 'A', 'C' ] 2 2 C
[ 'A', 'C' ] 0 4 
[ 'A', 'C' ] 1 3 A
[ 'A', 'C' ] 2 2 AC
[ 'A', 'C' ] 2 3 C
[ 'C', 'D', 'E' ] 0 2 
[ 'C', 'D', 'E' ] 1 1 C
[ 'C', 'D', 'E' ] 2 0 CD
ocm {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 1
} { AC: 2 } [
  0, 0, 2, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'C', 'D', 'E' ] 3 0 CE
ocm {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 1,
  CE: 1
} { AC: 2 } [
  0, 0, 2, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'C', 'D', 'E' ] 2 1 D
[ 'C', 'D', 'E' ] 3 0 DE
ocm {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 1,
  CE: 1,
  DE: 1
} { AC: 2 } [
  0, 0, 2, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'C', 'D', 'E' ] 3 1 E
[ 'C', 'D', 'E' ] 0 3 
[ 'C', 'D', 'E' ] 1 2 C
[ 'C', 'D', 'E' ] 2 1 CD
[ 'C', 'D', 'E' ] 3 0 CDE
ocm {
  AB: 1,
  AC: 2,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 1,
  CE: 1,
  DE: 1,
  CDE: 1
} { AC: 2 } [
  0, 0, 2, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'C', 'D', 'E' ] 3 1 CE
[ 'C', 'D', 'E' ] 2 2 D
[ 'C', 'D', 'E' ] 3 1 DE
[ 'C', 'D', 'E' ] 3 2 E
[ 'C', 'D', 'E' ] 0 4 
[ 'C', 'D', 'E' ] 1 3 C
[ 'C', 'D', 'E' ] 2 2 CD
[ 'C', 'D', 'E' ] 3 1 CDE
[ 'C', 'D', 'E' ] 3 2 CE
[ 'C', 'D', 'E' ] 2 3 D
[ 'C', 'D', 'E' ] 3 2 DE
[ 'C', 'D', 'E' ] 3 3 E
[ 'A', 'C', 'D', 'E' ] 0 2 
[ 'A', 'C', 'D', 'E' ] 1 1 A
[ 'A', 'C', 'D', 'E' ] 2 0 AC
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 1,
  CE: 1,
  DE: 1,
  CDE: 1
} { AC: 3 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 3 0 AD
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 1,
  CE: 1,
  DE: 1,
  CDE: 1,
  AD: 1
} { AC: 3 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 4 0 AE
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 1,
  CE: 1,
  DE: 1,
  CDE: 1,
  AD: 1,
  AE: 1
} { AC: 3 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 2 1 C
[ 'A', 'C', 'D', 'E' ] 3 0 CD
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 1,
  DE: 1,
  CDE: 1,
  AD: 1,
  AE: 1
} { AC: 3, CD: 2 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 4 0 CE
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 1,
  CDE: 1,
  AD: 1,
  AE: 1
} { AC: 3, CD: 2, CE: 2 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 3 1 D
[ 'A', 'C', 'D', 'E' ] 4 0 DE
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 1,
  AD: 1,
  AE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 4 1 E
[ 'A', 'C', 'D', 'E' ] 0 3 
[ 'A', 'C', 'D', 'E' ] 1 2 A
[ 'A', 'C', 'D', 'E' ] 2 1 AC
[ 'A', 'C', 'D', 'E' ] 3 0 ACD
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 1,
  AD: 1,
  AE: 1,
  ACD: 1
} { AC: 3, CD: 2, CE: 2, DE: 2 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 4 0 ACE
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 1,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 3 1 AD
[ 'A', 'C', 'D', 'E' ] 4 0 ADE
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 1,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2 } [
  0, 0, 3, 1, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 4 1 AE
[ 'A', 'C', 'D', 'E' ] 2 2 C
[ 'A', 'C', 'D', 'E' ] 3 1 CD
[ 'A', 'C', 'D', 'E' ] 4 0 CDE
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2, CDE: 2 } [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 4 1 CE
[ 'A', 'C', 'D', 'E' ] 3 2 D
[ 'A', 'C', 'D', 'E' ] 4 1 DE
[ 'A', 'C', 'D', 'E' ] 4 2 E
[ 'A', 'C', 'D', 'E' ] 0 4 
[ 'A', 'C', 'D', 'E' ] 1 3 A
[ 'A', 'C', 'D', 'E' ] 2 2 AC
[ 'A', 'C', 'D', 'E' ] 3 1 ACD
[ 'A', 'C', 'D', 'E' ] 4 0 ACDE
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 1,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2, CDE: 2 } [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E' ] 4 1 ACE
[ 'A', 'C', 'D', 'E' ] 3 2 AD
[ 'A', 'C', 'D', 'E' ] 4 1 ADE
[ 'A', 'C', 'D', 'E' ] 4 2 AE
[ 'A', 'C', 'D', 'E' ] 2 3 C
[ 'A', 'C', 'D', 'E' ] 3 2 CD
[ 'A', 'C', 'D', 'E' ] 4 1 CDE
[ 'A', 'C', 'D', 'E' ] 4 2 CE
[ 'A', 'C', 'D', 'E' ] 3 3 D
[ 'A', 'C', 'D', 'E' ] 4 2 DE
[ 'A', 'C', 'D', 'E' ] 4 3 E
[ 'B', 'C', 'F', 'G' ] 0 2 
[ 'B', 'C', 'F', 'G' ] 1 1 B
[ 'B', 'C', 'F', 'G' ] 2 0 BC
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 1,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2, CDE: 2, BC: 2 } [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 3 0 BF
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 1,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2, CDE: 2, BC: 2, BF: 2 } [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 4 0 BG
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 1,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2, CDE: 2, BC: 2, BF: 2, BG: 2 } [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 2 1 C
[ 'B', 'C', 'F', 'G' ] 3 0 CF
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 1,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} { AC: 3, CD: 2, CE: 2, DE: 2, CDE: 2, BC: 2, BF: 2, BG: 2, CF: 2 } [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 4 0 CG
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 1,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 3,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2
} [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 3 1 F
[ 'B', 'C', 'F', 'G' ] 4 0 FG
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 1,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 3,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2
} [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 4 1 G
[ 'B', 'C', 'F', 'G' ] 0 3 
[ 'B', 'C', 'F', 'G' ] 1 2 B
[ 'B', 'C', 'F', 'G' ] 2 1 BC
[ 'B', 'C', 'F', 'G' ] 3 0 BCF
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 1,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 3,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2
} [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 4 0 BCG
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 1,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 3,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2
} [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 3 1 BF
[ 'B', 'C', 'F', 'G' ] 4 0 BFG
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 1,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 3,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2
} [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 4 1 BG
[ 'B', 'C', 'F', 'G' ] 2 2 C
[ 'B', 'C', 'F', 'G' ] 3 1 CF
[ 'B', 'C', 'F', 'G' ] 4 0 CFG
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 1,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 3,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2
} [
  0, 0, 3, 2, 1,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 4 1 CG
[ 'B', 'C', 'F', 'G' ] 3 2 F
[ 'B', 'C', 'F', 'G' ] 4 1 FG
[ 'B', 'C', 'F', 'G' ] 4 2 G
[ 'B', 'C', 'F', 'G' ] 0 4 
[ 'B', 'C', 'F', 'G' ] 1 3 B
[ 'B', 'C', 'F', 'G' ] 2 2 BC
[ 'B', 'C', 'F', 'G' ] 3 1 BCF
[ 'B', 'C', 'F', 'G' ] 4 0 BCFG
ocm {
  AB: 1,
  AC: 3,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 3,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2
} [
  0, 0, 3, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'B', 'C', 'F', 'G' ] 4 1 BCG
[ 'B', 'C', 'F', 'G' ] 3 2 BF
[ 'B', 'C', 'F', 'G' ] 4 1 BFG
[ 'B', 'C', 'F', 'G' ] 4 2 BG
[ 'B', 'C', 'F', 'G' ] 2 3 C
[ 'B', 'C', 'F', 'G' ] 3 2 CF
[ 'B', 'C', 'F', 'G' ] 4 1 CFG
[ 'B', 'C', 'F', 'G' ] 4 2 CG
[ 'B', 'C', 'F', 'G' ] 3 3 F
[ 'B', 'C', 'F', 'G' ] 4 2 FG
[ 'B', 'C', 'F', 'G' ] 4 3 G
[ 'A', 'C', 'D', 'E', 'H' ] 0 2 
[ 'A', 'C', 'D', 'E', 'H' ] 1 1 A
[ 'A', 'C', 'D', 'E', 'H' ] 2 0 AC
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 1,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 4,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 3 0 AD
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 2,
  AE: 1,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 4,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 4 0 AE
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1
} {
  AC: 4,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 AH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1
} {
  AC: 4,
  CD: 2,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 2 1 C
[ 'A', 'C', 'D', 'E', 'H' ] 3 0 CD
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 2,
  DE: 2,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1
} {
  AC: 4,
  CD: 3,
  CE: 2,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 4 0 CE
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 2,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 CH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 2,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1,
  CH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 2,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 3 1 D
[ 'A', 'C', 'D', 'E', 'H' ] 4 0 DE
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1,
  CH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 DH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 4 1 E
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 EH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 1,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 H
[ 'A', 'C', 'D', 'E', 'H' ] 0 3 
[ 'A', 'C', 'D', 'E', 'H' ] 1 2 A
[ 'A', 'C', 'D', 'E', 'H' ] 2 1 AC
[ 'A', 'C', 'D', 'E', 'H' ] 3 0 ACD
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 1,
  ADE: 1,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 4 0 ACE
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 1,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 ACH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 1,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 3 1 AD
[ 'A', 'C', 'D', 'E', 'H' ] 4 0 ADE
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 ADH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 4 1 AE
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 AEH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 2,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2
} [
  0, 0, 4, 2, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 AH
[ 'A', 'C', 'D', 'E', 'H' ] 2 2 C
[ 'A', 'C', 'D', 'E', 'H' ] 3 1 CD
[ 'A', 'C', 'D', 'E', 'H' ] 4 0 CDE
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 CDH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 4 1 CE
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 CEH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 CH
[ 'A', 'C', 'D', 'E', 'H' ] 3 2 D
[ 'A', 'C', 'D', 'E', 'H' ] 4 1 DE
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 DEH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 1,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1,
  DEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 DH
[ 'A', 'C', 'D', 'E', 'H' ] 4 2 E
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 EH
[ 'A', 'C', 'D', 'E', 'H' ] 5 2 H
[ 'A', 'C', 'D', 'E', 'H' ] 0 4 
[ 'A', 'C', 'D', 'E', 'H' ] 1 3 A
[ 'A', 'C', 'D', 'E', 'H' ] 2 2 AC
[ 'A', 'C', 'D', 'E', 'H' ] 3 1 ACD
[ 'A', 'C', 'D', 'E', 'H' ] 4 0 ACDE
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1,
  DEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 ACDH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1,
  DEH: 1,
  ACDH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 4 1 ACE
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 ACEH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1,
  DEH: 1,
  ACDH: 1,
  ACEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 ACH
[ 'A', 'C', 'D', 'E', 'H' ] 3 2 AD
[ 'A', 'C', 'D', 'E', 'H' ] 4 1 ADE
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 ADEH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1,
  DEH: 1,
  ACDH: 1,
  ACEH: 1,
  ADEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 ADH
[ 'A', 'C', 'D', 'E', 'H' ] 4 2 AE
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 AEH
[ 'A', 'C', 'D', 'E', 'H' ] 5 2 AH
[ 'A', 'C', 'D', 'E', 'H' ] 2 3 C
[ 'A', 'C', 'D', 'E', 'H' ] 3 2 CD
[ 'A', 'C', 'D', 'E', 'H' ] 4 1 CDE
[ 'A', 'C', 'D', 'E', 'H' ] 5 0 CDEH
ocm {
  AB: 1,
  AC: 4,
  AF: 1,
  AG: 1,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  ABC: 1,
  ABF: 1,
  ABG: 1,
  ACF: 1,
  ACG: 1,
  AFG: 1,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  ABCF: 1,
  ABCG: 1,
  ABFG: 1,
  ACFG: 1,
  BCFG: 2,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2,
  AH: 1,
  CH: 1,
  DH: 1,
  EH: 1,
  ACH: 1,
  ADH: 1,
  AEH: 1,
  CDH: 1,
  CEH: 1,
  DEH: 1,
  ACDH: 1,
  ACEH: 1,
  ADEH: 1,
  CDEH: 1
} {
  AC: 4,
  CD: 3,
  CE: 3,
  DE: 3,
  CDE: 3,
  BC: 2,
  BF: 2,
  BG: 2,
  CF: 2,
  CG: 2,
  FG: 2,
  BCF: 2,
  BCG: 2,
  BFG: 2,
  CFG: 2,
  BCFG: 2,
  AD: 2,
  AE: 2,
  ACD: 2,
  ACE: 2,
  ADE: 2,
  ACDE: 2
} [
  0, 0, 4, 3, 2,
  0, 0, 0, 0, 0,
  0
]
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 CDH
[ 'A', 'C', 'D', 'E', 'H' ] 4 2 CE
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 CEH
[ 'A', 'C', 'D', 'E', 'H' ] 5 2 CH
[ 'A', 'C', 'D', 'E', 'H' ] 3 3 D
[ 'A', 'C', 'D', 'E', 'H' ] 4 2 DE
[ 'A', 'C', 'D', 'E', 'H' ] 5 1 DEH
[ 'A', 'C', 'D', 'E', 'H' ] 5 2 DH
[ 'A', 'C', 'D', 'E', 'H' ] 4 3 E
[ 'A', 'C', 'D', 'E', 'H' ] 5 2 EH
[ 'A', 'C', 'D', 'E', 'H' ] 5 3 H

=> ["AC", "ACDE", "BCFG", "CDE"]
*/
