import React from 'react';
import {GroupComponentProps} from '../Provider/GroupComponentProps';

export function BasicDetailsGroup({fields, data}: GroupComponentProps) {
    return <ul>
        {
            fields.map(field =>
                <li key={field.name}>
                    <span><b>{field.title}</b></span>
                    <span style={{width: 20, display: 'inline-block'}}/>
                    <span>{data[field.name] as string}</span>
                </li>
            )
        }
    </ul>;
}
