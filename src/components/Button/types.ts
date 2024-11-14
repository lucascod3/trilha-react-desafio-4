export interface IButtonProps {
    label?: string;
    content?: React.ReactNode;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
    Disabled?: boolean;
}
