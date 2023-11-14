import styled from "styled-components";
import tw from "twin.macro";

export const SeparatorContainer = styled.div`
  ${tw`shrink-0 flex whitespace-nowrap text-center leading-[normal] w-full uppercase mb-0 mx-0 mt-[20px] border-0`}
  &:before {
    ${tw`w-[10%] self-center border-t-[thin] border-solid top-[7px] border-gray-400`}

    content: '';
  }
  &:after {
    ${tw`w-[90%] self-center border-t-[thin] border-solid border-gray-400`}
    content: '';
  }
`;

export const TextSpan = styled.span`
  ${tw`text-xs tracking-[0.21px] inline-block px-2.5`}
`;

export const InnerParagraph = styled.p`
  ${tw`overflow-hidden text-ellipsis whitespace-nowrap text-xs leading-[normal] tracking-[0.21px] uppercase font-medium m-0 text-gray-400`}
`;