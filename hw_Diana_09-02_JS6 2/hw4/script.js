let products = [ 
    {
        productName: 'Milk', 
        cost: 48,
        category: 'Food'
    },
    {
        productName: 'Bread', 
        cost: 20,
        category: 'Food'
    },
    {
        productName: 'Egg', 
        cost: 11, 
        category: 'Food'
    },
    {
        productName: 'Axe',
        cost: 180, 
        category: 'Tool'
    },
    {
        productName: 'Hammer', 
        cost: 170,
        category: 'Tool'
    },
    {
        productName: 'Bag', 
        cost: 1100, 
        category: 'Clothes'
    },
    {
        productName: 'Socks', 
        cost: 90,
        category: 'Clothes'
    }
]




    
const list = document.querySelector('.list')

function render(products) {
    // here
    products.map(({ productName, category, cost }) => {
        list.innerHTML += `
            <div class="product">
                <div class="avatar"></div>
                <div class="desc">
                    <h3>${productName}</h3>
                    <p>${category}</p>
                    <p>${cost} сом</p>
                </div>
            </div>
        `
    })
}
render(products)

    
    
function filter () {
    // here
    const filtered = products.filter(({ category }) => {
        if (category !== 'Clothes') return true
        return false;
    })
    return filtered;
}

console.log(filter())

function produce () {
    const names = products.map(({ productName }) => {
    return productName
    })
    return names;
}

console.log(produce())
// here
const prodObj = products.reduce((accumalator, { category }) => {
    accumalator[category]++
    return accumalator
}, {
    Tool: 0,
    Clothes: 0,
    Food: 0
})

console.log(prodObj)

// ok google where to put destructuring thingy?
