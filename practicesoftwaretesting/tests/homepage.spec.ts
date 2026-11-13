import {test, expect } from './fixture/app.fixture.js';
import { messages } from '../Data/data.js';

test('Verify that user is in homepage', async({ app }) => {
    await app.homePage.navigateToHomePage();
    expect(app.homePage.alertMessage).toHaveText(messages.welcomeMessage);
})