import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
    ${tw`relative float-right h-full min-h-screen w-full bg-white dark:bg-navy-900`}
`;

export const Main = styled.main`
  ${tw`mx-auto min-h-screen`}
`;

export const FlexContainer = styled.div`
  ${tw`relative flex mx-auto flex min-h-full w-full flex-col justify-center pt-12 md:max-w-[75%] lg:h-screen lg:max-w-full lg:px-8 lg:pt-0 xl:h-[100vh] xl:px-0 xl:pl-[70px]`}
`;

export const LeftColumn = styled.div`
  ${tw`mb-auto flex flex-col items-center pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-[48%]`}
`;

export const BackLink = styled(Link)`
  ${tw`mt-0 w-max lg:pt-10 mx-auto flex h-fit w-fit items-center hover:cursor-pointer`}
`;

export const BackIcon = styled.svg`
  ${tw`w-8 h-12`}
`;

export const BackText = styled.p`
  ${tw`ml-3 text-sm text-gray-600`}
`;

export const RightColumn = styled.div`
  ${tw`absolute right-0 hidden h-full min-h-screen md:block lg:w-[50vw] 2xl:w-[50vw] `}
`;

export const BackgroundImage = styled.div<{image: string;}>`
  ${tw`absolute flex rounded-[0_0_0_200px] h-full w-full items-end justify-center bg-cover bg-center`};
  background-image: url(${({image}) => image});
  iframe {  
    ${tw`rounded-[0_0_0_200px]`}

    .spline-watermark {
      display: none !important;
    }
  }
`;