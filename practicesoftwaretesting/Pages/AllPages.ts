import type { Page } from "playwright/test";
import { HomePage } from "./HomePage.js";

export class App {
    constructor(private readonly page:Page){
    }

    get homePage(){
        return new HomePage(this.page);
    }
}