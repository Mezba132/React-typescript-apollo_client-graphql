import React, { useEffect, useState } from 'react'
import { useQuery, gql } from "@apollo/client";
import { LoadUsers } from "../GraphQl/Queries";

const GetUsers = ( ) => {
	const {error, loading, data} = useQuery(LoadUsers)
	const [users, setUsers] = useState([])

	useEffect(() => {
		if(data) setUsers(data.getUsers)
	}, [data])

	return(
			<div>
				<h1> All Users </h1>
				{users && users.map( val => (
						<div key={val.email}>
							<h3> name : {val.name} </h3>
							<h3> email : {val.email} </h3>
							<h3> age : { val.age } </h3>
						</div>
					))
				}
			</div>
	)
}

export default GetUsers;