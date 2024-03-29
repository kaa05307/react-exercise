const initialList = [
	{id: 1, text: '你好啊'},
	{id: 2, text: '我很好'},
]

export default function todoReducer(state = initialList, action) {
	switch (action.type) {
		case 'ADD': {
			const newState = state.concat({
				id: new Date().getTime().toString(),
				text: action.text,
			})
			return newState;
		}
		case 'DELETE': {
			return state.filter((item) => {
				return item.id !== action.id;
			})
		}
		default:
			return state;
	}
}