import {Action} from 'wb-core-provider';
import {Field} from '../../Field/Field';
import {Group} from '../../Group/Group';

export enum SetupActionType {
    SET_FIELDS = 'SETUP_ACTION@SET_FIELDS',
    SET_GROUPS = 'SETUP_ACTION@SET_GROUPS',
}

export type SetupAction<TPayload> = Action<SetupActionType, TPayload>;


export class SetupActions {
    public static setFields(fields: Field[]): SetupAction<Field[]> {
        return {
            type: SetupActionType.SET_FIELDS,
            payload: fields
        };
    }

    public static setGroups(groups: Group[] | undefined): SetupAction<Group[] | undefined> {
        return {
            type: SetupActionType.SET_GROUPS,
            payload: groups
        };
    }
}