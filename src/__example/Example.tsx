import React from "react";
import {useState} from "wbox-context";
import {State} from "../Data/State";
import {defaultGroup} from "../Group/Group";
// eslint: import/no-cycle
import {Provider} from "../Provider/Provider";

function DetailsUI() {
    const state = useState<State>();
    if (state.loading) return <h1>Loading...</h1>;
    if (state.error) return <h1 style={{color: 'red'}}>Error: failed to fetch data</h1>;
    const data = state.data as { [key: string]: string };
    const groups = state.groups ?? [defaultGroup];
    const {fields} = state;

    return <div>
        {
            groups.map(group =>
                <div key={group.name}>
                    <ul>
                        {
                            (group.fields === "all" ? Object.keys(data) : group.fields)
                                .filter(f => fields.find(field => field.name === f) !== undefined)
                                .map(fieldName =>
                                    <li key={fieldName}>
                                        <span>{fields.find(f => f.name)!.title}</span>
                                        <span style={{width: 20}}/>
                                        <span>{data[fieldName]}</span>
                                    </li>
                                )
                        }
                    </ul>
                </div>)
        }
    </div>
}

export function Example() {
    return <Provider fetchOptions={{url: ''}}
                     fields={[
                         {name: 'name', title: 'Name'},
                         {name: 'birthDate', title: 'BirthDate'},
                     ]}>
        <DetailsUI/>
    </Provider>
}