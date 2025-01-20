// bai1
const a = ['a', 'b', 'c']
const b = [1, 2, 3]
const c = [...b]
a.forEach(temp => c.push(temp))
console.log(c)


// bai2
const a1 = [1, 2, 3, 4, 5]
const a2 = [2, 4, 6]
function check(array){
    if (array.every(temp => temp % 2 == 0)) return 'Yes'
    return 'No'
}
console.log(check(a1))
console.log(check(a2))


// bai3
const b1 = [1, 2, 3, 4, 5]
const b2 = [1, 1, 3, 1, 5]
function check1(array){
    if (array.some(temp => temp % 2 === 0)) return 'Yes'
    return 'No'
}
console.log(check1(b1))
console.log(check1(b2))


// bai4
const c1 = [1, -2, 3, 4, -5]
const c2 = c1.filter(temp => temp > 0)
console.log(c2)


// bai5
const d1 = [-1, -2, 3, 4, -5]
const d2 = [-1, 2, 3, 4, 5]
const d3 = [-1, -2]
function check3(array){
    const index = array.findIndex(temp => temp > 0)
    if (index === -1) return 'No result'
    return index + ' ' + array[index];
}
console.log(check3(d1))
console.log(check3(d2))
console.log(check3(d3))


// bai6
const e = [1, 5, 30, 26]
e.forEach(temp => {
    if(temp % 5 === 0){
        console.log(temp)
    }
})


// bai7
const f1 = [-1, 2, 3, 4, 2, 6]
const f2 = [0, 6]
function check4(array){
    const f3 = array.indexOf(2)
    const f4 = array.lastIndexOf(2)
    if (f3 === -1) return 'No result'
    return f3 + ' ' + f4;
}
console.log(check4(f1))
console.log(check4(f2))


// bai8
const g1 = ['A', 'B', 'C']
const g2 = [1, 2, 3]
const g3 = g1.join()
const g4 = g2.join()
console.log(g3)
console.log(g4)

// bai9
const h1 = [2, -1, -8]
const h2 = h1.map(temp => {
    if (temp < 0) 
        return temp * -1
    return temp
})
console.log(h2)




// map
const i1 = [1, 2, 3, 4, 5]
function makeMap(array){
    const i2 = []
    for (let i = 0; i < array.length; i++){
        i2.push(array[i] * -1)
    }
    return i2
}   
console.log(makeMap(i1))


// forEach
const j1 = [1, 2, 3, 4, 5]
function makeForEach(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]*2)
    }
}
makeForEach(j1)


// find
const k1 = [1, 2, 3, 4, 5]
function makeFind(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) return array[i]
    }
}
console.log(makeFind(k1))


// findIndex
const l1 = [1, 2, 3, 4, 5]
function makeFindIndex(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) return i
    }
}
console.log(makeFindIndex(l1))


// reduce
const m1 = [1, 2, 3, 4, 5]
function makeReduce(array){
    let sum = 0
    for (let i = 0; i < array.length; i++){
        sum += array[i]
    }
    return sum
}
console.log(makeReduce(m1))


// filter
const n1 = [1, 2, 3, 4, 5]
function makeFilter(array){
    const n2 = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) n2.push(array[i])
    }
    return n2
}
console.log(makeFilter(n1))



