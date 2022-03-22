import styled from "styled-components";
import { alternateThemeColor } from "styles/variables";

const Label = styled.label`
    color: ${alternateThemeColor};
    width: ${(props) => props.width || "100%"};
`;

export { Label };
