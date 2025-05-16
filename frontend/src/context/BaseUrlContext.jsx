import React, { createContext, useContext } from 'react';

const BaseUrlContext = createContext();

export const BaseUrlProvider = ({ children }) => {
    const baseUrl = 'http://localhost:5000';

    return (
        <BaseUrlContext.Provider value={baseUrl}>
            {children}
        </BaseUrlContext.Provider>
    );
};

export const useBaseUrl = () => {
    const context = useContext(BaseUrlContext);
    if (context === undefined) {
        throw new Error('useBaseUrl must be used within a BaseUrlProvider');
    }
    return context;
}; 