// eslint-disable-next-line import/no-cycle
import {Group} from "../Group/Group";
// eslint-disable-next-line import/no-cycle
import {DetailsData} from "../Data/State";
import {Field} from "../Field/Field";

export interface GroupComponentProps {
    group: Group;
    fields: Field[];
    data: DetailsData;
    renderOptions?: unknown;
}
