const GRAPHCMS_URL = process.env.GRAPHCMS_URL

async function fetchAPI({ query } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  const res = await fetch(GRAPHCMS_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
    }),
  })

  const json = await res.json()

  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API', { query })
  }

  return json.data
}

export async function fetchFrontPageData() {
  const query = `
    query {
      page(id: "14", idType: DATABASE_ID) {
        id
        title
        frontpage_fields {
          selectFrontpage {
            ... on Page {
              id
              title
              contentFields {
                mainTitle
                number
                flexibleContent {
                  title
                  content
                }
              }
            }
          }
        }
      }
    }
  `

  const data = await fetchAPI({
    query,
  })

  if (data) {
    return data.page.frontpage_fields.selectFrontpage
  }
}

export async function fetchHistoryPageData() {
  const query = `

  `

  const data = await fetchAPI({
    query,
  })

  if (data) {
    return data
  }
}

export async function fetchAboutPageData() {
  const query = `
    query {
      page(where: {id: "ckrz1touo1qjy0c50j9ff61ty"}) {
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
  `

  const data = await fetchAPI({
    query,
  })

  if (data) {
    return data
  }
}

export async function fetchPageData({ slug }) {
  const query = `
    query {
      page(id: "${slug}", idType: URI) {
        id
        title
        contentFields {
          mainTitle
          number
          flexibleContent {
            title
            content
          }
        }
      }
    }
  `

  const data = await fetchAPI({
    query,
  })

  if (data) {
    return data.page
  }
}
