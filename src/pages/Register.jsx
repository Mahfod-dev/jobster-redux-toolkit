import { useEffect, useState } from 'react'
import { Logo } from '../Components'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from '../Components/FormRow'
import { toast } from 'react-toastify'

const initialState = {
	name: '',
	email: '',
	password: '',
	isMember: true,
}

const Register = () => {
	const [values, setValues] = useState(initialState)

	const { name, email, password, isMember } = values

	// redux toolkit and useNavigate later

	const handleChange = (e) => {
		const { value, name } = e.target
		console.log(name)
		setValues((prevValue) => {
			return { ...prevValue, [name]: value }
		})
	}

	const onSubmit = (e) => {
		e.preventDefault()
		if (!email || !password || (!isMember && !name)) {
			toast.error('Please Fill Out All fields')
			return
		}
	}

	const toogleMember = () => {
		setValues({ ...values, isMember: !isMember })
	}
	return (
		<Wrapper className='full-page'>
			<form className='form' onSubmit={onSubmit}>
				<Logo />
				<h3>{isMember ? 'Login' : 'Register'}</h3>
				{!isMember && (
					<FormRow
						type='text'
						value={name}
						name='name'
						handleChange={handleChange}
					/>
				)}

				<FormRow
					type='email'
					value={email}
					name='email'
					handleChange={handleChange}
				/>
				<FormRow
					type='password'
					value={password}
					name='password'
					handleChange={handleChange}
				/>

				<button type='submit' className='btn btn-block'>
					submit
				</button>
				<p>
					{isMember ? 'Not member yet ?' : 'Already a member ?'}
					<button className='member-btn' onClick={toogleMember}>
						{isMember ? 'Login' : 'Register'}
					</button>
				</p>
			</form>
		</Wrapper>
	)
}

export default Register
