import doc from '../assets/doc.js';

let prod_card = doc.qall('.product-card');

prod_card.forEach(element => {
    element.getElementsByClassName('img')[0].addEventListener('click', () => {
        productcard.open();
    });
});

class ProductCard {
    constructor(prodid) {
        this.productId = prodid;
    }
    open(prodid) {
        doc.id('prod-desc').style.display = 'flex';
    }
    close() {
        document.getElementById('prod-desc').getElementsByClassName('box')[0].style.bottom
        setTimeout(() => doc.id('prod-desc').style.display = 'none', 0)

    }
}

let productcard = new ProductCard();

window.productclose = () => {
    productcard.close()
};

function ahref(link) {
    window.location.href = link;
}

window.ahref = (link) => {
    ahref(link)
};

function mnav(open) {
    if (open == 'open') {
        doc.id('mnav').classList.add('open');
    } else {
        doc.id('mnav').classList.remove('open')
    }
}

window.mnav = (state) => {
    mnav(state)
};