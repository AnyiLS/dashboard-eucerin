import styled from "styled-components";
import tw from "twin.macro";

export const Container = styled.div`
    ${tw`mt-16 mb-16 flex h-[80vh] w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-center`}
`;

export const SignInContainer = styled.div`
    ${tw`w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]`}
`;

export const Title = styled.h4`
  ${tw`mb-2.5 text-4xl font-bold text-navy-700 dark:text-white`}
`;

export const Description = styled.p`
  ${tw`mb-9 ml-1 text-base text-gray-600`}
`;