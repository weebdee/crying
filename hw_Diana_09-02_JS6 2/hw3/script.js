// task one 
function countChar (str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count = count + 1
        }
    }
    return count;
};

console.log(countChar('aaaaaabccc', 'a'));

// task two

function getMin (arr) {
    let min = arr[0]; 
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    };
    return min;
}

console.log(getMin([75, 32, 1221, 43]))

//task three
const products = [
    {
        productName: 'milk',
        cost: 48,
        category: 'food'
    },
    {
        productName: 'bread',
        cost: 20,
        category: 'food'
    },
    {
        productName: 'egg',
        cost: 11,
        category: 'food'
    },
    {
        productName: 'axe',
        cost: 180,
        category: 'tool'
    },
    {
        productName: 'hammer',
        cost: 170,
        category: 'tool'
    },
    {
        productName: 'bag',
        cost: 1100,
        category: 'clothes'
    },
    {
        productName: 'socks',
        cost: 90,
        category: 'clothes'
    }, 
]

function getCategory(category) {
    let arr = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].category === category) {
            arr.push(products[i])
        };
    };
    return arr;
}

console.log(getCategory('food')) 

// task four

function getMaxCost (arr) {
    let max = arr[0].cost
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].cost > max) {
            max = arr[i].cost;
        }
    }
    return max;
}

const mostExp = getMaxCost(products)

console.log(products.find(item => item.cost === mostExp));



