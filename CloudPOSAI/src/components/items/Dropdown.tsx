import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import type { DataNode } from 'antd/es/tree';

type DropdownProps = {
    treeData: DataNode[];
    value?: string[];
    onChange?: (value: string[]) => void;
    placeholder?: string;
    multiple?: boolean;
    treeCheckable?: boolean;
    style?: React.CSSProperties;
    defaultExpandAll?: boolean;
    showSearch?: boolean;
};

export default function Dropdown({
    treeData,
    value: controlledValue,
    onChange,
    placeholder = "Please Select",
    multiple = true,
    treeCheckable = true,
    style = { width: 200, border: '1px solid var(--accent-border)' },
    defaultExpandAll = true,
    showSearch = true
}: DropdownProps) {
    const [internalValue, setInternalValue] = useState<string[]>([]);
    const SHOW_ALL = TreeSelect.SHOW_ALL;

    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const handleChange = (newValue: string[]) => {
        if (!controlledValue) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    return (
        <TreeSelect
            treeData={treeData}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            multiple={multiple}
            treeCheckable={treeCheckable}
            showCheckedStrategy={SHOW_ALL}
            style={style}
            treeDefaultExpandAll={defaultExpandAll}
            showSearch={showSearch}
        />
    )
}