import { ButtonProps } from "@/interfaces"; // Import the ButtonProps interface

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  // Map the size and shape props to corresponding Tailwind CSS classes
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
  };

  return (
    <button
    className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition duration-300 ease-in-out`}
    >
      {title}
    </button>
  );
};

export default Button;
