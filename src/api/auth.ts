import axios from '../utils/axios'

interface LoginData {
	email: string
	password: string
}

interface LoginResponse {
	token: string
	userId?: string
}

export const login = async (data: LoginData): Promise<LoginResponse> => {
	const res = await axios.post('/auth/login', data)
	return res.data
}
