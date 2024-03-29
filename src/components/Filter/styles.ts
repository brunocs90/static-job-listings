import styled from 'styled-components';

export const FilterContainer = styled.div`
    height: 192px;
    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: flex-end;

    @media (max-width: 768px) {
        /* border: solid white; */
    }
`;

export const FilterPanel = styled.div`
    width: 70vw;
    display: flex;
    flex-direction: row;
    padding: 1.5rem 2rem;

    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    box-shadow: 0px 4px 6px 4px rgba(91, 164, 164, 0.2);
    background-color: #fff;

    .tags {
        display: flex;
        flex-wrap: wrap;

        .tag-close {
            display: flex;
            margin: 0.5rem 1rem 0.5rem 0;

            span {
                display: flex;
                align-items: center;
                height: 32px;
                background-color: ${({ theme }) => theme.colors['desaturated-dark-opacity']};
                color: ${({ theme }) => theme.colors['desaturated-dark']};
                font-weight: 700;
                font-size: 16px;
                letter-spacing: -0.123077px;
                padding: 0 10px;

                border-radius: 5px 0 0 5px;
            }

            .close {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 32px;
                height: 32px;
                cursor: pointer;
                background-color: ${({ theme }) => theme.colors['desaturated-dark']};
                border: none;
                border-radius: 0 5px 5px 0;
                cursor: pointer;
                transition: all 0.2s;
                img {
                    padding: 0.5rem;
                }

                &:hover {
                    background-color: ${({ theme }) => theme.colors['very-dark-grayish']};
                }
            }
        }
    }

    .clear {
        .btn-clear {
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.colors['dark-grayish']};
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            letter-spacing: -0.123077px;
            right: 1.5rem;
            cursor: pointer;

            &:hover {
                color: ${({ theme }) => theme.colors['desaturated-dark']};
                text-decoration: underline;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 1.5rem 1rem;

        .tags {
            .tag-close {
                margin: 0.5rem 0.5rem 0.5rem 0;
            }
        }
    }
`;
