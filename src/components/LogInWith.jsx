import { Button } from "@heroui/react";


const LogInWith = () => {
    return (
        <div>
            <h3 className="font-bold mb-4">Log in with</h3>

            <div className="space-y-2">
                <Button className={'font-bold'}>Log in with Google</Button>
                <Button variant="secondary" className={'font-bold'}>Log in with Github</Button>
            </div>
        </div>
    );
};

export default LogInWith;