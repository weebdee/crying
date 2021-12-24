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
    products.map(function (products) {
        list.innerHTML += `
            <div class="product">
                <div class="avatar"></div>
                <div class="desc">
                    <h3>${products.productName}</h3>
                    <p>${products.category}</p>
                    <p>${products.cost} сом</p>
                </div>
            </div>
        `
    })
}
render(products)

    
    
function filter () {
    const filtered = products.filter(products => {
        if (products.category !== 'Clothes') return true
        return false;
    })
    return filtered;
}

console.log(filter())

function produce () {
    const names = products.map(products => {
    return products.productName
    })
    return names;
}

console.log(produce())

const prodObj = products.reduce((accumalator, product) => {
    accumalator[product.category]++
    return accumalator
}, {
    Tool: 0,
    Clothes: 0,
    Food: 0
})

console.log(prodObj)

// ok google where to put destructuring thingy?
