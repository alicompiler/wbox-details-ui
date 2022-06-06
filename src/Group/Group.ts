export interface Group {
    name: string;
    title: string;
    fields: 'all' | string[];
}


export const defaultGroup : Group = {
    name: '__default_group',
    title: '',
    fields: 'all'
}