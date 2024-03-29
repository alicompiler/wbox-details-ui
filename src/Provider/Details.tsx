import React, {ReactElement} from 'react';
import {useState} from 'wb-core-provider';
import {State} from '../Data/State';
import {useDefaults} from '../Defaults/DefaultsContext';
import {Field} from '../Field/Field';

export function Details(): ReactElement | null {
    const state = useState<State>();
    const defaults = useDefaults();
    if (state.loading) {
        return defaults.renderLoading();
    }
    if (state.error) {
        return defaults.renderError();
    }
    if (state.data === null) {
        return null;
    }
    const data = state.data as { [key: string]: string };
    const {groups, fields} = state;

    const keys = Object.keys(data);
    return <div className="__wbox_details_wrapper">
        {
            groups.map(group => {
                const fieldNames = group.fields === 'all'
                    ? fields.filter(f => keys.includes(f.name)).map(f => f.name) // return field names in order
                    : group.fields;

                const groupFields = fieldNames
                    .map(f => fields.find(field => field.name === f))
                    .filter(f => f !== undefined)
                    .map(f => f as Field);
                const GroupComponent = group.component ?? defaults.groupComponent;
                return <GroupComponent key={group.name}
                                       group={group}
                                       fields={groupFields}
                                       data={data}/>;
            })
        }
    </div>;
}
