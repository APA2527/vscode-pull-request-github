/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';
import { IAccount } from '../github/interface';
import { DiffHunk } from './diffHunk';

export enum DiffSide {
	LEFT = 'LEFT',
	RIGHT = 'RIGHT',
}

export interface Reaction {
	label: string;
	count: number;
	icon?: vscode.Uri;
	viewerHasReacted: boolean;
}

export interface IReviewThread {
	id: string;
	isResolved: boolean;
	viewerCanResolve: boolean;
	path: string;
	diffSide: DiffSide;
	line: number;
	originalLine: number;
	isOutdated: boolean;
	comments: IComment[];
}

export interface IComment {
	absolutePosition?: number;
	bodyHTML?: string;
	diffHunks?: DiffHunk[];
	canEdit?: boolean;
	canDelete?: boolean;
	url: string;
	id: number;
	pullRequestReviewId?: number;
	diffHunk: string;
	path?: string;
	position?: number;
	commitId?: string;
	originalPosition?: number;
	originalCommitId?: string;
	user?: IAccount;
	body: string;
	createdAt: string;
	htmlUrl: string;
	isDraft?: boolean;
	inReplyToId?: number;
	graphNodeId: string;
	reactions?: Reaction[];
	isResolved?: boolean;
}
