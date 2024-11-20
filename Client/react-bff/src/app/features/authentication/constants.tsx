

interface Claims {
    id: string;
    email: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
    type: string;
    value: string;
}


export type { Claims }