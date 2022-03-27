export const LOAD_GITHUB_REPO = 'portfolio/loadGithubRepo';
export const loadGithubRepo = (text) => ({
    type: 'portfolio/loadGithubRepo',
    payload: { text },
});