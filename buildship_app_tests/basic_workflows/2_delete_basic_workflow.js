async function run({ page }) {
    await page.locator('.MuiBackdrop-root').click();
    await page.getByRole('link', { name: 'helloworld' }).click();
    await page.getByRole('link', { name: 'helloworld' }).getByRole('button').click();
    await page.getByRole('menuitem', { name: 'Delete' }).click();
    await page.getByPlaceholder('helloworld').click();
    await page.getByPlaceholder('helloworld').fill('helloworld');
    await page.getByRole('button', { name: 'Delete' }).click();
    await page.waitForResponse(res => res.url().includes("/delete-workflow") && res.status() === 200)

    const url = await page.url()

    const projectId = url?.split("/")?.[4]

    const uniqueId = projectId?.split("-")?.[1]

    const unDeployedURL = `https://${uniqueId}.buildship.run/helloworld`

    return unDeployedURL
}

async function validate({ page, fetch, expect }) {
    const data = await run({ page })

    const res = await fetch(data)

    expect(res?.status).not.toBe(200)
}