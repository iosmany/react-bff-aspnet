

interface User {
    id: number;
    name: string;
}

interface Data {
    users: User[]
}

type DataDef = Data | null;

export type { User, Data, DataDef };