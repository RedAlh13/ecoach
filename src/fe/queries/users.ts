import gql from 'graphql-tag'

export const ME = gql`
  query {
    me {
      id
      name
      email
      roles
      tenant
    }
  }
`
