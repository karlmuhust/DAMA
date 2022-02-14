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
      page(where: {id: "ckzmoaors49ud0c02k0t8qc5t"}) {
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

export async function fetchHistoryPageData() {
  const query = `
    query {
      page(where: {id: "ckrd69os8qm120c64393drhys"}) {
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

export async function fetchGrantPageData() {
  const query = `
    query {
      page(where: {id: "cktcj69pk2d590c50rrtk3pck"}) {
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
