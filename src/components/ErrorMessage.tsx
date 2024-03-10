import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

type Props = {
    error: string;
}

export const ErrorMessage = ({ error }: Props) => {

    return (
        <Alert variant={"destructive"} className="flex gap-4 items-center">
            <div>
                <Terminal className="h-4 w-4" />
            </div>
            <div>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </div>
        </Alert>
    );
} 