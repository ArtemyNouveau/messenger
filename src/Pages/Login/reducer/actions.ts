import {FieldName, VALIDATE_FIELDS} from './actionTypes'

export const changeField = (fieldName: FieldName, value: string) => {
    return {
        type: fieldName,
        value: value
    }
}

export const validateFields = () => {
    return {
        type: VALIDATE_FIELDS.all
    }
}
