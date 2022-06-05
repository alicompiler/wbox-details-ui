import {Field} from "../Field/Field";
import {Group} from "../Group/Group";

export interface State {
    data: unknown;
    loading: boolean;
    error: unknown;
    fields: Field[];
    groups?: Group[];
}

export const INITIAL_STATE: State = {
    fields: [],
    loading: false,
    error: undefined,
    groups: undefined,
    data: null
};

export function buildInitialState(override: Partial<State> = {}): State {
    return {
        ...INITIAL_STATE,
        ...override,
    };
}
