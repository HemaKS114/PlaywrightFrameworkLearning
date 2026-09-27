//I am customizing /renaming playwright inbulit feature so taht modifications on its replica

import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

//define the type of fixtures

type pageFixtures = {

    loginPage:LoginPage;

}

export const test = baseTest.extend<pageFixtures>({
loginPage:async({page}, use)=>{

    let loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await use(loginPage);

}
})

export {expect} from "@playwright/test";