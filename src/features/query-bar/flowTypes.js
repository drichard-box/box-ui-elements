// @flow
import { AND, EQUALS, GREATER_THAN, LESS_THAN, NOT_EQUALS, OR, EMPTY_CONNECTOR } from './constants';

export type ConnectorType = typeof AND | typeof OR | typeof EMPTY_CONNECTOR;

export type OperatorType = typeof EQUALS | typeof NOT_EQUALS | typeof GREATER_THAN | typeof LESS_THAN;

export type OptionType = {
    displayText: string,
    id: string,
    type?: string,
    value: string,
};

export type OperatorOptionType = {
    displayText: string,
    value: OperatorType,
};

export type ColumnType = {
    displayName: string,
    id: string,
    isShown: boolean,
    options: Array<Object> | null, // TODO: ColumnOptionsType - Array<ColumnOptionType>
    property: string,
    source: string,
    templateKey?: string,
    type: string,
};

export type ConditionType = {
    columnId: string,
    id: string,
    operator: OperatorType,
    values: Array<string>,
};
