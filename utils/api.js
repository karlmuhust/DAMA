const GRAPHCMS_URL = process.env.GRAPHCMS_URL;

async function fetchAPI({ query } = {}) {
	const headers = { 'Content-Type': 'application/json' };

	const res = await fetch(GRAPHCMS_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
		}),
	});

	const json = await res.json();

	if (json.errors) {
		console.error(json.errors);
		throw new Error('Failed to fetch API', { query });
	}

	return json.data;
}

export async function fetchFrontPageData() {
	const query = `
    query {
      page(where: {id: "ckq58d66gmlyb0b57pnw81z2l"}) {
        title
        content {
          html
        }
        block {
          __typename
          ... on Block {
            title
            content {
              html
            }
          }
        }
      }
    }
  `;

	const data = await fetchAPI({
		query,
	});

	if (data) {
		return data;
	}
}
