/**
 * every page class maintains encapsulation principle
 * Encapsulation = Private data + public function
**/

import {Page} from "@playwright/test"
import { BasePage } from "./BasePage";


export class LoginPage extends BasePage
{

    //locator(data)

    private readonly userName;
    private readonly password;
    private readonly loginButton;


    //constructor to initialize locators

    constructor(page:Page){

        super(page);

        this.userName =  page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginButton = page.getByRole('button',{name:'login'});
    }


    //methods(actions)

    async gotoLoginPage():Promise<void>{

        await this.page.goto("/");
    }
    async getTitle():Promise<string>
    {
        
      return  await this.page.title();
    }

    async getAppURL():Promise<string>{

        return this.page.url();
    }

    async logintoApp(un:string, ps:string):Promise<void>{

       await this.userName.fill(un);
       await this.password.fill(ps);
    //    await this.page.waitForTimeout(2000);
       await this.loginButton.click();
    }
    

}