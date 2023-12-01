async function run({ page }) {
    await page.locator('body').click();
    await page.locator('div:nth-child(2) > .MuiButtonBase-root').first().click();
    await page.getByRole('link', { name: 'Untitled Workflow' }).getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Settings' }).click();
    await page.locator('div').filter({ hasText: 'DisplaySet how this workflow is displayed to usersWorkflow nameUser-facing name ' }).nth(2).click();
    await page.getByLabel('Workflow name').dblclick();
    await page.getByLabel('Workflow name').fill('helloworld');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.getByRole('button', { name: 'Add Trigger' }).click();
    await page.getByRole('button', { name: 'Rest API Call' }).click();
    await page.getByRole('button', { name: 'Add Trigger' }).click();
    await page.getByPlaceholder('Value').click();
    await page.getByPlaceholder('Value').fill('/helloworld');
    await page.locator('.MuiStack-root > div > div > div:nth-child(2) > .MuiStack-root').click();
    await page.getByRole('button', { name: 'Return' }).click();
    await page.getByRole('button', { name: 'Add Node' }).click();
    await page.getByLabel('​', { exact: true }).click();
    await page.getByRole('option', { name: 'OK (200)' }).click();
    await page.getByLabel('Value', { exact: true }).click();
    await page.getByLabel('Value', { exact: true }).fill('helloworld');
    await page.getByRole('button', { name: 'Ship' }).click();
    await page.waitForResponse(res => res.url().includes("/deploy-workflow") && res.status() === 200)

    const url = await page.url()

    const projectId = url?.split("/")?.[4]

    const uniqueId = projectId?.split("-")?.[1]

    const deployedURL = `https://${uniqueId}.buildship.run/helloworld`

    return deployedURL
}


async function validate({ page, fetch, expect }) {
    const data = await run1({ page })

    const res = await (await fetch(data)).text()

    expect(res).toBe("helloworld")
}