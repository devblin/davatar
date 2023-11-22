const { chromium } = require("playwright");

async function run() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page
        .locator("div:nth-child(2) > .MuiButtonBase-root")
        .first()
        .click();
    await page
        .getByRole("banner")
        .locator("div")
        .filter({ hasText: "Untitled Workflow" })
        .getByRole("button")
        .click();
    await page.getByText("Settings").click();
    await page.getByLabel("Workflow name").click({ clickCount: 3 });
    await page.getByLabel("Workflow name").fill("WorkflowToBeDeleted");
    await page.getByRole("button", { name: "Save" }).click();
    await page
        .getByRole("link", { name: "WorkflowToBeDeleted" })
        .getByRole("button")
        .click();
    await page.getByText("Delete", { exact: true }).click();
    await page.getByPlaceholder("WorkflowToBeDeleted").click();
    await page
        .getByPlaceholder("WorkflowToBeDeleted")
        .fill("WorkflowToBeDeleted");
    await page.getByRole("button", { name: "Delete" }).click();
    await browser.close();
}