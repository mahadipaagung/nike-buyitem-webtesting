import { $, browser} from '@wdio/globals'

class add2Cart {
    //element selection
    get shopMenBtn1() {return $('[data-qa-card-id="03f27912-cf3c-4cf5-97ac-1269d4abd868"]')}
    get nikeVPfly3() {return $('[aria-label="Nike Vaporfly 3"]')}
    get colourWay() {return $('#ColorwayDiv > div > div > fieldset > div:nth-child(5) > div > label')}
    get size() {return $('div[class="mt2-sm css-12whm6j"] > div:nth-child(4)')}
    get buttondiv() {return $('#floating-atc-wrapper')}
    get add2Bagbtn() {return $('#floating-atc-wrapper > div > button')}
    get cartIcon() { return $('[aria-label="Bag Items: 1"]')}
    get HeaderProduct1() {return $('h2[data-automation="cart-item-product-name"]')}

    //function runner
    async openPage() {
        await browser.url('https://www.nike.com/id/')
    }

    async scrolltoItem() {
        (await this.shopMenBtn1).scrollIntoView()
    }

    async pickSpecifiedProduct(nthcolor) {
        (await this.shopMenBtn1).click()
        await this.nikeVPfly3.waitForExist().then((await this.nikeVPfly3).click())
        
        await this.colourWay.waitForExist().then((await this.colourWay).click())
        
        await this.size.waitForExist().then(await this.size.click())
        await this.buttondiv.scrollIntoView()
        await this.add2Bagbtn.waitForClickable().then(this.add2Bagbtn.click())
        await this.cartIcon.waitForExist().then(await this.cartIcon.click())
        await browser.pause(3000)
    }

    // async pickSpecifiedProduct1() {
    // }

    // async pickSpecifiedProduct2() {
    // }

    // async pickSpecifiedProduct3() {
    // }

    // async pickSpecifiedProduct4() {
    // }

    // async pickSpecifiedProduct5() {
    // }
}

export default new add2Cart()