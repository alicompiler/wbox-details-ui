import React from "react";
// eslint-disable-next-line import/no-cycle
import {GroupComponentProps} from "../Provider/GroupComponentProps";

export interface Group {
    name: string;
    title: string;
    fields: 'all' | string[];
    component: React.ComponentType<GroupComponentProps>;
}

export const defaultGroup : Group = {
    name: '__default_group',
    title: '',
    fields: 'all',
    component: () => null
}
