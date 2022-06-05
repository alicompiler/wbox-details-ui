import React, {PropsWithChildren, useEffect} from 'react';
import {useDispatch, useServiceFactory} from 'wbox-context';
import {Field} from '../Field/Field';
import {ServiceFactory} from "../Service/ServiceFactory";
import {FetchService} from "../Service/Fetch/FetchService";
import {SetupActions} from "../Data/Setup/SetupAction";
import {Group} from "../Group/Group";

type FetcherType = 'http' | 'direct';

interface Props {
    fetcherType: FetcherType;
    fields: Field[];
    groups?: Group[];
}

export function Wrapper(props: PropsWithChildren<Props>) {
    const {fetcherType, fields, groups, children} = props;
    const dispatch = useDispatch();
    const serviceFactory: ServiceFactory = useServiceFactory();

    useEffect(() => {
        dispatch(SetupActions.setFields(fields));
        dispatch(SetupActions.setGroups(groups));
    }, [dispatch, fields, groups]);

    useEffect(() => {
        const service: FetchService =
            fetcherType === 'http' ? serviceFactory.createHttpFetchService() : serviceFactory.createBasicFetchService();
        service.fetch();
    }, [fetcherType, serviceFactory]);

    return <div>{children}</div>;
}