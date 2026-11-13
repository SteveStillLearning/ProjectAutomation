import { test as base } from '@playwright/test';
import { App } from '../../Pages/AllPages.js';

type customFixture = {
    app : App;
}
export const test = base.extend<customFixture>({
    app: async ({ page }, use) => {
        await use(new App(page));
    }
});

export { expect } from '@playwright/test';