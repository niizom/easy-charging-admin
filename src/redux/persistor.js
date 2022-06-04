const getData = () => {
    try {
        const persistedState = localStorage.getItem('ec-auth');
        if (persistedState) return JSON.parse(persistedState);
        return undefined;
    } catch {
        return undefined;
    }
};
const setData = state => {
    try {
        const json = JSON.stringify(state);
        localStorage.setItem('ec-auth', json);
    } catch {
        // empty
    }
};

// ******** state auth reducer **************

let token;
const authSetData = auth => {
    if (token !== auth?.token) {
        setData({ ...auth });
        token = auth?.token;
    }
};

const removePersistedData = () => {
    localStorage.removeItem('ec-auth');
};

export { getData, setData, removePersistedData, authSetData };
