import { expect } from '@wdio/globals'
import add2Cart from '../pageobjects/add2cart.page.js'

describe('Product Checkout', () => {
    it('Product Checkout Positive Test', async () => {
        await add2Cart.openPage()
        await add2Cart.scrolltoItem()

        await add2Cart.pickSpecifiedProduct()
        // await add2Cart.pickSpecifiedProduct1()
        // await add2Cart.pickSpecifiedProduct2()
        // await add2Cart.pickSpecifiedProduct3()
        // await add2Cart.pickSpecifiedProduct4()
        // await add2Cart.pickSpecifiedProduct5()
        await expect(add2Cart.HeaderProduct1).toExist
    })
})

describe.only('Check Add To Cart Button', () => {
    it('Check add to cart button isClickable', async () => {
        await add2Cart.openPage()
        await add2Cart.scrolltoItem()
        await add2Cart.pickSpecifiedProduct()

    })
})
