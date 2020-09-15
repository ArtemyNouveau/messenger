import {FieldName, VALIDATE_FIELDS} from './actionTypes'

interface Field {
    value: string,
    valid: boolean
}

export interface State {
    [x: string]: any
    [FieldName.email]?: Field,
    [FieldName.username]?: Field,
    [FieldName.password]?: Field,
}

export const initialState = {
    [FieldName.email]: {
        value: "",
        valid: false
    },
    [FieldName.username]: {
        value: "",
        valid: false
    },
    [FieldName.password]: {
        value: "",
        valid: false
    },
}

const validateField = (fieldValue: string):boolean => {
    return fieldValue.length >= 5
}

export const reducer = (state: State, action: { type: FieldName | VALIDATE_FIELDS, value?: string }): State => {
    switch (action.type) {
        case FieldName.password:
        case FieldName.username:
        case FieldName.email:
            return {
                ...state,
                [action.type]: {
                    ...state[action.type],
                    value: action.value
                }
            }
        case VALIDATE_FIELDS.all:
            const fields = Object.entries(state).reduce((result:State,[key,{value}]) => ({
                ...result,
                [key]: {
                    // @ts-ignore
                    ...state[key],
                    valid: validateField(value)
                }
            }), {})
            return {
                ...state,
                ...fields
            }
        default:
            return state
    }
}
