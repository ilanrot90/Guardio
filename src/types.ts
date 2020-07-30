import { ReactElement } from 'react';
export type Theme = 'dark' | 'light';

export interface IProps {
	children: ReactElement;
}

export interface IBreach {
	Name: string;
	Title: string;
	Domain: string;
	BreachDate: string;
	AddedDate: string;
	ModifiedDate: string;
	PwnCount: number;
	Description: string;
	LogoPath: string;
	DataClasses: Array<string>;
	IsVerified: boolean;
	IsFabricated: boolean;
	IsSensitive: boolean;
	IsRetired: boolean;
	IsSpamList: boolean;
}

export type Response = {
	items: Array<IBreach>;
	error: string | null;
	total: number;
};
