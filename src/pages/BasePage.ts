
import { Page } from "@playwright/test";

export class BasePage{

    //page variable
    //readonly we can add for object to create constant property

    protected readonly page;

    // constructor

    constructor(page:Page){
        this.page = page;
    }


}