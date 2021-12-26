import React, { useEffect, useState } from 'react'
import { useQuery, gql } from "@apollo/client";
import { LoadUser } from "../GraphQl/Queries";

const GetUser = ( ) => {
	const {error, loading, data} = useQuery(LoadUser)
	const [user, setUser] = useState()

	useEffect(() => {
		if(data) setUser(data.getUser)
	}, [data])

	return(
			<React.Fragment>
				{user &&
					<div>
						<h1>Single User</h1>
						<h3> name : {user.name} </h3>
						<h3> email : {user.email} </h3>
						<h3> age : {user.age} </h3>
					</div>
				}
			</React.Fragment>
		)
}

export default GetUser;
