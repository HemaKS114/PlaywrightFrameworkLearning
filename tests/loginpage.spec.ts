import {test, expect} from "@playwright/test"
import { LoginPage } from "../src/pages/LoginPage.js"
import { log } from "node:console";

let loginPage:LoginPage;
//Hooks
test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
})


test("Test to validate URL ", async({})=>{


    // let loginPage = new LoginPage(page);
    // await loginPage.gotoLoginPage();
    let actualURL:string = await loginPage.getAppURL();
    expect(actualURL).toBe("https://www.saucedemo.com/");
    console.log(actualURL);
    

})

test("Validate the title of the page", async({})=>{

    // let loginPage = new LoginPage(page);
    // await loginPage.gotoLoginPage();
    let title = await loginPage.getTitle();
    expect(title).toBe("Swag Labs");
    console.log(title);
})

test("Login functionality", async({page})=>{
    // let loginPage = new LoginPage(page);
    // await loginPage.gotoLoginPage();
    await loginPage.logintoApp("standard_user","secret_sauce");
    expect(page).toHaveURL(/inventory/);
    console.log("User login is successful");
    
})