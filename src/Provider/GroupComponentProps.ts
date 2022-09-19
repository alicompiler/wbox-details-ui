import {Group} from '../Group/Group';
import {DetailsData} from '../Data/State';
import {Field} from '../Field/Field';

export interface GroupComponentProps {
    group: Group;
    fields: Field[];
    data: DetailsData;
}
