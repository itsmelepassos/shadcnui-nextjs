import { members } from "@/data/members";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { TeamItem } from "./team-item";

export const TeamArea = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Team Members</CardTitle>
                    <CardDescription>Invite your team members to collaborate.</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col gap-5">
                    {members.map((member) => (
                        <TeamItem key={member.id} data={member} />
                    ))}
                </CardContent>
            </Card>
        </div>
    );
}