import { Modal } from 'antd';
import type { ReactNode } from 'react';

type AppModalProps = {
    open: boolean;
    onClose: () => void;
    title: string;
    children: ReactNode;
    footer?: ReactNode;
    width?: number | string;
};

export default function AppModal({
    open,
    onClose,
    title,
    children,
    footer,
    width = 520
}: AppModalProps) {
    return (
        <Modal
            className={'app-modal'}
            open={open}
            onCancel={onClose}
            title={title}
            footer={footer ?? null}
            width={width}
            centered
            styles={{ }}
        >
            {children}
        </Modal>
    )
}