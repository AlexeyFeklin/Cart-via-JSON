let bucket_btn = document.querySelector('.bucket_active');
let bucket_form = document.querySelector('.bucket');
let close_btn = document.querySelector('.close__bucketForm');

bucket_btn.addEventListener('click',function(e){
    bucket_form.classList.toggle('active');
    bucket_btn.classList.toggle('closed');
});

close_btn.addEventListener('click',function(e){
    bucket_form.classList.toggle('active');
    bucket_btn.classList.toggle('closed');
})

let cart = {
    "items": [
        // каждый товар в корзине может быть объектом с полями "name", "quantity", "img" и "id"
        {
            "id": "1",
            "name": "Восточные сладости Turkish Delight Pomergranete 300 г.",
            "quantity": 2,
            "img": "media/1.jpg"
        },
        {
            "id": "2",
            "name": "Восточные сладости Turkish Delight Strawberry&Banana 300 г.",
            "quantity": 1,
            "img": "media/2.jpg"
        },
        {
            "id": "3",
            "name": "Восточные сладости с фисташкой 300 г.",
            "quantity": 3,
            "img": "media/3.jpg"
        },
        {
            "id": "4",
            "name": "Восточные сладости с лесным орехом 300 г.",
            "quantity": 4,
            "img": "media/4.jpg"
        },
        {
            "id": "5",
            "name": "Восточные сладости Rose&Lemon 300 г.",
            "quantity": 1,
            "img": "media/5.jpg"
        },
        {
            "id": "6",
            "name": "Шоколадные конфеты Дары моря 400 г.",
            "quantity": 2,
            "img": "media/6.jpg"
        },
        {
            "id": "7",
            "name": "Молочный шоколад с взрывной карамелью 72 г",
            "quantity": 2,
            "img": "media/7.jpg"
        },
        {
            "id": "8",
            "name": "Финики с миндалем в молочном шоколаде 100 г.",
            "quantity": 2,
            "img": "media/8.jpg"
        },
        {
            "id": "9",
            "name": "Финики с миндалем в горьком шоколаде 100 г",
            "quantity": 2,
            "img": "media/9.jpg"
        },
        {
            "id": "10",
            "name": "Финики с миндалем в белом шоколаде 100 г",
            "quantity": 2,
            "img": "media/10.jpg"
        },
    ]
}

let JSONcart = JSON.stringify(cart);


function renderProductsInCatalog() {
    let catalog = document.querySelector('.catalogBlock');
    let ourJsonCatalogProducts = JSON.parse(JSONcart);
    console.log(ourJsonCatalogProducts);

    let counter = 1;
    ourJsonCatalogProducts.items.forEach(element => {
        
        let Product = document.createElement('div');
        Product.className = 'product';

        let ProductRow = document.createElement('div');
        ProductRow.className = 'product__row';
        Product.appendChild(ProductRow);

        let ProductTitle = document.createElement('div');
        ProductTitle.className = 'product__title';
        let TitleSpan = document.createElement('span');
        TitleSpan.textContent = element.name;
        ProductTitle.appendChild(TitleSpan);            // добавить эту строку

        let ProductImage = document.createElement('div');
        ProductImage.className = 'product__img';
        let ImageImg = document.createElement('img');
        ImageImg.src = element.img;
        ProductImage.appendChild(ImageImg);             // добавить эту строку

        let ProductButton = document.createElement('div');
        ProductButton.className = 'product__btn';
        let ButtonBtn = document.createElement('button');
        ButtonBtn.textContent = 'Купить';
        ButtonBtn.id = counter;
        ButtonBtn.classList = 'BuyBtn';
        ProductButton.appendChild(ButtonBtn);           // добавить эту строку

        ProductRow.appendChild(ProductTitle);
        ProductRow.appendChild(ProductImage);
        ProductRow.appendChild(ProductButton);

        catalog.appendChild(Product);
        counter++;
        });
}

renderProductsInCatalog();

function renderProductsInBucket() {
    let bucket = document.querySelector('.bucket');
    

    let counter = 1;
    JSONbucket.items.forEach(element => {
        
        let BucketRow = document.querySelector('.bucket__row');
        if (BucketRow.querySelector('#product-' + element.id) == null){
            let BucketProduct = document.createElement('div');
            BucketProduct.classList = 'bucket__product';
            BucketProduct.id = 'product-' + element.id;

            let BucketCount = document.createElement('div');
            BucketCount.classList = 'bucket__count';
            let BucketCount__span = document.createElement('span');
            //BucketCount__span.textContent = 'x1';
            //BucketCount.appendChild(BucketCount__span);
            

            let BucketProductImage = document.createElement('div');
            BucketProductImage.classList = 'bucket__product__image';
            let BucketProductImage__img = document.createElement('img');
            BucketProductImage__img.src = element.img;

            BucketProductImage.appendChild(BucketProductImage__img);

            let BucketProductTitle = document.createElement('div');
            BucketProductTitle.classList = 'bucket__product__title';
            let BucketProductTitle_span = document.createElement('span');
            BucketProductTitle_span.textContent = element.name;
            BucketProductTitle.appendChild(BucketProductTitle_span);

            //let BucketProductCountButton = document.createElement('div');
           // BucketProductCountButton.classList = 'bucket__countbtn';

            //let BucketProductCountButton__btn1 = document.createElement('button');
            //BucketProductCountButton__btn1.textContent = '-';
            //let BucketProductCountButton__btn2 = document.createElement('button');
            //BucketProductCountButton__btn2.textContent = '+';

            //BucketProductCountButton.appendChild(BucketProductCountButton__btn1);
           // BucketProductCountButton.appendChild(BucketProductCountButton__btn2);
            BucketRow.appendChild(BucketProduct);
            BucketProduct.appendChild(BucketCount);
            BucketProduct.appendChild(BucketProductImage);
            BucketProduct.appendChild(BucketProductTitle);
            //BucketProduct.appendChild(BucketProductCountButton);
        } 

        
    });
}




let catalogBlock = document.querySelector('.catalogBlock');
let catalogButtons = catalogBlock.querySelectorAll('button');
let JSONbucket = {
    "items": [
    ]
}


catalogButtons.forEach(element => {
    element.addEventListener('click', e => {
        let Availability = false;
        for(let i=0; i < JSONbucket.items.length; i++){
            if((cart.items[parseInt(element.id)-1].id) == JSONbucket.items[i].id){
                Availability = true;
            }
        }
        if (!Availability){
            JSONbucket.items.push(cart.items[parseInt(element.id)-1]);
        }
        console.log(JSONbucket);
    })
});

let bucket__active = document.querySelector('.bucket_active');
bucket__active.addEventListener('click', element => {
    renderProductsInBucket();
});
