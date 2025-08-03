import { useReducer } from 'react'
import type { ReactNode } from 'react'
import { ThemeContext, INITIAL_STATE, themeReducer } from './ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)

	return (
		<ThemeContext.Provider value={{ state, dispatch }}>
			{children}
		</ThemeContext.Provider>
	)
}
