import type { Page } from '@playwright/test';
export class HomePage {
    public readonly alertMessage;

    constructor(private readonly page: Page) {
        this.page = page;
        this.alertMessage = this.page.locator('[data-test="course-promo"]');
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }


}