import {LOAD_GITHUB_REPO} from "./action";

export const portfolioReducer = (state = [], action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_GITHUB_REPO: {
            const {text} = payload;
            const projectList = {
                text,
                isLoaded: true,
            };
            return state.concat(projectList);
        }
        default:
            return state;
    }
};