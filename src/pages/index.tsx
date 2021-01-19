import { Button } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

export const index: React.FC = () => {
    return (
        <div>
            <Link href="/spaces">
                <Button>Spaces</Button>
            </Link>
        </div>
    );
};

export default index;
