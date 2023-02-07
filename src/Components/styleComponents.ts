import styled, { createGlobalStyle } from "styled-components";

interface ColorObj {
  bg: string;
  color: string;
}

interface Colors {
  danger: ColorObj;
  warning: ColorObj;
  primary: ColorObj;
  white: ColorObj;
  black: ColorObj;
}

const colors: Colors = {
  danger: {
    bg: "#ff5353",
    color: "#fff",
  },
  warning: {
    bg: "#f9894e",
    color: "#000",
  },
  primary: {
    bg: "#4e7bf9",
    color: "#fff",
  },
  white: {
    bg: "#fff",
    color: "#000",
  },
  black: {
    bg: "#000",
    color: "#fff",
  },
};

// Global Style
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }
`;

export const MainContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  position: relative;
  min-height: 44rem;
`;

export const MainHeader = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin: 2rem;
  color: #52595D
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const UserId = styled.div<{ variant: string }>`
  width: 35px;
  height: 35px;
  font-size: 14px;
  border-radius: 50%;
  background: ${({ variant }) => colors[variant as keyof Colors].bg};
  color: ${({ variant }) => colors[variant as keyof Colors].color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-transform: capitalize;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 1.5rem;
`;

export const User = styled.div<{ top: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 10px;
  height: 4rem;
  padding: 0 1rem;
  position: absolute;
  transition: .5s;
  width: 100%;
  top: ${({ top }) => `${top}rem`};
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const UserName = styled.div`
  font-weight: bold;
  margin-left: 1.5rem;
`;

export const UserScore = styled.div`
  color: ${colors.danger.bg};
  font-size: 1.2rem;
  font-weight: bold;
`;