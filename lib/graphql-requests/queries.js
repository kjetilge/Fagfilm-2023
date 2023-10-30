export const CategoriesQuery = `query Categories {
  listCategorys {
    items {
      name
      rank
      id
      slug
      videos {
        items {
          title
          categoryId
          slug
          posterTime
          fileName
          id
          chapters {
            items {
              title
              start
              posterTime
            }
          }
        }
      }
    }
  }
}`

export const CategoriesOnlyQuery = `query Categories {
  listCategorys {
    items {
      name
      id
      slug
      rank
    }
  }
}`

export const CategoryBySlugQuery = `
  query CategoryBySlug($slug: String!) {
    listCategorys(filter: { slug: { eq: $slug } }) {
      items {
        name
        id
        slug
        rank
        videos {
          items {
            title
            categoryId
            slug
            posterTime
            fileName
            id
            chapters {
              items {
                title
                start
                posterTime
              }
            }
          }
        }
      }
    }
  }
`;


export const CategoryQuery = `
  query ($id: ID!) {
    getCategory(id: $id) {
      name
      id
      slug
      rank
      videos {
        items {
          title
          categoryId
          slug
          posterTime
          fileName
          id
          chapters {
            items {
              title
              start
              posterTime
            }
          }
        }
      }
    }
}`


export const VideoQuery = `
  query ($videoId: ID!) {
    getVideo(id: $videoId) {
      title
      slug
      category {
        id
        name
        slug
        rank
      }
      chapters(limit: 40, sortDirection:ASC) {
        items {
          id
          title
          start
          posterTime
        }
      }
    }
  }
  `

export const VideoBySlugQuery = `query ($slug: String!) {
  listVideos(filter: { slug: { eq: $slug } }) {
    items {
      id
      fileName
      slug
      title
      posterTime
      category {
        id
        name
        slug
        rank
      }
      chapters {
        items {
          id
          title
          posterTime
          start
        }
      }
    }
  }
}`

export const GetLicense = `query getLicense($licenseFilter: ModelLicenseFilterInput!) {
  listLicenses(filter: $licenseFilter) {
    items {
      id
      skolekode
      betalt
      aktiv
      institusjon
    }
  }
}`


// export const hasValidLicenseQuery = `query($code: String) {
//   hasValidLicense(code: $code)
// }`

// export const SearchLicenses = `query getLicense($licenseFilter: ModelLicenseFilterInput!) {
//   listLicenses(filter: $licenseFilter) {
//     items {
//       id
//       skolekode
//       betalt
//       aktiv
//       institusjon
//     }
//   }
// }`

// export const Skolekode = `query Skolekode($skolekode: String) {
//   listLicenses(limit: 10000, filter: {
//     skolekode: {
//       contains: $skolekode
//     }
//   }) {
//     items {
//       id
//       skolekode
//       institusjon
//       postnummer
//       betalt
//       aktiv
//     }
//   }
// }`

// export const getLicense = `
// query ($id: String){
//   getLicense(id: $id) {
//     eier
//   }
// }
// `

// export const Licenses = `query Licenses {
//   listLicenses(limit: 1000) {
//     items {
//       id
//       skolekode
//       institusjon
//       postnummer
//       betalt
//       aktiv
//     }
//   }
// }`
