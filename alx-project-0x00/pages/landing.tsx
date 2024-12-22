import Card from "@/components/Card";  // Import the Card component
import Button from "@/components/Button";  // Import the Button component

const Landing: React.FC = () => {
    return (
        <div className="space-y-4"> {/* Add some space between elements */}
            <h1 className="text-3xl font-extralight">Landing Page</h1>

            {/* Display multiple Card components */}
            <Card />
            <Card />
            <Card />

            {/* Add Button components with different sizes and shapes */}
            <div className="space-x-4 mt-4">
                {/* Small Button */}
                <Button title="Small Button" size="small" shape="rounded-sm" />
                {/* Medium Button */}
                <Button title="Medium Button" size="medium" shape="rounded-md" />
                {/* Large Button */}
                <Button title="Large Button" size="large" shape="rounded-full" />
            </div>
        </div>
    );
};

export default Landing;
