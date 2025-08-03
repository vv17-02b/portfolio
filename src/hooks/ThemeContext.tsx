import { createContext } from 'react'
import type { Dispatch } from 'react'

// Тип состояния
export type StateType = {
	theme: string
	fontSize: number
}

// Тип действия
export type ActionType =
	| { type: 'CHANGE_THEME' }
	| { type: 'CHANGE_FONTSIZE'; payload: number }

// Начальное состояние
export const INITIAL_STATE: StateType = {
	theme: 'dark',
	fontSize: 16,
}

// Контекст
export const ThemeContext = createContext<{
	state: StateType
	dispatch: Dispatch<ActionType>
}>({
	state: INITIAL_STATE,
	dispatch: () => undefined,
})

// Редюсер
export const themeReducer = (
	state: StateType,
	action: ActionType
): StateType => {
	switch (action.type) {
		case 'CHANGE_THEME':
			return {
				...state,
				theme: state.theme === 'dark' ? 'light' : 'dark',
			}
		case 'CHANGE_FONTSIZE':
			return {
				...state,
				fontSize: action.payload,
			}
		default:
			return state
	}
}
