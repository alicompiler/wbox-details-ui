import React from "react";
import {GroupComponentProps} from "../Provider/GroupComponentProps";


export function BasicDetailsGroup({fields, data}: GroupComponentProps) {
    return <ul>
        {
            fields.map(field =>
                <li key={field.name}>
                    <span>{fields.find(f => f.name)!.title}</span>
                    <span style={{width: 20}}/>
                    <span>{data[field.name] as string}</span>
                </li>
            )
        }
    </ul>
}
