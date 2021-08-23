import { css } from "styled-components";

const size = {
    small: 400,
    med: 960,
    large: 1140,
};

interface BreakProps {
    acc: Object;
    label: string;
}

export const below = Object.keys(size).reduce((acc: any, label: string) => {
    acc[label] = (...args: any) => css`
        @media (max-width: ${size[label] / 16}em) {
            ${css(...args)}
        }
    `;
    return acc;
}, {});
