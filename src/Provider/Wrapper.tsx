import React, {useEffect} from 'react';
import {useDispatch, useServiceFactory} from 'wbox-context';
import {Field} from '../Field/Field';
import {ServiceFactory} from "../Service/ServiceFactory";
import {FetchService} from "../Service/Fetch/FetchService";
import {SetupActions} from "../Data/Setup/SetupAction";
import {Group} from "../Group/Group";
import {useDefaults} from "../Defaults/DefaultsContext";

type FetcherType = 'http' | 'direct';

interface Props {
    fetcherType: FetcherType;
    fields: Field[];
    groups?: Group[];
}

export function Wrapper(props: Props) {
    const {fetcherType, fields, groups} = props;
    const dispatch = useDispatch();
    const serviceFactory: ServiceFactory = useServiceFactory();
    const defaults = useDefaults();
    const DetailsComponent = defaults.detailsWrapperComponent;

    useEffect(() => {
        dispatch(SetupActions.setFields(fields));
        dispatch(SetupActions.setGroups(groups));
    }, [dispatch, fields, groups]);

    useEffect(() => {
        const service: FetchService =
            fetcherType === 'http' ? serviceFactory.createHttpFetchService() : serviceFactory.createBasicFetchService();
        service.fetch();
    }, [fetcherType, serviceFactory]);

    return <DetailsComponent />;
}
