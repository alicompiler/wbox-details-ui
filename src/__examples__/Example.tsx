import React from 'react';
import {Provider} from '../Provider/Provider';
import {defaultGroup} from '../Group/Group';
import {BasicDetailsGroup} from './BasicDetailsGroup';


export function Example() {
    return <Provider fetchOptions={{url: 'http://localhost:8080/data'}}
                     groups={[{...defaultGroup, component: BasicDetailsGroup}]}
                     fields={[
                         {name: 'name', title: 'Name'},
                         {name: 'test', title: 'NOT EXIST'},
                         {name: 'birthDate', title: 'BirthDate'},
                         {name: 'address', title: 'Address'}
                     ]}/>;
}
