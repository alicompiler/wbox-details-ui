import React from 'react';
import {GroupComponentProps} from '../Provider/GroupComponentProps';

export interface Group {
    name: string;
    fields: 'all' | string[];
    component: React.ComponentType<GroupComponentProps>;
    options?: unknown;
}

export const defaultGroup : Group = {
    name: '__default_group',
    fields: 'all',
    component: () => null
};
