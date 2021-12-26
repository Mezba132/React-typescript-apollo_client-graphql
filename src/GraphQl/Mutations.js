import {gql} from '@apollo/client'

export const NewUser = gql`
	mutation createUser($name : String!, $email : String!, $age : Float!) {
		createUser( createUserData : { name : $name, email: $email, age: $age} ) 
		{
		    name
		    email
		    age
		}
	}
`