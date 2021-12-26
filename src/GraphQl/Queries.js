import {gql} from '@apollo/client'

export const LoadUsers = gql`
		query {
			  getUsers {
				    name
				    email
				    age
			  }
		}
`

export const LoadUser = gql `
		query {
				  getUser(email : "csmezba@gmail.com") {
				    name
				    email
		    }
}
`