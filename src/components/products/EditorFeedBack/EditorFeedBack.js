import React from "react";

// react router
import { useNavigate } from "react-router-dom";

// react-icons
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io5";

// ui
import { Button } from "ui/buttons";

// styles
import {
    EditorFeedBackStyles,
    FeedBackMessage,
    FeedBack,
    FeedBackOption,
} from "./styles";

function EditorFeedBack({ children, status, writeCompleted, ...props }) {
    const navigator = useNavigate();

    return (
        <EditorFeedBackStyles {...props}>
            {!status ? (
                <FeedBack>
                    <IoIcons.IoCheckmarkDoneSharp color="007bff" size="12rem" />
                    <FeedBackMessage>
                        Product Uploaded Successfully
                    </FeedBackMessage>
                </FeedBack>
            ) : (
                <FeedBack>
                    <ImIcons.ImUpload color="007bff" size="12rem" />
                    <FeedBackMessage>Uploading...</FeedBackMessage>
                </FeedBack>
            )}

            <FeedBackOption>
                <Button
                    bg="orange"
                    color="241f5e"
                    padding="0.50rem 0.75rem"
                    onClick={() => writeCompleted(false)}
                    disabled={status}
                >
                    Add Another Product
                </Button>
                <Button
                    bg="orange"
                    color="241f5e"
                    padding="0.50rem 0.75rem"
                    onClick={() => navigator("/dashboard")}
                >
                    View All Products
                </Button>
            </FeedBackOption>
        </EditorFeedBackStyles>
    );
}

export default EditorFeedBack;
