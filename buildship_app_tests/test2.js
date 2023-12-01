async function run({ page }) {
    await page.getByRole('link', { name: 'expression-editor' }).click();
    await page.getByRole('button', { name: 'Ship' }).click();

    const url = await page.url()

    const projectId = url?.split("/")?.[4]

    const uniqueId = projectId?.split("-")?.[1]

    const deployedURL = `https://${uniqueId}.buildship.run/expression-editor`

    return deployedURL
}

async function validate({ page, fetch, expect }) {
    const url = await run({ page })

    const res = await (await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ array: [1, 2, 3, 4] })
    })).json()

    expect(res).toBe(["ODD", "EVEN", "ODD", "EVEN"])
}