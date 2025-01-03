import React, { ReactNode, createContext, useContext } from "react";


type PlayProps = {
    children?: ReactNode;
}

const PlayAncestryContext = createContext(false);

export const usePlayAncestry = () => useContext(PlayAncestryContext);

const Play = ({
    children
}:PlayProps) => {
    const hasPlayParent = usePlayAncestry();

    if (hasPlayParent) {
        throw new Error('Invalid DOM error !!! Play cant be nested in a Play parent');
    }
    return (
        <PlayAncestryContext.Provider value={true}>
            <p>
                {children}
            </p>
        </PlayAncestryContext.Provider>
    )
}

export default Play;