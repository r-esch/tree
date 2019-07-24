import * as React from 'react';
import { TreeNodeProps } from './TreeNode';

export interface DataNode {
  checkable?: boolean;
  children?: DataNode[];
  disabled?: boolean;
  disableCheckbox?: boolean;
  icon?: IconType;
  isLeaf?: boolean;
  key: string | number;
  title?: React.ReactNode;
  selectable?: boolean;
  switcherIcon?: IconType;
}

export type IconType = React.ReactNode | ((props: TreeNodeProps) => React.ReactNode);

export type Key = string | number;

export type NodeElement = React.ReactElement<TreeNodeProps> & {
  selectHandle?: HTMLSpanElement;
  type: {
    isTreeNode: boolean;
  };
};

export interface Entity {
  node: NodeElement;
  index: number;
  key: Key;
  pos: string | number;
  parent?: Entity;
  children?: Entity[];
}

export interface FlattenDataNode extends Omit<DataNode, 'children'> {
  parent: FlattenDataNode | null;
  children: FlattenDataNode[];
}
