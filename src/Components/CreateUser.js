import React, {useState} from 'react'
import { NewUser } from "../GraphQl/Mutations";
import {useMutation} from "@apollo/client";

const InitialValue = {
	name : '',
	email : '',
	age : 0
}

const CreateUser = () => {

	const [values, setValues] = useState(InitialValue)

	const { name, email, age } = values

	const [ createUser, { error } ] = useMutation(NewUser)

	const handleChange = (e) => {
		setValues({...values, [e.target.name] : e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if(error) {
			console.log('something wrong')
			console.log(error)
		}
		let parseAge = parseFloat(age)
		createUser({
			variables : {
				name: name,
				email: email,
				age: parseAge
			}
		}).then(res => console.log(res.data)).catch(err => console.log(err))
	}

	return(
			<form onSubmit={handleSubmit}>
				<h1>Create User</h1>
				<label>Name : </label>
				<input
					type='text'
					name='name'
					placeholder='Yours Name'
					onChange={handleChange}
				/>
				<br/>
				<label>Email : </label>
				<input
						type='email'
						name='email'
						placeholder='Yours Email'
						onChange={handleChange}
				/>
				<br/>
				<label>Age : </label>
				<input
						type='number'
						name='age'
						placeholder='Yours Age'
						onChange={handleChange}
				/>
				<br/>
				<button type='submit'>Submit</button>
			</form>
	)
}

export default CreateUser;