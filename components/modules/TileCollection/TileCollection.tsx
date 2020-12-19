import tw, { styled, theme } from "twin.macro";
import { FC } from "react";

import { Card } from "components/modules/Card";

interface Props {
    title?: string;
}

const TileContainer = styled.div<{ gridSize?: string }>`
    ${tw`grid gap-4 text-gray-700 border-gray-200`}
    grid-template-columns: 12rem;

    @media (min-width: ${theme`screens.md`}) {
        grid-template-columns: 12rem 12rem;
    }
`;

export const TileCollection: FC<Props> = ({ title = "UNTITLED", children }) => {
    return (
        <Card title={title}>
            <TileContainer>{children}</TileContainer>
        </Card>
    );
};
