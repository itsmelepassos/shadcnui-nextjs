import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Member } from "@/types/member";
import { TeamCombobox } from "./team-combobox";


type Props = {
    data: Member
}

export const TeamItem = ({ data }: Props) => {
    return (
        <div className="flex items-center gap-4">
            <div>
                <Avatar>
                    <AvatarImage src={data.avatar} />
                    <AvatarFallback>--</AvatarFallback>
                </Avatar>

            </div>

            <div className="flex-1">
                <div>{data.name}</div>
                <div className="text-sm text-muted-foreground">{data.email}</div>
            </div>

            <div>
                <TeamCombobox />
            </div>
        </div>
    );
}