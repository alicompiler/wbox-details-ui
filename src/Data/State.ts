import {Field} from '../Field/Field';
import {Group} from '../Group/Group';

export type DetailsData = { [key: string]: unknown }

export interface State {
    data: DetailsData | null;
    loading: boolean;
    error: unknown;
    fields: Field[];
    groups: Group[];
}

export const INITIAL_STATE: State = {
    fields: [],
    loading: false,
    error: undefined,
    groups: [],
    data: null
};

export function buildInitialState(override: Partial<State> = {}): State {
    return {
        ...INITIAL_STATE,
        ...override,
    };
}
