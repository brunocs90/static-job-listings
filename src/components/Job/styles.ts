import styled from 'styled-components';

export const JobContainer = styled.div`
    width: 70vw;
    background-color: #fff;

    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    border-radius: 5px;

    margin: 1.3rem 0;
    position: relative;
    box-shadow: 0px 4px 6px 4px rgba(91, 164, 164, 0.2);

    //https://css-tricks.com/the-sass-ampersand/#:~:text=The%20%26%20comes%20in%20handy%20when,the%20parent%20selector%20when%20nesting.
    &.featured {
        border-left: 5px solid ${({ theme }) => theme.colors['desaturated-dark']};
    }

    @media (max-width: 768px) {
        min-width: 327px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        padding: 0rem 1rem;
        border-radius: 5px;

        margin: 3rem 0;
    }
`;

export const Logo = styled.img`
    display: flex;
    align-items: center;
    padding-right: 1.5rem;

    @media (max-width: 768px) {
        width: 48px;
        height: 48px;
        padding-right: 0;
        transform: translateY(-50%);
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    .company {
        .cname {
            font-size: 18px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors['desaturated-dark']};
            margin-right: 0.8rem;
        }
        .new,
        .featured {
            color: #fff;
            background-color: ${({ theme }) => theme.colors['desaturated-dark']};
            border-radius: 1rem;
            padding: 7px 8.39px 4.2px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: -0.107692px;
            margin-right: 0.8rem;
        }

        .featured {
            background-color: ${({ theme }) => theme.colors['very-dark-grayish']};
        }
    }

    .position {
        font-weight: 700;
        font-size: 22px;
        line-height: 24px;
        padding: 10px 0 7px 0;
        cursor: pointer;
        &:hover {
            color: ${({ theme }) => theme.colors['desaturated-dark']};
        }
    }

    .details {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.138462px;
        color: ${({ theme }) => theme.colors['dark-grayish']};

        .dot {
            padding: 0px 10px;
        }
    }

    .separator {
        border-bottom: none;
    }

    @media (max-width: 768px) {
        .company {
            .cname {
                font-size: 13px;
            }
            .new,
            .featured {
                font-size: 14px;
            }

            .featured {
                background-color: ${({ theme }) => theme.colors['very-dark-grayish']};
            }
        }

        .position {
            font-size: 15px;
            margin-top: 9px;
        }

        .details {
            font-size: 16px;

            .dot {
                padding: 0px 3px;
            }
        }

        .separator {
            border-bottom: 1px solid #b7c4c4;
            margin: 1rem 0rem;
        }
    }
`;

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    border: solid red;

    span {
        background-color: ${({ theme }) => theme.colors['desaturated-dark-opacity']};
        color: ${({ theme }) => theme.colors['desaturated-dark']};
        font-weight: 700;
        font-size: 16px;
        letter-spacing: -0.123077px;
        line-height: 24px;
        font-style: normal;

        padding: 0.57rem;
        border-radius: 5px;
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 1rem;
        }

        &:hover {
            background-color: ${({ theme }) => theme.colors['desaturated-dark']};
            color: #fff;
        }
    }

    @media (max-width: 768px) {
        display: flex;
        justify-content: flex-start;

        span {
            padding: 0.4rem;
            margin-bottom: 1rem;
        }
    }
`;
