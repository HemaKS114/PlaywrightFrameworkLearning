import {test, expect} from "../src/fixtures/pagefixture.js"
import { LoginPage } from "../src/pages/LoginPage.js";




test("Test to validate URL ", async({loginPage})=>{

    let actualURL:string = await loginPage.getAppURL();
    expect(actualURL).toBe("https://www.saucedemo.com/");
    console.log(actualURL);
    

})

test("Test the title", async({loginPage})=>{
    let title = await loginPage.getTitle();
        expect(title).toBe("Swag Labs");
        console.log(title);
})

test("Login to the page", async({loginPage, page})=>{
        await loginPage.logintoApp("standard_user","secret_sauce");
        expect(page).toHaveURL(/inventory/);
        console.log("User login is successful");
})


