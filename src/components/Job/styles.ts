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
`;

export const Logo = styled.img`
    display: flex;
    align-items: center;
    padding-right: 1.5rem; ;
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
            padding: 5.5px 8.38px;
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
`;

export const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    span {
        background-color: ${({ theme }) => theme.colors['desaturated-dark-opacity']};
        color: ${({ theme }) => theme.colors['desaturated-dark']};
        font-weight: 700;
        font-size: 16px;
        letter-spacing: -0.123077px;

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
`;
