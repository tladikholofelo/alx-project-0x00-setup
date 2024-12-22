export interface PillProps {
    title: string
}

export interface ButtonProps {
    title: string;
    size: 'small' | 'medium' | 'large'; // Button sizes
    shape: 'rounded-sm' | 'rounded-md' | 'rounded-full'; // Button shapes
}